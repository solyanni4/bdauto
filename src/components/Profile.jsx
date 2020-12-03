import s from './Profile.module.css';

const Profile = () => {
    return (
        < div className={s.content} >
            <img src="https://cs6.livemaster.ru/storage/c2/ee/140a757951f68c5021935ae1850k.jpg"></img>;
            <div>
                ava+description
      </div>
            <div>
                My posts
        <div>
                    News posts
        </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post1
                </div>
                    <div className={s.item}>
                        post2
                </div>
                </div>
            </div>

        </div >);
}
export default Profile;