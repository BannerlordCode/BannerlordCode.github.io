---
title: "MapMarkerManager"
description: "MapMarkerManager 的自动生成类参考。"
---
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

**用途 / Purpose:** 构建一个新的 map marker 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MapMarkerManager 实例
MapMarkerManager mapMarkerManager = ...;
var result = mapMarkerManager.CreateMapMarker(banner, name, position, false, "example");
```

### RemoveMapMarker
`public void RemoveMapMarker(MapMarker mapMarker)`

**用途 / Purpose:** 从当前容器或状态中移除 map marker。

```csharp
// 先通过子系统 API 拿到 MapMarkerManager 实例
MapMarkerManager mapMarkerManager = ...;
mapMarkerManager.RemoveMapMarker(mapMarker);
```

### RemoveAllMapMarkersByQuestId
`public void RemoveAllMapMarkersByQuestId(string questId)`

**用途 / Purpose:** 从当前容器或状态中移除 all map markers by quest id。

```csharp
// 先通过子系统 API 拿到 MapMarkerManager 实例
MapMarkerManager mapMarkerManager = ...;
mapMarkerManager.RemoveAllMapMarkersByQuestId("example");
```

### GetMapMarkersByQuestId
`public IEnumerable<MapMarker> GetMapMarkersByQuestId(string questId)`

**用途 / Purpose:** 读取并返回当前对象中 map markers by quest id 的结果。

```csharp
// 先通过子系统 API 拿到 MapMarkerManager 实例
MapMarkerManager mapMarkerManager = ...;
var result = mapMarkerManager.GetMapMarkersByQuestId("example");
```

## 使用示例

```csharp
var manager = MapMarkerManager.Current;
```

## 参见

- [本区域目录](../)