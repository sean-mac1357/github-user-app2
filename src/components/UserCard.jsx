import { Route, Link, useRouteMatch } from 'react-router-dom'
import {
    Title,
    Card,
    CardHeader,
    CardContent,
    CardImage,
    Content,
    Image
} from 'bloomer';
import 'bulma/css/bulma.css';

const UserCard = (props) => {
    const { user } = props;
    const { url } = useRouteMatch();
    console.log(user);
    console.log(url);

    return (
        
        <li>
            <Link to={`${url}${user.login}`}>
                <Card>
                    <CardHeader>
                        <Title>
                            {user.login}
                        </Title>
                    </CardHeader>
                    <CardContent>
                        <CardImage>
                            <Image isRatio="1:1" src={user.avatar_url} />
                        </CardImage>
                    </CardContent>
                </Card>
            </Link>
        </li>
    )
}

export default UserCard;