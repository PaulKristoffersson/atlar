import React, { useEffect, useState } from "react";
import axios from "axios";

function AccountBalance() {

    const [balance, setBalance] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const apiUrl = 'https://api.atlar.com/v1beta/accounts/<id>/balances';
            const auth = {
                username: 'hUfCzFeteKCZgfotD59I',
                password: 'xmYWTEClhhl9720KE7ccC5FsqRhD8UsTDlpxzJPW2AN34iHE3jl0zgaPcpKfeocQhb_g',
            };

            try {
                const response = await axios.get(apiUrl, { auth });
                setBalance(response.data); // Assuming the API returns the balance directly
            } catch (error) {
                console.error("There was an error fetching the account balance:", error);
            }
        };

        fetchData();
    }, []); // The empty array ensures this effect runs only once after the initial render
    console.log(balance);
    return (
        <div>
            {balance ? `Account Balance: ${balance}` : 'Fetching account balance...'}
        </div>
    );
}

export default AccountBalance;