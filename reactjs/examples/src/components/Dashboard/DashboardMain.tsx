import React from "react";
import { Col, Row } from "antd";
import { Layout, Space, Typography } from "antd";
import HeaderMain from "./HeaderMain";
import SidebarMain from "./SidebarMain";
import SearchMain from "./SearchMain";
import TableMain from "./TableMain";

const { Title } = Typography;

const DashboardMain: React.FC = () => {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Layout>
        <HeaderMain />
      </Layout>
      <Row style={{ margin: "2rem 0" }}>
        <Col span={18} push={6}>
          <SearchMain />
          <Space style={{ alignItems: "baseline", marginBottom: 12 }}>
            <Title
              level={3}
              className="revenue bg-orange-500 relative w-[400px] h-[300px] rounded-lg"
            >
              <p className="p-4 text-[#fff] font-bold">Doanh thu ngày</p>
            </Title>
            <Title level={3} className="overview ml-[2rem]">
              Tổng quan
            </Title>
          </Space>
          <TableMain />
          {/* <TableMainJS /> */}
        </Col>
        <Col span={6} pull={18}>
          <SidebarMain />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardMain;
