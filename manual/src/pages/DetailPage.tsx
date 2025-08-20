import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { Card, Row, Col, Button } from 'react-bootstrap';
import {
  ChevronRight,
  Diagram3, Globe, FileText, FileArrowDown, CashCoin,
  PencilSquare, Bank, PersonVcard, ClockHistory, Calculator, HeartPulse,
  FileRichtext, CardChecklist, Archive, BuildingGear, ThreeDots,
  FileRuled, ShieldLock, Check2Square
} from 'react-bootstrap-icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  // organization
  'role-structure': Diagram3,
  'services': Globe,
  // accounting
  'billing-issue': FileText,
  'billing-receive': FileArrowDown,
  'expenses': CashCoin,
  'journalizing': PencilSquare,
  'settlement': Bank,
  // hr
  'onboarding-offboarding': PersonVcard,
  'time-management': ClockHistory,
  'payroll': Calculator,
  'social-insurance': HeartPulse,
  // general-affairs
  'contract-management': FileRichtext,
  'service-subscription': CardChecklist,
  'asset-management': Archive,
  'facility-management': BuildingGear,
  'other': ThreeDots,
  // info-sys
  'internal-rules': FileRuled,
  'security': ShieldLock,
  'compliance': Check2Square,
};

const DetailPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const selectedCategory = menuData.find((item) => item.id === categoryId);

  if (!selectedCategory) {
    return <div>カテゴリが見つかりません。</div>;
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{selectedCategory.title}</h1>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {selectedCategory.items.map((item) => {
          const Icon = iconMap[item.id] || ChevronRight; // Fallback to ChevronRight
          return (
            <Col key={item.id}>
              <Card className="h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h5" className="fw-bold d-flex align-items-center">
                    <Icon className="me-2" />
                    {item.title}
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={`/manual/${categoryId}/${item.id}`} className="mt-auto">
                    <Button variant="primary">詳細を見る</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </main>
  );
};

export default DetailPage;