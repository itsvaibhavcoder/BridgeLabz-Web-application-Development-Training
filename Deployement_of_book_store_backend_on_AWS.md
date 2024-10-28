
# Bookstore Application Deployment on AWS

This README provides a step-by-step guide to deploying a bookstore application on AWS using EC2 instances. The application backend is developed with Node.js, Express CLI, and TypeScript, and the database is managed using MongoDB. Two EC2 instances are created—one for the MongoDB database and another for the Node.js application.

## Prerequisites

Before starting, ensure you have:
- An AWS account with permissions to create and manage EC2 instances.
- SSH access set up for connecting to EC2 instances.
- Node.js and npm installed on your local machine.
- MongoDB installed on the MongoDB EC2 instance.

## Deployment Steps

### 1. Setting Up MongoDB on AWS EC2

1. **Launch MongoDB EC2 Instance**:
   - Go to the AWS EC2 dashboard, select "Launch Instance," and choose an appropriate Amazon Machine Image (AMI), e.g., Ubuntu 20.04.
   - Configure instance settings (CPU, memory) as required and ensure you open port `27017` in the security group for MongoDB access.

2. **Connect to MongoDB EC2 Instance**:
   - SSH into the MongoDB EC2 instance using your key pair:
     ```bash
     ssh -i "your-key.pem" ubuntu@<mongodb-instance-public-ip>
     ```

3. **Install MongoDB**:
   - Update the package database and install MongoDB:
     ```bash
     sudo apt update
     sudo apt install -y mongodb
     ```

4. **Configure MongoDB**:
   - Edit the MongoDB configuration file to allow connections from your application’s EC2 instance. Modify `/etc/mongodb.conf` (or `/etc/mongod.conf` in some distributions) to bind to the instance’s IP or `0.0.0.0`:
     ```yaml
     bind_ip: 0.0.0.0
     ```
   - Restart MongoDB to apply the changes:
     ```bash
     sudo systemctl restart mongodb
     ```

5. **Security**:
   - For enhanced security, configure MongoDB authentication or whitelist the IP address of your application instance in the security group.

### 2. Setting Up Node.js Application on AWS EC2

1. **Launch Node.js EC2 Instance**:
   - Go to the AWS EC2 dashboard and launch a new instance for the application backend.
   - Open the required ports, such as `3000` for the Node.js application or the port you configured in Express, as well as `22` for SSH.

2. **Connect to Node.js EC2 Instance**:
   - SSH into the application instance:
     ```bash
     ssh -i "your-key.pem" ubuntu@<nodejs-instance-public-ip>
     ```

3. **Install Node.js**:
   - Install Node.js and npm on the EC2 instance:
     ```bash
     sudo apt update
     sudo apt install -y nodejs npm
     ```

4. **Deploy the Application**:
   - Clone your application repository from GitHub or upload the application files.
   - Navigate to the application directory and install dependencies:
     ```bash
     cd /path/to/your/application
     npm install
     ```

5. **Configure Environment Variables**:
   - Create an `.env` file in your application root directory and add the MongoDB connection string and other environment variables as needed:
     ```dotenv
     MONGODB_URI=mongodb://<mongodb-instance-private-ip>:27017/bookstore
     PORT=3000
     ```

6. **Run the Application**:
   - Start the application using `npm run` (or the equivalent command for your project setup):
     ```bash
     npm run start
     ```

7. **Optional: Set Up PM2** (for process management):
   - Install PM2 to keep your application running in the background:
     ```bash
     sudo npm install -g pm2
     pm2 start app.js --name "bookstore-app"
     pm2 startup
     pm2 save
     ```

### 3. Accessing the Application

- Access your bookstore application at `http://<nodejs-instance-public-ip>:3000`.
- Ensure both EC2 instances are in the same VPC (Virtual Private Cloud) and can communicate with each other securely.

### Troubleshooting

1. **Connection Issues**: Ensure both EC2 instances have appropriate security group settings.
2. **Database Connectivity**: Confirm MongoDB is accessible from the Node.js instance, and MongoDB is configured to allow external connections.
3. **Logs**: Use logs (`pm2 logs <app-name>` or `journalctl -u mongodb`) for diagnosing issues.

### Additional Considerations

- **SSL/TLS**: For production, consider using a load balancer with SSL for secure access.
- **Scaling**: Use AWS Auto Scaling for high-traffic requirements.
- **Monitoring**: Set up AWS CloudWatch for monitoring and logging.

### Conclusion

You have successfully deployed a bookstore application using separate AWS EC2 instances for MongoDB and Node.js. Follow best practices for securing and maintaining the instances, and consider additional monitoring and scaling features for production.
