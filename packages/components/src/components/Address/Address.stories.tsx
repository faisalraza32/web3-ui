import React from 'react';
import { useWallet, Provider, NETWORKS } from '@web3-ui/hooks';
import { Button, Box } from '@mui/material';
import { Address } from '.';

export default {
  title: 'Components/Address',
  component: Address
};

export const Default = () => <Address value="testaddress.eth" />;

export const DefaultShortenedWithENS = () => (
  <Address shortened value="testaddress.eth" />
);

export const DefaultShortenedWithHexAddress = () => (
  <Address shortened value="0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b" />
);

type AddressProps = {
  shortened?: boolean;
};

const AddressUsingProvider = (props: AddressProps) => {
  const { connected, connectWallet, connection } = useWallet();

  return (
    <Box>
      <Address
        copiable
        value={
          connected
            ? connection.ens || connection.userAddress || ''
            : 'Not connected'
        }
        shortened={props.shortened}
      />
      <Button variant="contained" color="primary" onClick={connectWallet}>
        Connect wallet
      </Button>
    </Box>
  );
};

export const WithWallet = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider />
  </Provider>
);

export const WithWalletShortened = () => (
  <Provider network={NETWORKS.rinkeby}>
    <AddressUsingProvider shortened />
  </Provider>
);

export const CanBeCopied = () => <Address value="0x00000000000000" copiable />;
