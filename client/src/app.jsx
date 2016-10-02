import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.scss';
import React from 'react';

import GameTable from './gametable';
import GameInfo from './gameinfo';
import BetActionPane from './BetActionPane';

import icon from '../img/test.jpg';

var cards = [
    { suit: 'SPADES', rank: 'A' },
    { suit: 'DIAMONDS', rank: '2'},
    { unturned: true }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pot: 146,
            hand: [
                { suit: 'SPADES', rank: 'A' },
                { suit: 'DIAMONDS', rank: '2'}
            ],
            board: [
                { suit: 'SPADES', rank: 'Q' },
                { suit: 'DIAMONDS', rank: '2'},
                { unturned: true },
                { unturned: true },
                { unturned: true }
            ],
            players: [
                { name: 'bob' },
                { name: 'alice' },
                { name: 'you', isYou: true}
            ],
            stack: 200,
            currentTurn: 2
        };


    }

    componentWillMount() {


    }

    fold() {
        console.log('fold');
        var t = this.state.currentTurn + 1;
        if (t >= this.state.players.length) {
            t = 0;
        }
        this.setState({ currentTurn: t });
    }

    bet(value) {

    }

    render() {
        console.log(this);
        return (
            <div>
                <GameTable game={this.state}/>
                <GameInfo game={this.state} />
                { this.state.players[this.state.currentTurn].isYou
                    ? <BetActionPane currentPot={this.state.pot} onFold={this.fold.bind(this)} onBet={this.bet.bind(this)} maxBet={this.state.stack} minBet={20} />
                    : null
                }
            </div>
        )
    }
}
