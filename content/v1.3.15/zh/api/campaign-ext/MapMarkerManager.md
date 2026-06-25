---
title: "MapMarkerManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapMarkerManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapMarkerManager

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarkerManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Map/MapMarkerManager.cs`

## 概述

`MapMarkerManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MapMarkerManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapMarkers` | `public MBReadOnlyList<MapMarker> MapMarkers { get; }` |

## 主要方法

### CreateMapMarker
`public MapMarker CreateMapMarker(Banner banner, TextObject name, Vec3 position, bool isVisibleOnMap, string questId)`

**用途 / Purpose:** 创建一个 `map marker` 实例或对象。

### RemoveMapMarker
`public void RemoveMapMarker(MapMarker mapMarker)`

**用途 / Purpose:** 从当前集合/状态中移除 `map marker`。

### RemoveAllMapMarkersByQuestId
`public void RemoveAllMapMarkersByQuestId(string questId)`

**用途 / Purpose:** 从当前集合/状态中移除 `all map markers by quest id`。

### GetMapMarkersByQuestId
`public IEnumerable<MapMarker> GetMapMarkersByQuestId(string questId)`

**用途 / Purpose:** 获取 `map markers by quest id` 的当前值。

## 使用示例

```csharp
var manager = MapMarkerManager.Current;
```

## 参见

- [完整类目录](../catalog)