pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building AK Memorial Homoeopathic Clinic...'
                // This will now find the package.json you just created
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
    }
}
