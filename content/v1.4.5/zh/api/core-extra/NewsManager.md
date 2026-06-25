---
title: "NewsManager"
description: "NewsManager 的自动生成类参考。"
---
# NewsManager

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public class NewsManager`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.NewsManager/NewsManager.cs`

## 概述

`NewsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `NewsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInPreviewMode` | `public bool IsInPreviewMode { get; }` |
| `LocalizationID` | `public string LocalizationID { get; }` |

## 主要方法

### GetNewsItems
`public async Task<MBReadOnlyList<NewsItem>> GetNewsItems(bool forceRefresh)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 news items 的结果。

```csharp
// 先通过子系统 API 拿到 NewsManager 实例
NewsManager newsManager = ...;
var result = newsManager.GetNewsItems(false);
```

### SetNewsSourceURL
`public void SetNewsSourceURL(string url)`

**用途 / Purpose:** **用途 / Purpose:** 为 news source u r l 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NewsManager 实例
NewsManager newsManager = ...;
newsManager.SetNewsSourceURL("example");
```

### UpdateNewsItems
`public async Task UpdateNewsItems(bool forceRefresh)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 news items 的最新表示。

```csharp
// 先通过子系统 API 拿到 NewsManager 实例
NewsManager newsManager = ...;
var result = newsManager.UpdateNewsItems(false);
```

### UpdateLocalizationID
`public void UpdateLocalizationID(string localizationID)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 localization i d 的最新表示。

```csharp
// 先通过子系统 API 拿到 NewsManager 实例
NewsManager newsManager = ...;
newsManager.UpdateLocalizationID("example");
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NewsManager 实例
NewsManager newsManager = ...;
newsManager.OnFinalize();
```

## 使用示例

```csharp
var manager = NewsManager.Current;
```

## 参见

- [本区域目录](../)