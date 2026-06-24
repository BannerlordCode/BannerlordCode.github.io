<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTrackerProvider`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerProvider

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerProvider`
**Base:** 无
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerProvider.cs`

## 概述

`MapTrackerProvider` 位于 `SandBox.ViewModelCollection.Map.Tracker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Tracker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnTrackerAddedOrRemoved` | `public event MapTrackerProvider.OnTrackerAddedOrRemovedDelegate OnTrackerAddedOrRemoved { get; }` |

## 主要方法

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**用途 / Purpose:** 获取 `trackers` 的当前值。

### GetTrackers
`public MapTrackerItemVM GetTrackers()`

**用途 / Purpose:** 获取 `trackers` 的当前值。

### HasTrackerFor
`public bool HasTrackerFor(ITrackableCampaignObject trackable)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `tracker for`。

### GetTrackerFor
`public MapTrackerItemVM GetTrackerFor(ITrackableCampaignObject trackable)`

**用途 / Purpose:** 获取 `tracker for` 的当前值。

### AddTracker
`public void AddTracker(MapTrackerItemVM tracker)`

**用途 / Purpose:** 向当前集合/状态中添加 `tracker`。

### RemoveTracker
`public void RemoveTracker(MapTrackerItemVM tracker)`

**用途 / Purpose:** 从当前集合/状态中移除 `tracker`。

### ClearTrackers
`public void ClearTrackers()`

**用途 / Purpose:** 处理 `clear trackers` 相关逻辑。

### OnTrackerAddedOrRemovedDelegate
`public delegate void OnTrackerAddedOrRemovedDelegate(MapTrackerItemVM tracker, bool added)`

**用途 / Purpose:** 当 `tracker added or removed delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MapTrackerProvider();
value.GetTrackers();
```

## 参见

- [完整类目录](../catalog)