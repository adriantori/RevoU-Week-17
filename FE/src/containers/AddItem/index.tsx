import { Button, Form, Input, Space, Card, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Notification } from '../../components'
import { useTokenChecker } from '../../hooks';
import { API_URL } from '../../constants';


interface AccountLogin {
    postTitle: string;
}

const initialValues = {
    postTitle: '',
}

const AddItem: React.FC = () => {

    const navigate = useNavigate();
    useTokenChecker()
    
    const handleSubmit = async (values: AccountLogin) => {
        console.log("submit")
        try {
            const fetching = await fetch(API_URL + '/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
                credentials: 'include'
            });
            console.log("submit inside")

            if (!fetching.ok) {
                throw new Error('Error adding category');
            }
            Notification('success', 'Add Category', 'Data successfully added');
            navigate('/');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    }

    const validationSchema = yup.object({
        postTitle: yup
            .string()
            .required('Post must exist')
    });

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    })

    return (
        <Card title="Add New Category" headStyle={{ textAlign: 'center' }}>
            <a onClick={() => { navigate('/') }}>Back to Main Page</a>
            <Form onFinish={formik.handleSubmit}>
                <Form.Item
                    name="postTitle"
                    hasFeedback
                    validateStatus={formik.touched.postTitle && formik.errors.postTitle ? 'error' : 'success'}
                    help={formik.touched.postTitle && formik.errors.postTitle ? formik.errors.postTitle : ''}
                >
                    <Input
                        placeholder="postTitle"
                        value={formik.values.postTitle}
                        onChange={formik.handleChange('postTitle')}
                        status={formik.errors.postTitle && 'error'}
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

export default AddItem;