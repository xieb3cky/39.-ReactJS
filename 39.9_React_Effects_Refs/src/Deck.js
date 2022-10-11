import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";


let baseURL = 'http://deckofcardsapi.com/api/deck/'


function Deck() {
    const [deckId, setDeckId] = useState(null);
    const [drawn, setDrawn] = useState([]);
    const [auto, setAuto] = useState(false);
    const timerId = useRef(null);


    /**First render, load a new deck from API and set deckId */
    useEffect(() => {
        async function getDeck() {
            let respDeck = await axios.get(`${baseURL}/new/`);
            setDeckId(respDeck.data.deck_id);
        }
        getDeck();
    }, [setDeckId]);



    /** Get a card from the deck every second if auto is true*/

    useEffect(() => {
        /**Request a card from API*/
        const drawCard = () => {
            async function getCard() {
                try {
                    let { data } = await axios.get(`${baseURL}/${deckId}/draw/`);
                    /**If remaining card is 0 = no cards left */
                    if (data.remaining === 0) {
                        /**stop auto drawing */
                        setAuto(false);
                        throw new Error("no cards left!");
                    } else {
                        /** Add card to drawn list  */
                        setDrawn(d => [
                            ...d,
                            { img: data.cards[0].image, code: data.cards[0].code, remaining: data.remaining }
                        ]);
                    }
                } catch (err) {
                    console.log(err);
                }
            };
            getCard();
        }

        /**if auto drawing is true, use setInterval to draw card every second*/
        if (auto && !timerId.current) {
            // Store timerId returned from setInterval to stop timer.
            timerId.current = setInterval(async () => {
                await drawCard();
            }, 1000);
        }
        /**clean up by clearing setInterval */
        return () => {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    }, [auto, setAuto, deckId])

    const toggleAuto = () => {
        setAuto(auto => !auto);
    };

    const renderDrawn = drawn.map(card => (
        < Card key={card.code} img={card.img} code={card.code} />
    ));


    return (
        <div className="Deck">
            <h1>Deck of Cards</h1>
            {deckId ? (
                <button className="Deck-gimme" onClick={toggleAuto} >
                    {auto ? "STOP" : "KEEP"} DRAWING!
                </button>
            ) : null}
            <div className="Deck-cardarea">{renderDrawn}</div>
        </div>
    )
}

export default Deck;