import {
    UserOutlined,
    FolderOutlined,
    FieldTimeOutlined,
    FileAddOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router';
import { USER_LOGIN } from '../../util/settings/config';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';





const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, items) {
    return {
        key,
        icon,
        items,
        label,
    };
}




const App = () => {

    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    const navigate = useNavigate()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('You are not logged in or you do not have permission to access this page.')
        return navigate('/')
    }
    if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
        alert('You are not logged in or you do not have permission to access this page.')
        return navigate('/')

    }



    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <img className='p-3 w-auto' src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                    <Menu.Item key='1' icon={<UserOutlined />}>
                        <NavLink to='/admin/user'>User</NavLink>
                    </Menu.Item>
                    <SubMenu key='sub1' icon={<FolderOutlined />} title="Films">
                        <Menu.Item key='10' icon={<FolderOutlined /> }>
                            <NavLink to='/admin/film'>Films</NavLink>
                            
                        </Menu.Item>
                        <Menu.Item key='11' icon={<FileAddOutlined />}>
                        <NavLink to='/admin/film/add'>Add Film</NavLink>
                            
                        </Menu.Item>
                    </SubMenu>

                    <Menu.Item key='3' icon={<FieldTimeOutlined />}>
                        <NavLink to='/admin/showtime'>Showtime</NavLink>
                    </Menu.Item>


                </Menu>
            </Sider>

            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}

                >
                    <div className='text-right'>
                        <button onClick={() => {
                            navigate("/profile")
                        }}>
                            <div className='flex justify-center items-center mr-4'>
                                <div className="overflow-hidden relative w-8 h-8 bg-black rounded-full dark:bg-gray-600">
                                    <svg className="absolute -left-1 w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>


                                </div>
                                <span className="ml-3 font-medium text-white dark:text-gray-300">{userLogin.taiKhoan}</span>
                            </div>
                        </button>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {/* <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        
                    </Breadcrumb> */}
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    CyberSoft ©2022 by LTMT
                </Footer>
            </Layout>
        </Layout>
    );
};
export default App;