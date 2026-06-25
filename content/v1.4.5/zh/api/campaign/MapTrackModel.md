---
title: "MapTrackModel"
description: "MapTrackModel 的自动生成类参考。"
---
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**Base:** `MBGameModel<MapTrackModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapTrackModel.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「skip track chance」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetSkipTrackChance(mobileParty);
```

### GetMaxTrackSpottingDistanceForMainParty
`public abstract float GetMaxTrackSpottingDistanceForMainParty()`

**用途 / Purpose:** 读取并返回当前对象中 「max track spotting distance for main party」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetMaxTrackSpottingDistanceForMainParty();
```

### CanPartyLeaveTrack
`public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)`

**用途 / Purpose:** 检查当前对象是否满足 「party leave track」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.CanPartyLeaveTrack(mobileParty);
```

### GetTrackDetectionDifficultyForMainParty
`public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)`

**用途 / Purpose:** 读取并返回当前对象中 「track detection difficulty for main party」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackDetectionDifficultyForMainParty(track, 0);
```

### GetSkillFromTrackDetected
`public abstract float GetSkillFromTrackDetected(Track track)`

**用途 / Purpose:** 读取并返回当前对象中 「skill from track detected」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetSkillFromTrackDetected(track);
```

### GetTrackLife
`public abstract int GetTrackLife(MobileParty mobileParty)`

**用途 / Purpose:** 读取并返回当前对象中 「track life」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackLife(mobileParty);
```

### TrackTitle
`public abstract TextObject TrackTitle(Track track)`

**用途 / Purpose:** 处理与 「track title」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.TrackTitle(track);
```

### GetTrackColor
`public abstract uint GetTrackColor(Track track)`

**用途 / Purpose:** 读取并返回当前对象中 「track color」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackColor(track);
```

### GetTrackScale
`public abstract float GetTrackScale(Track track)`

**用途 / Purpose:** 读取并返回当前对象中 「track scale」 的结果。

```csharp
// 先通过子系统 API 拿到 MapTrackModel 实例
MapTrackModel mapTrackModel = ...;
var result = mapTrackModel.GetTrackScale(track);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapTrackModel instance = ...;
```

## 参见

- [本区域目录](../)