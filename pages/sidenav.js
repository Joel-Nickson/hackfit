const navigation = [
  { name: "about", icon: "😁" },
  { name: "Supported By", icon: "😁" },
  { name: "Prizes", icon: "😁" },
  { name: "Speakers", icon: "😁" },
  { name: "Schedule", icon: "😁" },
  { name: "Mentors", icon: "😁" },
  { name: "Sponsors", icon: "😁" },
  { name: "FAQ", icon: "😁" },
];
function sideHeader() {
  return (
    <div className="hidden lg:block">
      <div className="fixed h-4/5 w-20 my-10 mt-24 rounded-2xl ml-2 bg-brochblack text-white px-6 flex flex-col justify-evenly items-center opacity-100">
        {navigation.map((item, key) => (
          <div key={key}>
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
