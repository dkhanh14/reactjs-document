import { people } from './data.js';
import { getImageUrl } from './utils.js';

function ListItems({people}){
    return (
        <ul>
            { people.map(item =>
                <li key={item.id}>
                    <img
                        src={getImageUrl(item)}
                        alt={item.name}
                    />
                    <p>
                        <b>{item.name}:</b>
                        {' ' + item.profession + ' '}
                        known for {item.accomplishment}
                    </p>
                </li>) }
        </ul>
    )
}

/**
 * Splitting a list in two
 * Change data(data.js) to show two separate lists one after another: Chemists and Everyone Else.
 * */
export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );

    const other = people.filter(person =>
        person.profession !== 'chemist'
    );


    return (
        <article>
            <h1>Scientists</h1>
            <ListItems people={chemists} />

            <h1>Remain</h1>
            <ListItems people={other} />
        </article>
    );
}
