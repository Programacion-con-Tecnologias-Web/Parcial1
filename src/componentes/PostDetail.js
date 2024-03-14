import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostDetail () {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", name: "", description: "", url: ""});
    const [error, setError] = useState("");

}

export default PostDetail;