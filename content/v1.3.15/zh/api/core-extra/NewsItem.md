---
title: "NewsItem"
description: "NewsItem 的自动生成类参考。"
---
# NewsItem

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public struct NewsItem`
**Base:** 无
**File:** `TaleWorlds.Library/NewsManager/NewsItem.cs`

## 概述

`NewsItem` 位于 `TaleWorlds.Library.NewsManager`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.NewsManager` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `ImageSourcePath` | `public string ImageSourcePath { get; set; }` |
| `Feeds` | `public List<NewsType> Feeds { get; set; }` |
| `NewsLink` | `public string NewsLink { get; set; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
NewsItem instance = ...;
```

## 参见

- [本区域目录](../)