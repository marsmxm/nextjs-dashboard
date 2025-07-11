'use client';

import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const [deleting, setDeleting] = useState(false);
  const d = async () => {
    // throw new Error('Failed to Delete Invoice');
    setDeleting(true);
    await deleteInvoice(id);
    setDeleting(false);
  };
  return (
    <>
      <Button size="sm" variant="secondary" disabled={deleting} onClick={d}>
        <Trash2 />
        Delete
      </Button>
    </>
  );
}
