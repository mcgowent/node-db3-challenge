# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT Products.ProductName, Categories.CategoryName 
FROM Products
inner JOIN Categories on Products.CategoryID = Categories.CategoryID
order by Products.CategoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName, o.OrderDate
FROM Orders as o
inner JOIN Shippers s on o.ShipperID = s.ShipperID
order by o.OrderDate ASC
LIMIT 161

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT o.Quantity, p.ProductName
FROM OrderDetails as o
JOIN Products as p
ON  p.ProductID = o.ProductID
WHERE o.OrderID = 10251


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT o.orderID, c.CustomerName, e.LastName
FROM Orders as o
JOIN Customers as c
ON c.CustomerID = o.CustomerID
JOIN Employees as e
ON e.EmployeeID = o.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT  COUNT(*) as Count,c.CategoryName 
FROM [Products] as p 
JOIN Categories as c ON c.categoryID = p.categoryID 
GROUP by p.CategoryID


### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT OrderID, 
COUNT(OrderID) as ItemCount 
FROM [Orders] 
GROUP by OrderID 