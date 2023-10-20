import { useCallback, useContext, useEffect } from 'react';
import { Button, Card, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Provider/AppProvider';
import { Notification } from '../../components'
import { useTokenChecker } from '../../hooks';
import { API_URL } from '../../constants';

interface Category {
    key: string;
    post_id: string
    post_title: string;
}

interface GetCategoryResponse {
    data: Category[],
    currentPage: number,
    totalItem: number,
    totalPage: number
}

const Datas: React.FC = () => {

    const { categories, setCategories } = useContext(AppContext);
    const navigate = useNavigate();
    useTokenChecker();


    const getCategoryList = useCallback(
        async () => {
            console.log("get category")
            const fetching = await fetch(API_URL + '/retrieve', {
                credentials: 'include'
            })
            const response: GetCategoryResponse = await fetching.json();
            console.log(response);

            const categorizedData = response.data ? response.data.map(category => ({
                ...category,
                key: category.key
            })) : [];
            setCategories(categorizedData ?? []);
        },
        [setCategories]
    )

    useEffect(
        () => {
            getCategoryList()
        },
        [getCategoryList]
    )

    const deleteItem = async (postId: string) => {
        try {
            const fetching = await fetch(API_URL + '/delete/' + postId, {
                method: 'DELETE',
                credentials: 'include'
            });
            if (!fetching.ok) {
                throw new Error('Error deleting category');
            }

            Notification('error', 'Deleted', 'Message is deleted')

            getCategoryList();
        } catch (error) {
            Notification('error', 'Error delete Data', 'Something gone wrong when you tried to annihilate the data');
        }
    }

    const handleLogout = () => {
        console.log("logged out");
        document.cookie = 'loginCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'loginCookieRefresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        Notification('success', 'Logout', 'Goodbye, see you later!');
        navigate('/login');
    };

    const columns: ColumnsType<Category> = [
        {
            title: 'Post Title',
            dataIndex: 'post_title',
            key: 'post_title',
            sorter: (a, b) => a.post_title.localeCompare(b.post_title),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a><Button type='primary' onClick={() => navigate(`/edit/${record.post_id}`)}>Edit</Button></a>
                    <a><Button type='primary' danger onClick={() => deleteItem(record.post_id)}>Delete</Button></a>
                </Space>
            ),
        },
    ];

    return (
        <Card title="List of Category" style={{ height: '82vh' }} extra={
            <Space direction="horizontal" size="middle">
                <Button onClick={() => { navigate('/add') }}>Add Item</Button>
                <Button onClick={handleLogout} danger>Log Out</Button>
            </Space>
        }>
            <Table
                columns={columns}
                dataSource={categories}
                pagination={{
                    defaultPageSize: 5,
                    total: categories.length,
                    position: ['topCenter']
                }}
            />
        </Card>
    )
}

export default Datas;
