import Button from "../components/Button";
import { InputField } from "../components/Input";

const HomePage = () => {
  return (
    <div>
      <InputField
        type="email"
        placeholder="Enter email"
        onSubmit={(value) => {
          alert(`Email: ${value}`);
        }}
      />
      <InputField
        placeholder="Enter Password"
        type="password"
        onSubmit={(value) => {
          console.log(prompt("Password", value));
        }}
      />

      <div>Junaid's App</div>
      <Button
        onClick={() => {
          console.log("Junaid's Button Clicked");
        }}
      >
        Junaid's Button
      </Button>

      <Button
        onClick={() => {
          prompt("Rumaisa's Button Clicked");
        }}
      >
        <div>
          {/* <button>Button child</button> */}
          <input type="text" />
        </div>
      </Button>
      <Button
        onClick={() => {
          alert("Munesh's Button Clicked");
        }}
      >
        {245}
      </Button>
    </div>
  );
};

export default HomePage;
