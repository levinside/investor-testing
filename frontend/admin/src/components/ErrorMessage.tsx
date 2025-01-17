import React, {ReactElement} from 'react';
import styled from 'styled-components';

import {Button} from './Button';

interface IProps {
    title?: string;
    subtitle?: string;
    children?: ReactElement;
}

export const ErrorMessage: React.FC<IProps> = (props) => {
    const {title, subtitle, children} = props;

    const handleClick = () => {
        document.location.reload();
    };

    return (
        <Container>
            <Title>{title || 'Ошибка'}</Title>
            <Subtitle>
                {subtitle ||
                    'На сервере произошла непредвиденная ошибка. Пожалуйста, подождите. Она вскоре будет исправлена.'}
            </Subtitle>
            {children || <Button onClick={handleClick}>Повторить попытку</Button>}
        </Container>
    );
};

const Container = styled.div`
    background-color: ${({theme}) => theme.palette.bg.secondary};
    border-radius: 10px;
    margin: 0 auto;
    max-width: 500px;
    padding: 24px;
    text-align: center;

    ${({theme}) => theme.breakpoint('md')`
        padding: 32px;
    `}
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;

    ${({theme}) => theme.breakpoint('md')`
        font-size: 32px;
    `}
`;

const Subtitle = styled.div`
    margin-bottom: 32px;

    ${({theme}) => theme.breakpoint('md')`
        font-size: 20px;
    `}
`;
