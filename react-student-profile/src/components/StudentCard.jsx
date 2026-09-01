function StudentCard({ picture, name, age, role }) {
  return (
    <div>
      <img src={picture} alt="profile image" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default StudentCard;
