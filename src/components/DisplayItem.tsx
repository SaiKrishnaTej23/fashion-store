import { EditOutlined, EllipsisOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { getMenImages } from '../app/store/fashionApi';
const { Meta } = Card;
export interface Product {
    _id: string;
    brand: string;
    model: string;
    price: string;
    discountPer: string;
    category: string;
    type: string;
    views: string;
    availableSizes: Array<string>;
    rating: string;
    displayImages: Array<string>;
}

export interface IProductProps {
    product: Product;
}

const DisplayItem = (props: IProductProps) => {
    const [image, setImage]= useState("");
    useEffect(() => {
        getMenImages(props.product).then((url: string) =>{
            setImage(url);
            console.log(url);
        });
    }, [props.product])



    return <Card
        style={{
            width: 300,
        }}
        cover={
            <img
                alt="example"
                src={image}
            />
        }
        actions={[
            <StarOutlined key="setting" title={props.product.rating} />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={<Avatar alt={props.product.brand} />}
            title={props.product.brand}
            description={props.product.model}
        />
    </Card>;
};

export default DisplayItem;