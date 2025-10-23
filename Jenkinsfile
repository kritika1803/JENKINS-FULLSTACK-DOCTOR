pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:${env.PATH}" // ensure npm & node are visible
    }

    stages {

        // ===== FRONTEND BUILD =====
        stage('Build Frontend') {
            steps {
                // NEW (employeeapi)
               dir('doctorapi-react') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        // ===== FRONTEND DEPLOY =====
        stage('Deploy Frontend to Tomcat') {
            steps {
                sh '''
                TOMCAT_WEBAPPS="/Users/chilakakritikareddy/Desktop/SOFTWARE/apache-tomcat-10.1.43/webapps/reactdoctorapi"
                rm -rf "$TOMCAT_WEBAPPS"
                mkdir -p "$TOMCAT_WEBAPPS"
                cp -R doctorapi-react/dist/* "$TOMCAT_WEBAPPS"
                '''
            }
        }

        // ===== BACKEND BUILD =====
        stage('Build Backend') {
            steps {
                dir('DOCTORAPI-SPRINGBOOT') {
                    sh '/Users/chilakakritikareddy/Desktop/SOFTWARE/apache-maven-3.9.11/bin/mvn clean package'
                }
            }
        }

        // ===== BACKEND DEPLOY =====
        stage('Deploy Backend to Tomcat') {
            steps {
                sh '''
                TOMCAT_WEBAPPS="/Users/chilakakritikareddy/Desktop/SOFTWARE/apache-tomcat-10.1.43/webapps"
                rm -f "$TOMCAT_WEBAPPS/springbootdoctorapi.war"
                rm -rf "$TOMCAT_WEBAPPS/springbootdoctorapi"
                cp DOCTORAPI-SPRINGBOOT/target/DOCTORAPI-SPRINGBOOT-0.0.1-SNAPSHOT.war "$TOMCAT_WEBAPPS/springbootdoctorapi.war"
                '''
            }
        }

    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Pipeline Failed.'
        }
    }
}