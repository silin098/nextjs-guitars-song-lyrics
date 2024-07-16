export async function getStaticProps() {
  const data = await fetch("https://api.github.com/users");
  const users = await data.json();
  return { props: { users } };
}

export default function Contact({ users }) {
  return (
    <>
      <h1>Github Users</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.login}</li>;
        })}
      </ul>
    </>
  );
}
