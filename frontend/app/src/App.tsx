import Background from "./components/Background";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <>
      <Background />
      <Header
        title="Mega-Sena Web Simulator"
        cssClasses="font-loteria font-black italic uppercase tracking-tighter text-green-100 text-4xl text-center mb-0"
      />
      <MainContainer cssClasses="container max-w-4/5 mx-auto px-2 bg-green-200 bg-opacity-90 rounded-lg py-6 shadow-neutral-900 shadow-lg" title='Configuração da Aposta'>
        {
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        }
      </MainContainer>
    </>
  );
}
