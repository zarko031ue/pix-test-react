"use client";

import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
  email?: string;
  isOnline?: boolean;
  onMessage?: () => void;
}

export function UserCard({ name, role, avatarUrl, email, isOnline = false, onMessage }: UserCardProps) {
  return (
    <Card elevated className="flex items-center gap-md w-[320px]">
      <Avatar src={avatarUrl} fallback={name.charAt(0).toUpperCase()} size="lg" />
      <div className="flex-1 flex flex-col gap-xs">
        <div className="flex items-center gap-sm">
          <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
          {isOnline ? <Badge variant="success">Online</Badge> : null}
        </div>
        <p className="text-sm text-text-secondary">{role}</p>
        {email ? <p className="text-sm text-text-muted">{email}</p> : null}
      </div>
      <Button variant="outline" size="sm" onClick={onMessage}>
        Message
      </Button>
    </Card>
  );
}
