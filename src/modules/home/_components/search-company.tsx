'use client';

import { useMemo, useState } from 'react';
import type { Company } from '../_types';
import { GradientCard } from '@/shared/components';
import { Input } from '@/shared/components/ui/input';
import { ScrollArea } from '@/shared/components/ui/scroll-area';
import { TabsList, TabsTrigger } from '@/shared/components/ui/tabs';
import { dayMapper, DayValueTrigger } from '../_constants';
import { Icon } from '@iconify/react/dist/iconify.js';

type Props = {
  companies: Company[];
};

export function SearchCompany({ companies }: Props) {
  const [searchValue, setSearchValue] = useState<string>('');
  const companyList = useMemo(() => {
    return companies
      ?.filter((company: Company) =>
        company.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      .map((company: Company, index: number) => {
        return (
          <TabsTrigger
            value={dayMapper.get(company.date) ?? DayValueTrigger.FIRST_DAY}
            className="text-filling-animation flex w-full flex-shrink-0 cursor-pointer py-2"
            key={`${company.name}-${index}`}
          >
            {company.name}
          </TabsTrigger>
        );
      });
  }, [searchValue, companies]);

  return (
    <>
      <GradientCard className="flex items-center gap-2 px-5 py-1">
        <span>
          <Icon icon="hugeicons:search-01" width="1.25rem" height="1.25rem" />
        </span>

        <Input
          className="h-full w-full bg-transparent p-1 placeholder-gray-100 focus:outline-none"
          type="text"
          placeholder="พิมพ์ชื่อบริษัท"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </GradientCard>

      <ScrollArea className="h-[65svh] pr-5 text-sm sm:text-base lg:h-[300px]">
        <TabsList>{companyList}</TabsList>
      </ScrollArea>
    </>
  );
}
