import * as S from "./styleds";
import { useState } from "react";
import { FaCreditCard, FaBarcode, FaMapMarkerAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { SiPix } from "react-icons/si";
import { useParams } from "react-router-dom";
import PIX from "../../images/pix.png";

export const Paymentpage = () => {
  const { value } = useParams();

  const [paymentMethod, setPaymentMethod] = useState<string>("credit");
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [address, setAddress] = useState({
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processando pagamento via:", paymentMethod);
  };

  return (
    <S.Container>
      <S.PaymentContainer>
        <S.Title>Finalizar Compra</S.Title>

        {/* Seção de Endereço */}
        <S.SectionContainer>
          <S.SectionHeader>
            <FaMapMarkerAlt />
            <h3>Endereço de Entrega</h3>
          </S.SectionHeader>

          <S.AddressForm>
            <S.InputRow>
              <S.InputGroup>
                <label>CEP</label>
                <S.Input
                  type="text"
                  placeholder="00000-000"
                  value={address.cep}
                  onChange={(e) =>
                    setAddress({ ...address, cep: e.target.value })
                  }
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>Número</label>
                <S.Input
                  type="text"
                  placeholder="Nº"
                  value={address.number}
                  onChange={(e) =>
                    setAddress({ ...address, number: e.target.value })
                  }
                />
              </S.InputGroup>
            </S.InputRow>

            <S.InputGroup>
              <label>Endereço</label>
              <S.Input
                type="text"
                placeholder="Rua, Avenida, etc."
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
              />
            </S.InputGroup>

            <S.InputRow>
              <S.InputGroup>
                <label>Complemento</label>
                <S.Input
                  type="text"
                  placeholder="Apto, Casa, etc."
                  value={address.complement}
                  onChange={(e) =>
                    setAddress({ ...address, complement: e.target.value })
                  }
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>Bairro</label>
                <S.Input
                  type="text"
                  placeholder="Bairro"
                  value={address.neighborhood}
                  onChange={(e) =>
                    setAddress({ ...address, neighborhood: e.target.value })
                  }
                />
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <label>Cidade</label>
                <S.Input
                  type="text"
                  placeholder="Cidade"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
              </S.InputGroup>

              <S.InputGroup>
                <label>Estado</label>
                <S.Input
                  type="text"
                  placeholder="UF"
                  maxLength={2}
                  value={address.state}
                  onChange={(e) =>
                    setAddress({
                      ...address,
                      state: e.target.value.toUpperCase(),
                    })
                  }
                />
              </S.InputGroup>
            </S.InputRow>
          </S.AddressForm>
        </S.SectionContainer>

        {/* Seção de Pagamento */}
        <S.SectionContainer>
          <S.SectionHeader>
            <h3>Forma de Pagamento</h3>
          </S.SectionHeader>

          <S.PaymentMethods>
            <S.MethodOption
              $active={paymentMethod === "credit"}
              onClick={() => setPaymentMethod("credit")}
            >
              <FaCreditCard size={20} />
              <span>Cartão de Crédito</span>
            </S.MethodOption>

            <S.MethodOption
              $active={paymentMethod === "pix"}
              onClick={() => setPaymentMethod("pix")}
            >
              <SiPix size={20} />
              <span>PIX</span>
            </S.MethodOption>

            <S.MethodOption
              $active={paymentMethod === "boleto"}
              onClick={() => setPaymentMethod("boleto")}
            >
              <FaBarcode size={20} />
              <span>Boleto</span>
            </S.MethodOption>
          </S.PaymentMethods>

          <S.PaymentForm onSubmit={handleSubmit}>
            {paymentMethod === "credit" && (
              <S.CreditCardForm>
                <S.InputGroup>
                  <label>Número do Cartão</label>
                  <S.Input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={cardData.number}
                    onChange={(e) =>
                      setCardData({ ...cardData, number: e.target.value })
                    }
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <label>Nome no Cartão</label>
                  <S.Input
                    type="text"
                    placeholder="Como no cartão"
                    value={cardData.name}
                    onChange={(e) =>
                      setCardData({ ...cardData, name: e.target.value })
                    }
                  />
                </S.InputGroup>

                <S.InputRow>
                  <S.InputGroup>
                    <label>Validade</label>
                    <S.Input
                      type="text"
                      placeholder="MM/AA"
                      value={cardData.expiry}
                      onChange={(e) =>
                        setCardData({ ...cardData, expiry: e.target.value })
                      }
                    />
                  </S.InputGroup>

                  <S.InputGroup>
                    <label>CVV</label>
                    <S.Input
                      type="text"
                      placeholder="000"
                      value={cardData.cvv}
                      onChange={(e) =>
                        setCardData({ ...cardData, cvv: e.target.value })
                      }
                    />
                  </S.InputGroup>
                </S.InputRow>

                <S.SecurityInfo>
                  <MdSecurity size={16} />
                  <span>Compra segura, seus dados estão protegidos</span>
                </S.SecurityInfo>
              </S.CreditCardForm>
            )}

            {paymentMethod === "pix" && (
              <S.PixContainer>
                <S.PixImage src={PIX} alt="QR Code PIX Exemplo" />
                <S.PixInstructions>
                  <p>1. Abra o app do seu banco</p>
                  <p>2. Escaneie o QR Code ou copie o código</p>
                  <p>3. Confirme o pagamento</p>
                </S.PixInstructions>
              </S.PixContainer>
            )}

            {paymentMethod === "boleto" && (
              <S.BoletoContainer>
                <p>
                  O boleto será gerado após a finalização da compra e enviado
                  para seu e-mail.
                </p>
                <p>O prazo para pagamento é de 1 dia útil.</p>
              </S.BoletoContainer>
            )}

            <S.SubmitButton type="submit">Finalizar Compra</S.SubmitButton>
          </S.PaymentForm>
        </S.SectionContainer>
      </S.PaymentContainer>

      <S.OrderSummary>
        <h3>Resumo do Pedido</h3>
        <S.SummaryItem>
          <span>Subtotal</span>
          <span>R$ {value}</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <span>Frete</span>
          <span>Grátis</span>
        </S.SummaryItem>
        <S.SummaryItem>
          <span>Desconto</span>
          <span>- R$ 00,00</span>
        </S.SummaryItem>
        <S.SummaryTotal>
          <span>Total</span>
          <span>R$ {value}</span>
        </S.SummaryTotal>
      </S.OrderSummary>
    </S.Container>
  );
};
