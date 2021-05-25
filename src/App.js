import SheetDataProvider from "./app/sheet-data-provider";
import Sheet from "./modules/sheet";
function App() {
  return (
    <SheetDataProvider>
      <Sheet />
    </SheetDataProvider>
  );
}

export default App;
