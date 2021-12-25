import { PrimaryButton } from "./component/atoms/button/PrimaryButton";
import { SecondaryButton } from "./component/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
