import IconInfoOutline from "./icons/IconInfo";
import IconSun from "./icons/IconSun";
import IconThunderbolt from "./icons/IconThunder";

export function ChatPlaceholder() {
    return (
        <div className="m-5 mt-20">
            <h3 className="text-4xl font-bold text-center my-12">ChatGPT</h3>

            <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconSun width={24} height={24} className="mr-3" />{" "}
                        Exemplo
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Explique a computação quântica em termos simples</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Tem alguma ideia criativa para o aniversário de uma criança de 10 anos?</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Como faço uma solicitação HTTP em JavaScript?</div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconThunderbolt width={24} height={24} className="mr-3" />{" "}
                        Capacidades
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Lembra o que o usuário disse anteriormente na conversa</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Permite que o usuário forneça correções de acompanhamento</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Treinado para recusar pedido inapropriados</div>
                </div>
                <div>
                    <div className="flex justify-center items-center text-lg mb-3">
                        <IconInfoOutline width={24} height={24} className="mr-3" />{" "}
                        Limitações
                    </div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Ocasionalmente pode gerar informações incorretas</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Ocasionalmente, pode produzir instruções prejudiciais ou conteúdo tendencioso</div>
                    <div className="bg-white/5 rounded text-center text-sm text-white mb-3 p-3">Conhecimento limitado do mundo e eventos após 2021</div>
                </div>
                
            </div>
           
        </div>
    );
}
