---
title: "MapTrackModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTrackModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**Base:** `MBGameModel<MapTrackModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapTrackModel.cs`

## 概述

`MapTrackModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MapTrackModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxTrackLife` | `public abstract float MaxTrackLife { get; }` |

## 主要方法

### GetSkipTrackChance
`public abstract float GetSkipTrackChance(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `skip track chance` 的当前值。

### GetMaxTrackSpottingDistanceForMainParty
`public abstract float GetMaxTrackSpottingDistanceForMainParty()`

**用途 / Purpose:** 获取 `max track spotting distance for main party` 的当前值。

### CanPartyLeaveTrack
`public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party leave track`。

### GetTrackDetectionDifficultyForMainParty
`public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**用途 / Purpose:** 获取 `track detection difficulty for main party` 的当前值。

### GetSkillFromTrackDetected
`public abstract float GetSkillFromTrackDetected(Track track)`

**用途 / Purpose:** 获取 `skill from track detected` 的当前值。

### GetTrackLife
`public abstract int GetTrackLife(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `track life` 的当前值。

### TrackTitle
`public abstract TextObject TrackTitle(Track track)`

**用途 / Purpose:** 处理 `track title` 相关逻辑。

### GetTrackColor
`public abstract uint GetTrackColor(Track track)`

**用途 / Purpose:** 获取 `track color` 的当前值。

### GetTrackScale
`public abstract float GetTrackScale(Track track)`

**用途 / Purpose:** 获取 `track scale` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMapTrackModel();
```

## 参见

- [完整类目录](../catalog)