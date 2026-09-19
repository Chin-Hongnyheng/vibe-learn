import type { Course } from "@/types/courses";

export const MOCK_COURSES: Course[] = [
  {
    "id": 1,
    "slug": "nextjs-app-router-in-depth",
    "title": "Next.js App Router in Depth",
    "description": "Learn the App Router the way it actually works: routing and layouts, the server/client boundary, caching, and server actions.",
    "category": "Web Development",
    "tag": "POPULAR",
    "imgUrl": "https://picsum.photos/seed/vertex-nextjs-app-router-in-depth/1600/900",
    "level": "Intermediate",
    "duration": 119,
    "durationFormatted": "1h 59m",
    "modules": [
      {
        "id": "nextjs-app-router-in-depth-module-1",
        "title": "Routing and Layouts",
        "summary": "How the App Router turns folders into URLs, and how layouts let you share UI without re-rendering it.",
        "description": "How the App Router turns folders into URLs, and how layouts let you share UI without re-rendering it.",
        "duration": "20m 26s",
        "lessons": [
          {
            "id": "lesson.nextjs-app-router-in-depth-file-system-routing",
            "title": "File-system routing and the app directory",
            "slug": "nextjs-app-router-in-depth-file-system-routing",
            "videoUrl": "https://www.youtube.com/watch?v=9602Yzvd7ik",
            "youtubeVideoId": "9602Yzvd7ik",
            "thumbnailUrl": "https://i.ytimg.com/vi/9602Yzvd7ik/hqdefault.jpg",
            "duration": 350,
            "durationFormatted": "5m 50s",
            "freePreview": true,
            "studentCount": 18240,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-file-system-routing-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-file-system-routing-intro-span",
                    "text": "The App Router maps folders to URL segments and reserved filenames to behaviour. Once you can read a folder tree as a set of routes, most of the framework stops being magic.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-file-system-routing-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-file-system-routing-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-file-system-routing-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-file-system-routing-point-0-span",
                    "text": "Map folders and page files to URL segments",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-file-system-routing-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-file-system-routing-point-1-span",
                    "text": "Use route groups to organise without affecting the URL",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-file-system-routing-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-file-system-routing-point-2-span",
                    "text": "Recognise the reserved files: page, layout, loading, error, not-found",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-file-system-routing-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-file-system-routing-outro-span",
                    "text": "This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The App Router maps folders to URL segments and reserved filenames to behaviour. Once you can read a folder tree as a set of routes, most of the framework stops being magic.\n\nWhat this lesson covers\n\nMap folders and page files to URL segments\n\nUse route groups to organise without affecting the URL\n\nRecognise the reserved files: page, layout, loading, error, not-found\n\nThis lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Map folders and page files to URL segments",
              "Use route groups to organise without affecting the URL",
              "Recognise the reserved files: page, layout, loading, error, not-found"
            ],
            "proTip": "A folder in parentheses is a route group: it organises your files without adding a segment to the URL.",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-layouts-and-templates",
            "title": "Layouts, templates, and shared UI",
            "slug": "nextjs-app-router-in-depth-layouts-and-templates",
            "videoUrl": "https://www.youtube.com/watch?v=k48WMdl2eUc",
            "youtubeVideoId": "k48WMdl2eUc",
            "thumbnailUrl": "https://i.ytimg.com/vi/k48WMdl2eUc/hqdefault.jpg",
            "duration": 380,
            "durationFormatted": "6m 20s",
            "freePreview": false,
            "studentCount": 17298,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-layouts-and-templates-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-layouts-and-templates-intro-span",
                    "text": "Layouts persist across navigations and keep their state; templates remount on every navigation. Choosing the wrong one is why your sidebar scroll position keeps resetting.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-layouts-and-templates-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-layouts-and-templates-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-layouts-and-templates-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-layouts-and-templates-po-b1c5446e",
                    "text": "Nest layouts to share chrome across a section",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-layouts-and-templates-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-layouts-and-templates-po-e088f716",
                    "text": "Know when state persistence makes a template the wrong choice",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-layouts-and-templates-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-layouts-and-templates-po-8b685af1",
                    "text": "Colocate loading and error UI with the layout it belongs to",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-layouts-and-templates-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-layouts-and-templates-outro-span",
                    "text": "This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Layouts persist across navigations and keep their state; templates remount on every navigation. Choosing the wrong one is why your sidebar scroll position keeps resetting.\n\nWhat this lesson covers\n\nNest layouts to share chrome across a section\n\nKnow when state persistence makes a template the wrong choice\n\nColocate loading and error UI with the layout it belongs to\n\nThis lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Nest layouts to share chrome across a section",
              "Know when state persistence makes a template the wrong choice",
              "Colocate loading and error UI with the layout it belongs to"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-dynamic-routes-and-params",
            "title": "Dynamic routes and route params",
            "slug": "nextjs-app-router-in-depth-dynamic-routes-and-params",
            "videoUrl": "https://www.youtube.com/watch?v=j3QJ1Rhxxbw",
            "youtubeVideoId": "j3QJ1Rhxxbw",
            "thumbnailUrl": "https://i.ytimg.com/vi/j3QJ1Rhxxbw/hqdefault.jpg",
            "duration": 496,
            "durationFormatted": "8m 16s",
            "freePreview": false,
            "studentCount": 16355,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-dynamic-routes-and-param-3c3e5dce",
                    "text": "Dynamic segments capture values out of the URL and hand them to your page. Pre-generating the known ones turns a database read into a static file.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-dynamic-routes-and-param-9549c5d9",
                    "text": "Capture single, catch-all, and optional catch-all segments",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-dynamic-routes-and-param-f0591afb",
                    "text": "Read params and search params inside a page",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-dynamic-routes-and-param-21a5ca6a",
                    "text": "Pre-render known routes with generateStaticParams",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-dynamic-routes-and-params-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-dynamic-routes-and-param-ae3c4d1b",
                    "text": "This lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Dynamic segments capture values out of the URL and hand them to your page. Pre-generating the known ones turns a database read into a static file.\n\nWhat this lesson covers\n\nCapture single, catch-all, and optional catch-all segments\n\nRead params and search params inside a page\n\nPre-render known routes with generateStaticParams\n\nThis lesson sits in Routing and Layouts, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Capture single, catch-all, and optional catch-all segments",
              "Read params and search params inside a page",
              "Pre-render known routes with generateStaticParams"
            ],
            "proTip": "Pre-generate the routes you already know about; leave the long tail to render on demand.",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          }
        ]
      },
      {
        "id": "nextjs-app-router-in-depth-module-2",
        "title": "Server and Client Components",
        "summary": "The boundary that defines the App Router: what runs on the server, what ships to the browser, and how data crosses between them.",
        "description": "The boundary that defines the App Router: what runs on the server, what ships to the browser, and how data crosses between them.",
        "duration": "32m 41s",
        "lessons": [
          {
            "id": "lesson.nextjs-app-router-in-depth-server-components",
            "title": "What server components actually do",
            "slug": "nextjs-app-router-in-depth-server-components",
            "videoUrl": "https://www.youtube.com/watch?v=rGPpQdbDbwo",
            "youtubeVideoId": "rGPpQdbDbwo",
            "thumbnailUrl": "https://i.ytimg.com/vi/rGPpQdbDbwo/hqdefault.jpg",
            "duration": 948,
            "durationFormatted": "15m 48s",
            "freePreview": false,
            "studentCount": 15413,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-components-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-components-intro-span",
                    "text": "Server components run on the server and send rendered output rather than code. That is why they can read a database directly and why they add nothing to your bundle.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-components-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-components-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-components-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-components-point-0-span",
                    "text": "Render on the server and ship no component code to the client",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-components-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-components-point-1-span",
                    "text": "Read data and secrets directly, without an API round trip",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-components-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-components-point-2-span",
                    "text": "Understand why server components cannot hold state or effects",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-components-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-components-outro-span",
                    "text": "This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Server components run on the server and send rendered output rather than code. That is why they can read a database directly and why they add nothing to your bundle.\n\nWhat this lesson covers\n\nRender on the server and ship no component code to the client\n\nRead data and secrets directly, without an API round trip\n\nUnderstand why server components cannot hold state or effects\n\nThis lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Render on the server and ship no component code to the client",
              "Read data and secrets directly, without an API round trip",
              "Understand why server components cannot hold state or effects"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              },
              {
                "type": "link",
                "title": "React docs: Server Components",
                "description": "The upstream React explanation the Next.js implementation follows.",
                "url": "https://react.dev/reference/rsc/server-components"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-use-client-boundary",
            "title": "The \"use client\" boundary",
            "slug": "nextjs-app-router-in-depth-use-client-boundary",
            "videoUrl": "https://www.youtube.com/watch?v=Qdkg_mrniLk",
            "youtubeVideoId": "Qdkg_mrniLk",
            "thumbnailUrl": "https://i.ytimg.com/vi/Qdkg_mrniLk/hqdefault.jpg",
            "duration": 634,
            "durationFormatted": "10m 34s",
            "freePreview": false,
            "studentCount": 14470,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-use-client-boundary-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-use-client-boundary-intro-span",
                    "text": "The directive does not mark one component as interactive — it marks the entry point to a client subtree. Everything imported below it goes to the browser too.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-use-client-boundary-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-use-client-boundary-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-use-client-boundary-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-use-client-boundary-point-0-span",
                    "text": "Place the directive at the boundary, not on every file",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-use-client-boundary-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-use-client-boundary-point-1-span",
                    "text": "Push interactivity to the leaves to keep the bundle small",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-use-client-boundary-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-use-client-boundary-point-2-span",
                    "text": "Spot the accidental import that drags the server tree client-side",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-use-client-boundary-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-use-client-boundary-outro-span",
                    "text": "This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The directive does not mark one component as interactive — it marks the entry point to a client subtree. Everything imported below it goes to the browser too.\n\nWhat this lesson covers\n\nPlace the directive at the boundary, not on every file\n\nPush interactivity to the leaves to keep the bundle small\n\nSpot the accidental import that drags the server tree client-side\n\nThis lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Place the directive at the boundary, not on every file",
              "Push interactivity to the leaves to keep the bundle small",
              "Spot the accidental import that drags the server tree client-side"
            ],
            "proTip": "If a whole page turned into a client component, look for one interactive import near the top of the tree.",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-passing-data-across-the-boundary",
            "title": "Passing data across the boundary",
            "slug": "nextjs-app-router-in-depth-passing-data-across-the-boundary",
            "videoUrl": "https://www.youtube.com/watch?v=dMCSiA5gzkU",
            "youtubeVideoId": "dMCSiA5gzkU",
            "thumbnailUrl": "https://i.ytimg.com/vi/dMCSiA5gzkU/hqdefault.jpg",
            "duration": 379,
            "durationFormatted": "6m 19s",
            "freePreview": false,
            "studentCount": 13528,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-passing-data-across-the-c6cf2371",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-passing-data-across-the-b84359f3",
                    "text": "Props crossing into a client component get serialised, which is why functions and class instances fail. Composition through children keeps server-rendered content out of the bundle.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-passing-data-across-the-7f2329a4",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-passing-data-across-the-2831b655",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-passing-data-across-the-c43e8d6f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-passing-data-across-the-63d7f1af",
                    "text": "Pass only serialisable props into client components",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-passing-data-across-the-91277afa",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-passing-data-across-the-e0b641dc",
                    "text": "Use children to slot server content inside a client shell",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-passing-data-across-the-4835d7df",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-passing-data-across-the-bd12f240",
                    "text": "Avoid leaking server-only data through props",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-passing-data-across-the-e28e3d0b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-passing-data-across-the-f8d240d4",
                    "text": "This lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Props crossing into a client component get serialised, which is why functions and class instances fail. Composition through children keeps server-rendered content out of the bundle.\n\nWhat this lesson covers\n\nPass only serialisable props into client components\n\nUse children to slot server content inside a client shell\n\nAvoid leaking server-only data through props\n\nThis lesson sits in Server and Client Components, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Pass only serialisable props into client components",
              "Use children to slot server content inside a client shell",
              "Avoid leaking server-only data through props"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          }
        ]
      },
      {
        "id": "nextjs-app-router-in-depth-module-3",
        "title": "Data Fetching and Caching",
        "summary": "Fetching data where it belongs, understanding what gets cached, and streaming the slow parts so the page appears immediately.",
        "description": "Fetching data where it belongs, understanding what gets cached, and streaming the slow parts so the page appears immediately.",
        "duration": "32m 50s",
        "lessons": [
          {
            "id": "lesson.nextjs-app-router-in-depth-fetching-in-server-components",
            "title": "Fetching data in server components",
            "slug": "nextjs-app-router-in-depth-fetching-in-server-components",
            "videoUrl": "https://www.youtube.com/watch?v=WKfPctdIDek",
            "youtubeVideoId": "WKfPctdIDek",
            "thumbnailUrl": "https://i.ytimg.com/vi/WKfPctdIDek/hqdefault.jpg",
            "duration": 261,
            "durationFormatted": "4m 21s",
            "freePreview": false,
            "studentCount": 12586,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-31aa6f0a",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-e19ba8e8",
                    "text": "A server component can simply await its data. No client-side loading state, no waterfall of effects, and no exposed credentials.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-fetching-in-server-components-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-45c2fbbe",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-e1c643f5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-1fa44b3f",
                    "text": "Await data directly inside an async server component",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-4511c5b5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-8fb5fe30",
                    "text": "Fetch in parallel instead of sequential waterfalls",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-03dac614",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-f2c4e3be",
                    "text": "Keep tokens and database access on the server",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-7fd2baa2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-fetching-in-server-compo-fad921bd",
                    "text": "This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A server component can simply await its data. No client-side loading state, no waterfall of effects, and no exposed credentials.\n\nWhat this lesson covers\n\nAwait data directly inside an async server component\n\nFetch in parallel instead of sequential waterfalls\n\nKeep tokens and database access on the server\n\nThis lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Await data directly inside an async server component",
              "Fetch in parallel instead of sequential waterfalls",
              "Keep tokens and database access on the server"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-caching-and-revalidation",
            "title": "Caching and revalidation",
            "slug": "nextjs-app-router-in-depth-caching-and-revalidation",
            "videoUrl": "https://www.youtube.com/watch?v=VBlSe8tvg4U",
            "youtubeVideoId": "VBlSe8tvg4U",
            "thumbnailUrl": "https://i.ytimg.com/vi/VBlSe8tvg4U/hqdefault.jpg",
            "duration": 1522,
            "durationFormatted": "25m 22s",
            "freePreview": false,
            "studentCount": 11643,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-caching-and-revalidation-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-caching-and-revalidation-e091ae2d",
                    "text": "Caching is the part people get burned by. Know what layer holds your data, how long it holds it, and which lever invalidates it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-caching-and-revalidation-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-caching-and-revalidation-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-caching-and-revalidation-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-caching-and-revalidation-08ba07ba",
                    "text": "Distinguish request-level caching from the full route cache",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-caching-and-revalidation-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-caching-and-revalidation-d42019a7",
                    "text": "Revalidate on a timer or on demand by tag",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-caching-and-revalidation-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-caching-and-revalidation-a07574f5",
                    "text": "Opt out deliberately when data must always be fresh",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-caching-and-revalidation-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-caching-and-revalidation-2146cf1a",
                    "text": "This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Caching is the part people get burned by. Know what layer holds your data, how long it holds it, and which lever invalidates it.\n\nWhat this lesson covers\n\nDistinguish request-level caching from the full route cache\n\nRevalidate on a timer or on demand by tag\n\nOpt out deliberately when data must always be fresh\n\nThis lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Distinguish request-level caching from the full route cache",
              "Revalidate on a timer or on demand by tag",
              "Opt out deliberately when data must always be fresh"
            ],
            "proTip": "Tag your reads by content type; then one webhook can invalidate exactly the pages that changed.",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-streaming-and-suspense",
            "title": "Streaming with Suspense",
            "slug": "nextjs-app-router-in-depth-streaming-and-suspense",
            "videoUrl": "https://www.youtube.com/watch?v=2o5m1ovfl3c",
            "youtubeVideoId": "2o5m1ovfl3c",
            "thumbnailUrl": "https://i.ytimg.com/vi/2o5m1ovfl3c/hqdefault.jpg",
            "duration": 187,
            "durationFormatted": "3m 7s",
            "freePreview": false,
            "studentCount": 10701,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-streaming-and-suspense-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-streaming-and-suspense-intro-span",
                    "text": "Streaming lets the fast parts of a page render while the slow parts are still loading, so time to first paint stops being hostage to your slowest query.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-streaming-and-suspense-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-streaming-and-suspense-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-streaming-and-suspense-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-streaming-and-suspense-p-c00dfb73",
                    "text": "Wrap slow subtrees in Suspense with a real fallback",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-streaming-and-suspense-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-streaming-and-suspense-p-c641e506",
                    "text": "Use loading files for route-level streaming",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-streaming-and-suspense-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-streaming-and-suspense-p-1c86e34a",
                    "text": "Avoid blocking the shell on a single slow request",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-streaming-and-suspense-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-streaming-and-suspense-outro-span",
                    "text": "This lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Streaming lets the fast parts of a page render while the slow parts are still loading, so time to first paint stops being hostage to your slowest query.\n\nWhat this lesson covers\n\nWrap slow subtrees in Suspense with a real fallback\n\nUse loading files for route-level streaming\n\nAvoid blocking the shell on a single slow request\n\nThis lesson sits in Data Fetching and Caching, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Wrap slow subtrees in Suspense with a real fallback",
              "Use loading files for route-level streaming",
              "Avoid blocking the shell on a single slow request"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          }
        ]
      },
      {
        "id": "nextjs-app-router-in-depth-module-4",
        "title": "Server Actions and Mutations",
        "summary": "Writing data from the client without hand-building an API: actions, form validation, and optimistic UI.",
        "description": "Writing data from the client without hand-building an API: actions, form validation, and optimistic UI.",
        "duration": "33m 32s",
        "lessons": [
          {
            "id": "lesson.nextjs-app-router-in-depth-server-actions-basics",
            "title": "Writing your first server action",
            "slug": "nextjs-app-router-in-depth-server-actions-basics",
            "videoUrl": "https://www.youtube.com/watch?v=O94ESaJtHtM",
            "youtubeVideoId": "O94ESaJtHtM",
            "thumbnailUrl": "https://i.ytimg.com/vi/O94ESaJtHtM/hqdefault.jpg",
            "duration": 471,
            "durationFormatted": "7m 51s",
            "freePreview": false,
            "studentCount": 9758,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-actions-basics-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-actions-basics-intro-span",
                    "text": "A server action is a function that only ever runs on the server but can be called from the client. It replaces the route handler you would otherwise write by hand.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-actions-basics-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-actions-basics-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-actions-basics-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-actions-basics-po-9b9c9579",
                    "text": "Define an action and call it from a form or an event",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-actions-basics-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-actions-basics-po-6923550c",
                    "text": "Revalidate the affected data after a write",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-actions-basics-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-actions-basics-po-72fe43f9",
                    "text": "Keep write credentials on the server side of the call",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-server-actions-basics-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-server-actions-basics-outro-span",
                    "text": "This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A server action is a function that only ever runs on the server but can be called from the client. It replaces the route handler you would otherwise write by hand.\n\nWhat this lesson covers\n\nDefine an action and call it from a form or an event\n\nRevalidate the affected data after a write\n\nKeep write credentials on the server side of the call\n\nThis lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Define an action and call it from a form or an event",
              "Revalidate the affected data after a write",
              "Keep write credentials on the server side of the call"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-forms-and-validation",
            "title": "Forms, validation, and error states",
            "slug": "nextjs-app-router-in-depth-forms-and-validation",
            "videoUrl": "https://www.youtube.com/watch?v=tLhcyBfljYo",
            "youtubeVideoId": "tLhcyBfljYo",
            "thumbnailUrl": "https://i.ytimg.com/vi/tLhcyBfljYo/hqdefault.jpg",
            "duration": 1016,
            "durationFormatted": "16m 56s",
            "freePreview": false,
            "studentCount": 8816,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-forms-and-validation-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-forms-and-validation-intro-span",
                    "text": "Client-side validation is a convenience; the server check is the real one. Parse the payload on arrival and return errors the form can render.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-forms-and-validation-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-forms-and-validation-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-forms-and-validation-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-forms-and-validation-point-0-span",
                    "text": "Validate submitted data on the server before writing",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-forms-and-validation-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-forms-and-validation-point-1-span",
                    "text": "Return structured field errors back to the form",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-forms-and-validation-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-forms-and-validation-point-2-span",
                    "text": "Keep the form usable when JavaScript has not loaded",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-forms-and-validation-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-forms-and-validation-outro-span",
                    "text": "This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Client-side validation is a convenience; the server check is the real one. Parse the payload on arrival and return errors the form can render.\n\nWhat this lesson covers\n\nValidate submitted data on the server before writing\n\nReturn structured field errors back to the form\n\nKeep the form usable when JavaScript has not loaded\n\nThis lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Validate submitted data on the server before writing",
              "Return structured field errors back to the form",
              "Keep the form usable when JavaScript has not loaded"
            ],
            "proTip": "Never trust the shape of an incoming payload. Parse it, then use the parsed value.",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          },
          {
            "id": "lesson.nextjs-app-router-in-depth-optimistic-updates",
            "title": "Optimistic updates",
            "slug": "nextjs-app-router-in-depth-optimistic-updates",
            "videoUrl": "https://www.youtube.com/watch?v=M3mGY0pgFk0",
            "youtubeVideoId": "M3mGY0pgFk0",
            "thumbnailUrl": "https://i.ytimg.com/vi/M3mGY0pgFk0/hqdefault.jpg",
            "duration": 525,
            "durationFormatted": "8m 45s",
            "freePreview": false,
            "studentCount": 7874,
            "notes": [
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-optimistic-updates-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-optimistic-updates-intro-span",
                    "text": "Optimistic UI shows the expected result immediately and reconciles when the server answers. The interesting part is what happens when the server disagrees.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-optimistic-updates-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-optimistic-updates-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-optimistic-updates-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-optimistic-updates-point-0-span",
                    "text": "Render the expected state before the server confirms",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-optimistic-updates-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-optimistic-updates-point-1-span",
                    "text": "Roll back cleanly when the action fails",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-optimistic-updates-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-optimistic-updates-point-2-span",
                    "text": "Keep optimistic state scoped to the component that owns it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "nextjs-app-router-in-depth-optimistic-updates-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "nextjs-app-router-in-depth-optimistic-updates-outro-span",
                    "text": "This lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Optimistic UI shows the expected result immediately and reconciles when the server answers. The interesting part is what happens when the server disagrees.\n\nWhat this lesson covers\n\nRender the expected state before the server confirms\n\nRoll back cleanly when the action fails\n\nKeep optimistic state scoped to the component that owns it\n\nThis lesson sits in Server Actions and Mutations, part of Next.js App Router in Depth. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Render the expected state before the server confirms",
              "Roll back cleanly when the action fails",
              "Keep optimistic state scoped to the component that owns it"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Next.js documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://nextjs.org/docs"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "layers",
        "title": "Model routes with layouts",
        "description": "Compose nested layouts, templates, and route groups so shared UI never re-renders needlessly."
      },
      {
        "icon": "workflow",
        "title": "Draw the server/client line",
        "description": "Decide what runs on the server and what ships to the browser, and pass data across the boundary safely."
      },
      {
        "icon": "gauge",
        "title": "Control caching",
        "description": "Understand what is cached, for how long, and how to revalidate it on demand instead of guessing."
      },
      {
        "icon": "rocket",
        "title": "Mutate with server actions",
        "description": "Handle forms, validation, and optimistic updates without hand-writing an API layer."
      }
    ],
    "rating": 4.7,
    "reviews": 1216,
    "enrolled": 18240,
    "studentsFormatted": "18.2k students",
    "price": 89,
    "isFree": false,
    "isFeatured": true,
    "language": "English",
    "instructor": {
      "name": "Mira Kovac",
      "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
      "bio": "Mira has spent the last decade building large React applications and then making them fast again. She works on rendering architecture, and cares more about what ships to the browser than about what looks clever in the editor.\n\nShe teaches the way she debugs: measure first, form a hypothesis, change one thing. Her courses lean heavily on the profiler and the network tab.",
      "expertise": [
        "React",
        "Next.js",
        "Web performance",
        "Rendering"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 2,
    "slug": "react-performance-engineering",
    "title": "React Performance Engineering",
    "description": "Measure before you optimise. Profiling, render behaviour, concurrent features, and shipping less JavaScript.",
    "category": "Web Development",
    "tag": "Web Development",
    "imgUrl": "https://picsum.photos/seed/vertex-react-performance-engineering/1600/900",
    "level": "Advanced",
    "duration": 141,
    "durationFormatted": "2h 21m",
    "modules": [
      {
        "id": "react-performance-engineering-module-1",
        "title": "Measuring Performance",
        "summary": "Getting numbers before you change anything: profiling tools, field metrics, and finding wasted work.",
        "description": "Getting numbers before you change anything: profiling tools, field metrics, and finding wasted work.",
        "duration": "37m 2s",
        "lessons": [
          {
            "id": "lesson.react-performance-engineering-react-devtools-profiler",
            "title": "Profiling with React DevTools",
            "slug": "react-performance-engineering-react-devtools-profiler",
            "videoUrl": "https://www.youtube.com/watch?v=Qwb-Za6cBws",
            "youtubeVideoId": "Qwb-Za6cBws",
            "thumbnailUrl": "https://i.ytimg.com/vi/Qwb-Za6cBws/hqdefault.jpg",
            "duration": 778,
            "durationFormatted": "12m 58s",
            "freePreview": true,
            "studentCount": 7420,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-devtools-profiler-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-devtools-profil-c1fa2c7a",
                    "text": "The profiler records what rendered, how long it took, and why it happened. Reading a flame graph correctly is most of the diagnostic work.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-devtools-profiler-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-devtools-profil-8384dcbb",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-devtools-profil-c09a99f5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-devtools-profil-1f59bac6",
                    "text": "Record a realistic interaction, not an idle page",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-devtools-profil-48f3cb5e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-devtools-profil-e0dfef1e",
                    "text": "Read the flame graph and the ranked chart",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-devtools-profil-df950bb2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-devtools-profil-2f147faf",
                    "text": "Turn on \"why did this render\" to get the cause",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-devtools-profiler-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-devtools-profil-d0019d7f",
                    "text": "This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The profiler records what rendered, how long it took, and why it happened. Reading a flame graph correctly is most of the diagnostic work.\n\nWhat this lesson covers\n\nRecord a realistic interaction, not an idle page\n\nRead the flame graph and the ranked chart\n\nTurn on \"why did this render\" to get the cause\n\nThis lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Record a realistic interaction, not an idle page",
              "Read the flame graph and the ranked chart",
              "Turn on \"why did this render\" to get the cause"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-core-web-vitals",
            "title": "Core Web Vitals in a React app",
            "slug": "react-performance-engineering-core-web-vitals",
            "videoUrl": "https://www.youtube.com/watch?v=cGiSr0MilsI",
            "youtubeVideoId": "cGiSr0MilsI",
            "thumbnailUrl": "https://i.ytimg.com/vi/cGiSr0MilsI/hqdefault.jpg",
            "duration": 886,
            "durationFormatted": "14m 46s",
            "freePreview": false,
            "studentCount": 7037,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-core-web-vitals-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-core-web-vitals-intro-span",
                    "text": "Lab numbers on your laptop are not what users experience. Vitals give you a field measure of loading, responsiveness, and visual stability.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-core-web-vitals-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-core-web-vitals-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-core-web-vitals-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-core-web-vitals-point-0-span",
                    "text": "Interpret LCP, INP, and CLS in practical terms",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-core-web-vitals-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-core-web-vitals-point-1-span",
                    "text": "Separate lab data from field data",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-core-web-vitals-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-core-web-vitals-point-2-span",
                    "text": "Attribute a poor score to a specific element or interaction",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-core-web-vitals-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-core-web-vitals-outro-span",
                    "text": "This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Lab numbers on your laptop are not what users experience. Vitals give you a field measure of loading, responsiveness, and visual stability.\n\nWhat this lesson covers\n\nInterpret LCP, INP, and CLS in practical terms\n\nSeparate lab data from field data\n\nAttribute a poor score to a specific element or interaction\n\nThis lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Interpret LCP, INP, and CLS in practical terms",
              "Separate lab data from field data",
              "Attribute a poor score to a specific element or interaction"
            ],
            "proTip": "A good score on your machine means very little. Look at the field data from real devices.",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-finding-wasted-renders",
            "title": "Finding wasted renders",
            "slug": "react-performance-engineering-finding-wasted-renders",
            "videoUrl": "https://www.youtube.com/watch?v=L5kCvTuddGE",
            "youtubeVideoId": "L5kCvTuddGE",
            "thumbnailUrl": "https://i.ytimg.com/vi/L5kCvTuddGE/hqdefault.jpg",
            "duration": 558,
            "durationFormatted": "9m 18s",
            "freePreview": false,
            "studentCount": 6653,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-finding-wasted-renders-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-finding-wasted-render-3e0577f4",
                    "text": "Most React slowness is a subtree re-rendering for no reason. Track it back to the prop or context value that changes identity on every render.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-finding-wasted-renders-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-finding-wasted-renders-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-finding-wasted-renders-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-finding-wasted-render-fadde653",
                    "text": "Trace a re-render back to the prop that changed",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-finding-wasted-renders-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-finding-wasted-render-f39938ad",
                    "text": "Spot object and function props recreated each render",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-finding-wasted-renders-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-finding-wasted-render-114bee2f",
                    "text": "Recognise context as a re-render broadcast",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-finding-wasted-renders-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-finding-wasted-render-01a07711",
                    "text": "This lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Most React slowness is a subtree re-rendering for no reason. Track it back to the prop or context value that changes identity on every render.\n\nWhat this lesson covers\n\nTrace a re-render back to the prop that changed\n\nSpot object and function props recreated each render\n\nRecognise context as a re-render broadcast\n\nThis lesson sits in Measuring Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Trace a re-render back to the prop that changed",
              "Spot object and function props recreated each render",
              "Recognise context as a re-render broadcast"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          }
        ]
      },
      {
        "id": "react-performance-engineering-module-2",
        "title": "Rendering Optimization",
        "summary": "The tools for cutting render work — memoisation and stable identity — and when reaching for them is the wrong move.",
        "description": "The tools for cutting render work — memoisation and stable identity — and when reaching for them is the wrong move.",
        "duration": "33m 49s",
        "lessons": [
          {
            "id": "lesson.react-performance-engineering-react-memo",
            "title": "When memo actually helps",
            "slug": "react-performance-engineering-react-memo",
            "videoUrl": "https://www.youtube.com/watch?v=Yh2eH4fXgbU",
            "youtubeVideoId": "Yh2eH4fXgbU",
            "thumbnailUrl": "https://i.ytimg.com/vi/Yh2eH4fXgbU/hqdefault.jpg",
            "duration": 617,
            "durationFormatted": "10m 17s",
            "freePreview": false,
            "studentCount": 6270,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-memo-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-memo-intro-span",
                    "text": "memo skips a re-render when props are shallow-equal. It costs a comparison on every render, so applying it everywhere makes things slower, not faster.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-memo-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-memo-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-memo-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-memo-point-0-span",
                    "text": "Apply memo to expensive subtrees with stable props",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-memo-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-memo-point-1-span",
                    "text": "Understand shallow comparison and why objects defeat it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-memo-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-memo-point-2-span",
                    "text": "Recognise when restructuring beats memoising",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-react-memo-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-react-memo-outro-span",
                    "text": "This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "memo skips a re-render when props are shallow-equal. It costs a comparison on every render, so applying it everywhere makes things slower, not faster.\n\nWhat this lesson covers\n\nApply memo to expensive subtrees with stable props\n\nUnderstand shallow comparison and why objects defeat it\n\nRecognise when restructuring beats memoising\n\nThis lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Apply memo to expensive subtrees with stable props",
              "Understand shallow comparison and why objects defeat it",
              "Recognise when restructuring beats memoising"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-usememo-and-usecallback",
            "title": "useMemo and useCallback in practice",
            "slug": "react-performance-engineering-usememo-and-usecallback",
            "videoUrl": "https://www.youtube.com/watch?v=vpE9I_eqHdM",
            "youtubeVideoId": "vpE9I_eqHdM",
            "thumbnailUrl": "https://i.ytimg.com/vi/vpE9I_eqHdM/hqdefault.jpg",
            "duration": 821,
            "durationFormatted": "13m 41s",
            "freePreview": false,
            "studentCount": 5887,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-usememo-and-usecallback-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usememo-and-usecallba-25dffef2",
                    "text": "These hooks preserve identity between renders. Their value is in what depends on that identity, not in the caching itself.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usememo-and-usecallback-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usememo-and-usecallba-5eddbc1e",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usememo-and-usecallba-78953387",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usememo-and-usecallba-bf894e61",
                    "text": "Memoise values that feed memoised children or effects",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usememo-and-usecallba-1f98a6e4",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usememo-and-usecallba-bd32a903",
                    "text": "Get the dependency array right, every time",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usememo-and-usecallba-28c7310f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usememo-and-usecallba-91b307ab",
                    "text": "Skip memoisation when the computation is trivial",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usememo-and-usecallback-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usememo-and-usecallba-9ed0e48c",
                    "text": "This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "These hooks preserve identity between renders. Their value is in what depends on that identity, not in the caching itself.\n\nWhat this lesson covers\n\nMemoise values that feed memoised children or effects\n\nGet the dependency array right, every time\n\nSkip memoisation when the computation is trivial\n\nThis lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Memoise values that feed memoised children or effects",
              "Get the dependency array right, every time",
              "Skip memoisation when the computation is trivial"
            ],
            "proTip": "If nothing downstream depends on the identity of a value, memoising it buys you nothing.",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-keys-and-reconciliation",
            "title": "Keys and list reconciliation",
            "slug": "react-performance-engineering-keys-and-reconciliation",
            "videoUrl": "https://www.youtube.com/watch?v=fGxKOmCuH5w",
            "youtubeVideoId": "fGxKOmCuH5w",
            "thumbnailUrl": "https://i.ytimg.com/vi/fGxKOmCuH5w/hqdefault.jpg",
            "duration": 591,
            "durationFormatted": "9m 51s",
            "freePreview": false,
            "studentCount": 5503,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-keys-and-reconciliation-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-keys-and-reconciliati-503df8f5",
                    "text": "Keys tell React which item is which. Using an array index means insertions silently reassign state to the wrong row.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-keys-and-reconciliation-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-keys-and-reconciliati-1c326d41",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-keys-and-reconciliati-31955576",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-keys-and-reconciliati-7bd74d9b",
                    "text": "Use stable identity for keys, never the array index",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-keys-and-reconciliati-2d4a7837",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-keys-and-reconciliati-7da5c0f8",
                    "text": "Understand how reconciliation matches elements between renders",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-keys-and-reconciliati-5ad524ed",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-keys-and-reconciliati-2a8b4deb",
                    "text": "Diagnose lost input state in a reordered list",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-keys-and-reconciliation-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-keys-and-reconciliati-2657de77",
                    "text": "This lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Keys tell React which item is which. Using an array index means insertions silently reassign state to the wrong row.\n\nWhat this lesson covers\n\nUse stable identity for keys, never the array index\n\nUnderstand how reconciliation matches elements between renders\n\nDiagnose lost input state in a reordered list\n\nThis lesson sits in Rendering Optimization, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Use stable identity for keys, never the array index",
              "Understand how reconciliation matches elements between renders",
              "Diagnose lost input state in a reordered list"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          }
        ]
      },
      {
        "id": "react-performance-engineering-module-3",
        "title": "Concurrent React",
        "summary": "Keeping the interface responsive while expensive work happens: transitions, deferred values, and Suspense.",
        "description": "Keeping the interface responsive while expensive work happens: transitions, deferred values, and Suspense.",
        "duration": "35m 14s",
        "lessons": [
          {
            "id": "lesson.react-performance-engineering-usetransition",
            "title": "Marking updates with useTransition",
            "slug": "react-performance-engineering-usetransition",
            "videoUrl": "https://www.youtube.com/watch?v=1xjSQJWejZM",
            "youtubeVideoId": "1xjSQJWejZM",
            "thumbnailUrl": "https://i.ytimg.com/vi/1xjSQJWejZM/hqdefault.jpg",
            "duration": 641,
            "durationFormatted": "10m 41s",
            "freePreview": false,
            "studentCount": 5120,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-usetransition-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usetransition-intro-span",
                    "text": "A transition marks an update as interruptible, so typing stays smooth while an expensive list re-filters behind it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usetransition-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usetransition-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usetransition-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usetransition-point-0-span",
                    "text": "Separate an urgent update from a non-urgent one",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usetransition-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usetransition-point-1-span",
                    "text": "Show pending state without blocking input",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usetransition-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usetransition-point-2-span",
                    "text": "Recognise the interactions worth marking",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usetransition-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usetransition-outro-span",
                    "text": "This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A transition marks an update as interruptible, so typing stays smooth while an expensive list re-filters behind it.\n\nWhat this lesson covers\n\nSeparate an urgent update from a non-urgent one\n\nShow pending state without blocking input\n\nRecognise the interactions worth marking\n\nThis lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Separate an urgent update from a non-urgent one",
              "Show pending state without blocking input",
              "Recognise the interactions worth marking"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-usedeferredvalue",
            "title": "Deferring expensive values",
            "slug": "react-performance-engineering-usedeferredvalue",
            "videoUrl": "https://www.youtube.com/watch?v=jCGMedd6IWA",
            "youtubeVideoId": "jCGMedd6IWA",
            "thumbnailUrl": "https://i.ytimg.com/vi/jCGMedd6IWA/hqdefault.jpg",
            "duration": 472,
            "durationFormatted": "7m 52s",
            "freePreview": false,
            "studentCount": 4736,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-usedeferredvalue-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usedeferredvalue-intro-span",
                    "text": "A deferred value lags behind the real one on purpose, letting the urgent render finish first with the previous result.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usedeferredvalue-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usedeferredvalue-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usedeferredvalue-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usedeferredvalue-point-0-span",
                    "text": "Defer a value that drives expensive rendering",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usedeferredvalue-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usedeferredvalue-point-1-span",
                    "text": "Choose between deferring a value and wrapping an update",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usedeferredvalue-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usedeferredvalue-point-2-span",
                    "text": "Communicate staleness to the user while it catches up",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-usedeferredvalue-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-usedeferredvalue-outro-span",
                    "text": "This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A deferred value lags behind the real one on purpose, letting the urgent render finish first with the previous result.\n\nWhat this lesson covers\n\nDefer a value that drives expensive rendering\n\nChoose between deferring a value and wrapping an update\n\nCommunicate staleness to the user while it catches up\n\nThis lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Defer a value that drives expensive rendering",
              "Choose between deferring a value and wrapping an update",
              "Communicate staleness to the user while it catches up"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-suspense-for-data",
            "title": "Suspense for data loading",
            "slug": "react-performance-engineering-suspense-for-data",
            "videoUrl": "https://www.youtube.com/watch?v=MBlZ8Wzkbi4",
            "youtubeVideoId": "MBlZ8Wzkbi4",
            "thumbnailUrl": "https://i.ytimg.com/vi/MBlZ8Wzkbi4/hqdefault.jpg",
            "duration": 1001,
            "durationFormatted": "16m 41s",
            "freePreview": false,
            "studentCount": 4353,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-suspense-for-data-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-suspense-for-data-intro-span",
                    "text": "Suspense moves loading state out of the component and into its boundary, so you stop threading isLoading through the tree.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-suspense-for-data-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-suspense-for-data-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-suspense-for-data-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-suspense-for-data-point-0-span",
                    "text": "Place boundaries where a meaningful fallback exists",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-suspense-for-data-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-suspense-for-data-point-1-span",
                    "text": "Avoid a single boundary that blocks the whole page",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-suspense-for-data-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-suspense-for-data-point-2-span",
                    "text": "Combine Suspense with error boundaries for failures",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-suspense-for-data-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-suspense-for-data-outro-span",
                    "text": "This lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Suspense moves loading state out of the component and into its boundary, so you stop threading isLoading through the tree.\n\nWhat this lesson covers\n\nPlace boundaries where a meaningful fallback exists\n\nAvoid a single boundary that blocks the whole page\n\nCombine Suspense with error boundaries for failures\n\nThis lesson sits in Concurrent React, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Place boundaries where a meaningful fallback exists",
              "Avoid a single boundary that blocks the whole page",
              "Combine Suspense with error boundaries for failures"
            ],
            "proTip": "Put the boundary where a skeleton would make sense to a user, not wherever the fetch happens to live.",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          }
        ]
      },
      {
        "id": "react-performance-engineering-module-4",
        "title": "Bundle and Load Performance",
        "summary": "The work that happens before React even runs: splitting code, loading it at the right moment, and handling heavy assets.",
        "description": "The work that happens before React even runs: splitting code, loading it at the right moment, and handling heavy assets.",
        "duration": "35m 3s",
        "lessons": [
          {
            "id": "lesson.react-performance-engineering-code-splitting",
            "title": "Code splitting that pays off",
            "slug": "react-performance-engineering-code-splitting",
            "videoUrl": "https://www.youtube.com/watch?v=MUSoj2JcD4A",
            "youtubeVideoId": "MUSoj2JcD4A",
            "thumbnailUrl": "https://i.ytimg.com/vi/MUSoj2JcD4A/hqdefault.jpg",
            "duration": 330,
            "durationFormatted": "5m 30s",
            "freePreview": false,
            "studentCount": 3970,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-code-splitting-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-code-splitting-intro-span",
                    "text": "Splitting only helps if the split-off code was genuinely not needed for the first screen. Analyse the bundle before you cut it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-code-splitting-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-code-splitting-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-code-splitting-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-code-splitting-point-0-span",
                    "text": "Read a bundle analysis and find the heavy dependency",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-code-splitting-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-code-splitting-point-1-span",
                    "text": "Split along route and interaction boundaries",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-code-splitting-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-code-splitting-point-2-span",
                    "text": "Avoid splitting code that is needed immediately anyway",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-code-splitting-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-code-splitting-outro-span",
                    "text": "This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Splitting only helps if the split-off code was genuinely not needed for the first screen. Analyse the bundle before you cut it.\n\nWhat this lesson covers\n\nRead a bundle analysis and find the heavy dependency\n\nSplit along route and interaction boundaries\n\nAvoid splitting code that is needed immediately anyway\n\nThis lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Read a bundle analysis and find the heavy dependency",
              "Split along route and interaction boundaries",
              "Avoid splitting code that is needed immediately anyway"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-lazy-loading-and-prefetch",
            "title": "Lazy loading and prefetching",
            "slug": "react-performance-engineering-lazy-loading-and-prefetch",
            "videoUrl": "https://www.youtube.com/watch?v=fZ4zKgVXOP4",
            "youtubeVideoId": "fZ4zKgVXOP4",
            "thumbnailUrl": "https://i.ytimg.com/vi/fZ4zKgVXOP4/hqdefault.jpg",
            "duration": 1370,
            "durationFormatted": "22m 50s",
            "freePreview": false,
            "studentCount": 3586,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-lazy-loading-and-pref-b6fa14ca",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-lazy-loading-and-pref-6ac49dc0",
                    "text": "Lazy loading defers the download; prefetching starts it early on a hint like hover. Together they hide the network cost from the user.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-lazy-loading-and-prefetch-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-lazy-loading-and-pref-2cb6ec42",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-lazy-loading-and-pref-331d914f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-lazy-loading-and-pref-41e6d8fd",
                    "text": "Load a component only when it is about to be needed",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-lazy-loading-and-pref-bca43815",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-lazy-loading-and-pref-4624c518",
                    "text": "Prefetch on intent signals such as hover or viewport",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-lazy-loading-and-pref-df48361c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-lazy-loading-and-pref-42511e4e",
                    "text": "Keep a fallback that does not shift the layout",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-lazy-loading-and-pref-996d5679",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-lazy-loading-and-pref-9874a150",
                    "text": "This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Lazy loading defers the download; prefetching starts it early on a hint like hover. Together they hide the network cost from the user.\n\nWhat this lesson covers\n\nLoad a component only when it is about to be needed\n\nPrefetch on intent signals such as hover or viewport\n\nKeep a fallback that does not shift the layout\n\nThis lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Load a component only when it is about to be needed",
              "Prefetch on intent signals such as hover or viewport",
              "Keep a fallback that does not shift the layout"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "id": "lesson.react-performance-engineering-images-and-fonts",
            "title": "Images and fonts",
            "slug": "react-performance-engineering-images-and-fonts",
            "videoUrl": "https://www.youtube.com/watch?v=0fONene3OIA",
            "youtubeVideoId": "0fONene3OIA",
            "thumbnailUrl": "https://i.ytimg.com/vi/0fONene3OIA/hqdefault.jpg",
            "duration": 403,
            "durationFormatted": "6m 43s",
            "freePreview": false,
            "studentCount": 3203,
            "notes": [
              {
                "_type": "block",
                "_key": "react-performance-engineering-images-and-fonts-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-images-and-fonts-intro-span",
                    "text": "Images and fonts usually dominate loading performance and layout shift. Sizing, formats, and font display strategy fix most of it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-images-and-fonts-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-images-and-fonts-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-images-and-fonts-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-images-and-fonts-point-0-span",
                    "text": "Serve correctly sized, modern image formats",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-images-and-fonts-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-images-and-fonts-point-1-span",
                    "text": "Reserve space so images do not shift the layout",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-images-and-fonts-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-images-and-fonts-point-2-span",
                    "text": "Choose a font loading strategy that avoids invisible text",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "react-performance-engineering-images-and-fonts-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "react-performance-engineering-images-and-fonts-outro-span",
                    "text": "This lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Images and fonts usually dominate loading performance and layout shift. Sizing, formats, and font display strategy fix most of it.\n\nWhat this lesson covers\n\nServe correctly sized, modern image formats\n\nReserve space so images do not shift the layout\n\nChoose a font loading strategy that avoids invisible text\n\nThis lesson sits in Bundle and Load Performance, part of React Performance Engineering. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Serve correctly sized, modern image formats",
              "Reserve space so images do not shift the layout",
              "Choose a font loading strategy that avoids invisible text"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "React documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://react.dev/learn"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "gauge",
        "title": "Measure honestly",
        "description": "Use the profiler and field metrics to find the real bottleneck instead of the one you assumed."
      },
      {
        "icon": "workflow",
        "title": "Control re-renders",
        "description": "Understand why a component re-rendered and fix the cause rather than papering over it with memo."
      },
      {
        "icon": "sparkles",
        "title": "Use concurrent features",
        "description": "Keep the interface responsive during expensive updates with transitions and deferred values."
      },
      {
        "icon": "rocket",
        "title": "Ship less JavaScript",
        "description": "Split, lazy load, and prefetch so the bundle stops being the first thing that hurts."
      }
    ],
    "rating": 4.8,
    "reviews": 495,
    "enrolled": 7420,
    "studentsFormatted": "7.4k students",
    "price": 119,
    "isFree": false,
    "isFeatured": false,
    "language": "English",
    "instructor": {
      "name": "Mira Kovac",
      "avatar": "https://randomuser.me/api/portraits/women/44.jpg",
      "bio": "Mira has spent the last decade building large React applications and then making them fast again. She works on rendering architecture, and cares more about what ships to the browser than about what looks clever in the editor.\n\nShe teaches the way she debugs: measure first, form a hypothesis, change one thing. Her courses lean heavily on the profiler and the network tab.",
      "expertise": [
        "React",
        "Next.js",
        "Web performance",
        "Rendering"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 3,
    "slug": "typescript-for-application-developers",
    "title": "TypeScript for Application Developers",
    "description": "Go past annotations. Structural typing, narrowing, generics, and the type-level tools that make invalid states impossible.",
    "category": "Languages",
    "tag": "POPULAR",
    "imgUrl": "https://picsum.photos/seed/vertex-typescript-for-application-developers/1600/900",
    "level": "Intermediate",
    "duration": 115,
    "durationFormatted": "1h 54m",
    "modules": [
      {
        "id": "typescript-for-application-developers-module-1",
        "title": "How the Type System Thinks",
        "summary": "The mental model underneath everything else: structural compatibility, unions, and narrowing.",
        "description": "The mental model underneath everything else: structural compatibility, unions, and narrowing.",
        "duration": "27m 47s",
        "lessons": [
          {
            "id": "lesson.typescript-for-application-developers-structural-typing",
            "title": "Structural typing and assignability",
            "slug": "typescript-for-application-developers-structural-typing",
            "videoUrl": "https://www.youtube.com/watch?v=zfQgsGXTpOg",
            "youtubeVideoId": "zfQgsGXTpOg",
            "thumbnailUrl": "https://i.ytimg.com/vi/zfQgsGXTpOg/hqdefault.jpg",
            "duration": 709,
            "durationFormatted": "11m 49s",
            "freePreview": true,
            "studentCount": 22110,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-structural-ty-4c87b967",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-structural-ty-67892289",
                    "text": "TypeScript compares shapes, not names. Two unrelated types are interchangeable if their members line up, which explains most surprising assignability errors.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-structural-typing-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-structural-ty-5f1e7a04",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-structural-ty-f4a37fb3",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-structural-ty-c59e3e92",
                    "text": "Compare types by structure rather than declaration",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-structural-ty-9797b84b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-structural-ty-5195dcb7",
                    "text": "Read an assignability error from the mismatched member up",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-structural-ty-00f18e68",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-structural-ty-f0f2afcf",
                    "text": "Use branded types when structural compatibility is too loose",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-structural-ty-b06d1e2f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-structural-ty-18bfa097",
                    "text": "This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "TypeScript compares shapes, not names. Two unrelated types are interchangeable if their members line up, which explains most surprising assignability errors.\n\nWhat this lesson covers\n\nCompare types by structure rather than declaration\n\nRead an assignability error from the mismatched member up\n\nUse branded types when structural compatibility is too loose\n\nThis lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Compare types by structure rather than declaration",
              "Read an assignability error from the mismatched member up",
              "Use branded types when structural compatibility is too loose"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-unions-and-narrowing",
            "title": "Unions and narrowing",
            "slug": "typescript-for-application-developers-unions-and-narrowing",
            "videoUrl": "https://www.youtube.com/watch?v=CG3_Y9T03J4",
            "youtubeVideoId": "CG3_Y9T03J4",
            "thumbnailUrl": "https://i.ytimg.com/vi/CG3_Y9T03J4/hqdefault.jpg",
            "duration": 620,
            "durationFormatted": "10m 20s",
            "freePreview": false,
            "studentCount": 20968,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-unions-and-na-b4e491e0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-unions-and-na-15a4856e",
                    "text": "A discriminated union plus a check on the discriminant is the workhorse pattern of typed application code. Narrowing is how the compiler follows your control flow.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-unions-and-na-28451412",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-unions-and-na-2469b044",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-unions-and-na-655e5d2e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-unions-and-na-bd0b267e",
                    "text": "Model alternatives as a discriminated union",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-unions-and-na-37dd04c2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-unions-and-na-9f974979",
                    "text": "Narrow with typeof, in, and discriminant checks",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-unions-and-na-4f160ef7",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-unions-and-na-85c36d77",
                    "text": "Make a switch exhaustive with a never assertion",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-unions-and-na-8e64b51f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-unions-and-na-e327b90d",
                    "text": "This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A discriminated union plus a check on the discriminant is the workhorse pattern of typed application code. Narrowing is how the compiler follows your control flow.\n\nWhat this lesson covers\n\nModel alternatives as a discriminated union\n\nNarrow with typeof, in, and discriminant checks\n\nMake a switch exhaustive with a never assertion\n\nThis lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Model alternatives as a discriminated union",
              "Narrow with typeof, in, and discriminant checks",
              "Make a switch exhaustive with a never assertion"
            ],
            "proTip": "An exhaustive switch that assigns the leftover case to never turns a future missing branch into a compile error.",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-literal-types-and-const",
            "title": "Literal types and const assertions",
            "slug": "typescript-for-application-developers-literal-types-and-const",
            "videoUrl": "https://www.youtube.com/watch?v=6M9aZzm-kEc",
            "youtubeVideoId": "6M9aZzm-kEc",
            "thumbnailUrl": "https://i.ytimg.com/vi/6M9aZzm-kEc/hqdefault.jpg",
            "duration": 338,
            "durationFormatted": "5m 38s",
            "freePreview": false,
            "studentCount": 19825,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-literal-types-6092681c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-literal-types-9d7a83a1",
                    "text": "Widening is why your string turned into string. A const assertion keeps the literal, which is what makes union-of-literals modelling work.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-literal-types-c5052543",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-literal-types-b6ed732d",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-literal-types-599ad3a2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-literal-types-1740259e",
                    "text": "Understand literal widening and when it happens",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-literal-types-9659e857",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-literal-types-071fcd41",
                    "text": "Freeze a literal shape with as const",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-literal-types-b5e4f29f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-literal-types-6943d2c3",
                    "text": "Derive a union of allowed values from a constant array",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-literal-types-08d96afd",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-literal-types-1f9dc6ae",
                    "text": "This lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Widening is why your string turned into string. A const assertion keeps the literal, which is what makes union-of-literals modelling work.\n\nWhat this lesson covers\n\nUnderstand literal widening and when it happens\n\nFreeze a literal shape with as const\n\nDerive a union of allowed values from a constant array\n\nThis lesson sits in How the Type System Thinks, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Understand literal widening and when it happens",
              "Freeze a literal shape with as const",
              "Derive a union of allowed values from a constant array"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          }
        ]
      },
      {
        "id": "typescript-for-application-developers-module-2",
        "title": "Generics",
        "summary": "Writing code that keeps type information flowing through it instead of collapsing to any.",
        "description": "Writing code that keeps type information flowing through it instead of collapsing to any.",
        "duration": "23m 52s",
        "lessons": [
          {
            "id": "lesson.typescript-for-application-developers-generic-functions",
            "title": "Generic functions and inference",
            "slug": "typescript-for-application-developers-generic-functions",
            "videoUrl": "https://www.youtube.com/watch?v=EcCTIExsqmI",
            "youtubeVideoId": "EcCTIExsqmI",
            "thumbnailUrl": "https://i.ytimg.com/vi/EcCTIExsqmI/hqdefault.jpg",
            "duration": 772,
            "durationFormatted": "12m 52s",
            "freePreview": false,
            "studentCount": 18683,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-funct-60413492",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-funct-980d7139",
                    "text": "A type parameter links an input type to an output type. Most of the skill is letting inference do the work rather than annotating call sites.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-functions-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-funct-45a1464b",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-funct-de15970a",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-funct-3373f04a",
                    "text": "Relate argument and return types with a type parameter",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-funct-4974cd6f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-funct-abe09324",
                    "text": "Let inference fill in type arguments at the call site",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-funct-306adafa",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-funct-07973bbc",
                    "text": "Recognise when a generic adds nothing over a union",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-funct-da449853",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-funct-d6371bb1",
                    "text": "This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A type parameter links an input type to an output type. Most of the skill is letting inference do the work rather than annotating call sites.\n\nWhat this lesson covers\n\nRelate argument and return types with a type parameter\n\nLet inference fill in type arguments at the call site\n\nRecognise when a generic adds nothing over a union\n\nThis lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Relate argument and return types with a type parameter",
              "Let inference fill in type arguments at the call site",
              "Recognise when a generic adds nothing over a union"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-generic-constraints",
            "title": "Constraints and default type parameters",
            "slug": "typescript-for-application-developers-generic-constraints",
            "videoUrl": "https://www.youtube.com/watch?v=zfLpzpH1t6Q",
            "youtubeVideoId": "zfLpzpH1t6Q",
            "thumbnailUrl": "https://i.ytimg.com/vi/zfLpzpH1t6Q/hqdefault.jpg",
            "duration": 253,
            "durationFormatted": "4m 13s",
            "freePreview": false,
            "studentCount": 17541,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-const-35696d03",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-const-3ca9e3c9",
                    "text": "Constraints say what a type parameter must at least be. Combined with keyof, they give you property access that stays typed.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-constraints-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-const-39d9d960",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-const-a1739100",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-const-cb2bad40",
                    "text": "Constrain a parameter with extends",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-const-6e33676e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-const-f2556e0d",
                    "text": "Use keyof to type property access generically",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-const-acc603d3",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-const-f8564a63",
                    "text": "Give a type parameter a sensible default",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-const-ffed2ad9",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-const-2fdbb15f",
                    "text": "This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Constraints say what a type parameter must at least be. Combined with keyof, they give you property access that stays typed.\n\nWhat this lesson covers\n\nConstrain a parameter with extends\n\nUse keyof to type property access generically\n\nGive a type parameter a sensible default\n\nThis lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Constrain a parameter with extends",
              "Use keyof to type property access generically",
              "Give a type parameter a sensible default"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-generic-react-components",
            "title": "Generic components in React",
            "slug": "typescript-for-application-developers-generic-react-components",
            "videoUrl": "https://www.youtube.com/watch?v=5s6dIkrv6Y4",
            "youtubeVideoId": "5s6dIkrv6Y4",
            "thumbnailUrl": "https://i.ytimg.com/vi/5s6dIkrv6Y4/hqdefault.jpg",
            "duration": 407,
            "durationFormatted": "6m 47s",
            "freePreview": false,
            "studentCount": 16398,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-react-9599ba49",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-react-1302977b",
                    "text": "A typed list component should tell you what its render callback receives. Generic props are how a reusable component stays specific at each use.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-react-fe64e8e2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-react-8fe3e8af",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-react-3f6e1e8c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-react-76b24ba5",
                    "text": "Type a component over the shape of its items",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-react-ea45f8aa",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-react-dde218ff",
                    "text": "Keep render props and callbacks correctly typed",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-react-c6808b63",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-react-7c149198",
                    "text": "Forward refs without losing the generic parameter",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-generic-react-5ec89ea3",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-generic-react-bb4f8ffa",
                    "text": "This lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A typed list component should tell you what its render callback receives. Generic props are how a reusable component stays specific at each use.\n\nWhat this lesson covers\n\nType a component over the shape of its items\n\nKeep render props and callbacks correctly typed\n\nForward refs without losing the generic parameter\n\nThis lesson sits in Generics, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Type a component over the shape of its items",
              "Keep render props and callbacks correctly typed",
              "Forward refs without losing the generic parameter"
            ],
            "proTip": "If a reusable component takes items and hands them back to a callback, it wants a type parameter.",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          }
        ]
      },
      {
        "id": "typescript-for-application-developers-module-3",
        "title": "Advanced Types",
        "summary": "The type-level features that let a type be computed from another type, and the judgement to use them sparingly.",
        "description": "The type-level features that let a type be computed from another type, and the judgement to use them sparingly.",
        "duration": "40m 23s",
        "lessons": [
          {
            "id": "lesson.typescript-for-application-developers-conditional-types",
            "title": "Conditional types and infer",
            "slug": "typescript-for-application-developers-conditional-types",
            "videoUrl": "https://www.youtube.com/watch?v=KcDzkOJpCaI",
            "youtubeVideoId": "KcDzkOJpCaI",
            "thumbnailUrl": "https://i.ytimg.com/vi/KcDzkOJpCaI/hqdefault.jpg",
            "duration": 863,
            "durationFormatted": "14m 23s",
            "freePreview": false,
            "studentCount": 15256,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-conditional-t-5c4878d2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-conditional-t-53bf205f",
                    "text": "A conditional type branches on assignability, and infer pulls a type out of the branch it matched. This is how utility types are built.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-conditional-types-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-conditional-t-5f31ae87",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-conditional-t-26798640",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-conditional-t-d6197d60",
                    "text": "Branch a type on an extends check",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-conditional-t-e3e20481",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-conditional-t-bc65dcd2",
                    "text": "Extract inner types with infer",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-conditional-t-8acfea97",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-conditional-t-9b8075af",
                    "text": "Understand distribution over union members",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-conditional-t-4f79a243",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-conditional-t-d9e7233f",
                    "text": "This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A conditional type branches on assignability, and infer pulls a type out of the branch it matched. This is how utility types are built.\n\nWhat this lesson covers\n\nBranch a type on an extends check\n\nExtract inner types with infer\n\nUnderstand distribution over union members\n\nThis lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Branch a type on an extends check",
              "Extract inner types with infer",
              "Understand distribution over union members"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-mapped-types",
            "title": "Mapped types and key remapping",
            "slug": "typescript-for-application-developers-mapped-types",
            "videoUrl": "https://www.youtube.com/watch?v=iCEJY9XpfG8",
            "youtubeVideoId": "iCEJY9XpfG8",
            "thumbnailUrl": "https://i.ytimg.com/vi/iCEJY9XpfG8/hqdefault.jpg",
            "duration": 409,
            "durationFormatted": "6m 49s",
            "freePreview": false,
            "studentCount": 14114,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-mapped-types-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-mapped-types-54fae0b8",
                    "text": "Mapped types transform every property of a type at once, which is where Partial, Readonly, and their friends come from.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-mapped-types-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-mapped-types-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-mapped-types-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-mapped-types-f0d65266",
                    "text": "Transform every property of an existing type",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-mapped-types-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-mapped-types-99349d0e",
                    "text": "Add or strip optional and readonly modifiers",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-mapped-types-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-mapped-types-3796de5d",
                    "text": "Remap keys with an as clause",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-mapped-types-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-mapped-types-00bccb07",
                    "text": "This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Mapped types transform every property of a type at once, which is where Partial, Readonly, and their friends come from.\n\nWhat this lesson covers\n\nTransform every property of an existing type\n\nAdd or strip optional and readonly modifiers\n\nRemap keys with an as clause\n\nThis lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Transform every property of an existing type",
              "Add or strip optional and readonly modifiers",
              "Remap keys with an as clause"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-template-literal-types",
            "title": "Template literal types",
            "slug": "typescript-for-application-developers-template-literal-types",
            "videoUrl": "https://www.youtube.com/watch?v=nskIP1iyrAo",
            "youtubeVideoId": "nskIP1iyrAo",
            "thumbnailUrl": "https://i.ytimg.com/vi/nskIP1iyrAo/hqdefault.jpg",
            "duration": 1151,
            "durationFormatted": "19m 11s",
            "freePreview": false,
            "studentCount": 12971,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-template-lite-2db0d4ba",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-template-lite-f543e310",
                    "text": "String types can be composed and pattern-matched, which lets you type things like event names and route paths precisely.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-template-lite-1bd76fec",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-template-lite-90f63d07",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-template-lite-dc449e9d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-template-lite-23b3a8ff",
                    "text": "Compose string types from other types",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-template-lite-123324e0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-template-lite-dcb52870",
                    "text": "Constrain string shapes such as event or route names",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-template-lite-63e8618e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-template-lite-9e1dc197",
                    "text": "Combine template literals with key remapping",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-template-lite-a1cd750c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-template-lite-868af810",
                    "text": "This lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "String types can be composed and pattern-matched, which lets you type things like event names and route paths precisely.\n\nWhat this lesson covers\n\nCompose string types from other types\n\nConstrain string shapes such as event or route names\n\nCombine template literals with key remapping\n\nThis lesson sits in Advanced Types, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Compose string types from other types",
              "Constrain string shapes such as event or route names",
              "Combine template literals with key remapping"
            ],
            "proTip": "Template literal types are excellent for typed event names, and a trap when used to parse arbitrary strings.",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          }
        ]
      },
      {
        "id": "typescript-for-application-developers-module-4",
        "title": "TypeScript in Practice",
        "summary": "Configuration, external data, and the places typed code meets the untyped world.",
        "description": "Configuration, external data, and the places typed code meets the untyped world.",
        "duration": "22m 56s",
        "lessons": [
          {
            "id": "lesson.typescript-for-application-developers-tsconfig-strictness",
            "title": "tsconfig and strictness settings",
            "slug": "typescript-for-application-developers-tsconfig-strictness",
            "videoUrl": "https://www.youtube.com/watch?v=0XrviXgk_rY",
            "youtubeVideoId": "0XrviXgk_rY",
            "thumbnailUrl": "https://i.ytimg.com/vi/0XrviXgk_rY/hqdefault.jpg",
            "duration": 593,
            "durationFormatted": "9m 53s",
            "freePreview": false,
            "studentCount": 11829,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-tsconfig-stri-90a14098",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-tsconfig-stri-73bfa7ec",
                    "text": "Strict mode is a set of independent flags. Knowing what each one catches lets you adopt them incrementally on an existing codebase.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-tsconfig-strictness-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-tsconfig-stri-b00c4781",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-tsconfig-stri-2388f524",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-tsconfig-stri-e0571d6b",
                    "text": "Understand what each strict flag actually checks",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-tsconfig-stri-a51273a1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-tsconfig-stri-25455987",
                    "text": "Turn on strictness incrementally in a legacy project",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-tsconfig-stri-c290444a",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-tsconfig-stri-8c556b50",
                    "text": "Configure module resolution to match your runtime",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-tsconfig-stri-a3ca2736",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-tsconfig-stri-937a12eb",
                    "text": "This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Strict mode is a set of independent flags. Knowing what each one catches lets you adopt them incrementally on an existing codebase.\n\nWhat this lesson covers\n\nUnderstand what each strict flag actually checks\n\nTurn on strictness incrementally in a legacy project\n\nConfigure module resolution to match your runtime\n\nThis lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Understand what each strict flag actually checks",
              "Turn on strictness incrementally in a legacy project",
              "Configure module resolution to match your runtime"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-typing-apis-with-zod",
            "title": "Typing external data at the boundary",
            "slug": "typescript-for-application-developers-typing-apis-with-zod",
            "videoUrl": "https://www.youtube.com/watch?v=9UVPk0Ulm6U",
            "youtubeVideoId": "9UVPk0Ulm6U",
            "thumbnailUrl": "https://i.ytimg.com/vi/9UVPk0Ulm6U/hqdefault.jpg",
            "duration": 434,
            "durationFormatted": "7m 14s",
            "freePreview": false,
            "studentCount": 10686,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-typing-apis-w-b1e1ed4b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-typing-apis-w-2a0a1dfc",
                    "text": "Data from the network is unknown until you prove otherwise. A runtime schema validates it once and gives you a static type for free.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-typing-apis-w-6d084450",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-typing-apis-w-2c121797",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-typing-apis-w-e1e5665e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-typing-apis-w-be2594d8",
                    "text": "Parse unknown input instead of casting it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-typing-apis-w-0e241bb6",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-typing-apis-w-48d97290",
                    "text": "Derive a static type from a runtime schema",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-typing-apis-w-68c2fa35",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-typing-apis-w-b6bcc6b4",
                    "text": "Fail loudly at the boundary rather than deep inside",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-typing-apis-w-90818682",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-typing-apis-w-c0da9792",
                    "text": "This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Data from the network is unknown until you prove otherwise. A runtime schema validates it once and gives you a static type for free.\n\nWhat this lesson covers\n\nParse unknown input instead of casting it\n\nDerive a static type from a runtime schema\n\nFail loudly at the boundary rather than deep inside\n\nThis lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Parse unknown input instead of casting it",
              "Derive a static type from a runtime schema",
              "Fail loudly at the boundary rather than deep inside"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              },
              {
                "type": "link",
                "title": "Zod documentation",
                "description": "Schema definition, parsing, and type inference.",
                "url": "https://zod.dev"
              }
            ]
          },
          {
            "id": "lesson.typescript-for-application-developers-declaration-files",
            "title": "Declaration files and untyped packages",
            "slug": "typescript-for-application-developers-declaration-files",
            "videoUrl": "https://www.youtube.com/watch?v=s_CZeWuEZ_s",
            "youtubeVideoId": "s_CZeWuEZ_s",
            "thumbnailUrl": "https://i.ytimg.com/vi/s_CZeWuEZ_s/hqdefault.jpg",
            "duration": 349,
            "durationFormatted": "5m 49s",
            "freePreview": false,
            "studentCount": 9544,
            "notes": [
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-declaration-f-0c0d4a72",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-declaration-f-eed763a2",
                    "text": "Sooner or later a dependency ships no types. Writing a small declaration file is faster and safer than sprinkling any across your codebase.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-declaration-files-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-declaration-f-29660cb8",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-declaration-f-69241842",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-declaration-f-700a769b",
                    "text": "Write a minimal declaration for an untyped module",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-declaration-f-9edfa387",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-declaration-f-37e1a40b",
                    "text": "Augment the types of an existing package",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-declaration-f-dcffe053",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-declaration-f-d60f1af0",
                    "text": "Declare global types without polluting every file",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "typescript-for-application-developers-declaration-f-b8ffc865",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "typescript-for-application-developers-declaration-f-9a88b132",
                    "text": "This lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Sooner or later a dependency ships no types. Writing a small declaration file is faster and safer than sprinkling any across your codebase.\n\nWhat this lesson covers\n\nWrite a minimal declaration for an untyped module\n\nAugment the types of an existing package\n\nDeclare global types without polluting every file\n\nThis lesson sits in TypeScript in Practice, part of TypeScript for Application Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Write a minimal declaration for an untyped module",
              "Augment the types of an existing package",
              "Declare global types without polluting every file"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "TypeScript handbook",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "shield",
        "title": "Make invalid states unrepresentable",
        "description": "Model your domain so the compiler rejects the combinations that should never happen."
      },
      {
        "icon": "puzzle",
        "title": "Write real generics",
        "description": "Build reusable functions and components that keep type information instead of erasing it."
      },
      {
        "icon": "code",
        "title": "Use the type-level toolkit",
        "description": "Apply conditional, mapped, and template literal types where they earn their complexity."
      },
      {
        "icon": "workflow",
        "title": "Type the boundaries",
        "description": "Validate and type the data crossing into your app, so external data stops being an any."
      }
    ],
    "rating": 4.9,
    "reviews": 1474,
    "enrolled": 22110,
    "studentsFormatted": "22.1k students",
    "price": 79,
    "isFree": false,
    "isFeatured": true,
    "language": "English",
    "instructor": {
      "name": "Daniel Okafor",
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "bio": "Daniel works on the layer where application code meets the database. He has spent years untangling type systems and query plans, usually in the same afternoon.\n\nHe believes most runtime bugs are modelling mistakes that were visible earlier, and he teaches both TypeScript and Postgres from that angle.",
      "expertise": [
        "TypeScript",
        "PostgreSQL",
        "API design",
        "Data modelling"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 4,
    "slug": "building-ai-apps-with-llms",
    "title": "Building AI Apps with LLMs",
    "description": "From first API call to a feature you can ship: prompting, structured output, tool calling, streaming, and cost control.",
    "category": "AI Engineering",
    "tag": "POPULAR",
    "imgUrl": "https://picsum.photos/seed/vertex-building-ai-apps-with-llms/1600/900",
    "level": "Intermediate",
    "duration": 147,
    "durationFormatted": "2h 27m",
    "modules": [
      {
        "id": "building-ai-apps-with-llms-module-1",
        "title": "LLM Fundamentals",
        "summary": "What the model is doing, what it costs, and which knobs actually change the output.",
        "description": "What the model is doing, what it costs, and which knobs actually change the output.",
        "duration": "26m 39s",
        "lessons": [
          {
            "id": "lesson.building-ai-apps-with-llms-tokens-and-context-windows",
            "title": "Tokens and context windows",
            "slug": "building-ai-apps-with-llms-tokens-and-context-windows",
            "videoUrl": "https://www.youtube.com/watch?v=-QVoIxEpFkM",
            "youtubeVideoId": "-QVoIxEpFkM",
            "thumbnailUrl": "https://i.ytimg.com/vi/-QVoIxEpFkM/hqdefault.jpg",
            "duration": 691,
            "durationFormatted": "11m 31s",
            "freePreview": true,
            "studentCount": 26380,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tokens-and-context-windows-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tokens-and-context-windo-42156a3f",
                    "text": "Models read tokens, not characters, and they can only see a fixed window of them. Both your bill and your failures come back to this.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tokens-and-context-windows-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tokens-and-context-windo-9f68faa4",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tokens-and-context-windo-e9d0ef47",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tokens-and-context-windo-0c170515",
                    "text": "Understand tokenisation and why cost is per token",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tokens-and-context-windo-e4257093",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tokens-and-context-windo-534928b2",
                    "text": "Budget a prompt against the context window",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tokens-and-context-windo-ed09632d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tokens-and-context-windo-5b68ac4a",
                    "text": "Recognise the failure modes of an overflowing context",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tokens-and-context-windows-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tokens-and-context-windo-218d9f1e",
                    "text": "This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Models read tokens, not characters, and they can only see a fixed window of them. Both your bill and your failures come back to this.\n\nWhat this lesson covers\n\nUnderstand tokenisation and why cost is per token\n\nBudget a prompt against the context window\n\nRecognise the failure modes of an overflowing context\n\nThis lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Understand tokenisation and why cost is per token",
              "Budget a prompt against the context window",
              "Recognise the failure modes of an overflowing context"
            ],
            "proTip": "Count tokens before you ship a prompt template. Long system prompts are billed on every single call.",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-temperature-and-sampling",
            "title": "Temperature and sampling",
            "slug": "building-ai-apps-with-llms-temperature-and-sampling",
            "videoUrl": "https://www.youtube.com/watch?v=-BBulGM6xF0",
            "youtubeVideoId": "-BBulGM6xF0",
            "thumbnailUrl": "https://i.ytimg.com/vi/-BBulGM6xF0/hqdefault.jpg",
            "duration": 491,
            "durationFormatted": "8m 11s",
            "freePreview": false,
            "studentCount": 25017,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-temperature-and-sampling-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-temperature-and-sampling-4ede3223",
                    "text": "Sampling parameters decide how the next token is picked. Low temperature for extraction and classification, higher for anything that should feel varied.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-temperature-and-sampling-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-temperature-and-sampling-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-temperature-and-sampling-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-temperature-and-sampling-0af3cb5f",
                    "text": "Trade determinism against variety with temperature",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-temperature-and-sampling-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-temperature-and-sampling-d3a2f628",
                    "text": "Know what top-p changes and when to touch it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-temperature-and-sampling-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-temperature-and-sampling-4dc02696",
                    "text": "Pick settings per task rather than globally",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-temperature-and-sampling-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-temperature-and-sampling-8c40aacc",
                    "text": "This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Sampling parameters decide how the next token is picked. Low temperature for extraction and classification, higher for anything that should feel varied.\n\nWhat this lesson covers\n\nTrade determinism against variety with temperature\n\nKnow what top-p changes and when to touch it\n\nPick settings per task rather than globally\n\nThis lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Trade determinism against variety with temperature",
              "Know what top-p changes and when to touch it",
              "Pick settings per task rather than globally"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-choosing-a-model",
            "title": "Choosing a model for the job",
            "slug": "building-ai-apps-with-llms-choosing-a-model",
            "videoUrl": "https://www.youtube.com/watch?v=pYax2rupKEY",
            "youtubeVideoId": "pYax2rupKEY",
            "thumbnailUrl": "https://i.ytimg.com/vi/pYax2rupKEY/hqdefault.jpg",
            "duration": 417,
            "durationFormatted": "6m 57s",
            "freePreview": false,
            "studentCount": 23654,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-choosing-a-model-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-choosing-a-model-intro-span",
                    "text": "The largest model is rarely the right default. Match capability, latency, and price to what the specific step of your product needs.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-choosing-a-model-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-choosing-a-model-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-choosing-a-model-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-choosing-a-model-point-0-span",
                    "text": "Weigh capability against latency and cost",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-choosing-a-model-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-choosing-a-model-point-1-span",
                    "text": "Route easy steps to a smaller, faster model",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-choosing-a-model-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-choosing-a-model-point-2-span",
                    "text": "Build an evaluation before committing to a choice",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-choosing-a-model-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-choosing-a-model-outro-span",
                    "text": "This lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The largest model is rarely the right default. Match capability, latency, and price to what the specific step of your product needs.\n\nWhat this lesson covers\n\nWeigh capability against latency and cost\n\nRoute easy steps to a smaller, faster model\n\nBuild an evaluation before committing to a choice\n\nThis lesson sits in LLM Fundamentals, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Weigh capability against latency and cost",
              "Route easy steps to a smaller, faster model",
              "Build an evaluation before committing to a choice"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          }
        ]
      },
      {
        "id": "building-ai-apps-with-llms-module-2",
        "title": "Prompting That Holds Up",
        "summary": "Writing prompts that behave the same way on the thousandth call as they did on the first.",
        "description": "Writing prompts that behave the same way on the thousandth call as they did on the first.",
        "duration": "34m 47s",
        "lessons": [
          {
            "id": "lesson.building-ai-apps-with-llms-system-prompts",
            "title": "Designing the system prompt",
            "slug": "building-ai-apps-with-llms-system-prompts",
            "videoUrl": "https://www.youtube.com/watch?v=MO3U1X8-NNQ",
            "youtubeVideoId": "MO3U1X8-NNQ",
            "thumbnailUrl": "https://i.ytimg.com/vi/MO3U1X8-NNQ/hqdefault.jpg",
            "duration": 1261,
            "durationFormatted": "21m 1s",
            "freePreview": false,
            "studentCount": 22291,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-system-prompts-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-system-prompts-intro-span",
                    "text": "The system prompt sets role, constraints, and refusals. It is followed more reliably than instructions buried in user content, so the load-bearing rules belong here.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-system-prompts-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-system-prompts-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-system-prompts-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-system-prompts-point-0-span",
                    "text": "Separate durable rules from per-request input",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-system-prompts-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-system-prompts-point-1-span",
                    "text": "State constraints and refusals explicitly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-system-prompts-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-system-prompts-point-2-span",
                    "text": "Keep it short enough to stay affordable per call",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-system-prompts-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-system-prompts-outro-span",
                    "text": "This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The system prompt sets role, constraints, and refusals. It is followed more reliably than instructions buried in user content, so the load-bearing rules belong here.\n\nWhat this lesson covers\n\nSeparate durable rules from per-request input\n\nState constraints and refusals explicitly\n\nKeep it short enough to stay affordable per call\n\nThis lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Separate durable rules from per-request input",
              "State constraints and refusals explicitly",
              "Keep it short enough to stay affordable per call"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-few-shot-prompting",
            "title": "Few-shot examples",
            "slug": "building-ai-apps-with-llms-few-shot-prompting",
            "videoUrl": "https://www.youtube.com/watch?v=9qdgEBVkWR4",
            "youtubeVideoId": "9qdgEBVkWR4",
            "thumbnailUrl": "https://i.ytimg.com/vi/9qdgEBVkWR4/hqdefault.jpg",
            "duration": 271,
            "durationFormatted": "4m 31s",
            "freePreview": false,
            "studentCount": 20928,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-few-shot-prompting-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-few-shot-prompting-intro-span",
                    "text": "Examples communicate format and edge-case handling far better than description. Two well-chosen ones usually beat a paragraph of instructions.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-few-shot-prompting-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-few-shot-prompting-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-few-shot-prompting-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-few-shot-prompting-point-0-span",
                    "text": "Show the format instead of describing it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-few-shot-prompting-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-few-shot-prompting-point-1-span",
                    "text": "Choose examples that cover the tricky cases",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-few-shot-prompting-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-few-shot-prompting-point-2-span",
                    "text": "Watch for examples that bias the output",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-few-shot-prompting-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-few-shot-prompting-outro-span",
                    "text": "This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Examples communicate format and edge-case handling far better than description. Two well-chosen ones usually beat a paragraph of instructions.\n\nWhat this lesson covers\n\nShow the format instead of describing it\n\nChoose examples that cover the tricky cases\n\nWatch for examples that bias the output\n\nThis lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Show the format instead of describing it",
              "Choose examples that cover the tricky cases",
              "Watch for examples that bias the output"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-structured-output",
            "title": "Structured output and JSON",
            "slug": "building-ai-apps-with-llms-structured-output",
            "videoUrl": "https://www.youtube.com/watch?v=CllLqPwCjD4",
            "youtubeVideoId": "CllLqPwCjD4",
            "thumbnailUrl": "https://i.ytimg.com/vi/CllLqPwCjD4/hqdefault.jpg",
            "duration": 555,
            "durationFormatted": "9m 15s",
            "freePreview": false,
            "studentCount": 19565,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-structured-output-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-structured-output-intro-span",
                    "text": "If your code consumes the output, it needs a schema. Constrain the shape, then validate the response before anything downstream touches it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-structured-output-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-structured-output-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-structured-output-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-structured-output-point-0-span",
                    "text": "Constrain responses to a declared schema",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-structured-output-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-structured-output-point-1-span",
                    "text": "Validate the parsed output at runtime",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-structured-output-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-structured-output-point-2-span",
                    "text": "Handle the case where the model returns nothing usable",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-structured-output-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-structured-output-outro-span",
                    "text": "This lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "If your code consumes the output, it needs a schema. Constrain the shape, then validate the response before anything downstream touches it.\n\nWhat this lesson covers\n\nConstrain responses to a declared schema\n\nValidate the parsed output at runtime\n\nHandle the case where the model returns nothing usable\n\nThis lesson sits in Prompting That Holds Up, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Constrain responses to a declared schema",
              "Validate the parsed output at runtime",
              "Handle the case where the model returns nothing usable"
            ],
            "proTip": "Validate structured output even when the API guarantees a schema. A retry is cheaper than corrupt data.",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          }
        ]
      },
      {
        "id": "building-ai-apps-with-llms-module-3",
        "title": "Tool Calling and Agents",
        "summary": "Letting the model act: exposing functions, running the loop, and keeping the whole thing bounded.",
        "description": "Letting the model act: exposing functions, running the loop, and keeping the whole thing bounded.",
        "duration": "54m 22s",
        "lessons": [
          {
            "id": "lesson.building-ai-apps-with-llms-tool-calling",
            "title": "Tool calling fundamentals",
            "slug": "building-ai-apps-with-llms-tool-calling",
            "videoUrl": "https://www.youtube.com/watch?v=gMeTK6zzaO4",
            "youtubeVideoId": "gMeTK6zzaO4",
            "thumbnailUrl": "https://i.ytimg.com/vi/gMeTK6zzaO4/hqdefault.jpg",
            "duration": 1874,
            "durationFormatted": "31m 14s",
            "freePreview": false,
            "studentCount": 18202,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tool-calling-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tool-calling-intro-span",
                    "text": "You describe the functions, the model chooses one and supplies arguments, your code executes it. The description of each tool matters as much as the prompt.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tool-calling-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tool-calling-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tool-calling-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tool-calling-point-0-span",
                    "text": "Describe a tool so the model uses it correctly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tool-calling-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tool-calling-point-1-span",
                    "text": "Execute the call and feed the result back",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tool-calling-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tool-calling-point-2-span",
                    "text": "Validate arguments before executing anything",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-tool-calling-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-tool-calling-outro-span",
                    "text": "This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "You describe the functions, the model chooses one and supplies arguments, your code executes it. The description of each tool matters as much as the prompt.\n\nWhat this lesson covers\n\nDescribe a tool so the model uses it correctly\n\nExecute the call and feed the result back\n\nValidate arguments before executing anything\n\nThis lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Describe a tool so the model uses it correctly",
              "Execute the call and feed the result back",
              "Validate arguments before executing anything"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-agent-loops",
            "title": "Building an agent loop",
            "slug": "building-ai-apps-with-llms-agent-loops",
            "videoUrl": "https://www.youtube.com/watch?v=GErEgIOMy_4",
            "youtubeVideoId": "GErEgIOMy_4",
            "thumbnailUrl": "https://i.ytimg.com/vi/GErEgIOMy_4/hqdefault.jpg",
            "duration": 950,
            "durationFormatted": "15m 50s",
            "freePreview": false,
            "studentCount": 16839,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-agent-loops-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-agent-loops-intro-span",
                    "text": "An agent is a loop: call the model, run the tool it asked for, feed the result back, repeat. Every loop needs a stopping condition it cannot argue with.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-agent-loops-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-agent-loops-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-agent-loops-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-agent-loops-point-0-span",
                    "text": "Structure the call, execute, feed back cycle",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-agent-loops-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-agent-loops-point-1-span",
                    "text": "Bound the loop with iteration and token limits",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-agent-loops-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-agent-loops-point-2-span",
                    "text": "Log each step so failures can be replayed",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-agent-loops-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-agent-loops-outro-span",
                    "text": "This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "An agent is a loop: call the model, run the tool it asked for, feed the result back, repeat. Every loop needs a stopping condition it cannot argue with.\n\nWhat this lesson covers\n\nStructure the call, execute, feed back cycle\n\nBound the loop with iteration and token limits\n\nLog each step so failures can be replayed\n\nThis lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Structure the call, execute, feed back cycle",
              "Bound the loop with iteration and token limits",
              "Log each step so failures can be replayed"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-guardrails-and-evals",
            "title": "Guardrails and evaluation",
            "slug": "building-ai-apps-with-llms-guardrails-and-evals",
            "videoUrl": "https://www.youtube.com/watch?v=GvNrhULVpHI",
            "youtubeVideoId": "GvNrhULVpHI",
            "thumbnailUrl": "https://i.ytimg.com/vi/GvNrhULVpHI/hqdefault.jpg",
            "duration": 438,
            "durationFormatted": "7m 18s",
            "freePreview": false,
            "studentCount": 15476,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-guardrails-and-evals-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-guardrails-and-evals-intro-span",
                    "text": "Without an evaluation set you cannot tell an improvement from a regression. Guardrails then enforce the limits your evaluation exposed.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-guardrails-and-evals-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-guardrails-and-evals-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-guardrails-and-evals-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-guardrails-and-evals-point-0-span",
                    "text": "Build a small, honest evaluation set early",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-guardrails-and-evals-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-guardrails-and-evals-point-1-span",
                    "text": "Score changes against it before shipping",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-guardrails-and-evals-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-guardrails-and-evals-point-2-span",
                    "text": "Enforce boundaries the model must not cross",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-guardrails-and-evals-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-guardrails-and-evals-outro-span",
                    "text": "This lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Without an evaluation set you cannot tell an improvement from a regression. Guardrails then enforce the limits your evaluation exposed.\n\nWhat this lesson covers\n\nBuild a small, honest evaluation set early\n\nScore changes against it before shipping\n\nEnforce boundaries the model must not cross\n\nThis lesson sits in Tool Calling and Agents, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Build a small, honest evaluation set early",
              "Score changes against it before shipping",
              "Enforce boundaries the model must not cross"
            ],
            "proTip": "Thirty real examples you curated beat a thousand you generated with the same model you are testing.",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          }
        ]
      },
      {
        "id": "building-ai-apps-with-llms-module-4",
        "title": "Shipping to Production",
        "summary": "The engineering around the model: streaming, cost, caching, and behaving well under load.",
        "description": "The engineering around the model: streaming, cost, caching, and behaving well under load.",
        "duration": "31m 27s",
        "lessons": [
          {
            "id": "lesson.building-ai-apps-with-llms-streaming-responses",
            "title": "Streaming responses to the browser",
            "slug": "building-ai-apps-with-llms-streaming-responses",
            "videoUrl": "https://www.youtube.com/watch?v=hOAAg1WaZh8",
            "youtubeVideoId": "hOAAg1WaZh8",
            "thumbnailUrl": "https://i.ytimg.com/vi/hOAAg1WaZh8/hqdefault.jpg",
            "duration": 536,
            "durationFormatted": "8m 56s",
            "freePreview": false,
            "studentCount": 14113,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-streaming-responses-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-streaming-responses-intro-span",
                    "text": "A streamed answer feels immediate even when total latency is unchanged. Streaming through your own server also keeps your API key off the client.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-streaming-responses-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-streaming-responses-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-streaming-responses-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-streaming-responses-point-0-span",
                    "text": "Stream tokens from the server to the browser",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-streaming-responses-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-streaming-responses-point-1-span",
                    "text": "Render partial output without layout thrash",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-streaming-responses-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-streaming-responses-point-2-span",
                    "text": "Handle cancellation and mid-stream errors",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-streaming-responses-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-streaming-responses-outro-span",
                    "text": "This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A streamed answer feels immediate even when total latency is unchanged. Streaming through your own server also keeps your API key off the client.\n\nWhat this lesson covers\n\nStream tokens from the server to the browser\n\nRender partial output without layout thrash\n\nHandle cancellation and mid-stream errors\n\nThis lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Stream tokens from the server to the browser",
              "Render partial output without layout thrash",
              "Handle cancellation and mid-stream errors"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-cost-and-latency",
            "title": "Managing cost and latency",
            "slug": "building-ai-apps-with-llms-cost-and-latency",
            "videoUrl": "https://www.youtube.com/watch?v=E3j-4XH0q4g",
            "youtubeVideoId": "E3j-4XH0q4g",
            "thumbnailUrl": "https://i.ytimg.com/vi/E3j-4XH0q4g/hqdefault.jpg",
            "duration": 805,
            "durationFormatted": "13m 25s",
            "freePreview": false,
            "studentCount": 12750,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-cost-and-latency-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-cost-and-latency-intro-span",
                    "text": "Cost is prompt design, model choice, and how often you call. Measure per-request tokens before you try to optimise anything.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-cost-and-latency-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-cost-and-latency-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-cost-and-latency-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-cost-and-latency-point-0-span",
                    "text": "Attribute spend to specific calls and prompts",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-cost-and-latency-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-cost-and-latency-point-1-span",
                    "text": "Trim prompts and route by difficulty",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-cost-and-latency-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-cost-and-latency-point-2-span",
                    "text": "Set timeouts and fall back gracefully",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-cost-and-latency-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-cost-and-latency-outro-span",
                    "text": "This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Cost is prompt design, model choice, and how often you call. Measure per-request tokens before you try to optimise anything.\n\nWhat this lesson covers\n\nAttribute spend to specific calls and prompts\n\nTrim prompts and route by difficulty\n\nSet timeouts and fall back gracefully\n\nThis lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Attribute spend to specific calls and prompts",
              "Trim prompts and route by difficulty",
              "Set timeouts and fall back gracefully"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          },
          {
            "id": "lesson.building-ai-apps-with-llms-caching-and-rate-limits",
            "title": "Caching and rate limits",
            "slug": "building-ai-apps-with-llms-caching-and-rate-limits",
            "videoUrl": "https://www.youtube.com/watch?v=u57EnkQaUTY",
            "youtubeVideoId": "u57EnkQaUTY",
            "thumbnailUrl": "https://i.ytimg.com/vi/u57EnkQaUTY/hqdefault.jpg",
            "duration": 546,
            "durationFormatted": "9m 6s",
            "freePreview": false,
            "studentCount": 11387,
            "notes": [
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-caching-and-rate-limits-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-caching-and-rate-limits-0d072edd",
                    "text": "Repeated prefixes can be cached, repeated questions can be answered from your own cache, and rate limits will find you eventually — so retry with backoff.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-caching-and-rate-limits-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-caching-and-rate-limits-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-caching-and-rate-limits-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-caching-and-rate-limits-ffc5fae4",
                    "text": "Cache stable prompt prefixes to cut cost",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-caching-and-rate-limits-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-caching-and-rate-limits-0e6417c4",
                    "text": "Retry with exponential backoff on rate limits",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-caching-and-rate-limits-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-caching-and-rate-limits-a8727f24",
                    "text": "Queue or shed load instead of failing hard",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "building-ai-apps-with-llms-caching-and-rate-limits-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "building-ai-apps-with-llms-caching-and-rate-limits-367aac27",
                    "text": "This lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Repeated prefixes can be cached, repeated questions can be answered from your own cache, and rate limits will find you eventually — so retry with backoff.\n\nWhat this lesson covers\n\nCache stable prompt prefixes to cut cost\n\nRetry with exponential backoff on rate limits\n\nQueue or shed load instead of failing hard\n\nThis lesson sits in Shipping to Production, part of Building AI Apps with LLMs. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Cache stable prompt prefixes to cut cost",
              "Retry with exponential backoff on rate limits",
              "Queue or shed load instead of failing hard"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Claude API documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://docs.anthropic.com/en/api/overview"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "sparkles",
        "title": "Understand the model",
        "description": "Reason about tokens, context windows, and sampling instead of treating the model as a black box."
      },
      {
        "icon": "code",
        "title": "Get structured output",
        "description": "Make a model return data your program can rely on, and validate it before you use it."
      },
      {
        "icon": "workflow",
        "title": "Wire up tool calling",
        "description": "Let the model call your functions, and keep the loop bounded and observable."
      },
      {
        "icon": "gauge",
        "title": "Ship it affordably",
        "description": "Stream responses, cache what repeats, and keep latency and spend under control."
      }
    ],
    "rating": 4.7,
    "reviews": 1759,
    "enrolled": 26380,
    "studentsFormatted": "26.4k students",
    "price": 99,
    "isFree": false,
    "isFeatured": true,
    "language": "English",
    "instructor": {
      "name": "Priya Raman",
      "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
      "bio": "Priya builds products on top of language models and, more importantly, the evaluation harnesses that tell you whether they actually work. She has shipped retrieval systems over messy, real-world corpora.\n\nHer position is that almost every bad AI feature is a retrieval or evaluation problem wearing a prompt-engineering costume.",
      "expertise": [
        "LLMs",
        "RAG",
        "Prompt engineering",
        "Evaluation"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 5,
    "slug": "retrieval-augmented-generation-from-scratch",
    "title": "Retrieval-Augmented Generation from Scratch",
    "description": "Build a RAG system that actually retrieves the right thing: embeddings, chunking, hybrid search, reranking, and grounded answers.",
    "category": "AI Engineering",
    "tag": "AI Engineering",
    "imgUrl": "https://picsum.photos/seed/vertex-retrieval-augmented-generation-from-scratch/1600/900",
    "level": "Advanced",
    "duration": 117,
    "durationFormatted": "1h 57m",
    "modules": [
      {
        "id": "retrieval-augmented-generation-from-scratch-module-1",
        "title": "Embeddings and Vector Search",
        "summary": "The retrieval primitive: turning text into vectors and finding the near ones quickly.",
        "description": "The retrieval primitive: turning text into vectors and finding the near ones quickly.",
        "duration": "20m 54s",
        "lessons": [
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-what-embeddings-are",
            "title": "What an embedding actually encodes",
            "slug": "retrieval-augmented-generation-from-scratch-what-embeddings-are",
            "videoUrl": "https://www.youtube.com/watch?v=wgfSDrqYMJ4",
            "youtubeVideoId": "wgfSDrqYMJ4",
            "thumbnailUrl": "https://i.ytimg.com/vi/wgfSDrqYMJ4/hqdefault.jpg",
            "duration": 518,
            "durationFormatted": "8m 38s",
            "freePreview": true,
            "studentCount": 9130,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-what-em-15571b4c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-what-em-3018e765",
                    "text": "An embedding maps text to a point in space where nearby means related. It captures topic and usage, not truth, and definitely not recency.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-what-em-4afdcdc9",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-what-em-097bea8c",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-what-em-a255caad",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-what-em-1e133052",
                    "text": "Read an embedding as a position in semantic space",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-what-em-ff4921c6",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-what-em-18235a67",
                    "text": "Know what embeddings fail to capture",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-what-em-df6a973c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-what-em-584a307f",
                    "text": "Choose an embedding model for your content",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-what-em-ae75404f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-what-em-c7694898",
                    "text": "This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "An embedding maps text to a point in space where nearby means related. It captures topic and usage, not truth, and definitely not recency.\n\nWhat this lesson covers\n\nRead an embedding as a position in semantic space\n\nKnow what embeddings fail to capture\n\nChoose an embedding model for your content\n\nThis lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Read an embedding as a position in semantic space",
              "Know what embeddings fail to capture",
              "Choose an embedding model for your content"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-vector-databases",
            "title": "Vector databases and indexes",
            "slug": "retrieval-augmented-generation-from-scratch-vector-databases",
            "videoUrl": "https://www.youtube.com/watch?v=dN0lsF2cvm4",
            "youtubeVideoId": "dN0lsF2cvm4",
            "thumbnailUrl": "https://i.ytimg.com/vi/dN0lsF2cvm4/hqdefault.jpg",
            "duration": 263,
            "durationFormatted": "4m 23s",
            "freePreview": false,
            "studentCount": 8658,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-vector-e452a964",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-vector-3f015cd6",
                    "text": "Exact nearest-neighbour search does not scale, so vector indexes trade a little recall for a lot of speed. Knowing the trade-off keeps you out of trouble.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-vector-f186f902",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-vector-1d6755d8",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-vector-918bcb07",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-vector-82e147f2",
                    "text": "Understand approximate nearest neighbour search",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-vector-680b9fc8",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-vector-7bab9e4d",
                    "text": "Trade recall against latency deliberately",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-vector-39989d70",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-vector-26a416fa",
                    "text": "Store metadata alongside vectors for filtering",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-vector-36650b15",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-vector-4eb91e6b",
                    "text": "This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Exact nearest-neighbour search does not scale, so vector indexes trade a little recall for a lot of speed. Knowing the trade-off keeps you out of trouble.\n\nWhat this lesson covers\n\nUnderstand approximate nearest neighbour search\n\nTrade recall against latency deliberately\n\nStore metadata alongside vectors for filtering\n\nThis lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Understand approximate nearest neighbour search",
              "Trade recall against latency deliberately",
              "Store metadata alongside vectors for filtering"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-similarity-metrics",
            "title": "Similarity metrics and thresholds",
            "slug": "retrieval-augmented-generation-from-scratch-similarity-metrics",
            "videoUrl": "https://www.youtube.com/watch?v=yGsGQBGzy6Y",
            "youtubeVideoId": "yGsGQBGzy6Y",
            "thumbnailUrl": "https://i.ytimg.com/vi/yGsGQBGzy6Y/hqdefault.jpg",
            "duration": 473,
            "durationFormatted": "7m 53s",
            "freePreview": false,
            "studentCount": 8187,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-similar-d6683f15",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-similar-1427076c",
                    "text": "Cosine similarity is the usual default, but the number it gives you is only meaningful relative to your own corpus. Calibrate the threshold, do not guess it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-similar-6d5f5235",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-similar-58f2be80",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-similar-9c9fb80d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-similar-26e716e9",
                    "text": "Compare cosine, dot product, and euclidean distance",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-similar-5b9a4f44",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-similar-fc5a11f0",
                    "text": "Calibrate a relevance threshold on real queries",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-similar-bdfd088d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-similar-fcd6ee9f",
                    "text": "Detect the case where nothing is actually relevant",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-similar-e13df703",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-similar-4a4ff9c2",
                    "text": "This lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Cosine similarity is the usual default, but the number it gives you is only meaningful relative to your own corpus. Calibrate the threshold, do not guess it.\n\nWhat this lesson covers\n\nCompare cosine, dot product, and euclidean distance\n\nCalibrate a relevance threshold on real queries\n\nDetect the case where nothing is actually relevant\n\nThis lesson sits in Embeddings and Vector Search, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Compare cosine, dot product, and euclidean distance",
              "Calibrate a relevance threshold on real queries",
              "Detect the case where nothing is actually relevant"
            ],
            "proTip": "A similarity score has no absolute meaning. Calibrate the cutoff against queries you know the answers to.",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          }
        ]
      },
      {
        "id": "retrieval-augmented-generation-from-scratch-module-2",
        "title": "Ingestion and Indexing",
        "summary": "Getting your content into the index in a shape that retrieves well and stays current.",
        "description": "Getting your content into the index in a shape that retrieves well and stays current.",
        "duration": "32m 24s",
        "lessons": [
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-chunking-strategies",
            "title": "Chunking strategies",
            "slug": "retrieval-augmented-generation-from-scratch-chunking-strategies",
            "videoUrl": "https://www.youtube.com/watch?v=pIGRwMjhMaQ",
            "youtubeVideoId": "pIGRwMjhMaQ",
            "thumbnailUrl": "https://i.ytimg.com/vi/pIGRwMjhMaQ/hqdefault.jpg",
            "duration": 842,
            "durationFormatted": "14m 2s",
            "freePreview": false,
            "studentCount": 7715,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-chunkin-b3aa900d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-chunkin-79ea4308",
                    "text": "Chunk size decides what a match can even mean. Too small and passages lose context; too large and the relevant sentence gets drowned.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-chunkin-53b89a09",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-chunkin-5560ea03",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-chunkin-c63f2061",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-chunkin-e0953a07",
                    "text": "Split on structure rather than a fixed character count",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-chunkin-af3a5cb9",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-chunkin-6b0763ed",
                    "text": "Use overlap to avoid cutting an idea in half",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-chunkin-ef4297d0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-chunkin-6fb9fc2a",
                    "text": "Keep each chunk understandable on its own",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-chunkin-64d85ee6",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-chunkin-13b0998c",
                    "text": "This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Chunk size decides what a match can even mean. Too small and passages lose context; too large and the relevant sentence gets drowned.\n\nWhat this lesson covers\n\nSplit on structure rather than a fixed character count\n\nUse overlap to avoid cutting an idea in half\n\nKeep each chunk understandable on its own\n\nThis lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Split on structure rather than a fixed character count",
              "Use overlap to avoid cutting an idea in half",
              "Keep each chunk understandable on its own"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-metadata-and-filtering",
            "title": "Metadata and filtered retrieval",
            "slug": "retrieval-augmented-generation-from-scratch-metadata-and-filtering",
            "videoUrl": "https://www.youtube.com/watch?v=RPpGIxmdZYs",
            "youtubeVideoId": "RPpGIxmdZYs",
            "thumbnailUrl": "https://i.ytimg.com/vi/RPpGIxmdZYs/hqdefault.jpg",
            "duration": 744,
            "durationFormatted": "12m 24s",
            "freePreview": false,
            "studentCount": 7243,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-metadat-1ef962ed",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-metadat-abd934ae",
                    "text": "Metadata turns semantic search into scoped semantic search. Filtering by source, type, or date removes whole classes of wrong answer.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-metadat-16b63a6b",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-metadat-6c90187c",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-metadat-e8296d08",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-metadat-773939ed",
                    "text": "Attach source, type, and timestamp to every chunk",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-metadat-4e427f54",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-metadat-0699da11",
                    "text": "Filter before ranking to cut the candidate set",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-metadat-af0b60c5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-metadat-df2491a7",
                    "text": "Use metadata to attribute answers back to a source",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-metadat-6778503b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-metadat-ed5d8253",
                    "text": "This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Metadata turns semantic search into scoped semantic search. Filtering by source, type, or date removes whole classes of wrong answer.\n\nWhat this lesson covers\n\nAttach source, type, and timestamp to every chunk\n\nFilter before ranking to cut the candidate set\n\nUse metadata to attribute answers back to a source\n\nThis lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Attach source, type, and timestamp to every chunk",
              "Filter before ranking to cut the candidate set",
              "Use metadata to attribute answers back to a source"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-keeping-the-index-fresh",
            "title": "Keeping the index fresh",
            "slug": "retrieval-augmented-generation-from-scratch-keeping-the-index-fresh",
            "videoUrl": "https://www.youtube.com/watch?v=PmA_0DT7zds",
            "youtubeVideoId": "PmA_0DT7zds",
            "thumbnailUrl": "https://i.ytimg.com/vi/PmA_0DT7zds/hqdefault.jpg",
            "duration": 358,
            "durationFormatted": "5m 58s",
            "freePreview": false,
            "studentCount": 6771,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-keeping-96374ec2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-keeping-866bf21b",
                    "text": "Content changes and stale chunks keep getting retrieved. Incremental reindexing driven by content events beats rebuilding everything nightly.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-keeping-0be7f626",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-keeping-03549842",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-keeping-74d3f603",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-keeping-a3031cc9",
                    "text": "Reindex incrementally on content change events",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-keeping-08055552",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-keeping-df6a533a",
                    "text": "Delete chunks whose source no longer exists",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-keeping-62ac0433",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-keeping-86a2e14c",
                    "text": "Version the index so a bad run can be rolled back",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-keeping-fb54acd9",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-keeping-8a58c50a",
                    "text": "This lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Content changes and stale chunks keep getting retrieved. Incremental reindexing driven by content events beats rebuilding everything nightly.\n\nWhat this lesson covers\n\nReindex incrementally on content change events\n\nDelete chunks whose source no longer exists\n\nVersion the index so a bad run can be rolled back\n\nThis lesson sits in Ingestion and Indexing, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Reindex incrementally on content change events",
              "Delete chunks whose source no longer exists",
              "Version the index so a bad run can be rolled back"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          }
        ]
      },
      {
        "id": "retrieval-augmented-generation-from-scratch-module-3",
        "title": "Retrieval Quality",
        "summary": "Where most RAG systems are won or lost: combining retrieval methods, reranking, and measuring the result.",
        "description": "Where most RAG systems are won or lost: combining retrieval methods, reranking, and measuring the result.",
        "duration": "24m 21s",
        "lessons": [
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-hybrid-search",
            "title": "Hybrid keyword and vector search",
            "slug": "retrieval-augmented-generation-from-scratch-hybrid-search",
            "videoUrl": "https://www.youtube.com/watch?v=lYxGYXjfrNI",
            "youtubeVideoId": "lYxGYXjfrNI",
            "thumbnailUrl": "https://i.ytimg.com/vi/lYxGYXjfrNI/hqdefault.jpg",
            "duration": 407,
            "durationFormatted": "6m 47s",
            "freePreview": false,
            "studentCount": 6300,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-hybrid-ef5bfdd5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-hybrid-f24e61f6",
                    "text": "Vector search misses exact identifiers; keyword search misses paraphrase. Running both and fusing the rankings covers each one’s blind spot.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-hybrid-search-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-hybrid-a465fc8f",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-hybrid-aaf8e35e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-hybrid-463e6ef2",
                    "text": "Combine lexical and semantic result sets",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-hybrid-a4d4a8f5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-hybrid-05f7caeb",
                    "text": "Fuse rankings rather than concatenating them",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-hybrid-05498722",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-hybrid-53da9e7b",
                    "text": "Fall back to keyword search when embeddings are unavailable",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-hybrid-dc8c2c3f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-hybrid-9cabd1ee",
                    "text": "This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Vector search misses exact identifiers; keyword search misses paraphrase. Running both and fusing the rankings covers each one’s blind spot.\n\nWhat this lesson covers\n\nCombine lexical and semantic result sets\n\nFuse rankings rather than concatenating them\n\nFall back to keyword search when embeddings are unavailable\n\nThis lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Combine lexical and semantic result sets",
              "Fuse rankings rather than concatenating them",
              "Fall back to keyword search when embeddings are unavailable"
            ],
            "proTip": "If embeddings are switched off in your environment, wildcarded keyword matching is the fallback that still works.",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-reranking",
            "title": "Reranking retrieved candidates",
            "slug": "retrieval-augmented-generation-from-scratch-reranking",
            "videoUrl": "https://www.youtube.com/watch?v=aVgZE746OXw",
            "youtubeVideoId": "aVgZE746OXw",
            "thumbnailUrl": "https://i.ytimg.com/vi/aVgZE746OXw/hqdefault.jpg",
            "duration": 315,
            "durationFormatted": "5m 15s",
            "freePreview": false,
            "studentCount": 5828,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-reranking-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-reranki-d229d5f6",
                    "text": "Retrieve broadly, then rerank precisely. A reranker reads query and passage together, which is why it beats vector distance on ordering.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-reranking-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-reranki-39df8ff2",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-reranki-e3c8a43c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-reranki-907a76fc",
                    "text": "Retrieve a wide candidate set, then narrow it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-reranki-e5b576a3",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-reranki-bed65959",
                    "text": "Score query and passage jointly with a reranker",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-reranki-dc63f216",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-reranki-59a98347",
                    "text": "Balance the latency cost against the accuracy gain",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-reranking-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-reranki-bda146b5",
                    "text": "This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Retrieve broadly, then rerank precisely. A reranker reads query and passage together, which is why it beats vector distance on ordering.\n\nWhat this lesson covers\n\nRetrieve a wide candidate set, then narrow it\n\nScore query and passage jointly with a reranker\n\nBalance the latency cost against the accuracy gain\n\nThis lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Retrieve a wide candidate set, then narrow it",
              "Score query and passage jointly with a reranker",
              "Balance the latency cost against the accuracy gain"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-evaluating-retrieval",
            "title": "Evaluating retrieval",
            "slug": "retrieval-augmented-generation-from-scratch-evaluating-retrieval",
            "videoUrl": "https://www.youtube.com/watch?v=7_LTU0LA374",
            "youtubeVideoId": "7_LTU0LA374",
            "thumbnailUrl": "https://i.ytimg.com/vi/7_LTU0LA374/hqdefault.jpg",
            "duration": 739,
            "durationFormatted": "12m 19s",
            "freePreview": false,
            "studentCount": 5356,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-evaluat-3d396574",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-evaluat-94a9215f",
                    "text": "Before blaming the model for a bad answer, check whether the right passage was ever retrieved. Recall at k tells you which half of the system to fix.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-evaluat-fc0deb14",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-evaluat-4b11a0be",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-evaluat-882b5e0e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-evaluat-1400df3a",
                    "text": "Build a query set with known correct passages",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-evaluat-1286ad35",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-evaluat-501a34cd",
                    "text": "Measure recall and precision at k",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-evaluat-91a57cde",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-evaluat-88fcb9ec",
                    "text": "Separate retrieval failures from generation failures",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-evaluat-0dd5624f",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-evaluat-842f9db3",
                    "text": "This lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Before blaming the model for a bad answer, check whether the right passage was ever retrieved. Recall at k tells you which half of the system to fix.\n\nWhat this lesson covers\n\nBuild a query set with known correct passages\n\nMeasure recall and precision at k\n\nSeparate retrieval failures from generation failures\n\nThis lesson sits in Retrieval Quality, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Build a query set with known correct passages",
              "Measure recall and precision at k",
              "Separate retrieval failures from generation failures"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          }
        ]
      },
      {
        "id": "retrieval-augmented-generation-from-scratch-module-4",
        "title": "Grounded Generation",
        "summary": "Turning retrieved passages into an answer that is traceable, honest, and measurable.",
        "description": "Turning retrieved passages into an answer that is traceable, honest, and measurable.",
        "duration": "39m 32s",
        "lessons": [
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-grounding-and-citations",
            "title": "Grounding answers with citations",
            "slug": "retrieval-augmented-generation-from-scratch-grounding-and-citations",
            "videoUrl": "https://www.youtube.com/watch?v=YZmCy-cGmbs",
            "youtubeVideoId": "YZmCy-cGmbs",
            "thumbnailUrl": "https://i.ytimg.com/vi/YZmCy-cGmbs/hqdefault.jpg",
            "duration": 436,
            "durationFormatted": "7m 16s",
            "freePreview": false,
            "studentCount": 4885,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-groundi-0646cd88",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-groundi-8e4bb190",
                    "text": "An answer the user can verify is worth far more than a confident one. Carry identifiers through retrieval so every claim can point back to a source.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-groundi-f00daea0",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-groundi-0c523261",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-groundi-9a4c4d67",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-groundi-4811845c",
                    "text": "Instruct the model to answer only from context",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-groundi-8595e8a5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-groundi-0f8e7d89",
                    "text": "Thread source ids through to the rendered answer",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-groundi-cc90e984",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-groundi-5baa3f42",
                    "text": "Make citations clickable back to the original",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-groundi-b96b5145",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-groundi-1d43ebfd",
                    "text": "This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "An answer the user can verify is worth far more than a confident one. Carry identifiers through retrieval so every claim can point back to a source.\n\nWhat this lesson covers\n\nInstruct the model to answer only from context\n\nThread source ids through to the rendered answer\n\nMake citations clickable back to the original\n\nThis lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Instruct the model to answer only from context",
              "Thread source ids through to the rendered answer",
              "Make citations clickable back to the original"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-handling-no-answer",
            "title": "Handling the no-answer case",
            "slug": "retrieval-augmented-generation-from-scratch-handling-no-answer",
            "videoUrl": "https://www.youtube.com/watch?v=DAmklaX4UKE",
            "youtubeVideoId": "DAmklaX4UKE",
            "thumbnailUrl": "https://i.ytimg.com/vi/DAmklaX4UKE/hqdefault.jpg",
            "duration": 1293,
            "durationFormatted": "21m 33s",
            "freePreview": false,
            "studentCount": 4413,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-handlin-962174d7",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-handlin-abfe33d2",
                    "text": "The hardest behaviour to get is a clean \"I don’t know\". Make it an explicit, allowed output instead of the model’s last resort.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-handlin-99cc6fba",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-handlin-04b881a6",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-handlin-4f7ede6b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-handlin-0ca180d9",
                    "text": "Detect when retrieval returned nothing relevant",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-handlin-fde80c52",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-handlin-30d0e3e9",
                    "text": "Make abstaining an explicit, acceptable outcome",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-handlin-b8f465b8",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-handlin-5e159fb3",
                    "text": "Offer a next step instead of a dead end",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-handlin-89315f4b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-handlin-a42d36c2",
                    "text": "This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The hardest behaviour to get is a clean \"I don’t know\". Make it an explicit, allowed output instead of the model’s last resort.\n\nWhat this lesson covers\n\nDetect when retrieval returned nothing relevant\n\nMake abstaining an explicit, acceptable outcome\n\nOffer a next step instead of a dead end\n\nThis lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Detect when retrieval returned nothing relevant",
              "Make abstaining an explicit, acceptable outcome",
              "Offer a next step instead of a dead end"
            ],
            "proTip": "An empty state that points somewhere useful beats a fabricated answer every single time.",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          },
          {
            "id": "lesson.retrieval-augmented-generation-from-scratch-end-to-end-rag-evaluation",
            "title": "End-to-end RAG evaluation",
            "slug": "retrieval-augmented-generation-from-scratch-end-to-end-rag-evaluation",
            "videoUrl": "https://www.youtube.com/watch?v=cRz0BWkuwHg",
            "youtubeVideoId": "cRz0BWkuwHg",
            "thumbnailUrl": "https://i.ytimg.com/vi/cRz0BWkuwHg/hqdefault.jpg",
            "duration": 643,
            "durationFormatted": "10m 43s",
            "freePreview": false,
            "studentCount": 3941,
            "notes": [
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-end-to-a82716fd",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-end-to-8bf856ea",
                    "text": "Evaluate the pipeline the user experiences: was the answer faithful to the retrieved context, and did it address the question.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-end-to-ab5eec1e",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-end-to-bbefa2a4",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-end-to-51272932",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-end-to-7737422f",
                    "text": "Score faithfulness to the retrieved context",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-end-to-7ab5fd2a",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-end-to-48b394f6",
                    "text": "Score relevance to the original question",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-end-to-83c86109",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-end-to-36ebabd9",
                    "text": "Track both across releases to catch regressions",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "retrieval-augmented-generation-from-scratch-end-to-470ee57e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "retrieval-augmented-generation-from-scratch-end-to-c2b737ac",
                    "text": "This lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Evaluate the pipeline the user experiences: was the answer faithful to the retrieved context, and did it address the question.\n\nWhat this lesson covers\n\nScore faithfulness to the retrieved context\n\nScore relevance to the original question\n\nTrack both across releases to catch regressions\n\nThis lesson sits in Grounded Generation, part of Retrieval-Augmented Generation from Scratch. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Score faithfulness to the retrieved context",
              "Score relevance to the original question",
              "Track both across releases to catch regressions"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Sanity Context and content APIs",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.sanity.io/docs"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "puzzle",
        "title": "Understand embeddings",
        "description": "Know what a vector encodes, what it does not, and which similarity measure to use."
      },
      {
        "icon": "layers",
        "title": "Chunk content well",
        "description": "Split documents so retrieved passages are self-contained and carry useful metadata."
      },
      {
        "icon": "gauge",
        "title": "Improve retrieval quality",
        "description": "Combine keyword and vector search, then rerank, and measure whether it helped."
      },
      {
        "icon": "shield",
        "title": "Ground every answer",
        "description": "Cite sources, and make the system say it does not know instead of inventing one."
      }
    ],
    "rating": 4.8,
    "reviews": 609,
    "enrolled": 9130,
    "studentsFormatted": "9.1k students",
    "price": 129,
    "isFree": false,
    "isFeatured": false,
    "language": "English",
    "instructor": {
      "name": "Priya Raman",
      "avatar": "https://randomuser.me/api/portraits/women/68.jpg",
      "bio": "Priya builds products on top of language models and, more importantly, the evaluation harnesses that tell you whether they actually work. She has shipped retrieval systems over messy, real-world corpora.\n\nHer position is that almost every bad AI feature is a retrieval or evaluation problem wearing a prompt-engineering costume.",
      "expertise": [
        "LLMs",
        "RAG",
        "Prompt engineering",
        "Evaluation"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 6,
    "slug": "python-for-data-work",
    "title": "Python for Data Work",
    "description": "A practical on-ramp to data work in Python: the language basics you need, pandas, plotting, and reproducible workflows.",
    "category": "Data",
    "tag": "POPULAR",
    "imgUrl": "https://picsum.photos/seed/vertex-python-for-data-work/1600/900",
    "level": "Beginner",
    "duration": 215,
    "durationFormatted": "3h 35m",
    "modules": [
      {
        "id": "python-for-data-work-module-1",
        "title": "Python Foundations for Data",
        "summary": "The subset of Python that data work actually uses, taught in the order you will need it.",
        "description": "The subset of Python that data work actually uses, taught in the order you will need it.",
        "duration": "25m 1s",
        "lessons": [
          {
            "id": "lesson.python-for-data-work-python-data-types",
            "title": "Lists, dicts, and the types you will use",
            "slug": "python-for-data-work-python-data-types",
            "videoUrl": "https://www.youtube.com/watch?v=MZZSMaEAC2g",
            "youtubeVideoId": "MZZSMaEAC2g",
            "thumbnailUrl": "https://i.ytimg.com/vi/MZZSMaEAC2g/hqdefault.jpg",
            "duration": 486,
            "durationFormatted": "8m 6s",
            "freePreview": true,
            "studentCount": 31450,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-python-data-types-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-python-data-types-intro-span",
                    "text": "Lists, dictionaries, sets, and tuples cover almost everything before a dataframe shows up. Picking the right one is a performance decision as much as a style one.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-python-data-types-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-python-data-types-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-python-data-types-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-python-data-types-point-0-span",
                    "text": "Choose between list, dict, set, and tuple",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-python-data-types-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-python-data-types-point-1-span",
                    "text": "Index, slice, and iterate without off-by-one errors",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-python-data-types-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-python-data-types-point-2-span",
                    "text": "Understand mutability and why it bites",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-python-data-types-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-python-data-types-outro-span",
                    "text": "This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Lists, dictionaries, sets, and tuples cover almost everything before a dataframe shows up. Picking the right one is a performance decision as much as a style one.\n\nWhat this lesson covers\n\nChoose between list, dict, set, and tuple\n\nIndex, slice, and iterate without off-by-one errors\n\nUnderstand mutability and why it bites\n\nThis lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Choose between list, dict, set, and tuple",
              "Index, slice, and iterate without off-by-one errors",
              "Understand mutability and why it bites"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-comprehensions",
            "title": "Comprehensions and iteration",
            "slug": "python-for-data-work-comprehensions",
            "videoUrl": "https://www.youtube.com/watch?v=YlY2g2xrl6Q",
            "youtubeVideoId": "YlY2g2xrl6Q",
            "thumbnailUrl": "https://i.ytimg.com/vi/YlY2g2xrl6Q/hqdefault.jpg",
            "duration": 620,
            "durationFormatted": "10m 20s",
            "freePreview": false,
            "studentCount": 29825,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-comprehensions-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-comprehensions-intro-span",
                    "text": "A comprehension is a filter and a transform in one line. Readable when the logic is small, unreadable the moment you nest three of them.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-comprehensions-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-comprehensions-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-comprehensions-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-comprehensions-point-0-span",
                    "text": "Transform and filter a sequence in one expression",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-comprehensions-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-comprehensions-point-1-span",
                    "text": "Build dict and set comprehensions",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-comprehensions-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-comprehensions-point-2-span",
                    "text": "Know when a plain loop is clearer",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-comprehensions-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-comprehensions-outro-span",
                    "text": "This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A comprehension is a filter and a transform in one line. Readable when the logic is small, unreadable the moment you nest three of them.\n\nWhat this lesson covers\n\nTransform and filter a sequence in one expression\n\nBuild dict and set comprehensions\n\nKnow when a plain loop is clearer\n\nThis lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Transform and filter a sequence in one expression",
              "Build dict and set comprehensions",
              "Know when a plain loop is clearer"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-files-and-csv",
            "title": "Reading files and CSVs",
            "slug": "python-for-data-work-files-and-csv",
            "videoUrl": "https://www.youtube.com/watch?v=H-hagjt65cE",
            "youtubeVideoId": "H-hagjt65cE",
            "thumbnailUrl": "https://i.ytimg.com/vi/H-hagjt65cE/hqdefault.jpg",
            "duration": 395,
            "durationFormatted": "6m 35s",
            "freePreview": false,
            "studentCount": 28200,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-files-and-csv-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-files-and-csv-intro-span",
                    "text": "Real data arrives as a slightly wrong file. Encodings, delimiters, and missing values are the first three problems you will meet.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-files-and-csv-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-files-and-csv-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-files-and-csv-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-files-and-csv-point-0-span",
                    "text": "Read and write files safely with context managers",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-files-and-csv-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-files-and-csv-point-1-span",
                    "text": "Parse CSV data and handle encoding issues",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-files-and-csv-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-files-and-csv-point-2-span",
                    "text": "Deal with missing and malformed rows on load",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-files-and-csv-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-files-and-csv-outro-span",
                    "text": "This lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Real data arrives as a slightly wrong file. Encodings, delimiters, and missing values are the first three problems you will meet.\n\nWhat this lesson covers\n\nRead and write files safely with context managers\n\nParse CSV data and handle encoding issues\n\nDeal with missing and malformed rows on load\n\nThis lesson sits in Python Foundations for Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Read and write files safely with context managers",
              "Parse CSV data and handle encoding issues",
              "Deal with missing and malformed rows on load"
            ],
            "proTip": "Open a file with a context manager. It closes even when the code inside raises.",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          }
        ]
      },
      {
        "id": "python-for-data-work-module-2",
        "title": "pandas Essentials",
        "summary": "The dataframe workflow: loading, cleaning, reshaping, and summarising tabular data.",
        "description": "The dataframe workflow: loading, cleaning, reshaping, and summarising tabular data.",
        "duration": "1h 13m",
        "lessons": [
          {
            "id": "lesson.python-for-data-work-dataframes-basics",
            "title": "Series, dataframes, and indexing",
            "slug": "python-for-data-work-dataframes-basics",
            "videoUrl": "https://www.youtube.com/watch?v=EXIgjIBu4EU",
            "youtubeVideoId": "EXIgjIBu4EU",
            "thumbnailUrl": "https://i.ytimg.com/vi/EXIgjIBu4EU/hqdefault.jpg",
            "duration": 1837,
            "durationFormatted": "30m 37s",
            "freePreview": false,
            "studentCount": 26575,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-dataframes-basics-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-dataframes-basics-intro-span",
                    "text": "A dataframe is columns of typed series sharing an index. Once the index clicks, selection with loc and iloc stops being guesswork.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-dataframes-basics-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-dataframes-basics-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-dataframes-basics-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-dataframes-basics-point-0-span",
                    "text": "Create dataframes and inspect their dtypes",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-dataframes-basics-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-dataframes-basics-point-1-span",
                    "text": "Select rows and columns with loc and iloc",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-dataframes-basics-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-dataframes-basics-point-2-span",
                    "text": "Understand why the index matters",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-dataframes-basics-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-dataframes-basics-outro-span",
                    "text": "This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A dataframe is columns of typed series sharing an index. Once the index clicks, selection with loc and iloc stops being guesswork.\n\nWhat this lesson covers\n\nCreate dataframes and inspect their dtypes\n\nSelect rows and columns with loc and iloc\n\nUnderstand why the index matters\n\nThis lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Create dataframes and inspect their dtypes",
              "Select rows and columns with loc and iloc",
              "Understand why the index matters"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-cleaning-data",
            "title": "Cleaning messy data",
            "slug": "python-for-data-work-cleaning-data",
            "videoUrl": "https://www.youtube.com/watch?v=KdmPHEnPJPs",
            "youtubeVideoId": "KdmPHEnPJPs",
            "thumbnailUrl": "https://i.ytimg.com/vi/KdmPHEnPJPs/hqdefault.jpg",
            "duration": 1914,
            "durationFormatted": "31m 54s",
            "freePreview": false,
            "studentCount": 24950,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-cleaning-data-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-cleaning-data-intro-span",
                    "text": "Cleaning is most of the job: missing values, duplicate rows, inconsistent categories, and columns that arrived as strings.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-cleaning-data-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-cleaning-data-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-cleaning-data-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-cleaning-data-point-0-span",
                    "text": "Handle missing values without silently distorting results",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-cleaning-data-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-cleaning-data-point-1-span",
                    "text": "Remove duplicates and normalise categories",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-cleaning-data-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-cleaning-data-point-2-span",
                    "text": "Convert columns to the correct dtype",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-cleaning-data-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-cleaning-data-outro-span",
                    "text": "This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Cleaning is most of the job: missing values, duplicate rows, inconsistent categories, and columns that arrived as strings.\n\nWhat this lesson covers\n\nHandle missing values without silently distorting results\n\nRemove duplicates and normalise categories\n\nConvert columns to the correct dtype\n\nThis lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Handle missing values without silently distorting results",
              "Remove duplicates and normalise categories",
              "Convert columns to the correct dtype"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-groupby-and-aggregation",
            "title": "groupby and aggregation",
            "slug": "python-for-data-work-groupby-and-aggregation",
            "videoUrl": "https://www.youtube.com/watch?v=VRmXto2YA2I",
            "youtubeVideoId": "VRmXto2YA2I",
            "thumbnailUrl": "https://i.ytimg.com/vi/VRmXto2YA2I/hqdefault.jpg",
            "duration": 665,
            "durationFormatted": "11m 5s",
            "freePreview": false,
            "studentCount": 23325,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-groupby-and-aggregation-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-groupby-and-aggregation-intro-span",
                    "text": "Split, apply, combine is the pattern behind nearly every summary table you will ever produce.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-groupby-and-aggregation-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-groupby-and-aggregation-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-groupby-and-aggregation-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-groupby-and-aggregation-point-0-span",
                    "text": "Group rows and aggregate each group",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-groupby-and-aggregation-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-groupby-and-aggregation-point-1-span",
                    "text": "Apply several aggregations at once",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-groupby-and-aggregation-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-groupby-and-aggregation-point-2-span",
                    "text": "Pivot and reshape a summary for presentation",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-groupby-and-aggregation-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-groupby-and-aggregation-outro-span",
                    "text": "This lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Split, apply, combine is the pattern behind nearly every summary table you will ever produce.\n\nWhat this lesson covers\n\nGroup rows and aggregate each group\n\nApply several aggregations at once\n\nPivot and reshape a summary for presentation\n\nThis lesson sits in pandas Essentials, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Group rows and aggregate each group",
              "Apply several aggregations at once",
              "Pivot and reshape a summary for presentation"
            ],
            "proTip": "Think split-apply-combine. Almost every reporting question is a groupby wearing a disguise.",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          }
        ]
      },
      {
        "id": "python-for-data-work-module-3",
        "title": "Visualising Data",
        "summary": "Turning a result into a chart someone can read, and knowing which chart to reach for.",
        "description": "Turning a result into a chart someone can read, and knowing which chart to reach for.",
        "duration": "1h 12m",
        "lessons": [
          {
            "id": "lesson.python-for-data-work-matplotlib-basics",
            "title": "Plotting with matplotlib",
            "slug": "python-for-data-work-matplotlib-basics",
            "videoUrl": "https://www.youtube.com/watch?v=7Lc2AxiM17o",
            "youtubeVideoId": "7Lc2AxiM17o",
            "thumbnailUrl": "https://i.ytimg.com/vi/7Lc2AxiM17o/hqdefault.jpg",
            "duration": 1851,
            "durationFormatted": "30m 51s",
            "freePreview": false,
            "studentCount": 21701,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-matplotlib-basics-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-matplotlib-basics-intro-span",
                    "text": "Matplotlib is verbose but total. Learn the figure and axes model once and every other plotting library makes more sense.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-matplotlib-basics-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-matplotlib-basics-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-matplotlib-basics-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-matplotlib-basics-point-0-span",
                    "text": "Work with the figure and axes objects",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-matplotlib-basics-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-matplotlib-basics-point-1-span",
                    "text": "Plot lines, bars, and scatter charts",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-matplotlib-basics-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-matplotlib-basics-point-2-span",
                    "text": "Label axes and export at the right resolution",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-matplotlib-basics-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-matplotlib-basics-outro-span",
                    "text": "This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Matplotlib is verbose but total. Learn the figure and axes model once and every other plotting library makes more sense.\n\nWhat this lesson covers\n\nWork with the figure and axes objects\n\nPlot lines, bars, and scatter charts\n\nLabel axes and export at the right resolution\n\nThis lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Work with the figure and axes objects",
              "Plot lines, bars, and scatter charts",
              "Label axes and export at the right resolution"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-seaborn-statistical-plots",
            "title": "Statistical plots with seaborn",
            "slug": "python-for-data-work-seaborn-statistical-plots",
            "videoUrl": "https://www.youtube.com/watch?v=rLVCSmtoA7U",
            "youtubeVideoId": "rLVCSmtoA7U",
            "thumbnailUrl": "https://i.ytimg.com/vi/rLVCSmtoA7U/hqdefault.jpg",
            "duration": 2156,
            "durationFormatted": "35m 56s",
            "freePreview": false,
            "studentCount": 20076,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-seaborn-statistical-plots-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-seaborn-statistical-plots-intro-span",
                    "text": "Seaborn sits on matplotlib and handles distributions, categories, and relationships with far less code.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-seaborn-statistical-plots-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-seaborn-statistical-plots-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-seaborn-statistical-plots-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-seaborn-statistical-plots-point-0-span",
                    "text": "Plot distributions and relationships quickly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-seaborn-statistical-plots-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-seaborn-statistical-plots-point-1-span",
                    "text": "Facet a chart by a categorical column",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-seaborn-statistical-plots-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-seaborn-statistical-plots-point-2-span",
                    "text": "Drop down to matplotlib when you need control",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-seaborn-statistical-plots-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-seaborn-statistical-plots-outro-span",
                    "text": "This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Seaborn sits on matplotlib and handles distributions, categories, and relationships with far less code.\n\nWhat this lesson covers\n\nPlot distributions and relationships quickly\n\nFacet a chart by a categorical column\n\nDrop down to matplotlib when you need control\n\nThis lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Plot distributions and relationships quickly",
              "Facet a chart by a categorical column",
              "Drop down to matplotlib when you need control"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-telling-a-story-with-charts",
            "title": "Choosing the right chart",
            "slug": "python-for-data-work-telling-a-story-with-charts",
            "videoUrl": "https://www.youtube.com/watch?v=fBgk_cNCnsk",
            "youtubeVideoId": "fBgk_cNCnsk",
            "thumbnailUrl": "https://i.ytimg.com/vi/fBgk_cNCnsk/hqdefault.jpg",
            "duration": 369,
            "durationFormatted": "6m 9s",
            "freePreview": false,
            "studentCount": 18451,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-telling-a-story-with-charts-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-telling-a-story-with-charts-intro-span",
                    "text": "The chart type encodes your claim. Comparison, distribution, composition, and relationship each have a form that reads instantly and several that mislead.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-telling-a-story-with-charts-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-telling-a-story-with-charts-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-telling-a-story-with-charts-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-telling-a-story-with-charts-po-ab44df12",
                    "text": "Match the chart form to the question being asked",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-telling-a-story-with-charts-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-telling-a-story-with-charts-po-642651ef",
                    "text": "Remove decoration that competes with the data",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-telling-a-story-with-charts-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-telling-a-story-with-charts-po-e009b38a",
                    "text": "Avoid axis choices that overstate a difference",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-telling-a-story-with-charts-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-telling-a-story-with-charts-outro-span",
                    "text": "This lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The chart type encodes your claim. Comparison, distribution, composition, and relationship each have a form that reads instantly and several that mislead.\n\nWhat this lesson covers\n\nMatch the chart form to the question being asked\n\nRemove decoration that competes with the data\n\nAvoid axis choices that overstate a difference\n\nThis lesson sits in Visualising Data, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Match the chart form to the question being asked",
              "Remove decoration that competes with the data",
              "Avoid axis choices that overstate a difference"
            ],
            "proTip": "If the chart needs a paragraph to explain what it shows, the chart is the wrong one.",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          }
        ]
      },
      {
        "id": "python-for-data-work-module-4",
        "title": "Reproducible Workflows",
        "summary": "Making the analysis run again next month, on someone else’s machine, with the same result.",
        "description": "Making the analysis run again next month, on someone else’s machine, with the same result.",
        "duration": "43m 52s",
        "lessons": [
          {
            "id": "lesson.python-for-data-work-jupyter-notebooks",
            "title": "Working effectively in notebooks",
            "slug": "python-for-data-work-jupyter-notebooks",
            "videoUrl": "https://www.youtube.com/watch?v=YuWZNV4BkkY",
            "youtubeVideoId": "YuWZNV4BkkY",
            "thumbnailUrl": "https://i.ytimg.com/vi/YuWZNV4BkkY/hqdefault.jpg",
            "duration": 1397,
            "durationFormatted": "23m 17s",
            "freePreview": false,
            "studentCount": 16826,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-jupyter-notebooks-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-jupyter-notebooks-intro-span",
                    "text": "Notebooks are excellent for exploring and terrible at hidden state. Restart and run all is the only honest test of a notebook.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-jupyter-notebooks-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-jupyter-notebooks-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-jupyter-notebooks-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-jupyter-notebooks-point-0-span",
                    "text": "Structure a notebook so it reads top to bottom",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-jupyter-notebooks-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-jupyter-notebooks-point-1-span",
                    "text": "Avoid out-of-order execution and stale state",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-jupyter-notebooks-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-jupyter-notebooks-point-2-span",
                    "text": "Move stable code out into importable modules",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-jupyter-notebooks-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-jupyter-notebooks-outro-span",
                    "text": "This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Notebooks are excellent for exploring and terrible at hidden state. Restart and run all is the only honest test of a notebook.\n\nWhat this lesson covers\n\nStructure a notebook so it reads top to bottom\n\nAvoid out-of-order execution and stale state\n\nMove stable code out into importable modules\n\nThis lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Structure a notebook so it reads top to bottom",
              "Avoid out-of-order execution and stale state",
              "Move stable code out into importable modules"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-virtual-environments",
            "title": "Virtual environments and dependencies",
            "slug": "python-for-data-work-virtual-environments",
            "videoUrl": "https://www.youtube.com/watch?v=Y21OR1OPC9A",
            "youtubeVideoId": "Y21OR1OPC9A",
            "thumbnailUrl": "https://i.ytimg.com/vi/Y21OR1OPC9A/hqdefault.jpg",
            "duration": 545,
            "durationFormatted": "9m 5s",
            "freePreview": false,
            "studentCount": 15201,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-virtual-environments-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-virtual-environments-intro-span",
                    "text": "An environment per project, with pinned versions, is what stops \"it worked yesterday\" from being a real sentence.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-virtual-environments-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-virtual-environments-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-virtual-environments-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-virtual-environments-point-0-span",
                    "text": "Create and activate a per-project environment",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-virtual-environments-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-virtual-environments-point-1-span",
                    "text": "Pin dependencies so installs are repeatable",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-virtual-environments-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-virtual-environments-point-2-span",
                    "text": "Keep environment files under version control",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-virtual-environments-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-virtual-environments-outro-span",
                    "text": "This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "An environment per project, with pinned versions, is what stops \"it worked yesterday\" from being a real sentence.\n\nWhat this lesson covers\n\nCreate and activate a per-project environment\n\nPin dependencies so installs are repeatable\n\nKeep environment files under version control\n\nThis lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Create and activate a per-project environment",
              "Pin dependencies so installs are repeatable",
              "Keep environment files under version control"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          },
          {
            "id": "lesson.python-for-data-work-automating-a-data-job",
            "title": "Automating a recurring data job",
            "slug": "python-for-data-work-automating-a-data-job",
            "videoUrl": "https://www.youtube.com/watch?v=eZfD6x9FJ4E",
            "youtubeVideoId": "eZfD6x9FJ4E",
            "thumbnailUrl": "https://i.ytimg.com/vi/eZfD6x9FJ4E/hqdefault.jpg",
            "duration": 690,
            "durationFormatted": "11m 30s",
            "freePreview": false,
            "studentCount": 13576,
            "notes": [
              {
                "_type": "block",
                "_key": "python-for-data-work-automating-a-data-job-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-automating-a-data-job-intro-span",
                    "text": "The last step is turning the analysis into a script that runs on a schedule, logs what it did, and fails loudly.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-automating-a-data-job-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-automating-a-data-job-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-automating-a-data-job-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-automating-a-data-job-point-0-span",
                    "text": "Turn a notebook into a parameterised script",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-automating-a-data-job-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-automating-a-data-job-point-1-span",
                    "text": "Log progress and failures usefully",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-automating-a-data-job-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-automating-a-data-job-point-2-span",
                    "text": "Schedule the job and alert when it breaks",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "python-for-data-work-automating-a-data-job-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "python-for-data-work-automating-a-data-job-outro-span",
                    "text": "This lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The last step is turning the analysis into a script that runs on a schedule, logs what it did, and fails loudly.\n\nWhat this lesson covers\n\nTurn a notebook into a parameterised script\n\nLog progress and failures usefully\n\nSchedule the job and alert when it breaks\n\nThis lesson sits in Reproducible Workflows, part of Python for Data Work. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Turn a notebook into a parameterised script",
              "Log progress and failures usefully",
              "Schedule the job and alert when it breaks"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "pandas documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://pandas.pydata.org/docs/"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "code",
        "title": "Write practical Python",
        "description": "Use the data types, comprehensions, and file handling that data work leans on daily."
      },
      {
        "icon": "layers",
        "title": "Work with dataframes",
        "description": "Load, clean, filter, and aggregate tabular data with pandas without fighting the API."
      },
      {
        "icon": "sparkles",
        "title": "Visualise findings",
        "description": "Produce charts that communicate a result rather than merely displaying numbers."
      },
      {
        "icon": "workflow",
        "title": "Make it reproducible",
        "description": "Manage environments and turn a notebook into something that runs the same way twice."
      }
    ],
    "rating": 4.9,
    "reviews": 2097,
    "enrolled": 31450,
    "studentsFormatted": "31.4k students",
    "price": 0,
    "isFree": true,
    "isFeatured": true,
    "language": "English",
    "instructor": {
      "name": "Tomas Berg",
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
      "bio": "Tomas moves between data work and backend architecture, which is less of a jump than it sounds: both are mostly about what you do when the volume grows by two orders of magnitude.\n\nHe teaches with worked examples and back-of-the-envelope numbers, because a design you cannot estimate is a design you cannot defend.",
      "expertise": [
        "Python",
        "pandas",
        "System design",
        "Distributed systems"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 7,
    "slug": "system-design-foundations",
    "title": "System Design Foundations",
    "description": "The building blocks of scalable systems — load balancing, caching, queues, partitioning, and the reliability work around them.",
    "category": "Backend & Infrastructure",
    "tag": "Backend & Infrastructure",
    "imgUrl": "https://picsum.photos/seed/vertex-system-design-foundations/1600/900",
    "level": "Intermediate",
    "duration": 97,
    "durationFormatted": "1h 37m",
    "modules": [
      {
        "id": "system-design-foundations-module-1",
        "title": "Core Building Blocks",
        "summary": "The three components that appear in nearly every architecture diagram, and what each one is actually for.",
        "description": "The three components that appear in nearly every architecture diagram, and what each one is actually for.",
        "duration": "38m 9s",
        "lessons": [
          {
            "id": "lesson.system-design-foundations-load-balancing",
            "title": "Load balancing",
            "slug": "system-design-foundations-load-balancing",
            "videoUrl": "https://www.youtube.com/watch?v=chyZRNT7eEo",
            "youtubeVideoId": "chyZRNT7eEo",
            "thumbnailUrl": "https://i.ytimg.com/vi/chyZRNT7eEo/hqdefault.jpg",
            "duration": 282,
            "durationFormatted": "4m 42s",
            "freePreview": true,
            "studentCount": 14760,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-load-balancing-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-load-balancing-intro-span",
                    "text": "A load balancer spreads traffic and hides failed instances. The interesting choices are the algorithm and what happens to sessions.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-load-balancing-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-load-balancing-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-load-balancing-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-load-balancing-point-0-span",
                    "text": "Compare round robin, least connections, and hashing",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-load-balancing-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-load-balancing-point-1-span",
                    "text": "Health check instances and drain them safely",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-load-balancing-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-load-balancing-point-2-span",
                    "text": "Handle session affinity without pinning users forever",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-load-balancing-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-load-balancing-outro-span",
                    "text": "This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A load balancer spreads traffic and hides failed instances. The interesting choices are the algorithm and what happens to sessions.\n\nWhat this lesson covers\n\nCompare round robin, least connections, and hashing\n\nHealth check instances and drain them safely\n\nHandle session affinity without pinning users forever\n\nThis lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Compare round robin, least connections, and hashing",
              "Health check instances and drain them safely",
              "Handle session affinity without pinning users forever"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-caching-layers",
            "title": "Caching layers and invalidation",
            "slug": "system-design-foundations-caching-layers",
            "videoUrl": "https://www.youtube.com/watch?v=wh98s0XhMmQ",
            "youtubeVideoId": "wh98s0XhMmQ",
            "thumbnailUrl": "https://i.ytimg.com/vi/wh98s0XhMmQ/hqdefault.jpg",
            "duration": 401,
            "durationFormatted": "6m 41s",
            "freePreview": false,
            "studentCount": 13997,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-caching-layers-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-caching-layers-intro-span",
                    "text": "Caching is the cheapest performance win and the most common source of confusing bugs. Decide where it lives and what invalidates it before you add it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-caching-layers-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-caching-layers-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-caching-layers-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-caching-layers-point-0-span",
                    "text": "Place caches at the edge, application, or data layer",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-caching-layers-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-caching-layers-point-1-span",
                    "text": "Choose a write strategy and an eviction policy",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-caching-layers-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-caching-layers-point-2-span",
                    "text": "Plan invalidation before you plan the cache",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-caching-layers-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-caching-layers-outro-span",
                    "text": "This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Caching is the cheapest performance win and the most common source of confusing bugs. Decide where it lives and what invalidates it before you add it.\n\nWhat this lesson covers\n\nPlace caches at the edge, application, or data layer\n\nChoose a write strategy and an eviction policy\n\nPlan invalidation before you plan the cache\n\nThis lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Place caches at the edge, application, or data layer",
              "Choose a write strategy and an eviction policy",
              "Plan invalidation before you plan the cache"
            ],
            "proTip": "Design the invalidation path first. A cache you cannot invalidate is a bug with a latency benefit.",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-message-queues",
            "title": "Queues and asynchronous work",
            "slug": "system-design-foundations-message-queues",
            "videoUrl": "https://www.youtube.com/watch?v=1ISRd0bS714",
            "youtubeVideoId": "1ISRd0bS714",
            "thumbnailUrl": "https://i.ytimg.com/vi/1ISRd0bS714/hqdefault.jpg",
            "duration": 1606,
            "durationFormatted": "26m 46s",
            "freePreview": false,
            "studentCount": 13235,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-message-queues-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-message-queues-intro-span",
                    "text": "A queue decouples producers from consumers and absorbs bursts. The cost is that you now have to think about ordering, retries, and duplicates.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-message-queues-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-message-queues-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-message-queues-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-message-queues-point-0-span",
                    "text": "Move slow work out of the request path",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-message-queues-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-message-queues-point-1-span",
                    "text": "Handle retries, dead letters, and duplicate delivery",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-message-queues-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-message-queues-point-2-span",
                    "text": "Reason about ordering guarantees you actually have",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-message-queues-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-message-queues-outro-span",
                    "text": "This lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A queue decouples producers from consumers and absorbs bursts. The cost is that you now have to think about ordering, retries, and duplicates.\n\nWhat this lesson covers\n\nMove slow work out of the request path\n\nHandle retries, dead letters, and duplicate delivery\n\nReason about ordering guarantees you actually have\n\nThis lesson sits in Core Building Blocks, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Move slow work out of the request path",
              "Handle retries, dead letters, and duplicate delivery",
              "Reason about ordering guarantees you actually have"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          }
        ]
      },
      {
        "id": "system-design-foundations-module-2",
        "title": "Data at Scale",
        "summary": "What happens to your database when one machine is no longer enough.",
        "description": "What happens to your database when one machine is no longer enough.",
        "duration": "17m 52s",
        "lessons": [
          {
            "id": "lesson.system-design-foundations-sharding-and-partitioning",
            "title": "Sharding and partitioning",
            "slug": "system-design-foundations-sharding-and-partitioning",
            "videoUrl": "https://www.youtube.com/watch?v=be6PLMKKSto",
            "youtubeVideoId": "be6PLMKKSto",
            "thumbnailUrl": "https://i.ytimg.com/vi/be6PLMKKSto/hqdefault.jpg",
            "duration": 362,
            "durationFormatted": "6m 2s",
            "freePreview": false,
            "studentCount": 12472,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-sharding-and-partitioning-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-sharding-and-partitioning-f96c5e7d",
                    "text": "Partitioning splits data across machines. The shard key decides whether that scales smoothly or creates one very hot node.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-sharding-and-partitioning-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-sharding-and-partitioning-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-sharding-and-partitioning-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-sharding-and-partitioning-3d563fd3",
                    "text": "Choose a shard key that spreads load evenly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-sharding-and-partitioning-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-sharding-and-partitioning-2d1ca026",
                    "text": "Compare range, hash, and directory partitioning",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-sharding-and-partitioning-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-sharding-and-partitioning-5ab3ed5f",
                    "text": "Plan for resharding before you need it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-sharding-and-partitioning-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-sharding-and-partitioning-59c36b24",
                    "text": "This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Partitioning splits data across machines. The shard key decides whether that scales smoothly or creates one very hot node.\n\nWhat this lesson covers\n\nChoose a shard key that spreads load evenly\n\nCompare range, hash, and directory partitioning\n\nPlan for resharding before you need it\n\nThis lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Choose a shard key that spreads load evenly",
              "Compare range, hash, and directory partitioning",
              "Plan for resharding before you need it"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-replication",
            "title": "Replication and read scaling",
            "slug": "system-design-foundations-replication",
            "videoUrl": "https://www.youtube.com/watch?v=bI8Ry6GhMSE",
            "youtubeVideoId": "bI8Ry6GhMSE",
            "thumbnailUrl": "https://i.ytimg.com/vi/bI8Ry6GhMSE/hqdefault.jpg",
            "duration": 302,
            "durationFormatted": "5m 2s",
            "freePreview": false,
            "studentCount": 11710,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-replication-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-replication-intro-span",
                    "text": "Replicas give you read capacity and failover. They also give you a window where a follower answers with data that is slightly out of date.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-replication-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-replication-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-replication-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-replication-point-0-span",
                    "text": "Distinguish synchronous from asynchronous replication",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-replication-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-replication-point-1-span",
                    "text": "Route reads to replicas without breaking read-your-writes",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-replication-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-replication-point-2-span",
                    "text": "Plan and rehearse failover",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-replication-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-replication-outro-span",
                    "text": "This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Replicas give you read capacity and failover. They also give you a window where a follower answers with data that is slightly out of date.\n\nWhat this lesson covers\n\nDistinguish synchronous from asynchronous replication\n\nRoute reads to replicas without breaking read-your-writes\n\nPlan and rehearse failover\n\nThis lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Distinguish synchronous from asynchronous replication",
              "Route reads to replicas without breaking read-your-writes",
              "Plan and rehearse failover"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-consistency-and-cap",
            "title": "Consistency models and CAP",
            "slug": "system-design-foundations-consistency-and-cap",
            "videoUrl": "https://www.youtube.com/watch?v=gkg-FAEXIkY",
            "youtubeVideoId": "gkg-FAEXIkY",
            "thumbnailUrl": "https://i.ytimg.com/vi/gkg-FAEXIkY/hqdefault.jpg",
            "duration": 408,
            "durationFormatted": "6m 48s",
            "freePreview": false,
            "studentCount": 10947,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-consistency-and-cap-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-consistency-and-cap-intro-span",
                    "text": "When the network partitions you choose consistency or availability. Most real systems pick a different answer per operation.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-consistency-and-cap-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-consistency-and-cap-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-consistency-and-cap-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-consistency-and-cap-point-0-span",
                    "text": "Place a system on the consistency spectrum",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-consistency-and-cap-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-consistency-and-cap-point-1-span",
                    "text": "Choose guarantees per operation, not per database",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-consistency-and-cap-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-consistency-and-cap-point-2-span",
                    "text": "Explain the user-visible effect of eventual consistency",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-consistency-and-cap-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-consistency-and-cap-outro-span",
                    "text": "This lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "When the network partitions you choose consistency or availability. Most real systems pick a different answer per operation.\n\nWhat this lesson covers\n\nPlace a system on the consistency spectrum\n\nChoose guarantees per operation, not per database\n\nExplain the user-visible effect of eventual consistency\n\nThis lesson sits in Data at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Place a system on the consistency spectrum",
              "Choose guarantees per operation, not per database",
              "Explain the user-visible effect of eventual consistency"
            ],
            "proTip": "Ask what the user sees when a read is stale. That answer picks your consistency model faster than any theorem.",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          }
        ]
      },
      {
        "id": "system-design-foundations-module-3",
        "title": "API Design at Scale",
        "summary": "The contract other systems depend on, and how it behaves when they misbehave.",
        "description": "The contract other systems depend on, and how it behaves when they misbehave.",
        "duration": "20m 32s",
        "lessons": [
          {
            "id": "lesson.system-design-foundations-rest-vs-graphql",
            "title": "REST and GraphQL trade-offs",
            "slug": "system-design-foundations-rest-vs-graphql",
            "videoUrl": "https://www.youtube.com/watch?v=yWzKJPw_VzM",
            "youtubeVideoId": "yWzKJPw_VzM",
            "thumbnailUrl": "https://i.ytimg.com/vi/yWzKJPw_VzM/hqdefault.jpg",
            "duration": 315,
            "durationFormatted": "5m 15s",
            "freePreview": false,
            "studentCount": 10184,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-rest-vs-graphql-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rest-vs-graphql-intro-span",
                    "text": "REST gives you cacheable, predictable endpoints; GraphQL gives clients exactly the data they asked for. The trade is caching and complexity.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rest-vs-graphql-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rest-vs-graphql-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rest-vs-graphql-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rest-vs-graphql-point-0-span",
                    "text": "Compare fixed endpoints against flexible queries",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rest-vs-graphql-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rest-vs-graphql-point-1-span",
                    "text": "Weigh caching behaviour on each side",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rest-vs-graphql-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rest-vs-graphql-point-2-span",
                    "text": "Version an API without breaking existing clients",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rest-vs-graphql-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rest-vs-graphql-outro-span",
                    "text": "This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "REST gives you cacheable, predictable endpoints; GraphQL gives clients exactly the data they asked for. The trade is caching and complexity.\n\nWhat this lesson covers\n\nCompare fixed endpoints against flexible queries\n\nWeigh caching behaviour on each side\n\nVersion an API without breaking existing clients\n\nThis lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Compare fixed endpoints against flexible queries",
              "Weigh caching behaviour on each side",
              "Version an API without breaking existing clients"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-rate-limiting",
            "title": "Rate limiting",
            "slug": "system-design-foundations-rate-limiting",
            "videoUrl": "https://www.youtube.com/watch?v=YXkOdWBwqaA",
            "youtubeVideoId": "YXkOdWBwqaA",
            "thumbnailUrl": "https://i.ytimg.com/vi/YXkOdWBwqaA/hqdefault.jpg",
            "duration": 466,
            "durationFormatted": "7m 46s",
            "freePreview": false,
            "studentCount": 9422,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-rate-limiting-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rate-limiting-intro-span",
                    "text": "Rate limiting protects you from clients and clients from themselves. Token bucket is the usual answer; the hard part is the key you limit on.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rate-limiting-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rate-limiting-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rate-limiting-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rate-limiting-point-0-span",
                    "text": "Implement token bucket and sliding window limits",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rate-limiting-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rate-limiting-point-1-span",
                    "text": "Choose the right key: user, tenant, or IP",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rate-limiting-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rate-limiting-point-2-span",
                    "text": "Return limits and retry hints in the response",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-rate-limiting-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-rate-limiting-outro-span",
                    "text": "This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Rate limiting protects you from clients and clients from themselves. Token bucket is the usual answer; the hard part is the key you limit on.\n\nWhat this lesson covers\n\nImplement token bucket and sliding window limits\n\nChoose the right key: user, tenant, or IP\n\nReturn limits and retry hints in the response\n\nThis lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Implement token bucket and sliding window limits",
              "Choose the right key: user, tenant, or IP",
              "Return limits and retry hints in the response"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-idempotency-and-retries",
            "title": "Idempotency and safe retries",
            "slug": "system-design-foundations-idempotency-and-retries",
            "videoUrl": "https://www.youtube.com/watch?v=t99NvIazD68",
            "youtubeVideoId": "t99NvIazD68",
            "thumbnailUrl": "https://i.ytimg.com/vi/t99NvIazD68/hqdefault.jpg",
            "duration": 451,
            "durationFormatted": "7m 31s",
            "freePreview": false,
            "studentCount": 8659,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-idempotency-and-retries-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-idempotency-and-retries-intro-span",
                    "text": "Any request can be delivered twice. An idempotency key lets the second delivery return the first result instead of charging the card again.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-idempotency-and-retries-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-idempotency-and-retries-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-idempotency-and-retries-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-idempotency-and-retries-p-510ba2d6",
                    "text": "Make write endpoints safe to retry",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-idempotency-and-retries-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-idempotency-and-retries-p-e8696e81",
                    "text": "Accept and store idempotency keys",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-idempotency-and-retries-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-idempotency-and-retries-p-af9678ff",
                    "text": "Retry with backoff and jitter, not in lockstep",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-idempotency-and-retries-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-idempotency-and-retries-outro-span",
                    "text": "This lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Any request can be delivered twice. An idempotency key lets the second delivery return the first result instead of charging the card again.\n\nWhat this lesson covers\n\nMake write endpoints safe to retry\n\nAccept and store idempotency keys\n\nRetry with backoff and jitter, not in lockstep\n\nThis lesson sits in API Design at Scale, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Make write endpoints safe to retry",
              "Accept and store idempotency keys",
              "Retry with backoff and jitter, not in lockstep"
            ],
            "proTip": "Retries without jitter turn one blip into a synchronised stampede.",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          }
        ]
      },
      {
        "id": "system-design-foundations-module-4",
        "title": "Reliability and Operations",
        "summary": "Knowing what your system is doing, and what it does when a dependency stops answering.",
        "description": "Knowing what your system is doing, and what it does when a dependency stops answering.",
        "duration": "20m 55s",
        "lessons": [
          {
            "id": "lesson.system-design-foundations-observability",
            "title": "Observability: logs, metrics, traces",
            "slug": "system-design-foundations-observability",
            "videoUrl": "https://www.youtube.com/watch?v=aJpzr8648XE",
            "youtubeVideoId": "aJpzr8648XE",
            "thumbnailUrl": "https://i.ytimg.com/vi/aJpzr8648XE/hqdefault.jpg",
            "duration": 489,
            "durationFormatted": "8m 9s",
            "freePreview": false,
            "studentCount": 7897,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-observability-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-observability-intro-span",
                    "text": "Metrics tell you something is wrong, traces tell you where, logs tell you why. You need all three, and they need to share request ids.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-observability-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-observability-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-observability-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-observability-point-0-span",
                    "text": "Instrument the three signals and correlate them",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-observability-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-observability-point-1-span",
                    "text": "Alert on symptoms users feel, not on causes",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-observability-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-observability-point-2-span",
                    "text": "Trace a request across service boundaries",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-observability-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-observability-outro-span",
                    "text": "This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Metrics tell you something is wrong, traces tell you where, logs tell you why. You need all three, and they need to share request ids.\n\nWhat this lesson covers\n\nInstrument the three signals and correlate them\n\nAlert on symptoms users feel, not on causes\n\nTrace a request across service boundaries\n\nThis lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Instrument the three signals and correlate them",
              "Alert on symptoms users feel, not on causes",
              "Trace a request across service boundaries"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-failure-modes-and-timeouts",
            "title": "Timeouts, retries, and circuit breakers",
            "slug": "system-design-foundations-failure-modes-and-timeouts",
            "videoUrl": "https://www.youtube.com/watch?v=nzeKH7moGfo",
            "youtubeVideoId": "nzeKH7moGfo",
            "thumbnailUrl": "https://i.ytimg.com/vi/nzeKH7moGfo/hqdefault.jpg",
            "duration": 254,
            "durationFormatted": "4m 14s",
            "freePreview": false,
            "studentCount": 7134,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-failure-modes-and-timeouts-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-failure-modes-and-timeout-0055d18c",
                    "text": "A dependency that hangs is worse than one that fails. Timeouts convert hanging into failing, and circuit breakers stop failure spreading.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-failure-modes-and-timeouts-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-failure-modes-and-timeouts-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-failure-modes-and-timeouts-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-failure-modes-and-timeout-bf99be00",
                    "text": "Set timeouts on every outbound call",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-failure-modes-and-timeouts-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-failure-modes-and-timeout-16d4c428",
                    "text": "Break the circuit when a dependency is clearly down",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-failure-modes-and-timeouts-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-failure-modes-and-timeout-9da806b6",
                    "text": "Degrade gracefully instead of cascading",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-failure-modes-and-timeouts-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-failure-modes-and-timeout-61ca00ba",
                    "text": "This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A dependency that hangs is worse than one that fails. Timeouts convert hanging into failing, and circuit breakers stop failure spreading.\n\nWhat this lesson covers\n\nSet timeouts on every outbound call\n\nBreak the circuit when a dependency is clearly down\n\nDegrade gracefully instead of cascading\n\nThis lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Set timeouts on every outbound call",
              "Break the circuit when a dependency is clearly down",
              "Degrade gracefully instead of cascading"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          },
          {
            "id": "lesson.system-design-foundations-capacity-estimation",
            "title": "Capacity estimation",
            "slug": "system-design-foundations-capacity-estimation",
            "videoUrl": "https://www.youtube.com/watch?v=UC5xf8FbdJc",
            "youtubeVideoId": "UC5xf8FbdJc",
            "thumbnailUrl": "https://i.ytimg.com/vi/UC5xf8FbdJc/hqdefault.jpg",
            "duration": 512,
            "durationFormatted": "8m 32s",
            "freePreview": false,
            "studentCount": 6371,
            "notes": [
              {
                "_type": "block",
                "_key": "system-design-foundations-capacity-estimation-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-capacity-estimation-intro-span",
                    "text": "Rough arithmetic on requests, payload sizes, and growth turns opinions into a design you can defend in a review.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-capacity-estimation-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-capacity-estimation-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-capacity-estimation-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-capacity-estimation-point-0-span",
                    "text": "Estimate throughput, storage, and bandwidth",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-capacity-estimation-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-capacity-estimation-point-1-span",
                    "text": "Size for peak, not for average",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-capacity-estimation-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-capacity-estimation-point-2-span",
                    "text": "Sanity check a design against the numbers",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "system-design-foundations-capacity-estimation-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "system-design-foundations-capacity-estimation-outro-span",
                    "text": "This lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Rough arithmetic on requests, payload sizes, and growth turns opinions into a design you can defend in a review.\n\nWhat this lesson covers\n\nEstimate throughput, storage, and bandwidth\n\nSize for peak, not for average\n\nSanity check a design against the numbers\n\nThis lesson sits in Reliability and Operations, part of System Design Foundations. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Estimate throughput, storage, and bandwidth",
              "Size for peak, not for average",
              "Sanity check a design against the numbers"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "AWS Architecture Center",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://aws.amazon.com/architecture/"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "layers",
        "title": "Assemble the building blocks",
        "description": "Know what load balancers, caches, and queues each solve, and what they cost you."
      },
      {
        "icon": "workflow",
        "title": "Scale the data layer",
        "description": "Partition and replicate data, and reason clearly about the consistency you gave up."
      },
      {
        "icon": "shield",
        "title": "Design resilient APIs",
        "description": "Handle retries, idempotency, and rate limiting so failures do not compound."
      },
      {
        "icon": "gauge",
        "title": "Estimate capacity",
        "description": "Do the arithmetic that turns a hand-wavy design into a defensible one."
      }
    ],
    "rating": 4.7,
    "reviews": 984,
    "enrolled": 14760,
    "studentsFormatted": "14.8k students",
    "price": 109,
    "isFree": false,
    "isFeatured": false,
    "language": "English",
    "instructor": {
      "name": "Tomas Berg",
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
      "bio": "Tomas moves between data work and backend architecture, which is less of a jump than it sounds: both are mostly about what you do when the volume grows by two orders of magnitude.\n\nHe teaches with worked examples and back-of-the-envelope numbers, because a design you cannot estimate is a design you cannot defend.",
      "expertise": [
        "Python",
        "pandas",
        "System design",
        "Distributed systems"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 8,
    "slug": "postgresql-for-developers",
    "title": "PostgreSQL for Developers",
    "description": "SQL you will actually write, schemas that hold up, indexes that get used, and the operational basics behind them.",
    "category": "Data",
    "tag": "Data",
    "imgUrl": "https://picsum.photos/seed/vertex-postgresql-for-developers/1600/900",
    "level": "Intermediate",
    "duration": 133,
    "durationFormatted": "2h 13m",
    "modules": [
      {
        "id": "postgresql-for-developers-module-1",
        "title": "SQL Essentials",
        "summary": "The query constructs that cover the overwhelming majority of real application SQL.",
        "description": "The query constructs that cover the overwhelming majority of real application SQL.",
        "duration": "18m 56s",
        "lessons": [
          {
            "id": "lesson.postgresql-for-developers-select-and-joins",
            "title": "SELECT and joins",
            "slug": "postgresql-for-developers-select-and-joins",
            "videoUrl": "https://www.youtube.com/watch?v=G3lJAxg1cy8",
            "youtubeVideoId": "G3lJAxg1cy8",
            "thumbnailUrl": "https://i.ytimg.com/vi/G3lJAxg1cy8/hqdefault.jpg",
            "duration": 304,
            "durationFormatted": "5m 4s",
            "freePreview": true,
            "studentCount": 11890,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-select-and-joins-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-select-and-joins-intro-span",
                    "text": "Joins combine rows across tables, and the join type decides what happens to the rows with no match. Most wrong result sets are a join type mistake.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-select-and-joins-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-select-and-joins-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-select-and-joins-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-select-and-joins-point-0-span",
                    "text": "Choose between inner, left, right, and full joins",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-select-and-joins-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-select-and-joins-point-1-span",
                    "text": "Join on the right keys and avoid accidental fan-out",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-select-and-joins-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-select-and-joins-point-2-span",
                    "text": "Filter in WHERE versus in the join condition",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-select-and-joins-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-select-and-joins-outro-span",
                    "text": "This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Joins combine rows across tables, and the join type decides what happens to the rows with no match. Most wrong result sets are a join type mistake.\n\nWhat this lesson covers\n\nChoose between inner, left, right, and full joins\n\nJoin on the right keys and avoid accidental fan-out\n\nFilter in WHERE versus in the join condition\n\nThis lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Choose between inner, left, right, and full joins",
              "Join on the right keys and avoid accidental fan-out",
              "Filter in WHERE versus in the join condition"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-aggregates-and-grouping",
            "title": "Aggregates and GROUP BY",
            "slug": "postgresql-for-developers-aggregates-and-grouping",
            "videoUrl": "https://www.youtube.com/watch?v=nNrgRVIzeHg",
            "youtubeVideoId": "nNrgRVIzeHg",
            "thumbnailUrl": "https://i.ytimg.com/vi/nNrgRVIzeHg/hqdefault.jpg",
            "duration": 360,
            "durationFormatted": "6m",
            "freePreview": false,
            "studentCount": 11276,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-aggregates-and-grouping-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-aggregates-and-grouping-intro-span",
                    "text": "Aggregation collapses rows into summaries. WHERE filters before grouping and HAVING after — mixing them up is the classic bug.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-aggregates-and-grouping-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-aggregates-and-grouping-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-aggregates-and-grouping-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-aggregates-and-grouping-p-a04c6b1e",
                    "text": "Aggregate with count, sum, avg, min, and max",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-aggregates-and-grouping-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-aggregates-and-grouping-p-e108e22d",
                    "text": "Group correctly and know what must be in GROUP BY",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-aggregates-and-grouping-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-aggregates-and-grouping-p-399ee8f8",
                    "text": "Filter groups with HAVING, rows with WHERE",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-aggregates-and-grouping-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-aggregates-and-grouping-outro-span",
                    "text": "This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Aggregation collapses rows into summaries. WHERE filters before grouping and HAVING after — mixing them up is the classic bug.\n\nWhat this lesson covers\n\nAggregate with count, sum, avg, min, and max\n\nGroup correctly and know what must be in GROUP BY\n\nFilter groups with HAVING, rows with WHERE\n\nThis lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Aggregate with count, sum, avg, min, and max",
              "Group correctly and know what must be in GROUP BY",
              "Filter groups with HAVING, rows with WHERE"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-ctes-and-window-functions",
            "title": "CTEs and window functions",
            "slug": "postgresql-for-developers-ctes-and-window-functions",
            "videoUrl": "https://www.youtube.com/watch?v=rIcB4zMYMas",
            "youtubeVideoId": "rIcB4zMYMas",
            "thumbnailUrl": "https://i.ytimg.com/vi/rIcB4zMYMas/hqdefault.jpg",
            "duration": 472,
            "durationFormatted": "7m 52s",
            "freePreview": false,
            "studentCount": 10661,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-ctes-and-window-functions-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-ctes-and-window-functions-c774d695",
                    "text": "CTEs make a long query readable; window functions compute across related rows without collapsing them. Running totals and rankings stop being hard.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-ctes-and-window-functions-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-ctes-and-window-functions-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-ctes-and-window-functions-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-ctes-and-window-functions-0dbbefb5",
                    "text": "Break a complex query into named CTEs",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-ctes-and-window-functions-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-ctes-and-window-functions-973480e8",
                    "text": "Rank and number rows within partitions",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-ctes-and-window-functions-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-ctes-and-window-functions-ef67adf7",
                    "text": "Compute running totals and row-to-row differences",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-ctes-and-window-functions-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-ctes-and-window-functions-50b010fe",
                    "text": "This lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "CTEs make a long query readable; window functions compute across related rows without collapsing them. Running totals and rankings stop being hard.\n\nWhat this lesson covers\n\nBreak a complex query into named CTEs\n\nRank and number rows within partitions\n\nCompute running totals and row-to-row differences\n\nThis lesson sits in SQL Essentials, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Break a complex query into named CTEs",
              "Rank and number rows within partitions",
              "Compute running totals and row-to-row differences"
            ],
            "proTip": "When you catch yourself writing a subquery inside a subquery, a CTE will make it readable.",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          }
        ]
      },
      {
        "id": "postgresql-for-developers-module-2",
        "title": "Schema Design",
        "summary": "Modelling data so the database enforces your rules instead of hoping the application does.",
        "description": "Modelling data so the database enforces your rules instead of hoping the application does.",
        "duration": "20m",
        "lessons": [
          {
            "id": "lesson.postgresql-for-developers-normalization",
            "title": "Normalisation and when to break it",
            "slug": "postgresql-for-developers-normalization",
            "videoUrl": "https://www.youtube.com/watch?v=FzVCGou8SMA",
            "youtubeVideoId": "FzVCGou8SMA",
            "thumbnailUrl": "https://i.ytimg.com/vi/FzVCGou8SMA/hqdefault.jpg",
            "duration": 213,
            "durationFormatted": "3m 33s",
            "freePreview": false,
            "studentCount": 10047,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-normalization-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-normalization-intro-span",
                    "text": "Normalising removes duplicated truth. Denormalising trades that safety for read speed, and should be a decision rather than an accident.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-normalization-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-normalization-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-normalization-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-normalization-point-0-span",
                    "text": "Remove duplicated data and update anomalies",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-normalization-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-normalization-point-1-span",
                    "text": "Recognise when denormalisation is justified",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-normalization-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-normalization-point-2-span",
                    "text": "Model many-to-many relationships properly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-normalization-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-normalization-outro-span",
                    "text": "This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Normalising removes duplicated truth. Denormalising trades that safety for read speed, and should be a decision rather than an accident.\n\nWhat this lesson covers\n\nRemove duplicated data and update anomalies\n\nRecognise when denormalisation is justified\n\nModel many-to-many relationships properly\n\nThis lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Remove duplicated data and update anomalies",
              "Recognise when denormalisation is justified",
              "Model many-to-many relationships properly"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-constraints-and-keys",
            "title": "Constraints, keys, and integrity",
            "slug": "postgresql-for-developers-constraints-and-keys",
            "videoUrl": "https://www.youtube.com/watch?v=5kiMg7GXAsY",
            "youtubeVideoId": "5kiMg7GXAsY",
            "thumbnailUrl": "https://i.ytimg.com/vi/5kiMg7GXAsY/hqdefault.jpg",
            "duration": 233,
            "durationFormatted": "3m 53s",
            "freePreview": false,
            "studentCount": 9433,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-constraints-and-keys-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-constraints-and-keys-intro-span",
                    "text": "Constraints are guarantees the database keeps even when a buggy deploy does not. Foreign keys, uniqueness, and checks belong in the schema.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-constraints-and-keys-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-constraints-and-keys-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-constraints-and-keys-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-constraints-and-keys-point-0-span",
                    "text": "Enforce relationships with foreign keys",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-constraints-and-keys-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-constraints-and-keys-point-1-span",
                    "text": "Use unique and check constraints as invariants",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-constraints-and-keys-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-constraints-and-keys-point-2-span",
                    "text": "Choose delete behaviour deliberately",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-constraints-and-keys-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-constraints-and-keys-outro-span",
                    "text": "This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Constraints are guarantees the database keeps even when a buggy deploy does not. Foreign keys, uniqueness, and checks belong in the schema.\n\nWhat this lesson covers\n\nEnforce relationships with foreign keys\n\nUse unique and check constraints as invariants\n\nChoose delete behaviour deliberately\n\nThis lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Enforce relationships with foreign keys",
              "Use unique and check constraints as invariants",
              "Choose delete behaviour deliberately"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-data-types-and-jsonb",
            "title": "Data types and JSONB",
            "slug": "postgresql-for-developers-data-types-and-jsonb",
            "videoUrl": "https://www.youtube.com/watch?v=PZFiThbuTFg",
            "youtubeVideoId": "PZFiThbuTFg",
            "thumbnailUrl": "https://i.ytimg.com/vi/PZFiThbuTFg/hqdefault.jpg",
            "duration": 754,
            "durationFormatted": "12m 34s",
            "freePreview": false,
            "studentCount": 8818,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-data-types-and-jsonb-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-data-types-and-jsonb-intro-span",
                    "text": "Postgres has rich types, and JSONB for the genuinely unstructured remainder. Reaching for JSONB too early throws away every guarantee above.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-data-types-and-jsonb-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-data-types-and-jsonb-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-data-types-and-jsonb-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-data-types-and-jsonb-point-0-span",
                    "text": "Pick precise types for time, money, and identifiers",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-data-types-and-jsonb-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-data-types-and-jsonb-point-1-span",
                    "text": "Use JSONB for genuinely variable data only",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-data-types-and-jsonb-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-data-types-and-jsonb-point-2-span",
                    "text": "Index inside a JSONB column when you must query it",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-data-types-and-jsonb-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-data-types-and-jsonb-outro-span",
                    "text": "This lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Postgres has rich types, and JSONB for the genuinely unstructured remainder. Reaching for JSONB too early throws away every guarantee above.\n\nWhat this lesson covers\n\nPick precise types for time, money, and identifiers\n\nUse JSONB for genuinely variable data only\n\nIndex inside a JSONB column when you must query it\n\nThis lesson sits in Schema Design, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Pick precise types for time, money, and identifiers",
              "Use JSONB for genuinely variable data only",
              "Index inside a JSONB column when you must query it"
            ],
            "proTip": "JSONB is for data whose shape you genuinely cannot know. It is not a shortcut past schema design.",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          }
        ]
      },
      {
        "id": "postgresql-for-developers-module-3",
        "title": "Query Performance",
        "summary": "Finding the slow query, understanding why it is slow, and fixing the actual cause.",
        "description": "Finding the slow query, understanding why it is slow, and fixing the actual cause.",
        "duration": "23m 2s",
        "lessons": [
          {
            "id": "lesson.postgresql-for-developers-indexes",
            "title": "How indexes work",
            "slug": "postgresql-for-developers-indexes",
            "videoUrl": "https://www.youtube.com/watch?v=NI9wYuVIYcA",
            "youtubeVideoId": "NI9wYuVIYcA",
            "thumbnailUrl": "https://i.ytimg.com/vi/NI9wYuVIYcA/hqdefault.jpg",
            "duration": 273,
            "durationFormatted": "4m 33s",
            "freePreview": false,
            "studentCount": 8204,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-indexes-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-indexes-intro-span",
                    "text": "An index is a sorted structure the planner may choose to use. Column order in a composite index decides which queries it can serve.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-indexes-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-indexes-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-indexes-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-indexes-point-0-span",
                    "text": "Understand B-tree indexes and column order",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-indexes-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-indexes-point-1-span",
                    "text": "Add partial and expression indexes where they fit",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-indexes-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-indexes-point-2-span",
                    "text": "Weigh the write cost of every index you add",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-indexes-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-indexes-outro-span",
                    "text": "This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "An index is a sorted structure the planner may choose to use. Column order in a composite index decides which queries it can serve.\n\nWhat this lesson covers\n\nUnderstand B-tree indexes and column order\n\nAdd partial and expression indexes where they fit\n\nWeigh the write cost of every index you add\n\nThis lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Understand B-tree indexes and column order",
              "Add partial and expression indexes where they fit",
              "Weigh the write cost of every index you add"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-explain-analyze",
            "title": "Reading EXPLAIN ANALYZE",
            "slug": "postgresql-for-developers-explain-analyze",
            "videoUrl": "https://www.youtube.com/watch?v=P7EUFtjeAmI",
            "youtubeVideoId": "P7EUFtjeAmI",
            "thumbnailUrl": "https://i.ytimg.com/vi/P7EUFtjeAmI/hqdefault.jpg",
            "duration": 617,
            "durationFormatted": "10m 17s",
            "freePreview": false,
            "studentCount": 7590,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-explain-analyze-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-explain-analyze-intro-span",
                    "text": "The plan tells you what the database did and what it expected. A large gap between estimated and actual rows is usually the real problem.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-explain-analyze-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-explain-analyze-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-explain-analyze-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-explain-analyze-point-0-span",
                    "text": "Read a plan from the innermost node outwards",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-explain-analyze-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-explain-analyze-point-1-span",
                    "text": "Spot sequential scans that should be index scans",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-explain-analyze-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-explain-analyze-point-2-span",
                    "text": "Compare estimated against actual row counts",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-explain-analyze-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-explain-analyze-outro-span",
                    "text": "This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The plan tells you what the database did and what it expected. A large gap between estimated and actual rows is usually the real problem.\n\nWhat this lesson covers\n\nRead a plan from the innermost node outwards\n\nSpot sequential scans that should be index scans\n\nCompare estimated against actual row counts\n\nThis lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Read a plan from the innermost node outwards",
              "Spot sequential scans that should be index scans",
              "Compare estimated against actual row counts"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-query-tuning",
            "title": "Tuning a slow query",
            "slug": "postgresql-for-developers-query-tuning",
            "videoUrl": "https://www.youtube.com/watch?v=YON9PliOYFk",
            "youtubeVideoId": "YON9PliOYFk",
            "thumbnailUrl": "https://i.ytimg.com/vi/YON9PliOYFk/hqdefault.jpg",
            "duration": 492,
            "durationFormatted": "8m 12s",
            "freePreview": false,
            "studentCount": 6975,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-query-tuning-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-query-tuning-intro-span",
                    "text": "Rewriting is often better than indexing. Remove the function on the indexed column, cut the rows early, and check the plan again.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-query-tuning-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-query-tuning-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-query-tuning-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-query-tuning-point-0-span",
                    "text": "Rewrite predicates so an index can be used",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-query-tuning-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-query-tuning-point-1-span",
                    "text": "Reduce the row count as early as possible",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-query-tuning-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-query-tuning-point-2-span",
                    "text": "Verify the improvement with a fresh plan",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-query-tuning-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-query-tuning-outro-span",
                    "text": "This lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Rewriting is often better than indexing. Remove the function on the indexed column, cut the rows early, and check the plan again.\n\nWhat this lesson covers\n\nRewrite predicates so an index can be used\n\nReduce the row count as early as possible\n\nVerify the improvement with a fresh plan\n\nThis lesson sits in Query Performance, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Rewrite predicates so an index can be used",
              "Reduce the row count as early as possible",
              "Verify the improvement with a fresh plan"
            ],
            "proTip": "Wrapping an indexed column in a function usually disables the index. Transform the parameter instead.",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          }
        ]
      },
      {
        "id": "postgresql-for-developers-module-4",
        "title": "Operating Postgres",
        "summary": "Transactions, schema change, and the operational habits that keep production boring.",
        "description": "Transactions, schema change, and the operational habits that keep production boring.",
        "duration": "1h 11m",
        "lessons": [
          {
            "id": "lesson.postgresql-for-developers-transactions-and-isolation",
            "title": "Transactions and isolation levels",
            "slug": "postgresql-for-developers-transactions-and-isolation",
            "videoUrl": "https://www.youtube.com/watch?v=G8wDjV0N9tk",
            "youtubeVideoId": "G8wDjV0N9tk",
            "thumbnailUrl": "https://i.ytimg.com/vi/G8wDjV0N9tk/hqdefault.jpg",
            "duration": 498,
            "durationFormatted": "8m 18s",
            "freePreview": false,
            "studentCount": 6361,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-transactions-and-isolation-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-transactions-and-isolatio-5ba691b3",
                    "text": "Isolation decides which concurrency anomalies you can still see. Read committed is the default, and it permits more than most people assume.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-transactions-and-isolation-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-transactions-and-isolation-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-transactions-and-isolation-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-transactions-and-isolatio-fdb279db",
                    "text": "Keep transactions short and correctly scoped",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-transactions-and-isolation-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-transactions-and-isolatio-6028c561",
                    "text": "Compare read committed, repeatable read, and serializable",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-transactions-and-isolation-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-transactions-and-isolatio-2d49ec8e",
                    "text": "Avoid deadlocks by ordering access consistently",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-transactions-and-isolation-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-transactions-and-isolatio-9369f42a",
                    "text": "This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Isolation decides which concurrency anomalies you can still see. Read committed is the default, and it permits more than most people assume.\n\nWhat this lesson covers\n\nKeep transactions short and correctly scoped\n\nCompare read committed, repeatable read, and serializable\n\nAvoid deadlocks by ordering access consistently\n\nThis lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Keep transactions short and correctly scoped",
              "Compare read committed, repeatable read, and serializable",
              "Avoid deadlocks by ordering access consistently"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-migrations",
            "title": "Schema migrations without downtime",
            "slug": "postgresql-for-developers-migrations",
            "videoUrl": "https://www.youtube.com/watch?v=mr_J5v398Qo",
            "youtubeVideoId": "mr_J5v398Qo",
            "thumbnailUrl": "https://i.ytimg.com/vi/mr_J5v398Qo/hqdefault.jpg",
            "duration": 1893,
            "durationFormatted": "31m 33s",
            "freePreview": false,
            "studentCount": 5747,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-migrations-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-migrations-intro-span",
                    "text": "A migration runs against a live application. Expand, migrate, contract lets you change a schema while both old and new code are running.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-migrations-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-migrations-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-migrations-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-migrations-point-0-span",
                    "text": "Apply the expand, migrate, contract pattern",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-migrations-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-migrations-point-1-span",
                    "text": "Avoid locks that block writes on large tables",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-migrations-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-migrations-point-2-span",
                    "text": "Make every migration reversible or forward-only on purpose",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-migrations-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-migrations-outro-span",
                    "text": "This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A migration runs against a live application. Expand, migrate, contract lets you change a schema while both old and new code are running.\n\nWhat this lesson covers\n\nApply the expand, migrate, contract pattern\n\nAvoid locks that block writes on large tables\n\nMake every migration reversible or forward-only on purpose\n\nThis lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Apply the expand, migrate, contract pattern",
              "Avoid locks that block writes on large tables",
              "Make every migration reversible or forward-only on purpose"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          },
          {
            "id": "lesson.postgresql-for-developers-backups-and-pooling",
            "title": "Backups and connection pooling",
            "slug": "postgresql-for-developers-backups-and-pooling",
            "videoUrl": "https://www.youtube.com/watch?v=9IcyoLxRAYY",
            "youtubeVideoId": "9IcyoLxRAYY",
            "thumbnailUrl": "https://i.ytimg.com/vi/9IcyoLxRAYY/hqdefault.jpg",
            "duration": 1872,
            "durationFormatted": "31m 12s",
            "freePreview": false,
            "studentCount": 5133,
            "notes": [
              {
                "_type": "block",
                "_key": "postgresql-for-developers-backups-and-pooling-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-backups-and-pooling-intro-span",
                    "text": "A backup you have never restored is a hypothesis. A pooler is what stops a few hundred idle app connections from exhausting the server.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-backups-and-pooling-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-backups-and-pooling-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-backups-and-pooling-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-backups-and-pooling-point-0-span",
                    "text": "Take backups and rehearse a restore",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-backups-and-pooling-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-backups-and-pooling-point-1-span",
                    "text": "Understand point-in-time recovery",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-backups-and-pooling-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-backups-and-pooling-point-2-span",
                    "text": "Pool connections in front of the database",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "postgresql-for-developers-backups-and-pooling-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "postgresql-for-developers-backups-and-pooling-outro-span",
                    "text": "This lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A backup you have never restored is a hypothesis. A pooler is what stops a few hundred idle app connections from exhausting the server.\n\nWhat this lesson covers\n\nTake backups and rehearse a restore\n\nUnderstand point-in-time recovery\n\nPool connections in front of the database\n\nThis lesson sits in Operating Postgres, part of PostgreSQL for Developers. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Take backups and rehearse a restore",
              "Understand point-in-time recovery",
              "Pool connections in front of the database"
            ],
            "proTip": "An untested backup is not a backup. Restore one on a schedule.",
            "resources": [
              {
                "type": "link",
                "title": "PostgreSQL documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://www.postgresql.org/docs/current/"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "code",
        "title": "Write serious SQL",
        "description": "Joins, aggregates, CTEs, and window functions, without reaching for the ORM every time."
      },
      {
        "icon": "layers",
        "title": "Design a schema that lasts",
        "description": "Normalise sensibly, use constraints as guarantees, and pick the right data types."
      },
      {
        "icon": "gauge",
        "title": "Make queries fast",
        "description": "Read a query plan and add the index that plan is asking for."
      },
      {
        "icon": "shield",
        "title": "Operate it safely",
        "description": "Transactions, migrations, backups, and pooling — the parts that matter at 3am."
      }
    ],
    "rating": 4.8,
    "reviews": 793,
    "enrolled": 11890,
    "studentsFormatted": "11.9k students",
    "price": 89,
    "isFree": false,
    "isFeatured": false,
    "language": "English",
    "instructor": {
      "name": "Daniel Okafor",
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "bio": "Daniel works on the layer where application code meets the database. He has spent years untangling type systems and query plans, usually in the same afternoon.\n\nHe believes most runtime bugs are modelling mistakes that were visible earlier, and he teaches both TypeScript and Postgres from that angle.",
      "expertise": [
        "TypeScript",
        "PostgreSQL",
        "API design",
        "Data modelling"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 9,
    "slug": "devops-with-docker-and-kubernetes",
    "title": "DevOps with Docker and Kubernetes",
    "description": "Containerise an application, run it on Kubernetes, ship it through a pipeline, and operate it once it is live.",
    "category": "Backend & Infrastructure",
    "tag": "Backend & Infrastructure",
    "imgUrl": "https://picsum.photos/seed/vertex-devops-with-docker-and-kubernetes/1600/900",
    "level": "Advanced",
    "duration": 160,
    "durationFormatted": "2h 39m",
    "modules": [
      {
        "id": "devops-with-docker-and-kubernetes-module-1",
        "title": "Containers and Images",
        "summary": "What a container actually is, and how to build images that are small, fast, and reproducible.",
        "description": "What a container actually is, and how to build images that are small, fast, and reproducible.",
        "duration": "28m 5s",
        "lessons": [
          {
            "id": "lesson.devops-with-docker-and-kubernetes-docker-images-and-dockerfiles",
            "title": "Images, containers, and Dockerfiles",
            "slug": "devops-with-docker-and-kubernetes-docker-images-and-dockerfiles",
            "videoUrl": "https://www.youtube.com/watch?v=SnSH8Ht3MIc",
            "youtubeVideoId": "SnSH8Ht3MIc",
            "thumbnailUrl": "https://i.ytimg.com/vi/SnSH8Ht3MIc/hqdefault.jpg",
            "duration": 1100,
            "durationFormatted": "18m 20s",
            "freePreview": true,
            "studentCount": 8640,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-images-and-b3dc00e8",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-images-and-3629d8c9",
                    "text": "An image is a stacked filesystem plus metadata; a container is a running instance of one. Every Dockerfile instruction is a layer.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-images-and-3c1154b1",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-images-and-f9da650f",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-images-and-c1d0d4cd",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-images-and-87c9b52b",
                    "text": "Distinguish an image from a running container",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-images-and-083793c6",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-images-and-31b1126b",
                    "text": "Write a Dockerfile that builds reproducibly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-images-and-cb2267b8",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-images-and-7a014141",
                    "text": "Choose a base image deliberately",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-images-and-a3913927",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-images-and-d46d2dfc",
                    "text": "This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "An image is a stacked filesystem plus metadata; a container is a running instance of one. Every Dockerfile instruction is a layer.\n\nWhat this lesson covers\n\nDistinguish an image from a running container\n\nWrite a Dockerfile that builds reproducibly\n\nChoose a base image deliberately\n\nThis lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Distinguish an image from a running container",
              "Write a Dockerfile that builds reproducibly",
              "Choose a base image deliberately"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-layers-and-build-cache",
            "title": "Layers, caching, and multi-stage builds",
            "slug": "devops-with-docker-and-kubernetes-layers-and-build-cache",
            "videoUrl": "https://www.youtube.com/watch?v=_Q9KSFUZH0c",
            "youtubeVideoId": "_Q9KSFUZH0c",
            "thumbnailUrl": "https://i.ytimg.com/vi/_Q9KSFUZH0c/hqdefault.jpg",
            "duration": 391,
            "durationFormatted": "6m 31s",
            "freePreview": false,
            "studentCount": 8194,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-layers-and-build-7e6fda87",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-layers-and-build-fb530e45",
                    "text": "Instruction order decides your build time. Copy dependency manifests before source, and use a multi-stage build to leave the toolchain behind.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-layers-and-build-cache-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-layers-and-build-b1026f25",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-layers-and-build-892dd033",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-layers-and-build-e5fd7c81",
                    "text": "Order instructions so the cache survives code changes",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-layers-and-build-3d9b50a6",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-layers-and-build-8523dff0",
                    "text": "Separate build and runtime with multi-stage builds",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-layers-and-build-5b9e4761",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-layers-and-build-15a9f822",
                    "text": "Cut image size and shrink the attack surface",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-layers-and-build-f8bca6ac",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-layers-and-build-a4caaa06",
                    "text": "This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Instruction order decides your build time. Copy dependency manifests before source, and use a multi-stage build to leave the toolchain behind.\n\nWhat this lesson covers\n\nOrder instructions so the cache survives code changes\n\nSeparate build and runtime with multi-stage builds\n\nCut image size and shrink the attack surface\n\nThis lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Order instructions so the cache survives code changes",
              "Separate build and runtime with multi-stage builds",
              "Cut image size and shrink the attack surface"
            ],
            "proTip": "Copy your lockfile and install dependencies before copying source. Otherwise every edit invalidates the install layer.",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-docker-compose",
            "title": "Local stacks with Compose",
            "slug": "devops-with-docker-and-kubernetes-docker-compose",
            "videoUrl": "https://www.youtube.com/watch?v=iTL3Edxzgug",
            "youtubeVideoId": "iTL3Edxzgug",
            "thumbnailUrl": "https://i.ytimg.com/vi/iTL3Edxzgug/hqdefault.jpg",
            "duration": 194,
            "durationFormatted": "3m 14s",
            "freePreview": false,
            "studentCount": 7747,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-compose-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-compose-intro-span",
                    "text": "Compose runs your app together with its database and cache, with one file describing the whole local environment.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-compose-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-compose-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-compose-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-compose-po-f89a2e11",
                    "text": "Define multi-service stacks in one file",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-compose-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-compose-po-ef676074",
                    "text": "Wire up networks, volumes, and environment variables",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-compose-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-compose-po-68781280",
                    "text": "Keep local configuration close to production",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-docker-compose-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-docker-compose-outro-span",
                    "text": "This lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Compose runs your app together with its database and cache, with one file describing the whole local environment.\n\nWhat this lesson covers\n\nDefine multi-service stacks in one file\n\nWire up networks, volumes, and environment variables\n\nKeep local configuration close to production\n\nThis lesson sits in Containers and Images, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Define multi-service stacks in one file",
              "Wire up networks, volumes, and environment variables",
              "Keep local configuration close to production"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          }
        ]
      },
      {
        "id": "devops-with-docker-and-kubernetes-module-2",
        "title": "Kubernetes Core Objects",
        "summary": "The handful of objects you need before any of the rest of Kubernetes makes sense.",
        "description": "The handful of objects you need before any of the rest of Kubernetes makes sense.",
        "duration": "29m 3s",
        "lessons": [
          {
            "id": "lesson.devops-with-docker-and-kubernetes-pods-and-deployments",
            "title": "Pods, ReplicaSets, and Deployments",
            "slug": "devops-with-docker-and-kubernetes-pods-and-deployments",
            "videoUrl": "https://www.youtube.com/watch?v=TlHvYWVUZyc",
            "youtubeVideoId": "TlHvYWVUZyc",
            "thumbnailUrl": "https://i.ytimg.com/vi/TlHvYWVUZyc/hqdefault.jpg",
            "duration": 388,
            "durationFormatted": "6m 28s",
            "freePreview": false,
            "studentCount": 7301,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-pods-and-deployments-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-2e3afb32",
                    "text": "You declare a desired state and the controller works towards it. A Deployment is how you express \"n copies of this, updated this way\".",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-pods-and-deployments-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-61b9b3e0",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-7d9dbf23",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-b295a5c3",
                    "text": "Read the pod, ReplicaSet, and Deployment relationship",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-2eabccb2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-a55aa894",
                    "text": "Declare desired state and let controllers converge",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-39ac5110",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-5323be34",
                    "text": "Configure readiness and liveness probes",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-pods-and-deployments-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-pods-and-deployme-a38ada3e",
                    "text": "This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "You declare a desired state and the controller works towards it. A Deployment is how you express \"n copies of this, updated this way\".\n\nWhat this lesson covers\n\nRead the pod, ReplicaSet, and Deployment relationship\n\nDeclare desired state and let controllers converge\n\nConfigure readiness and liveness probes\n\nThis lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Read the pod, ReplicaSet, and Deployment relationship",
              "Declare desired state and let controllers converge",
              "Configure readiness and liveness probes"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-services-and-ingress",
            "title": "Services and ingress",
            "slug": "devops-with-docker-and-kubernetes-services-and-ingress",
            "videoUrl": "https://www.youtube.com/watch?v=NPFbYpb0I7w",
            "youtubeVideoId": "NPFbYpb0I7w",
            "thumbnailUrl": "https://i.ytimg.com/vi/NPFbYpb0I7w/hqdefault.jpg",
            "duration": 341,
            "durationFormatted": "5m 41s",
            "freePreview": false,
            "studentCount": 6854,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-services-and-ingress-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-services-and-ingr-b61a02d5",
                    "text": "Pods come and go, so Services give them a stable address. Ingress is what puts an HTTP route in front of that.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-services-and-ingress-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-services-and-ingr-365711e4",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-services-and-ingr-7fefc0ca",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-services-and-ingr-36c50472",
                    "text": "Expose pods with a stable service address",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-services-and-ingr-07afb31e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-services-and-ingr-41350034",
                    "text": "Compare ClusterIP, NodePort, and LoadBalancer",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-services-and-ingr-c7ba2fb7",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-services-and-ingr-0c13566e",
                    "text": "Route external HTTP traffic with ingress rules",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-services-and-ingress-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-services-and-ingr-fd27d648",
                    "text": "This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Pods come and go, so Services give them a stable address. Ingress is what puts an HTTP route in front of that.\n\nWhat this lesson covers\n\nExpose pods with a stable service address\n\nCompare ClusterIP, NodePort, and LoadBalancer\n\nRoute external HTTP traffic with ingress rules\n\nThis lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Expose pods with a stable service address",
              "Compare ClusterIP, NodePort, and LoadBalancer",
              "Route external HTTP traffic with ingress rules"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-configmaps-and-secrets",
            "title": "ConfigMaps and Secrets",
            "slug": "devops-with-docker-and-kubernetes-configmaps-and-secrets",
            "videoUrl": "https://www.youtube.com/watch?v=FAnQTgr04mU",
            "youtubeVideoId": "FAnQTgr04mU",
            "thumbnailUrl": "https://i.ytimg.com/vi/FAnQTgr04mU/hqdefault.jpg",
            "duration": 1014,
            "durationFormatted": "16m 54s",
            "freePreview": false,
            "studentCount": 6408,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-5c98a212",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-dafe8f0e",
                    "text": "Configuration belongs outside the image. Secrets look like ConfigMaps but need encryption at rest and tighter access control.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-configmaps-and-secrets-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-9db99381",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-97c41afa",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-5dff5c62",
                    "text": "Inject configuration as environment variables or files",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-e71a047d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-812d35f7",
                    "text": "Keep secrets out of images and manifests",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-986a4176",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-241ee1b2",
                    "text": "Roll configuration changes without rebuilding",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-96843072",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-configmaps-and-se-e3d9e3e2",
                    "text": "This lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Configuration belongs outside the image. Secrets look like ConfigMaps but need encryption at rest and tighter access control.\n\nWhat this lesson covers\n\nInject configuration as environment variables or files\n\nKeep secrets out of images and manifests\n\nRoll configuration changes without rebuilding\n\nThis lesson sits in Kubernetes Core Objects, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Inject configuration as environment variables or files",
              "Keep secrets out of images and manifests",
              "Roll configuration changes without rebuilding"
            ],
            "proTip": "A Kubernetes Secret is only base64 encoded by default. Encryption at rest and RBAC are what make it a secret.",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          }
        ]
      },
      {
        "id": "devops-with-docker-and-kubernetes-module-3",
        "title": "Continuous Delivery",
        "summary": "The automated path from a merged commit to running code, including the way back.",
        "description": "The automated path from a merged commit to running code, including the way back.",
        "duration": "37m 23s",
        "lessons": [
          {
            "id": "lesson.devops-with-docker-and-kubernetes-ci-cd-pipelines",
            "title": "Building a CI/CD pipeline",
            "slug": "devops-with-docker-and-kubernetes-ci-cd-pipelines",
            "videoUrl": "https://www.youtube.com/watch?v=YLtlz88zrLg",
            "youtubeVideoId": "YLtlz88zrLg",
            "thumbnailUrl": "https://i.ytimg.com/vi/YLtlz88zrLg/hqdefault.jpg",
            "duration": 373,
            "durationFormatted": "6m 13s",
            "freePreview": false,
            "studentCount": 5962,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-intro-span",
                    "text": "A pipeline runs the same steps every time: test, build, push, deploy. Its value is the consistency, not the automation.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-p-e2750111",
                    "text": "Structure test, build, and deploy stages",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-p-6f7469e0",
                    "text": "Cache dependencies to keep pipelines quick",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-p-ba4364c7",
                    "text": "Gate deploys on checks that genuinely matter",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-ci-cd-pipelines-outro-span",
                    "text": "This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A pipeline runs the same steps every time: test, build, push, deploy. Its value is the consistency, not the automation.\n\nWhat this lesson covers\n\nStructure test, build, and deploy stages\n\nCache dependencies to keep pipelines quick\n\nGate deploys on checks that genuinely matter\n\nThis lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Structure test, build, and deploy stages",
              "Cache dependencies to keep pipelines quick",
              "Gate deploys on checks that genuinely matter"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-rolling-deploys-and-rollbacks",
            "title": "Rolling deploys and rollbacks",
            "slug": "devops-with-docker-and-kubernetes-rolling-deploys-and-rollbacks",
            "videoUrl": "https://www.youtube.com/watch?v=wWA9JgAvuqw",
            "youtubeVideoId": "wWA9JgAvuqw",
            "thumbnailUrl": "https://i.ytimg.com/vi/wWA9JgAvuqw/hqdefault.jpg",
            "duration": 524,
            "durationFormatted": "8m 44s",
            "freePreview": false,
            "studentCount": 5515,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-11058e49",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-9b9db319",
                    "text": "A rolling update replaces pods gradually so there is no downtime. The important half is being able to reverse it in seconds.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-b3dd9005",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-2f5597af",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-ea31e6d4",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-4ea4f738",
                    "text": "Configure a rolling update and its surge settings",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-bf30d8c5",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-2baf4728",
                    "text": "Compare rolling, blue-green, and canary strategies",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-2228a32e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-435ade6f",
                    "text": "Roll back quickly and predictably",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-e26d4c5e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-rolling-deploys-a-5a255889",
                    "text": "This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A rolling update replaces pods gradually so there is no downtime. The important half is being able to reverse it in seconds.\n\nWhat this lesson covers\n\nConfigure a rolling update and its surge settings\n\nCompare rolling, blue-green, and canary strategies\n\nRoll back quickly and predictably\n\nThis lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Configure a rolling update and its surge settings",
              "Compare rolling, blue-green, and canary strategies",
              "Roll back quickly and predictably"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-helm",
            "title": "Packaging with Helm",
            "slug": "devops-with-docker-and-kubernetes-helm",
            "videoUrl": "https://www.youtube.com/watch?v=jUYNS90nq8U",
            "youtubeVideoId": "jUYNS90nq8U",
            "thumbnailUrl": "https://i.ytimg.com/vi/jUYNS90nq8U/hqdefault.jpg",
            "duration": 1346,
            "durationFormatted": "22m 26s",
            "freePreview": false,
            "studentCount": 5069,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-helm-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-helm-intro-span",
                    "text": "Helm templates your manifests so one chart serves staging and production with different values, instead of four near-identical YAML directories.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-helm-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-helm-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-helm-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-helm-point-0-span",
                    "text": "Template manifests and separate values per environment",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-helm-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-helm-point-1-span",
                    "text": "Install, upgrade, and roll back a release",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-helm-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-helm-point-2-span",
                    "text": "Manage chart dependencies",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-helm-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-helm-outro-span",
                    "text": "This lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Helm templates your manifests so one chart serves staging and production with different values, instead of four near-identical YAML directories.\n\nWhat this lesson covers\n\nTemplate manifests and separate values per environment\n\nInstall, upgrade, and roll back a release\n\nManage chart dependencies\n\nThis lesson sits in Continuous Delivery, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Template manifests and separate values per environment",
              "Install, upgrade, and roll back a release",
              "Manage chart dependencies"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          }
        ]
      },
      {
        "id": "devops-with-docker-and-kubernetes-module-4",
        "title": "Operating a Cluster",
        "summary": "Life after the first deploy: visibility, scaling, and debugging what is actually running.",
        "description": "Life after the first deploy: visibility, scaling, and debugging what is actually running.",
        "duration": "1h 5m",
        "lessons": [
          {
            "id": "lesson.devops-with-docker-and-kubernetes-monitoring-and-logs",
            "title": "Monitoring and logs",
            "slug": "devops-with-docker-and-kubernetes-monitoring-and-logs",
            "videoUrl": "https://www.youtube.com/watch?v=gBdyIv9d_O8",
            "youtubeVideoId": "gBdyIv9d_O8",
            "thumbnailUrl": "https://i.ytimg.com/vi/gBdyIv9d_O8/hqdefault.jpg",
            "duration": 1908,
            "durationFormatted": "31m 48s",
            "freePreview": false,
            "studentCount": 4622,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-monitoring-and-logs-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-bc8b9a90",
                    "text": "Container logs vanish with the container. Ship them somewhere, scrape metrics, and alert on what users would notice.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-monitoring-and-logs-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-a0b535d7",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-3001f75b",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-035487ab",
                    "text": "Aggregate logs off ephemeral pods",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-c1921f16",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-7268e9b9",
                    "text": "Scrape and dashboard cluster and app metrics",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-e90e004e",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-ada95d95",
                    "text": "Alert on user-visible symptoms",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-monitoring-and-logs-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-monitoring-and-lo-a9758322",
                    "text": "This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Container logs vanish with the container. Ship them somewhere, scrape metrics, and alert on what users would notice.\n\nWhat this lesson covers\n\nAggregate logs off ephemeral pods\n\nScrape and dashboard cluster and app metrics\n\nAlert on user-visible symptoms\n\nThis lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Aggregate logs off ephemeral pods",
              "Scrape and dashboard cluster and app metrics",
              "Alert on user-visible symptoms"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-autoscaling",
            "title": "Autoscaling workloads",
            "slug": "devops-with-docker-and-kubernetes-autoscaling",
            "videoUrl": "https://www.youtube.com/watch?v=dRC-5Z2p7Ns",
            "youtubeVideoId": "dRC-5Z2p7Ns",
            "thumbnailUrl": "https://i.ytimg.com/vi/dRC-5Z2p7Ns/hqdefault.jpg",
            "duration": 1685,
            "durationFormatted": "28m 5s",
            "freePreview": false,
            "studentCount": 4176,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-autoscaling-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-autoscaling-intro-span",
                    "text": "Horizontal autoscaling adds pods when a metric crosses a threshold. It only works if requests are set and your app starts quickly.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-autoscaling-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-autoscaling-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-autoscaling-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-autoscaling-point-0-span",
                    "text": "Scale pods on CPU or custom metrics",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-autoscaling-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-autoscaling-point-1-span",
                    "text": "Tune thresholds to avoid flapping",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-autoscaling-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-autoscaling-point-2-span",
                    "text": "Combine pod autoscaling with cluster autoscaling",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-autoscaling-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-autoscaling-outro-span",
                    "text": "This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Horizontal autoscaling adds pods when a metric crosses a threshold. It only works if requests are set and your app starts quickly.\n\nWhat this lesson covers\n\nScale pods on CPU or custom metrics\n\nTune thresholds to avoid flapping\n\nCombine pod autoscaling with cluster autoscaling\n\nThis lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Scale pods on CPU or custom metrics",
              "Tune thresholds to avoid flapping",
              "Combine pod autoscaling with cluster autoscaling"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          },
          {
            "id": "lesson.devops-with-docker-and-kubernetes-resource-limits-and-troubleshooting",
            "title": "Resource limits and troubleshooting",
            "slug": "devops-with-docker-and-kubernetes-resource-limits-and-troubleshooting",
            "videoUrl": "https://www.youtube.com/watch?v=JLw_pHLCN4Y",
            "youtubeVideoId": "JLw_pHLCN4Y",
            "thumbnailUrl": "https://i.ytimg.com/vi/JLw_pHLCN4Y/hqdefault.jpg",
            "duration": 308,
            "durationFormatted": "5m 8s",
            "freePreview": false,
            "studentCount": 3730,
            "notes": [
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-resource-limits-a-a75a0710",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-resource-limits-a-e1e2c096",
                    "text": "Requests drive scheduling, limits drive eviction. CrashLoopBackOff and OOMKilled are usually a limits conversation, not a code one.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-resource-limits-a-7f8db7c0",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-resource-limits-a-1261efcb",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-resource-limits-a-da94de87",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-resource-limits-a-62b261e9",
                    "text": "Set requests and limits that reflect real usage",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-resource-limits-a-ea3b33bf",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-resource-limits-a-aa221c26",
                    "text": "Diagnose CrashLoopBackOff and OOMKilled pods",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-resource-limits-a-b7a822d1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-resource-limits-a-92a9bd94",
                    "text": "Debug a pod with logs, describe, and exec",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "devops-with-docker-and-kubernetes-resource-limits-a-d7bded8d",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "devops-with-docker-and-kubernetes-resource-limits-a-57bf9ab9",
                    "text": "This lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Requests drive scheduling, limits drive eviction. CrashLoopBackOff and OOMKilled are usually a limits conversation, not a code one.\n\nWhat this lesson covers\n\nSet requests and limits that reflect real usage\n\nDiagnose CrashLoopBackOff and OOMKilled pods\n\nDebug a pod with logs, describe, and exec\n\nThis lesson sits in Operating a Cluster, part of DevOps with Docker and Kubernetes. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Set requests and limits that reflect real usage",
              "Diagnose CrashLoopBackOff and OOMKilled pods",
              "Debug a pod with logs, describe, and exec"
            ],
            "proTip": "Requests decide where a pod is scheduled; limits decide when it gets killed. They are not the same number.",
            "resources": [
              {
                "type": "link",
                "title": "Kubernetes documentation",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://kubernetes.io/docs/home/"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "layers",
        "title": "Build lean images",
        "description": "Write Dockerfiles that cache well and produce small, reproducible images."
      },
      {
        "icon": "workflow",
        "title": "Run workloads on Kubernetes",
        "description": "Deployments, services, ingress, and configuration, without cargo-culting YAML."
      },
      {
        "icon": "rocket",
        "title": "Automate delivery",
        "description": "Build a pipeline that tests, builds, and rolls out — and rolls back when it should."
      },
      {
        "icon": "gauge",
        "title": "Operate what you deployed",
        "description": "Monitor, scale, and debug a running cluster with limits that make sense."
      }
    ],
    "rating": 4.9,
    "reviews": 576,
    "enrolled": 8640,
    "studentsFormatted": "8.6k students",
    "price": 139,
    "isFree": false,
    "isFeatured": false,
    "language": "English",
    "instructor": {
      "name": "Alina Costa",
      "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
      "bio": "Alina runs the path from a developer laptop to production and everything that can go wrong along it — build pipelines, orchestration, secrets, and the attack surface all of it creates.\n\nShe teaches operations and security together, on the grounds that a system nobody can deploy safely is not actually secure.",
      "expertise": [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Application security"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  },
  {
    "id": 10,
    "slug": "practical-web-security",
    "title": "Practical Web Security",
    "description": "The vulnerabilities that actually show up in web applications, how they are exploited, and how to close them for good.",
    "category": "Security",
    "tag": "Security",
    "imgUrl": "https://picsum.photos/seed/vertex-practical-web-security/1600/900",
    "level": "Intermediate",
    "duration": 120,
    "durationFormatted": "1h 59m",
    "modules": [
      {
        "id": "practical-web-security-module-1",
        "title": "Thinking About Threats",
        "summary": "Before any specific vulnerability: who is attacking, what they want, and what secure defaults look like.",
        "description": "Before any specific vulnerability: who is attacking, what they want, and what secure defaults look like.",
        "duration": "23m 35s",
        "lessons": [
          {
            "id": "lesson.practical-web-security-owasp-top-ten",
            "title": "The OWASP Top 10, practically",
            "slug": "practical-web-security-owasp-top-ten",
            "videoUrl": "https://www.youtube.com/watch?v=wUaeKEl1RCw",
            "youtubeVideoId": "wUaeKEl1RCw",
            "thumbnailUrl": "https://i.ytimg.com/vi/wUaeKEl1RCw/hqdefault.jpg",
            "duration": 898,
            "durationFormatted": "14m 58s",
            "freePreview": true,
            "studentCount": 13270,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-owasp-top-ten-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-owasp-top-ten-intro-span",
                    "text": "The Top 10 is a map of where things actually go wrong. Reading it as categories rather than a checklist is what makes it useful.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-owasp-top-ten-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-owasp-top-ten-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-owasp-top-ten-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-owasp-top-ten-point-0-span",
                    "text": "Recognise each category in real application code",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-owasp-top-ten-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-owasp-top-ten-point-1-span",
                    "text": "Prioritise by exploitability and impact",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-owasp-top-ten-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-owasp-top-ten-point-2-span",
                    "text": "Use it as a review lens rather than a checklist",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-owasp-top-ten-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-owasp-top-ten-outro-span",
                    "text": "This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "The Top 10 is a map of where things actually go wrong. Reading it as categories rather than a checklist is what makes it useful.\n\nWhat this lesson covers\n\nRecognise each category in real application code\n\nPrioritise by exploitability and impact\n\nUse it as a review lens rather than a checklist\n\nThis lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Recognise each category in real application code",
              "Prioritise by exploitability and impact",
              "Use it as a review lens rather than a checklist"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-authentication-vs-authorization",
            "title": "Authentication versus authorization",
            "slug": "practical-web-security-authentication-vs-authorization",
            "videoUrl": "https://www.youtube.com/watch?v=7ijBiXddB7w",
            "youtubeVideoId": "7ijBiXddB7w",
            "thumbnailUrl": "https://i.ytimg.com/vi/7ijBiXddB7w/hqdefault.jpg",
            "duration": 221,
            "durationFormatted": "3m 41s",
            "freePreview": false,
            "studentCount": 12584,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-authentication-vs-authorization-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-authentication-vs-authorizat-c299d50d",
                    "text": "Authentication is who you are; authorization is what you may do. Broken access control is consistently the most common serious finding.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-authentication-vs-authorization-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-authentication-vs-authorizat-e94fe7b3",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-authentication-vs-authorizat-82df85e3",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-authentication-vs-authorizat-a1bdbfda",
                    "text": "Separate identity from permission checks",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-authentication-vs-authorizat-e734187c",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-authentication-vs-authorizat-6c218555",
                    "text": "Enforce authorization on the server, every time",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-authentication-vs-authorizat-97cd18c8",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-authentication-vs-authorizat-431218e6",
                    "text": "Catch insecure direct object references",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-authentication-vs-authorization-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-authentication-vs-authorizat-9aa66d04",
                    "text": "This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Authentication is who you are; authorization is what you may do. Broken access control is consistently the most common serious finding.\n\nWhat this lesson covers\n\nSeparate identity from permission checks\n\nEnforce authorization on the server, every time\n\nCatch insecure direct object references\n\nThis lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Separate identity from permission checks",
              "Enforce authorization on the server, every time",
              "Catch insecure direct object references"
            ],
            "proTip": "Every authorization check must happen on the server. A hidden button is not a permission.",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-secure-defaults",
            "title": "Secure defaults and least privilege",
            "slug": "practical-web-security-secure-defaults",
            "videoUrl": "https://www.youtube.com/watch?v=130ioey4isw",
            "youtubeVideoId": "130ioey4isw",
            "thumbnailUrl": "https://i.ytimg.com/vi/130ioey4isw/hqdefault.jpg",
            "duration": 296,
            "durationFormatted": "4m 56s",
            "freePreview": false,
            "studentCount": 11899,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-secure-defaults-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secure-defaults-intro-span",
                    "text": "Most breaches exploit something that was left open rather than something clever. Default deny, then grant the narrow thing that is needed.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secure-defaults-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secure-defaults-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secure-defaults-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secure-defaults-point-0-span",
                    "text": "Default to deny and grant explicitly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secure-defaults-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secure-defaults-point-1-span",
                    "text": "Scope credentials to the minimum they need",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secure-defaults-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secure-defaults-point-2-span",
                    "text": "Reduce attack surface by removing unused paths",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secure-defaults-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secure-defaults-outro-span",
                    "text": "This lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Most breaches exploit something that was left open rather than something clever. Default deny, then grant the narrow thing that is needed.\n\nWhat this lesson covers\n\nDefault to deny and grant explicitly\n\nScope credentials to the minimum they need\n\nReduce attack surface by removing unused paths\n\nThis lesson sits in Thinking About Threats, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Default to deny and grant explicitly",
              "Scope credentials to the minimum they need",
              "Reduce attack surface by removing unused paths"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          }
        ]
      },
      {
        "id": "practical-web-security-module-2",
        "title": "Common Web Vulnerabilities",
        "summary": "The three classic classes, how each is exploited, and the defence that genuinely works.",
        "description": "The three classic classes, how each is exploited, and the defence that genuinely works.",
        "duration": "32m 43s",
        "lessons": [
          {
            "id": "lesson.practical-web-security-cross-site-scripting",
            "title": "Cross-site scripting (XSS)",
            "slug": "practical-web-security-cross-site-scripting",
            "videoUrl": "https://www.youtube.com/watch?v=pD6C1-zSxIM",
            "youtubeVideoId": "pD6C1-zSxIM",
            "thumbnailUrl": "https://i.ytimg.com/vi/pD6C1-zSxIM/hqdefault.jpg",
            "duration": 1112,
            "durationFormatted": "18m 32s",
            "freePreview": false,
            "studentCount": 11213,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-cross-site-scripting-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-cross-site-scripting-intro-span",
                    "text": "XSS is attacker-controlled content executing as script in your page. Contextual output encoding is the fix; blocklists are not.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-cross-site-scripting-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-cross-site-scripting-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-cross-site-scripting-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-cross-site-scripting-point-0-span",
                    "text": "Tell stored, reflected, and DOM-based XSS apart",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-cross-site-scripting-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-cross-site-scripting-point-1-span",
                    "text": "Encode output for the context it lands in",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-cross-site-scripting-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-cross-site-scripting-point-2-span",
                    "text": "Constrain script sources with a content security policy",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-cross-site-scripting-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-cross-site-scripting-outro-span",
                    "text": "This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "XSS is attacker-controlled content executing as script in your page. Contextual output encoding is the fix; blocklists are not.\n\nWhat this lesson covers\n\nTell stored, reflected, and DOM-based XSS apart\n\nEncode output for the context it lands in\n\nConstrain script sources with a content security policy\n\nThis lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Tell stored, reflected, and DOM-based XSS apart",
              "Encode output for the context it lands in",
              "Constrain script sources with a content security policy"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-sql-injection",
            "title": "SQL injection",
            "slug": "practical-web-security-sql-injection",
            "videoUrl": "https://www.youtube.com/watch?v=AOXMDbc11AE",
            "youtubeVideoId": "AOXMDbc11AE",
            "thumbnailUrl": "https://i.ytimg.com/vi/AOXMDbc11AE/hqdefault.jpg",
            "duration": 254,
            "durationFormatted": "4m 14s",
            "freePreview": false,
            "studentCount": 10528,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-sql-injection-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sql-injection-intro-span",
                    "text": "Injection happens when data becomes part of the query. Parameterised queries keep the two separate, and they are not optional.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sql-injection-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sql-injection-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sql-injection-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sql-injection-point-0-span",
                    "text": "See how concatenated input changes a query",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sql-injection-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sql-injection-point-1-span",
                    "text": "Use parameterised queries everywhere",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sql-injection-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sql-injection-point-2-span",
                    "text": "Limit database privileges to contain the damage",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sql-injection-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sql-injection-outro-span",
                    "text": "This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Injection happens when data becomes part of the query. Parameterised queries keep the two separate, and they are not optional.\n\nWhat this lesson covers\n\nSee how concatenated input changes a query\n\nUse parameterised queries everywhere\n\nLimit database privileges to contain the damage\n\nThis lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "See how concatenated input changes a query",
              "Use parameterised queries everywhere",
              "Limit database privileges to contain the damage"
            ],
            "proTip": "Never build a query with string concatenation. Parameters are the whole defence, not a style preference.",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-csrf",
            "title": "Cross-site request forgery",
            "slug": "practical-web-security-csrf",
            "videoUrl": "https://www.youtube.com/watch?v=80S8h5hEwTY",
            "youtubeVideoId": "80S8h5hEwTY",
            "thumbnailUrl": "https://i.ytimg.com/vi/80S8h5hEwTY/hqdefault.jpg",
            "duration": 597,
            "durationFormatted": "9m 57s",
            "freePreview": false,
            "studentCount": 9842,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-csrf-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-csrf-intro-span",
                    "text": "CSRF makes a logged-in user’s browser send a request they never intended. SameSite cookies and anti-forgery tokens close it.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-csrf-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-csrf-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-csrf-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-csrf-point-0-span",
                    "text": "Understand how an ambient credential is abused",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-csrf-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-csrf-point-1-span",
                    "text": "Set SameSite cookie attributes correctly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-csrf-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-csrf-point-2-span",
                    "text": "Validate anti-forgery tokens on state-changing requests",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-csrf-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-csrf-outro-span",
                    "text": "This lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "CSRF makes a logged-in user’s browser send a request they never intended. SameSite cookies and anti-forgery tokens close it.\n\nWhat this lesson covers\n\nUnderstand how an ambient credential is abused\n\nSet SameSite cookie attributes correctly\n\nValidate anti-forgery tokens on state-changing requests\n\nThis lesson sits in Common Web Vulnerabilities, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Understand how an ambient credential is abused",
              "Set SameSite cookie attributes correctly",
              "Validate anti-forgery tokens on state-changing requests"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          }
        ]
      },
      {
        "id": "practical-web-security-module-3",
        "title": "Authentication Done Right",
        "summary": "Identity handled properly: session strategy, credential storage, and additional factors.",
        "description": "Identity handled properly: session strategy, credential storage, and additional factors.",
        "duration": "23m",
        "lessons": [
          {
            "id": "lesson.practical-web-security-sessions-vs-jwt",
            "title": "Sessions versus JWTs",
            "slug": "practical-web-security-sessions-vs-jwt",
            "videoUrl": "https://www.youtube.com/watch?v=z9-_YQWxwJ4",
            "youtubeVideoId": "z9-_YQWxwJ4",
            "thumbnailUrl": "https://i.ytimg.com/vi/z9-_YQWxwJ4/hqdefault.jpg",
            "duration": 492,
            "durationFormatted": "8m 12s",
            "freePreview": false,
            "studentCount": 9156,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-sessions-vs-jwt-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sessions-vs-jwt-intro-span",
                    "text": "Server sessions are revocable; JWTs are stateless and awkward to revoke. Pick based on whether you need to log someone out immediately.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sessions-vs-jwt-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sessions-vs-jwt-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sessions-vs-jwt-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sessions-vs-jwt-point-0-span",
                    "text": "Compare revocability and statelessness honestly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sessions-vs-jwt-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sessions-vs-jwt-point-1-span",
                    "text": "Store tokens in cookies with the right flags",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sessions-vs-jwt-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sessions-vs-jwt-point-2-span",
                    "text": "Design refresh and logout before you ship",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-sessions-vs-jwt-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-sessions-vs-jwt-outro-span",
                    "text": "This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Server sessions are revocable; JWTs are stateless and awkward to revoke. Pick based on whether you need to log someone out immediately.\n\nWhat this lesson covers\n\nCompare revocability and statelessness honestly\n\nStore tokens in cookies with the right flags\n\nDesign refresh and logout before you ship\n\nThis lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Compare revocability and statelessness honestly",
              "Store tokens in cookies with the right flags",
              "Design refresh and logout before you ship"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-password-storage",
            "title": "Password storage and hashing",
            "slug": "practical-web-security-password-storage",
            "videoUrl": "https://www.youtube.com/watch?v=qgpsIBLvrGY",
            "youtubeVideoId": "qgpsIBLvrGY",
            "thumbnailUrl": "https://i.ytimg.com/vi/qgpsIBLvrGY/hqdefault.jpg",
            "duration": 616,
            "durationFormatted": "10m 16s",
            "freePreview": false,
            "studentCount": 8471,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-password-storage-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-password-storage-intro-span",
                    "text": "Passwords are hashed with a slow, salted algorithm designed for the job. Anything faster is a favour to whoever steals the table.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-password-storage-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-password-storage-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-password-storage-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-password-storage-point-0-span",
                    "text": "Use a slow, salted hash such as argon2 or bcrypt",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-password-storage-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-password-storage-point-1-span",
                    "text": "Tune work factors as hardware improves",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-password-storage-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-password-storage-point-2-span",
                    "text": "Handle reset flows without leaking account existence",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-password-storage-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-password-storage-outro-span",
                    "text": "This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Passwords are hashed with a slow, salted algorithm designed for the job. Anything faster is a favour to whoever steals the table.\n\nWhat this lesson covers\n\nUse a slow, salted hash such as argon2 or bcrypt\n\nTune work factors as hardware improves\n\nHandle reset flows without leaking account existence\n\nThis lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Use a slow, salted hash such as argon2 or bcrypt",
              "Tune work factors as hardware improves",
              "Handle reset flows without leaking account existence"
            ],
            "proTip": "Never write your own password hashing. Use a vetted algorithm with sane parameters and move on.",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-mfa-and-oauth",
            "title": "MFA and delegated authentication",
            "slug": "practical-web-security-mfa-and-oauth",
            "videoUrl": "https://www.youtube.com/watch?v=ZV5yTm4pT8g",
            "youtubeVideoId": "ZV5yTm4pT8g",
            "thumbnailUrl": "https://i.ytimg.com/vi/ZV5yTm4pT8g/hqdefault.jpg",
            "duration": 272,
            "durationFormatted": "4m 32s",
            "freePreview": false,
            "studentCount": 7785,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-mfa-and-oauth-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-mfa-and-oauth-intro-span",
                    "text": "A second factor defeats stolen passwords. OAuth and OIDC hand identity to a provider — useful, and only if you validate what comes back.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-mfa-and-oauth-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-mfa-and-oauth-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-mfa-and-oauth-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-mfa-and-oauth-point-0-span",
                    "text": "Add a second factor without wrecking usability",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-mfa-and-oauth-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-mfa-and-oauth-point-1-span",
                    "text": "Distinguish OAuth authorization from OIDC identity",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-mfa-and-oauth-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-mfa-and-oauth-point-2-span",
                    "text": "Validate tokens and claims on every request",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-mfa-and-oauth-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-mfa-and-oauth-outro-span",
                    "text": "This lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A second factor defeats stolen passwords. OAuth and OIDC hand identity to a provider — useful, and only if you validate what comes back.\n\nWhat this lesson covers\n\nAdd a second factor without wrecking usability\n\nDistinguish OAuth authorization from OIDC identity\n\nValidate tokens and claims on every request\n\nThis lesson sits in Authentication Done Right, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Add a second factor without wrecking usability",
              "Distinguish OAuth authorization from OIDC identity",
              "Validate tokens and claims on every request"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          }
        ]
      },
      {
        "id": "practical-web-security-module-4",
        "title": "Hardening and Supply Chain",
        "summary": "The layer around your application: transport, headers, secrets, and the code you did not write.",
        "description": "The layer around your application: transport, headers, secrets, and the code you did not write.",
        "duration": "40m 35s",
        "lessons": [
          {
            "id": "lesson.practical-web-security-https-headers-and-csp",
            "title": "HTTPS, security headers, and CSP",
            "slug": "practical-web-security-https-headers-and-csp",
            "videoUrl": "https://www.youtube.com/watch?v=4bQeGUzHpOE",
            "youtubeVideoId": "4bQeGUzHpOE",
            "thumbnailUrl": "https://i.ytimg.com/vi/4bQeGUzHpOE/hqdefault.jpg",
            "duration": 486,
            "durationFormatted": "8m 6s",
            "freePreview": false,
            "studentCount": 7099,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-https-headers-and-csp-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-https-headers-and-csp-intro-span",
                    "text": "A handful of response headers remove entire attack classes. CSP is the strongest and the fiddliest, so roll it out in report-only first.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-https-headers-and-csp-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-https-headers-and-csp-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-https-headers-and-csp-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-https-headers-and-csp-point-0-span",
                    "text": "Enforce HTTPS and enable HSTS",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-https-headers-and-csp-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-https-headers-and-csp-point-1-span",
                    "text": "Set the headers that block framing and sniffing",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-https-headers-and-csp-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-https-headers-and-csp-point-2-span",
                    "text": "Introduce a content security policy incrementally",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-https-headers-and-csp-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-https-headers-and-csp-outro-span",
                    "text": "This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "A handful of response headers remove entire attack classes. CSP is the strongest and the fiddliest, so roll it out in report-only first.\n\nWhat this lesson covers\n\nEnforce HTTPS and enable HSTS\n\nSet the headers that block framing and sniffing\n\nIntroduce a content security policy incrementally\n\nThis lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Enforce HTTPS and enable HSTS",
              "Set the headers that block framing and sniffing",
              "Introduce a content security policy incrementally"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-secrets-management",
            "title": "Secrets management",
            "slug": "practical-web-security-secrets-management",
            "videoUrl": "https://www.youtube.com/watch?v=FQE_gyEwu0Q",
            "youtubeVideoId": "FQE_gyEwu0Q",
            "thumbnailUrl": "https://i.ytimg.com/vi/FQE_gyEwu0Q/hqdefault.jpg",
            "duration": 1125,
            "durationFormatted": "18m 45s",
            "freePreview": false,
            "studentCount": 6414,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-secrets-management-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secrets-management-intro-span",
                    "text": "Secrets belong in a manager, injected at runtime, never in the repository. Assume anything committed once is compromised forever.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secrets-management-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secrets-management-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secrets-management-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secrets-management-point-0-span",
                    "text": "Keep credentials out of source control",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secrets-management-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secrets-management-point-1-span",
                    "text": "Inject secrets at runtime and scope them tightly",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secrets-management-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secrets-management-point-2-span",
                    "text": "Rotate credentials and revoke exposed ones immediately",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-secrets-management-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-secrets-management-outro-span",
                    "text": "This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Secrets belong in a manager, injected at runtime, never in the repository. Assume anything committed once is compromised forever.\n\nWhat this lesson covers\n\nKeep credentials out of source control\n\nInject secrets at runtime and scope them tightly\n\nRotate credentials and revoke exposed ones immediately\n\nThis lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Keep credentials out of source control",
              "Inject secrets at runtime and scope them tightly",
              "Rotate credentials and revoke exposed ones immediately"
            ],
            "proTip": "A secret committed once is compromised even after you delete the commit. Rotate it, do not just remove it.",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          },
          {
            "id": "lesson.practical-web-security-dependency-and-supply-chain",
            "title": "Dependency and supply chain risk",
            "slug": "practical-web-security-dependency-and-supply-chain",
            "videoUrl": "https://www.youtube.com/watch?v=njm1nZlrR68",
            "youtubeVideoId": "njm1nZlrR68",
            "thumbnailUrl": "https://i.ytimg.com/vi/njm1nZlrR68/hqdefault.jpg",
            "duration": 824,
            "durationFormatted": "13m 44s",
            "freePreview": false,
            "studentCount": 5728,
            "notes": [
              {
                "_type": "block",
                "_key": "practical-web-security-dependency-and-supply-chain-intro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-dependency-and-supply-chain-d63c4b23",
                    "text": "Most of your production code came from someone else. Lockfiles, audits, and update discipline are what keep that manageable.",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-dependency-and-supply-chain-h2",
                "style": "h2",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-dependency-and-supply-chain-h2-span",
                    "text": "What this lesson covers",
                    "marks": []
                  }
                ]
              },
              {
                "_type": "block",
                "_key": "practical-web-security-dependency-and-supply-chain-point-0",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-dependency-and-supply-chain-915621dd",
                    "text": "Pin dependencies with a committed lockfile",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-dependency-and-supply-chain-point-1",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-dependency-and-supply-chain-b067dbd9",
                    "text": "Audit for known vulnerabilities continuously",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-dependency-and-supply-chain-point-2",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-dependency-and-supply-chain-25f5baf2",
                    "text": "Review what a new dependency actually pulls in",
                    "marks": []
                  }
                ],
                "listItem": "bullet",
                "level": 1
              },
              {
                "_type": "block",
                "_key": "practical-web-security-dependency-and-supply-chain-outro",
                "style": "normal",
                "markDefs": [],
                "children": [
                  {
                    "_type": "span",
                    "_key": "practical-web-security-dependency-and-supply-chain-bd77a726",
                    "text": "This lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
                    "marks": []
                  }
                ]
              }
            ],
            "notesText": "Most of your production code came from someone else. Lockfiles, audits, and update discipline are what keep that manageable.\n\nWhat this lesson covers\n\nPin dependencies with a committed lockfile\n\nAudit for known vulnerabilities continuously\n\nReview what a new dependency actually pulls in\n\nThis lesson sits in Hardening and Supply Chain, part of Practical Web Security. It assumes what came before it and leads directly into the next lesson in the module.",
            "keyPoints": [
              "Pin dependencies with a committed lockfile",
              "Audit for known vulnerabilities continuously",
              "Review what a new dependency actually pulls in"
            ],
            "proTip": "",
            "resources": [
              {
                "type": "link",
                "title": "OWASP Top 10",
                "description": "The official reference for the tools used in this lesson.",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          }
        ]
      }
    ],
    "learningOutcomes": [
      {
        "icon": "shield",
        "title": "Think in threat models",
        "description": "Reason about who your attacker is and what they can reach before writing defences."
      },
      {
        "icon": "code",
        "title": "Close the common holes",
        "description": "Understand and prevent injection, cross-site scripting, and request forgery."
      },
      {
        "icon": "workflow",
        "title": "Get authentication right",
        "description": "Sessions, password storage, and multi-factor done the way that survives review."
      },
      {
        "icon": "gauge",
        "title": "Harden the deployment",
        "description": "Headers, transport, secrets, and dependencies — the perimeter around your code."
      }
    ],
    "rating": 4.7,
    "reviews": 885,
    "enrolled": 13270,
    "studentsFormatted": "13.3k students",
    "price": 99,
    "isFree": false,
    "isFeatured": false,
    "language": "English",
    "instructor": {
      "name": "Alina Costa",
      "avatar": "https://randomuser.me/api/portraits/women/12.jpg",
      "bio": "Alina runs the path from a developer laptop to production and everything that can go wrong along it — build pipelines, orchestration, secrets, and the attack surface all of it creates.\n\nShe teaches operations and security together, on the grounds that a system nobody can deploy safely is not actually secure.",
      "expertise": [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Application security"
      ]
    },
    "createdAt": "2024-01-15T08:00:00Z"
  }
];
