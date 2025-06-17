import React from "react";
import "./HomePage.css";

const HomePage = () => (
  <>
    <header>
      <nav className="nav">
        <div className="nav-logo">
          <img
            src="/src/assets/images/1.1-removebg-preview.png"
            alt="logo"
            width="100"
            height="60"
          />
        </div>
        <div className="nav-login">
          <ul>
            <li><button>Login</button></li>
          </ul>
        </div>
      </nav>
    </header>
    {/* Hero */}
    <div className="hero">
      <h1>Smart, Scalable LMS for Schools, Colleges, and Online Platforms</h1>
      <h4>"Empowering Education Through Smart Technology"</h4>
      <div className="hero-img">
        <img
          src="/src/assets/images/Seminar-pana.png"
          alt=""
          width="1200px"
          height="600px"
        />
      </div>
    </div>
    {/* Features */}
    <section>
      <h2>Features of Smart Learn</h2>
      <div className="features">
        {/* Card 1 */}
        <div className="card">
          <div className="feat-icon">
            <img
              src="/src/assets/images/secure.png"
              alt="Secure"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Secure Login</h4>
            <p>
              Our LMS ensures that all users—students, teachers, administrators, and parents—can access the system through a secure login process. Each user is authenticated with unique credentials (such as email/username and password) to maintain privacy and data security. This secure entry point guarantees that every user sees only the information and tools relevant to their role, maintaining both security and simplicity.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="feat-icon">
            <img
              src="/src/assets/images/dashboard.png"
              alt="Role-Based Dashboard"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Role-Based Dashboards</h4>
            <p>Each user sees a tailored dashboard designed to meet their needs:</p>
            <ul>
              <li>Admins handle system operations, reports, and user roles.</li>
              <li>Teachers manage course content, track student progress, and view submissions.</li>
              <li>Students view courses, assignments, and grades.</li>
              <li>Parents monitor their child's attendance and academic performance.</li>
            </ul>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="feat-icon">
            <img
              src="/src/assets/images/course.png"
              alt="Course"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Course Management</h4>
            <p>
              Teachers can easily create and organize courses, upload lecture notes, presentations, and other learning materials, all within a centralized platform. Assignments, quizzes, and deadlines can be managed seamlessly through a user-friendly interface, reducing administrative effort and allowing educators to focus more on teaching. With everything in one place, managing classroom activities becomes more efficient and streamlined.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card">
          <div className="feat-icon">
            <img
              src="/src/assets/images/learning.png"
              alt="Learning"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Interactive Learning</h4>
            <p>
              Students actively participate in their learning journey through engaging tools like quizzes, assignments, and discussion forums. These interactive elements not only reinforce understanding but also promote collaboration and critical thinking. Real-time grading and instant feedback help students recognize areas of improvement and stay motivated, while teachers can quickly assess comprehension and adjust instruction accordingly. This dynamic approach keeps learning personalized, engaging, and outcome-driven.
            </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card">
          <div className="feat-icon">
            <img
              src="/src/assets/images/attendance.png"
              alt="Attendance"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Attendance & Reports</h4>
            <p>
              Teachers can digitally mark attendance with just a few clicks, eliminating the need for manual record-keeping. The system automatically compiles detailed reports on student attendance, participation, and academic progress. These reports are accessible to both teachers and parents, offering insights into performance trends and helping in early identification of learning gaps. This data-driven approach supports better decision-making and personalized student support.
            </p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="card">
          <div className="feat-icon">
            <img
              src="/src/assets/images/communication.png"
              alt="Communication"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Communication Tools</h4>
            <p>
              Our LMS fosters strong connections among students, teachers, parents, and administrators through built-in tools like announcements, private messaging, and group discussions. Whether it’s sharing updates, addressing individual concerns, or engaging in collaborative learning, the platform ensures clear, timely, and organized communication—keeping everyone informed and actively involved in the educational journey.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Roles */}
    <section>
      <h2>Who Is It For?</h2>
      <h5>Made for every role in education.</h5>
      <div className="roles">
        <div className="card-role">
          <div className="feat-icon">
            <img
              src="/src/assets/images/student.png"
              alt="Student"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Student</h4>
            <ul>
              <li>Access course materials anytime</li>
              <li>Submit assignments with ease</li>
              <li>Track progress and quiz results</li>
            </ul>
          </div>
        </div>
        <div className="card-role">
          <div className="feat-icon">
            <img
              src="/src/assets/images/teacher.png"
              alt="Teacher"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Teacher</h4>
            <ul>
              <li>Manage and organize courses</li>
              <li>Grade assignments and quizzes</li>
              <li>Take attendance digitally</li>
            </ul>
          </div>
        </div>
        <div className="card-role">
          <div className="feat-icon">
            <img
              src="/src/assets/images/admin.png"
              alt="Admin"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Admin</h4>
            <ul>
              <li>Access system-wide analytics</li>
              <li>Automate administrative tasks</li>
              <li>Manage users, courses, and campuses</li>
            </ul>
          </div>
        </div>
        <div className="card-role">
          <div className="feat-icon">
            <img
              src="/src/assets/images/parent.png"
              alt="Parent"
              height="120px"
              width="120px"
            />
          </div>
          <div className="description">
            <h4>Parent</h4>
            <ul>
              <li>Monitor child's academic progress</li>
              <li>Get notified about events and deadlines</li>
              <li>Stay in touch with teachers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* Footer */}
    <div className="footer">
      <h3>Quick Links</h3>
      <div className="foot">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
        <a href="#">FAQs</a>
        <a href="#">Help and Support</a>
      </div>
      <div className="copyright">
        © 2025 Your <a href="#">LMS</a> | All rights reserved
      </div>
    </div>
  </>
);

export default HomePage;
