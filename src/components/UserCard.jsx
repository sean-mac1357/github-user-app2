const UserCard = (props) => {
    const { user } = props;

    return (
        <li>
            <img src={user.avatar_url} alt="a"/>
        </li>
    )
}

export default UserCard;