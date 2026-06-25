---
title: "DefaultMapTrackModel"
description: "DefaultMapTrackModel 的自动生成类参考。"
---
# DefaultMapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**Base:** `MapTrackModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMapTrackModel.cs`

## 概述

`DefaultMapTrackModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapTrackModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMaxTrackSpottingDistanceForMainParty
`public override float GetMaxTrackSpottingDistanceForMainParty()`

**用途 / Purpose:** 读取并返回当前对象中 「max track spotting distance for main party」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetMaxTrackSpottingDistanceForMainParty();
```

### CanPartyLeaveTrack
`public override bool CanPartyLeaveTrack(MobileParty mobileParty)`

**用途 / Purpose:** 检查当前对象是否满足 「party leave track」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.CanPartyLeaveTrack(mobileParty);
```

### GetTrackLife
`public override int GetTrackLife(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「track life」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackLife(mobileParty);
```

### GetTrackDetectionDifficultyForMainParty
`public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**用途 / Purpose:** 读取并返回当前对象中 「track detection difficulty for main party」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackDetectionDifficultyForMainParty(track, 0);
```

### GetSkillFromTrackDetected
`public override float GetSkillFromTrackDetected(Track track)`

**用途 / Purpose:** 读取并返回当前对象中 「skill from track detected」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetSkillFromTrackDetected(track);
```

### GetSkipTrackChance
`public override float GetSkipTrackChance(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「skip track chance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetSkipTrackChance(mobileParty);
```

### TrackTitle
`public override TextObject TrackTitle(Track track)`

**用途 / Purpose:** 处理与 「track title」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.TrackTitle(track);
```

### GetTrackColor
`public override uint GetTrackColor(Track track)`

**用途 / Purpose:** 读取并返回当前对象中 「track color」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackColor(track);
```

### GetTrackScale
`public override float GetTrackScale(Track track)`

**用途 / Purpose:** 读取并返回当前对象中 「track scale」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMapTrackModel 实例
DefaultMapTrackModel defaultMapTrackModel = ...;
var result = defaultMapTrackModel.GetTrackScale(track);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapTrackModel>(new MyDefaultMapTrackModel());
```

## 参见

- [本区域目录](../)