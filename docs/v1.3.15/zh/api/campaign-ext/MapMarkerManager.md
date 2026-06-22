<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapMarkerManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapMarkerManager

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarkerManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Map/MapMarkerManager.cs`

## 概述

`MapMarkerManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapMarkers` | `public MBReadOnlyList<MapMarker> MapMarkers { get; }` |

## 主要方法

### CreateMapMarker
```csharp
public MapMarker CreateMapMarker(Banner banner, TextObject name, Vec3 position, bool isVisibleOnMap, string questId)
```

### RemoveMapMarker
```csharp
public void RemoveMapMarker(MapMarker mapMarker)
```

### RemoveAllMapMarkersByQuestId
```csharp
public void RemoveAllMapMarkersByQuestId(string questId)
```

### GetMapMarkersByQuestId
```csharp
public IEnumerable<MapMarker> GetMapMarkersByQuestId(string questId)
```

## 使用示例

```csharp
// MapMarkerManager (Manager) 的典型用法
MapMarkerManager.Current;
```

## 参见

- [完整类目录](../catalog)