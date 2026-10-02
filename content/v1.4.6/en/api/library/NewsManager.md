---
title: "NewsManager"
description: "NewsManager: a public class in TaleWorlds.Library; 10 exposed members (6 methods, 3 properties, 0 fields). Source: TaleWorlds.Library/NewsManager/NewsManager.cs."
---
# NewsManager

**Namespace:** `TaleWorlds.Library.NewsManager`
**Module:** `TaleWorlds.Library`
**Type:** `public class NewsManager`
**File:** `TaleWorlds.Library/NewsManager/NewsManager.cs`

## Overview

NewsManager lives in the TaleWorlds.Library module, source file TaleWorlds.Library/NewsManager/NewsManager.cs. It is a public class; the inheritance chain is NewsManager. It exposes 10 public/protected members: 6 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NewsManager is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.NewsManager) the module directory; inheritance chain NewsManager. The surface is method-led (methods 6/10, properties 3/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/NewsManager/NewsManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<NewsItem>NewsItems` | property |
| `IsInPreviewMode` | `public bool IsInPreviewMode` | property |
| `LocalizationID` | `public string LocalizationID` | property |
| `NewsManager` | `public NewsManager()` | constructor |
| `Task` | `public async Task<MBReadOnlyList<NewsItem>>GetNewsItems(bool forceRefresh)` | method |
| `SetNewsSourceURL` | `public void SetNewsSourceURL(string url)` | method |
| `UpdateNewsItems` | `public async Task UpdateNewsItems(bool forceRefresh)` | method |
| `Task` | `public static Task<T>DeserializeObjectAsync<T>(string json)` | method |
| `UpdateLocalizationID` | `public void UpdateLocalizationID(string localizationID)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace NewsItem](../NewsItem)
- [same namespace NewsType](../NewsType)
