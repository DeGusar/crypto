import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Row, Button, Col } from 'antd';
import routePaths from '@/utils/constants/routePaths';

const { Paragraph } = Typography;

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoMain = () => navigate(routePaths.MAIN_PAGE);

  return (
    <Row align="middle">
      <Col>
        <Paragraph>Error 404</Paragraph>
      </Col>
      <Col push={1}>
        <Button type="link" onClick={handleGoMain}>
          Go to main Page
        </Button>
      </Col>
    </Row>
  );
};

export default NotFoundPage;
