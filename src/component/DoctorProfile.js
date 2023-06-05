import React from "react";
import "./DoctorProfile.css";
import pic from "../images/139801051817237f53d.jpg";

const sampleUser = {
  name: "علی قربانی",
  education: "ارشد بالینی",
  code: "233333",
  address:
    "استان تهران، شهر تهران، اتوبان اشرفی اصفهانی، باغ فیض، جنب امام‌زاده حمیده خاتون (س)،مؤسسه تحقیقات حجامت ایران",
  telephone: "0000000000",
  phone: "+972-9-9-9-9",
  email: "ali@gmail.com",
  experiment: "20",
  Password: "AAA!11",
  score: "3.5",
};
function DoctorProfile() {
  return (
    <div className="profile-container">
      <img className="profilePicture" src={pic} alt=""></img>
      <Profile
        name={sampleUser.name}
        Password={sampleUser.Password}
        phone={sampleUser.phone}
        score={sampleUser.score}
        telephone={sampleUser.telephone}
        education={sampleUser.education}
        code={sampleUser.code}
        address={sampleUser.address}
        email={sampleUser.email}
        experiment={sampleUser.experiment}
      />
    </div>
  );
}

const Profile = ({
  name,
  education,
  code,
  address,
  telephone,
  phone,
  email,
  experiment,
  Password,
  score,
}) => {
  return (
    <div className="personData" dir="rtl">
      <div className="default-data">
        <p>نام و نام خانوادگی:</p>
        <p>تحصیلات:</p>
        <p>شماره نظام پزشکی:</p>
        <p>آدرس:</p>
        <br />
        <br />
        <p>شماره تلفن:</p>
        <p>شماره موبایل:</p>
        <p>ایمیل:</p>
        <p>تجربه:</p>
        <p>رمز عبور:</p>
        <p>امتیاز:</p>
      </div>
      <div className="data-doctor">
        <p> {name}</p>
        <p>{education}</p>
        <p>{code}</p>
        <p>{address}</p>
        <p>{telephone}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{experiment}</p>
        <p>{Password}</p>
        <p>{score}</p>
      </div>
    </div>
  );
};

const personData = {
  name: String,
  education: String,
  code: String,
  email: String,
  phone: String,
  telephone: String,
  address: String,
  experiment: String,
  Password: String,
  score: String,
};

export default DoctorProfile;
