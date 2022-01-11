import { Route } from "react-router-dom";
import { Header } from "./component/atoms/layout/Header";
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
  return <Header />;
}
