---
title: "MapTracksCampaignBehavior"
description: "MapTracksCampaignBehavior 的自动生成类参考。"
---
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

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.SyncData(dataStore);
```

### IsTrackDropped
`public bool IsTrackDropped(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否处于 「track dropped」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.IsTrackDropped(mobileParty);
```

### AddTrack
`public void AddTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)`

**用途 / Purpose:** 将 「track」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.AddTrack(party, trackPosition, trackDirection);
```

### AddMapArrow
`public void AddMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)`

**用途 / Purpose:** 将 「map arrow」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.AddMapArrow(pointerName, trackPosition, trackDirection, 0);
```

### RequestTrack
`public Track RequestTrack(MobileParty party, CampaignVec2 trackPosition, Vec2 trackDirection)`

**用途 / Purpose:** 处理与 「request track」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.RequestTrack(party, trackPosition, trackDirection);
```

### RequestMapArrow
`public Track RequestMapArrow(TextObject pointerName, CampaignVec2 trackPosition, Vec2 trackDirection, float life)`

**用途 / Purpose:** 处理与 「request map arrow」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.RequestMapArrow(pointerName, trackPosition, trackDirection, 0);
```

### ReleaseTrack
`public void ReleaseTrack(Track track)`

**用途 / Purpose:** 处理与 「release track」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.ReleaseTrack(track);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 MapTracksCampaignBehavior 实例
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
var result = mapTracksCampaignBehavior.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapTracksCampaignBehavior mapTracksCampaignBehavior = ...;
mapTracksCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)