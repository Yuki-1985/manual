
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { Breadcrumb } from 'react-bootstrap';
import { FileEarmarkText } from 'react-bootstrap-icons';
import AccountingBillingIssue from './contents/AccountingBillingIssue';

const SubDetailPage = () => {
  const { categoryId, itemId } = useParams<{ categoryId: string; itemId: string }>();
  const selectedCategory = menuData.find((cat) => cat.id === categoryId);
  const selectedItem = selectedCategory?.items.find((item) => item.id === itemId);

  if (!selectedCategory || !selectedItem) {
    return <div>ページが見つかりません。</div>;
  }

  const renderContent = () => {
    switch (itemId) {
      case 'billing-issue':
        return <AccountingBillingIssue />;
      default:
        return (
          <div>
            <p>{selectedItem.description}</p>
            <p>ここに詳細なコンテンツが入ります。</p>
          </div>
        );
    }
  };

  const renderTitle = () => {
    let titleClass = "h2";
    if (itemId === 'billing-issue') {
      titleClass += " fw-bold";
      return (
        <h1 className={titleClass}>
          <FileEarmarkText className="me-2" />
          {selectedItem.title}
        </h1>
      );
    }
    return <h1 className={titleClass}>{selectedItem.title}</h1>;
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>ホーム</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/manual/${categoryId}` }}>
            {selectedCategory.title}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{selectedItem.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="border-bottom mb-3">
        {renderTitle()}
      </div>
      {renderContent()}
    </main>
  );
};

export default SubDetailPage;
