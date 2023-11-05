export default function page() {
  const res = await fetch("/api/usermanagement/page");
  return <div>usermanagement/page</div>;
};
