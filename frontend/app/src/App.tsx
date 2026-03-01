import BaseContainer from "./components/BaseContainer";
import Background from "./components/Background";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Select from "./components/Select";

export default function App() {
  return (
    <>
      <Background />
      <Header
        title="Mega-Sena Web Simulator"
        cssClasses="font-roboto italic font-black uppercase tracking-tighter text-green-100 text-4xl text-center mb-0"
      />

      <MainContainer
        title="Configuração da Aposta"
        cssClasses="container font-roboto max-w-[40%] max-h-full mx-auto px-4 bg-green-200 bg-opacity-90 rounded-lg py-6 shadow-neutral-900 shadow-lg"
      >
        <BaseContainer cssClasses="flex w-full items-center justify-evenly">
          <div className="flex flex-col gap-1">
            <Select<number>
              id="numbersToBet"
              label="Selecione os números da aposta:"
              options={Array.from({ length: 10 }, (_, i) => ({
                value: i + 6,
                label: String(i + 6),
              }))}
              onChange={() => { }}
            />
          </div>
          <p className="text-lg font-semibold text-green-800">Valor da aposta: <span className="font-bold text-green-950 text-xl">R$ 2,50</span></p>
        </BaseContainer>
      </MainContainer>
    </>
  );
}
