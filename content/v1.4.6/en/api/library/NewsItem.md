---
title: "NewsItem"
description: "NewsItem: a public struct in TaleWorlds.Library; 7 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.Library/NewsManager/NewsItem.cs."
---
# NewsItem

**Namespace:** `TaleWorlds.Library.NewsManager`
**Module:** `TaleWorlds.Library`
**Type:** `public struct NewsItem`
**File:** `TaleWorlds.Library/NewsManager/NewsItem.cs`

## Overview

NewsItem lives in the TaleWorlds.Library module, source file TaleWorlds.Library/NewsManager/NewsItem.cs. It is a public struct; the inheritance chain is NewsItem. It exposes 7 public/protected members: 6 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NewsItem is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.NewsManager) the module directory; inheritance chain NewsItem. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/NewsManager/NewsItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Title` | `public string Title` | property |
| `Description` | `public string Description` | property |
| `ImageSourcePath` | `public string ImageSourcePath` | property |
| `List` | `public List<NewsType>Feeds` | property |
| `NewsLink` | `public string NewsLink` | property |
| `NewsTypes` | `public enum NewsTypes` | property |
| `NewsTypes` | `public enum NewsTypes` | nested type |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace NewsManager](../NewsManager)
- [same namespace NewsType](../NewsType)
