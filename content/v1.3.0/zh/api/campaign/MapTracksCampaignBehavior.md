---
title: "MapTracksCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTracksCampaignBehavior`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTracksCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapTracksCampaignBehavior : CampaignBehaviorBase, IMapTracksCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/MapTracksCampaignBehavior.cs`

## 概述

`MapTracksCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DetectedTracks` | `public MBReadOnlyList<Track> DetectedTracks { get; }` |
| `Size` | `public int Size { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### IsTrackDropped
`public bool IsTrackDropped(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `is track dropped` 相关逻辑。

### AddTrack
`public void AddTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)`

**用途 / Purpose:** 向当前集合/状态中添加 `track`。

### AddMapArrow
`public void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)`

**用途 / Purpose:** 向当前集合/状态中添加 `map arrow`。

### RequestTrack
`public Track RequestTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)`

**用途 / Purpose:** 处理 `request track` 相关逻辑。

### RequestMapArrow
`public Track RequestMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)`

**用途 / Purpose:** 处理 `request map arrow` 相关逻辑。

### ReleaseTrack
`public void ReleaseTrack(Track track)`

**用途 / Purpose:** 处理 `release track` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new MapTracksCampaignBehavior();
value.RegisterEvents();
```

## 参见

- [完整类目录](../catalog)