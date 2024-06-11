export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        placeat, dignissimos saepe commodi ad sed ex accusantium culpa aliquid
        id fugit, vitae molestias minima quia iure eveniet alias? Placeat,
        deserunt! Autem illo sunt, magni omnis ipsum beatae possimus assumenda
        obcaecati perspiciatis ducimus, error temporibus at delectus atque!
        Aliquam sequi veniam a unde possimus vero? Ab facilis voluptatem quod
        repellendus inventore.
      </p>
      <button onDoubleClick={handleDoubleClick}>Double click me</button>
    </div>
  );
}

function handleClick(event) {
  console.log("hello!!!!!!!!!!");
  console.log(event);
}

function handleMouseOver() {
  console.log("byr");
}

function handleDoubleClick() {
  console.log("double click");
}
