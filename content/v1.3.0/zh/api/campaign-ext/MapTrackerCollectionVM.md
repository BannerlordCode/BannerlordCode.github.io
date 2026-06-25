---
title: "MapTrackerCollectionVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTrackerCollectionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerCollectionVM

**Namespace:** SandBox.ViewModelCollection.Map.Tracker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MapTrackerCollectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Tracker/MapTrackerCollectionVM.cs`

## 概述

`MapTrackerCollectionVM` 位于 `SandBox.ViewModelCollection.Map.Tracker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Map.Tracker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Trackers` | `public MBBindingList<MapTrackerItemVM> Trackers { get; set; }` |

## 主要方法

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 更新 `properties` 的状态或数据。

## 使用示例

```csharp
var value = new MapTrackerCollectionVM();
value.Tick(0);
```

## 参见

- [完整类目录](../catalog)