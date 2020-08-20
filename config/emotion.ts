import styled, { CreateStyled } from '@emotion/styled';

import theme from '../styles/theme';

export default styled as CreateStyled<typeof theme>;

/**
 * Creating this file, so emotion allow us to create our own styling, beside chakra UI
 */
