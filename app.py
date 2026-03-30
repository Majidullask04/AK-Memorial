from __future__ import annotations

import os
from pathlib import Path

from flask import Flask, abort, send_from_directory


BASE_DIR = Path(__file__).resolve().parent
DIST_DIR = BASE_DIR / "app" / "dist"


def create_app() -> Flask:
    app = Flask(__name__, static_folder=str(DIST_DIR), static_url_path="")

    @app.get("/health")
    def health() -> dict[str, str]:
        return {"status": "ok"}

    @app.get("/", defaults={"path": ""})
    @app.get("/<path:path>")
    def serve_spa(path: str):
        if not DIST_DIR.exists():
            abort(
                500,
                description=(
                    "Frontend build not found. Run `npm install` and `npm run build` "
                    "inside the `app` directory first."
                ),
            )

        requested_path = DIST_DIR / path
        if path and requested_path.is_file():
            return send_from_directory(DIST_DIR, path)

        # Missing asset requests should still fail loudly instead of returning the SPA shell.
        if path and Path(path).suffix:
            abort(404)

        return send_from_directory(DIST_DIR, "index.html")

    return app


app = create_app()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", "5000"))
    app.run(host="127.0.0.1", port=port, debug=False)
