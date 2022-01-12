import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisums/user/UserCard";

const users = [...Array(10).key()].map((val) => {
  return {
    id: val,
    name: `じゃけえ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArae>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArae>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArae = styled.div`
  padding-top: 40px;
  width: 100px;
  display: grid;
  grid-auto-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;