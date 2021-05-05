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
                //sh 'npm install'
                sh 'npm install browserstack-cypress-cli'
                sh 'npm run browserstack'
                browserstack(credentialsId: '519c4a97-89ba-4b72-bcd6-69b765337d46') {
                //sh 'browserstack-cypress run --build_name $BROWSERSTACK_BUILD_NAME'
                //sh 'browserstack-cypress run --username sazzrahman1 --key xWhXXhNn2z4Xkp47gpam'
                sh 'browserstack-cypress run --sync --build-name $BROWSERSTACK_BUILD_NAME'
                }
            }
        }
        stage('Cypress and Percy') {
            steps {
              sh 'npm run percy'
            }
        }
      stage('Post Build') {
            steps{
                publishHTML target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'results',
                    reportFiles: 'browserstack-cypress-report.html',
                    reportName: 'Cypress HTML Report'
                ]
            }
        }
    }
    post ('Reports'){
        always {
            browserStackReportPublisher 'automate'
            junit 'results/*.xml'
            pangolinTestRail(testRailProject: 'Pangolin_POC', configs: [[failIfUploadFailed: false, format: 'junit', resultPattern: 'results/*.xml', testPath: 'Master\\Section1\\SubSection1']])
        }
    }
}
