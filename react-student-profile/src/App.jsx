import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>
      <StudentCard
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pLczGu0ABBSxKrfe5gaHtRY_--WmjK96h3doPjXKOQ&s"
        name="Elias"
        age={22}
        role="Full Stack Dev"
      />

      <StudentCard
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pLczGu0ABBSxKrfe5gaHtRY_--WmjK96h3doPjXKOQ&s"
        name="Abel"
        age={32}
        role="DevOps Engineer"
      />

      <StudentCard
        picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pLczGu0ABBSxKrfe5gaHtRY_--WmjK96h3doPjXKOQ&s"
        name="Slam"
        age={24}
        role="QA"
      />
    </div>
  );
}

export default App;

