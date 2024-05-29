import styled from 'styled-components';

export const QuestCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: ${({ theme }) => `2px solid ${theme.colors.lightBrown}`};
    background: ${({ theme }) => theme.colors.black};
    height: 500px;
    width: 40%;
`;