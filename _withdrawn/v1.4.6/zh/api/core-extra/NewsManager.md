---
title: "NewsManager"
description: "NewsManager：TaleWorlds.Library.NewsManager 的 public 类；公开成员 10 个（方法 6、属性 3、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/NewsManager/NewsManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NewsManager

**Namespace:** `TaleWorlds.Library.NewsManager`
**Module:** `TaleWorlds.Library`
**Type:** `public class NewsManager`
**File:** `TaleWorlds.Library/NewsManager/NewsManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

NewsManager 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/NewsManager/NewsManager.cs。它是一个 public 类，继承链为 NewsManager。public/protected 成员共 10 个：6 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NewsManager 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library.NewsManager`，继承链 NewsManager。成员构成以方法为主（方法 6/10，属性 3/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/NewsManager/NewsManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<NewsItem>NewsItems` | 属性 |
| `IsInPreviewMode` | `public bool IsInPreviewMode` | 属性 |
| `LocalizationID` | `public string LocalizationID` | 属性 |
| `NewsManager` | `public NewsManager()` | 构造函数 |
| `Task` | `public async Task<MBReadOnlyList<NewsItem>>GetNewsItems(bool forceRefresh)` | 方法 |
| `SetNewsSourceURL` | `public void SetNewsSourceURL(string url)` | 方法 |
| `UpdateNewsItems` | `public async Task UpdateNewsItems(bool forceRefresh)` | 方法 |
| `Task` | `public static Task<T>DeserializeObjectAsync<T>(string json)` | 方法 |
| `UpdateLocalizationID` | `public void UpdateLocalizationID(string localizationID)` | 方法 |
| `OnFinalize` | `public void OnFinalize()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 NewsItem](../NewsItem/)
- [同命名空间 NewsType](../NewsType/)
