import { Route, Link, useRouteMatch } from 'react-router-dom'
import {
    Title,
    Card,
    CardHeader,
    CardContent,
    CardImage,
} from 'bloomer';
import '../UserCard.css'


const UserCard = (props) => {
    const { user } = props;
    const { url } = useRouteMatch();
    console.log(user);
    console.log(url);

    return (
        
        <li>
            <Link to={`${url}${user.login}`}>
                <Card>
                    <CardHeader className='is-flex is-justify-content-center'>
                        <h1>
                            {user.login}
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <CardImage>
                            <img src={user.avatar_url} alt='a' />
                        </CardImage>
                    </CardContent>
                </Card>
            </Link>
        </li>
    )
}

export default UserCard;