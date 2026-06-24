<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NewsManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NewsManager

**Namespace:** TaleWorlds.Library.NewsManager
**Module:** TaleWorlds.Library
**Type:** `public class NewsManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.NewsManager/NewsManager.cs`

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

**用途 / Purpose:** 获取 `news items` 的当前值。

### SetNewsSourceURL
`public void SetNewsSourceURL(string url)`

**用途 / Purpose:** 设置 `news source u r l` 的值或状态。

### UpdateNewsItems
`public async Task UpdateNewsItems(bool forceRefresh)`

**用途 / Purpose:** 更新 `news items` 的状态或数据。

### UpdateLocalizationID
`public void UpdateLocalizationID(string localizationID)`

**用途 / Purpose:** 更新 `localization i d` 的状态或数据。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = NewsManager.Current;
```

## 参见

- [完整类目录](../catalog)