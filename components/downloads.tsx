"use client";
import Image from "next/image"; // Use Image from next/image
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Downloads() {
  return (
    <div className="flex flex-col min-h-[100dvh] md:ml-[100px] lg:ml-[200px]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Download Files with Ease</h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Explore our collection of high-quality files, including videos, images, and PDFs, all available for easy download.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="group">
                <CardHeader>
                  <Image
                    src="/arpan.jpg"
                    width={300}
                    height={200}
                    alt="File Thumbnail"
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Video File</h3>
                  <p className="text-muted-foreground line-clamp-2">A high-quality video file for your project.</p>
                  <Button className="w-full" onClick={() => console.log("Download Video")}>
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <CardHeader>
                  <Image
                    src="/arpan.jpg"
                    width={300}
                    height={200}
                    alt="File Thumbnail"
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Image File</h3>
                  <p className="text-muted-foreground line-clamp-2">A high-resolution image file for your design.</p>
                  <Button className="w-full" onClick={() => console.log("Download Image")}>
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <CardHeader>
                  <Image
                    src="/arpan.jpg"
                    width={300}
                    height={200}
                    alt="File Thumbnail"
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">PDF File</h3>
                  <p className="text-muted-foreground line-clamp-2">A professional PDF file for your documents.</p>
                  <Button className="w-full" onClick={() => console.log("Download PDF")}>
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <CardHeader>
                  <Image
                    src="/arpan.jpg"
                    width={300}
                    height={200}
                    alt="File Thumbnail"
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Audio File</h3>
                  <p className="text-muted-foreground line-clamp-2">A high-quality audio file for your project.</p>
                  <Button className="w-full" onClick={() => console.log("Download Audio")}>
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <CardHeader>
                  <Image
                    src="/arpan.jpg"
                    width={300}
                    height={200}
                    alt="File Thumbnail"
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Presentation File</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    A professional presentation file for your business.
                  </p>
                  <Button className="w-full" onClick={() => console.log("Download Presentation")}>
                    Download
                  </Button>
                </CardContent>
              </Card>
              <Card className="group">
                <CardHeader>
                  <Image
                    src="/arpan.jpg"
                    width={300}
                    height={200}
                    alt="File Thumbnail"
                    className="rounded-t-lg object-cover w-full aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Document File</h3>
                  <p className="text-muted-foreground line-clamp-2">A well-formatted document file for your needs.</p>
                  <Button className="w-full" onClick={() => console.log("Download Document")}>
                    Download
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
