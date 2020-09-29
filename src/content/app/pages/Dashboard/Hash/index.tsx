import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import { mutate as mutateGlobal } from 'swr';
import { FiEyeOff, FiEye, FiTrash2 } from 'react-icons/fi';

import { Container, SquareButton, Content } from './styles';

interface HashData {
  hash: Hash;
}

const Hash: React.FC<HashData> = ({ hash }) => {
  const [showHash, setShowHash] = useState(false);

  const passwordValue = useRef<HTMLInputElement>(null);

  const handleTogleHash = useCallback(() => {
    setShowHash(prevState => !prevState);
  }, [showHash]);

  const handleCopyValue = useCallback(() => {
    passwordValue.current.select();
    document.execCommand('copy');
  }, []);

  const handleDelete = useCallback(async () => {
    mutateGlobal(
      `/api/list-hashes`,
      (prevState: Hash[]) =>
        prevState.filter(prevHash => prevHash.id !== hash.id),
      false
    );

    await axios.post('/api/delete-hash', { id: hash.id });
  }, [mutateGlobal]);

  return (
    <Container>
      <div>
        <Content>
          <h1>{hash.website}</h1>

          <section>
            <input
              readOnly
              maxLength={16}
              name="password"
              value={hash.password}
              type={showHash ? 'text' : 'password'}
            />

            <button type="button" onClick={handleTogleHash}>
              {showHash ? <FiEyeOff size={19} /> : <FiEye size={19} />}
            </button>

            <button type="button" onClick={handleCopyValue}>
              Copy!
            </button>
          </section>
        </Content>

        <SquareButton type="button" onClick={handleDelete}>
          <FiTrash2 size={19} />
        </SquareButton>

        <input type="text" readOnly ref={passwordValue} value={hash.password} />
      </div>
    </Container>
  );
};

export default Hash;
