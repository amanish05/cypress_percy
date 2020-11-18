
pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh 'rm -f results/*'
                //git branch: 'main', credentialsId: 'b63d46d7-ad9a-4f54-aafd-4d7c7596ee9c', url: 'https://github.com/amanish05/cypress_percy.git'
                sh 'npm install'
            }
        }
        stage('Browserstack') {
            steps {
                sh 'npm install browserstack-cypress-cli'
                sh 'npm run browserstack'
            }
        }
        stage('Cypress and Percy') {
            steps {
                sh 'npm run percy'
            }
        }
    }
    post ('Reports'){
        always {
            //browserStackReportPublisher 'automate'
            junit 'results/*.xml'
            pangolinTestRail(testRailProject: 'Pangolin_POC', configs: [[failIfUploadFailed: false, format: 'junit', milestonePath: 'Cypress-Percy ML1\\Cypress-Percy ML2', resultPattern: 'results/*.xml', testPath: 'Master\\Section1\\SubSection1', testPlan: 'Cypress-Percy Test Plan ${BUILD_NUMBER}', testRun: 'Cypress-Percy Test Run ${BUILD_NUMBER}']])
        }
    }
}
