async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  if (!res.ok) {
    console.log(res);
  }
  console.log(res);
  return res.json();
}

export default async function Home() {
  return <main>Main page</main>;
}
