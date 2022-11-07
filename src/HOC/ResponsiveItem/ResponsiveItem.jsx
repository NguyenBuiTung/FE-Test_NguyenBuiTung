import React, { useState, useEffect } from 'react';

/**
 * 
 * @param {*} props props: nhận vào là object {component: <Home />, mobileComponent: <Home_Mobile /> }
 * @returns 
 */
export default function ResponsiveItem(props) {
    const [screen, setScreen] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    console.log(screen);
    useEffect(() => {
        const handleSetScreen = () => {
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        //Khi kích thước màn hình thay đổi sẽ cập nhật vào state 
        window.addEventListener('resize', handleSetScreen);

        return () => {
            //Khi screen.width thay đổi hoặc component mất khỏi giao diện sẽ clear sự kiện onresize
            window.removeEventListener('resize', handleSetScreen);
        }
    }, [screen.width]); //Nếu width thay đổi thì sẽ chạy đoạn code này
    let Component = props.component;
    if (screen.width < 765 && props.mobileComponent) {
        Component = props.mobileComponent;
    }
    return (
        <Component />
    )
}
