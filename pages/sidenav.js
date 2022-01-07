const navigation = [
  { name: "about", icon: "😁" },
  { name: "stuff i do", icon: "😁" },
  { name: "personal projects", icon: "😁" },
  { name: "get in touch", icon: "😁" },
];
function sideHeader() {
  return (
    <div className="hidden lg:block">
      <div className="fixed h-4/5 w-35 my-10 mt-24 rounded-2xl ml-2 bg-brochblack text-white px-6 flex flex-col justify-evenly items-center">
        {navigation.map((item) => (
          <div>
            <a className="flex justify-evenly">{item.icon.toUpperCase()}</a>
            <div className="text-xs flex justify-center">
              <a>{item.name.toUpperCase()}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default sideHeader;
