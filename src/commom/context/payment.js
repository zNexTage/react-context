import { createContext, useContext, useState } from "react";

const PaymentContext = createContext();
PaymentContext.displayName = 'Pagamento';

const PaymentProvider = (({ children }) => {
    const paymentTypes = [
        {
            id: 1,
            type: "Boleto",
            fees: 1, //Juros        
        },
        {
            id: 2,
            type: "Cartão de crédito",
            fees: 1.3, //Juros        
        },
        {
            id: 3,
            type: "Pix",
            fees: 1, //Juros        
        },
        {
            id: 4,
            type: "Crediário",
            fees: 1.5, //Juros        
        },
    ];

    const [paymentForm, setPaymentForm] = useState(paymentTypes[0]);

    return (
        <PaymentContext.Provider
            value={{
                paymentTypes,
                paymentForm,
                setPaymentForm
            }}>
            {children}
        </PaymentContext.Provider>
    )
});

const usePaymentContext = () => {
    const {
        paymentTypes,
        paymentForm,
        setPaymentForm
    } = useContext(PaymentContext);

    const getPayment = paymentId => {
        return paymentTypes.find((payment) => payment.id === paymentId);
    }

    const changePaymentForm = paymentId => {
        const payment = getPayment(paymentId);

        setPaymentForm(payment);
    }

    return {
        paymentTypes,
        paymentForm,
        changePaymentForm
    }
}

export {
    PaymentProvider,
    PaymentContext,
    usePaymentContext
}