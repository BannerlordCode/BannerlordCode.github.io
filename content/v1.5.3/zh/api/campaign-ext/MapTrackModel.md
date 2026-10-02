---
title: "MapTrackModel"
description: "MapTrackModel 的自动生成类参考。"
---
# MapTrackModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel> `
**Base:** MBGameModel<MapTrackModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs

## 概述

`MapTrackModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSkipTrackChance
`public abstract float GetSkipTrackChance(MobileParty mobileParty)`

### GetMaxTrackSpottingDistanceForMainParty
`public abstract float GetMaxTrackSpottingDistanceForMainParty()`

### CanPartyLeaveTrack
`public abstract bool CanPartyLeaveTrack(MobileParty mobileParty)`

### GetTrackDetectionDifficultyForMainParty
`public abstract float GetTrackDetectionDifficultyForMainParty(Track track,float trackSpottingDistance)`

### GetSkillFromTrackDetected
`public abstract float GetSkillFromTrackDetected(Track track)`

### GetTrackLife
`public abstract int GetTrackLife(MobileParty mobileParty)`

### TrackTitle
`public abstract TextObject TrackTitle(Track track)`

### GetTrackDescription
`public abstract IEnumerable<ValueTuple<TextObject,string>> GetTrackDescription(Track track)`

### GetTrackColor
`public abstract uint GetTrackColor(Track track)`

### GetTrackScale
`public abstract float GetTrackScale(Track track)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
