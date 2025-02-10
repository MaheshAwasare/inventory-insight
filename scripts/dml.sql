-- Insert sample users
INSERT INTO users (username, password) VALUES 
('admin', 'a0bf989a7de46d544def2f24395219ee786d25e574476c976'), -- password: admin123
('user1', 'b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5'); -- password: user123

-- Insert sample suppliers
INSERT INTO suppliers (name, email, phone, address) VALUES
('Tech Components Ltd', 'contact@techcomp.com', '+91-9876543210', '123 Tech Street, Mumbai, India'),
('Electronics Hub', 'info@ehub.in', '+91-8765432109', '456 Digital Avenue, Delhi, India'),
('Global Supplies Co', 'support@gsupplies.com', '+91-7654321098', '789 Supply Road, Bangalore, India');

-- Insert sample products
INSERT INTO products (name, sku, description, price, quantity, supplier_id) VALUES
('High Performance SSD', 'SSD-001', '1TB NVMe SSD', 8999.99, 50, 1),
('Mechanical Keyboard', 'KB-002', 'RGB Mechanical Gaming Keyboard', 4999.99, 30, 2),
('Wireless Mouse', 'M-003', 'Ergonomic Wireless Mouse', 1499.99, 100, 2),
('LCD Monitor', 'MON-004', '27" 4K LCD Monitor', 24999.99, 20, 1),
('Graphics Card', 'GPU-005', '8GB GDDR6 Graphics Card', 34999.99, 15, 3);