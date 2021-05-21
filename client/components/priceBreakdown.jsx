import React from 'react';
import styled from 'styled-components';

const PricingSpan = styled.span`
  font-weight: 300;
  color: rgb(34, 34, 34);
  display: block;
  text-align: left;
  text-decoration: underline;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  flex: 0 0 auto;
`;

const PricingSpanRight = styled.span`
  padding-left: 16px;
  text-decoration: underline;
  white-space: nowrap;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  flex: 0 0 auto;
`;

const TotalSpan = styled.span`
  white-space: nowrap;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  flex: 0 0 auto;
`;

const TotalSpanRight = styled.span`
  white-space: nowrap;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 20px;
  flex: 0 0 auto;
`;

const PriceListItem = styled.li`
  padding-bottom: 12px;
  display: flex;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  justify-content: space-between;
`;

const StyledList = styled.ul`
  margin-top: 16px;
`;

const TotalDiv = styled.div`
  border-top: 1px solid rgb(221, 221, 221);
  font-weight: 800;
  text-direction: none;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-top: 24px;
  padding-bottom: 4px;
`;

const ChargedDiv = styled.div`
  font-weight: 300;
  font-size: 14px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;

export default function PriceBreakdown({pricing, checkoutDate, checkinDate, adults, numChildren}) {
  const { price, cleaningFee } = pricing;
  const nights = checkoutDate.day - checkinDate.day;
  const guests = adults + numChildren;
  let { serviceFee } = pricing;
  serviceFee = Math.floor((nights / 1.2) * (guests / 1.5) * serviceFee);
  const total = price * nights + cleaningFee + serviceFee;
  return (
    <div>
      <ChargedDiv>
        You won&apos;t be charged yet
      </ChargedDiv>
      <StyledList>
        <PriceListItem>
          <PricingSpan>{`${price} x ${nights} nights`}</PricingSpan>
          <PricingSpanRight>{`$${price * nights}`}</PricingSpanRight>
        </PriceListItem>
        <PriceListItem>
          <PricingSpan>Cleaning Fee</PricingSpan>
          <PricingSpanRight>{`$${cleaningFee}`}</PricingSpanRight>
        </PriceListItem>
        <PriceListItem>
          <PricingSpan>Service Fee</PricingSpan>
          <PricingSpanRight>{`$${serviceFee}`}</PricingSpanRight>
        </PriceListItem>
      </StyledList>
      <TotalDiv>
        <TotalSpan>Total</TotalSpan>
        <TotalSpanRight>{`$${total}`}</TotalSpanRight>
      </TotalDiv>
    </div>
  );
}
