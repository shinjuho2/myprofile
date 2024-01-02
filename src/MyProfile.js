import style from "./myProfile.module.css";

function MyProfile() {
    return <div className={style.profileContiner}>
        <img src={`${process.env.PUBLIC_URL}/고양ㅇ.jpg`} />
        <ul className={style.profileInfo}>
            <li className={style.profileRow}>
                <h5>이름</h5>
                <p>신주호</p>
            </li>
            <li className={style.profileRow}>
                <h5>나이</h5>
                <p>18</p>
            </li>
            <li className={style.profileRow}>
                <h5>직업</h5>
                <p>학생</p>
            </li>
            <li className={style.profileRow}>
                <h5>직장</h5>
                <p>한세사이버보안고등학교</p>
            </li>
        </ul>
    </div>;
}

export default MyProfile;