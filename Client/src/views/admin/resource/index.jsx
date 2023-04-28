import Lession from "./components/Lession";
import Lecture from "./components/Lecture";
const Resource = () => {
  return (
    <div className="h-full overflow-auto">
      <Lecture>
        <Lession/>
        <Lession/>
        <Lession/>
        <Lession/>
        <Lession/>
      </Lecture>
      <Lecture>
        <Lession/>
        <Lession/>
        <Lession/>
        <Lession/>
        <Lession/>
      </Lecture>
      <Lecture>
        <Lession/>
        <Lession/>
        <Lession/>
        <Lession/>
        <Lession/>
      </Lecture>
    </div>
  );
};

export default Resource;
