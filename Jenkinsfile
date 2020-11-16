pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Cypress') {
            steps {
                sh 'npm run preTest'
            }
        }
        stage('Browserstack') {
            steps {
                sh 'npm run browserstack'
            }
        }
        stage('Percy') {
            steps {
                sh 'npm run percy'
            }
        }
    }
    post ('Reports'){
        always {
            junit 'results/cypress-report.xml'
        }
    }
}