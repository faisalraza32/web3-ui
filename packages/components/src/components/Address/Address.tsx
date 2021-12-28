import React, { useState, useEffect } from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';
import { green, grey, red } from '@mui/material/colors';

export interface AddressProps {
  /**
   * The address to display
   */
  value: string;
  /**
   * Whether the address can be copied or not
   */
  copiable?: boolean;
  /**
   * Shorten the address if it does not resolve to an ENS name
   */
  shortened?: boolean;
}

/**
 * A component to display an address
 */
export const Address: React.FC<AddressProps> = ({
  value,
  copiable = false,
  shortened = false
}) => {
  const [error, setError] = useState<null | string>(null);
  const [copied, setCopied] = useState<boolean>(false);
  let feedbackTimeOut: ReturnType<typeof setTimeout>;
  let displayAddress: string = value || '';

  if (shortened && value) {
    if (value.includes('.eth') || value === '' || value === 'Not connected') {
      displayAddress = value;
    } else {
      displayAddress = `${value.substring(0, 4)}...${value.substring(
        value.length - 4
      )}`.toLowerCase();
    }
  }

  const handleClick = async (): Promise<void> => {
    if (copiable && value) {
      try {
        await navigator.clipboard.writeText(value);
        setError(null);
        setCopied(true);

        feedbackTimeOut = setTimeout(() => {
          setCopied(false);
        }, 2000);
      } catch (error) {
        setError(error as string);
      }
    }
  };

  useEffect(() => {
    return () => clearTimeout(feedbackTimeOut);
  }, []);

  const getIcon = () => {
    if (copiable) {
      return (
        <Box ml="auto">
          {copied ? (
            <Check fontSize="small" sx={{ color: green[500] }} />
          ) : (
            <ContentCopy fontSize="small" sx={{ color: grey[300] }} />
          )}
        </Box>
      );
    }
    return null;
  };
  return (
    <>
      <label
        style={{ cursor: copiable ? 'pointer' : 'default' }}
        onClick={handleClick}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="body2" gutterBottom>
            {displayAddress}
          </Typography>
          {getIcon()}
        </Stack>
      </label>
      <Typography variant="body2" color={red[500]}>
        {error}
      </Typography>
    </>
  );
};
