import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./component/atoms/button/PrimaryButton";
import { SecondaryButton } from "./component/atoms/button/SecondaryButton";
import { SearchInput } from "./component/molecules/SearchInput";
import { UserCard } from "./component/organisums/user/UserCard";
import { DefaultLayout } from "./component/templetes/DefaultLayout";
import { HeaderOnly } from "./component/templetes/HeaderOnly";
import "./styles.css";

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
