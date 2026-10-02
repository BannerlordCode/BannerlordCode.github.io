---
title: "MapVisibilityModel"
description: "MapVisibilityModel 的自动生成类参考。"
---
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel> `
**Base:** MBGameModel<MapVisibilityModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs

## 概述

`MapVisibilityModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### MaximumSeeingRange
`public abstract float MaximumSeeingRange()`

### GetPartySeeingRangeBase
`public abstract float GetPartySeeingRangeBase(MobileParty party)`

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party,bool includeDescriptions = false)`

### GetPartySpottingRatioForMainPartySeeingRange
`public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

### GetMobilePartyVisibilityAndInspectedState
`public abstract void GetMobilePartyVisibilityAndInspectedState(MobileParty mobileParty,Vec2[] points,float seeingRange,out bool isVisible,out bool isInspected,out bool isDistanceDependent)`

### GetSettlementInspectedState
`public abstract void GetSettlementInspectedState(Settlement settlement,Vec2[] points,float seeingRange,out bool isInspected,out bool isDistanceDependent)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
