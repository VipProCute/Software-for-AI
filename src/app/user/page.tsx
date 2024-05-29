import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import ScrollPane from "@/components/user/scroll"
import { bookTest } from "@/lib/test"
import BookTable from "@/components/user/booktable"
import Help from "@/components/user/help"

export default function Page() {
    const thisMonth = (new Date().getMonth() + 1).toString();

    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
            <div className="h-full px-4 py-6 lg:px-8">
                <Tabs defaultValue="foryou" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="foryou" className="relative">
                                Dành cho bạn
                            </TabsTrigger>
                            <TabsTrigger value="explore">
                                Khám phá
                            </TabsTrigger>
                        </TabsList>
                        <div className="ml-auto mr-4">
                            <Help />
                        </div>
                    </div>
                    <TabsContent
                      value="foryou"
                      className="border-md p-0 outline-none"
                    >
                        <div className="flex justify-between gap-20">
                            <div className="space-y-4">
                                <div className="mt-6 space-y-1">
                                    <h2 className="text-2xl font-semibold tracking-tight">
                                        Có thể bạn sẽ thích
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Những sách được gợi ý dành riêng cho bạn đọc
                                    </p>
                                </div>
                                <ScrollPane books={bookTest}/>
                            </div>
                            <div className="space-y-4 hidden md:block mr-8">
                                <div className="mt-6 space-y-1">
                                    <h2 className="text-2xl font-semibold tracking-tight">
                                        Sách của tháng {thisMonth}
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        Là sách được bạn đọc mượn nhiều nhất tháng {thisMonth} này
                                    </p>
                                </div>
                                <ScrollPane books={bookTest.slice(1, 2)}/>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="space-y-4">
                            <div className="mt-6 space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Sách mới gần đây
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Những sách mới được thêm vào tháng {thisMonth} này
                                </p>
                            </div>
                            <div className="justify-center mx-20">
                                <BookTable books={bookTest}/>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent
                      value="explore"
                      className="border-none p-0 outline-none"
                    >
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    Khám phá thế giới sách của thư viện Bobo
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Toàn bộ sách của thư viện Bobo nằm ở đây.
                                </p>
                            </div>
                        </div>
                        <div className="relative ">
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}