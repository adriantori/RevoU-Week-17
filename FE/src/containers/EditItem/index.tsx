import { Button, Form, Input, Space, Card, Select } from 'antd';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../Provider/AppProvider';
import * as yup from 'yup';
import { Notification } from '../../components'
import { useTokenChecker } from '../../hooks';
import { API_URL } from '../../constants';

interface AccountLogin {
    postTitle?: string;
}

const EditItem: React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const { categories } = useContext(AppContext)
    useTokenChecker()

    const category = categories.find(category => category.post_id === id);

    const initialValues = {
        postTitle: category?.post_title,
    }
    
    const validationSchema = yup.object({
        postTitle: yup.string().required(),
    })

    const handleSubmit = async (values: AccountLogin) => {
        const newValues = {
            id, ...values
        }
        try {
            const fetching = await fetch(API_URL + '/update/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
                credentials: 'include'
            });
            if (!fetching.ok) {
                throw new Error('Error adding category');
            }
                Notification('success', 'Edit data', 'Edit successful!');
                navigate('/');
        } catch (error) {
            console.error('Error adding data', error);
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })


    return (
        <Card title="Edit Category" headStyle={{ textAlign: 'center' }}>
            <a onClick={() => { navigate('/') }}>Back to Main Page</a>
            <Form onFinish={formik.handleSubmit}>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Name must be different / exist' }]}
                >
                    <Input
                        placeholder="Name"
                        value={formik.values.postTitle}
                        onChange={formik.handleChange('postTitle')}
                        status={formik.errors.postTitle && 'error'}
                        defaultValue={formik.initialValues.postTitle}
                    />
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-around', width: "100%" }}>
                    <Button type="primary" htmlType="submit" style={{ width: "200px" }}>
                        Submit
                    </Button>
                </Space>
            </Form>
        </Card>
    );
};

export default EditItem;