"use client"

import React from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import LoginCard from "./loginCard";

export default function TabCard() {
  const [selected, setSelected] = React.useState<string | number>("user");

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-auto h-auto bg-slate-50">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            variant="light"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="user" title="Người mượn sách">
              <LoginCard description="Dành cho người mượn sách" isUser={true} />
            </Tab>
            <Tab key="library" title="Thư viện">
              <LoginCard description="Dành cho thư viện" isUser={false}/>
            </Tab>
            <Tab key="admin" title="Quản trị viên">
              <LoginCard description="Dành cho quản trị viên" isUser={false}/>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}