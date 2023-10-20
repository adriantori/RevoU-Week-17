import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Card } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Notification } from '../../components';
import { API_URL } from '../../constants';

interface AccountRegister {
    email: string;
    username: string;
    password: string;
}

const initialValues = {
    email: '',
    username: '',
    password: ''
}

const validationSchema = yup.object({
    email: yup.string()
        .email('Invalid email format')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format. Must include domain.')
        .required('email must exist')
        .min(10),
    username: yup.string().required('username must exist'),
    password: yup.string().required('password must exist')
})

const Register: React.FC = () => {

    const navigate = useNavigate();

    async function postRegisterData(values: AccountRegister) {
        console.log(values)
        try {
            const fetching = await fetch(API_URL + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            if (!fetching.ok) {
                throw new Error('Error registering user');
            }
            Notification('success', 'Register', 'Registration successful!');
            navigate('/login');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    }

    async function handleSubmit(values: AccountRegister) {
        try {
            if (formik.isValid) {
                await postRegisterData(values);
            }else{
                Notification('error', 'Register error', 'Your input probably wrong, try other stuff');
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <Card title="Please Register To Our Platform" headStyle={{ textAlign: 'center' }} style={{ width: '60vw' }}>
            <Form onFinish={formik.handleSubmit}>
            <Form.Item
                    name="email"
                    hasFeedback
                    validateStatus={formik.touched.email && formik.errors.email ? 'error' : 'success'}
                    help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                >
                    <>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="email"
                            value={formik.values.email}
                            onChange={formik.handleChange('email')}
                        />
                    </>

                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="username"
                        value={formik.values.username}
                        onChange={formik.handleChange('username')}
                        status={formik.errors.username && 'error'}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    hasFeedback
                    validateStatus={formik.touched.password && formik.errors.password ? 'error' : 'success'}
                    help={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="password"
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        status={formik.errors.password && 'error'}
                    />
                </Form.Item>
                <Space direction="horizontal" size="middle" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                    <Button onClick={() => {navigate('/login')}} type="default">Login now!</Button>
                </Space>
            </Form>
        </Card>
    );
};

export default Register;