import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { menuData } from '../data/menuData';
import {
  Diagram3,
  Calculator,
  People,
  Building,
  ShieldLock,
  Icon as BootstrapIcon, // Generic type
} from 'react-bootstrap-icons';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  organization: Diagram3,
  accounting: Calculator,
  hr: People,
  'general-affairs': Building,
  'info-sys': ShieldLock,
};

const Sidebar = () => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <Nav.Item as="ul" className="flex-column">
          {menuData.map((item) => {
            const Icon = iconMap[item.id];
            return (
              <Nav.Link
                as={NavLink}
                to={`/manual/${item.id}`}
                key={item.id}
                className="text-decoration-none d-flex align-items-center"
              >
                {Icon && <Icon className="me-2" />} 
                {item.title}
              </Nav.Link>
            );
          })}
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;