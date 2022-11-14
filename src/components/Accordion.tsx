import React from "react";
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

() function => (
    <Accordion.Root>
      <Accordion.Item>
        <Accordion.Header>
          <Accordion.Trigger />
        </Accordion.Header>
        <Accordion.Content />
      </Accordion.Item>
    </Accordion.Root>
  );