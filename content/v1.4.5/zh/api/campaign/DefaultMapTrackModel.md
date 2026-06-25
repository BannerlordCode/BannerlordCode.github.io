---
title: "DefaultMapTrackModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMapTrackModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapTrackModel.cs`

## 概述

`DefaultMapTrackModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapTrackModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaxTrackSpottingDistanceForMainParty
`public override float GetMaxTrackSpottingDistanceForMainParty()`

**用途 / Purpose:** 获取 `max track spotting distance for main party` 的当前值。

### CanPartyLeaveTrack
`public override bool CanPartyLeaveTrack(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否可以执行 `party leave track`。

### GetTrackLife
`public override int GetTrackLife(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `track life` 的当前值。

### GetTrackDetectionDifficultyForMainParty
`public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**用途 / Purpose:** 获取 `track detection difficulty for main party` 的当前值。

### GetSkillFromTrackDetected
`public override float GetSkillFromTrackDetected(Track track)`

**用途 / Purpose:** 获取 `skill from track detected` 的当前值。

### GetSkipTrackChance
`public override float GetSkipTrackChance(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `skip track chance` 的当前值。

### TrackTitle
`public override TextObject TrackTitle(Track track)`

**用途 / Purpose:** 处理 `track title` 相关逻辑。

### GetTrackColor
`public override uint GetTrackColor(Track track)`

**用途 / Purpose:** 获取 `track color` 的当前值。

### GetTrackScale
`public override float GetTrackScale(Track track)`

**用途 / Purpose:** 获取 `track scale` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel());
```

## 参见

- [完整类目录](../catalog)