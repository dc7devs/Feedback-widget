interface ButtonsProps {
  text: string;
}

function Button({ text }: ButtonsProps) {
  return <button className="bg-violet-500 px-4">{ text }</button>
}

function App() {
  return (
    <Button text="Enter"/>
  )
}

export default App