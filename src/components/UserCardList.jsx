import UserCard from './UserCard'

const UserCardList = (props) => {
    const { usersArray } = props;

    return (
        <ul>
            {usersArray.map((user, index) => (
                <UserCard user={user} key={index} />
            ))}
        </ul>
    );
}

export default UserCardList;