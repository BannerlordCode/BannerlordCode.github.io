---
title: "DefaultMapVisibilityModel"
description: "DefaultMapVisibilityModel 的自动生成类参考。"
---
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel `
**Base:** MapVisibilityModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs

## 概述

`DefaultMapVisibilityModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### MaximumSeeingRange
`public override float MaximumSeeingRange() `

### GetPartySeeingRangeBase
`public override float GetPartySeeingRangeBase(MobileParty party) `

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party,bool includeDescriptions = false) `

### GetPartySpottingRatioForMainPartySeeingRange
`public override float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party) `

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance() `

### GetMobilePartyVisibilityAndInspectedState
`public override void GetMobilePartyVisibilityAndInspectedState(MobileParty mobileParty,Vec2[] points,float seeingRange,out bool isVisible,out bool isInspected,out bool isDistanceDependent) `

### GetSettlementInspectedState
`public override void GetSettlementInspectedState(Settlement settlement,Vec2[] points,float seeingRange,out bool isInspected,out bool isDistanceDependent) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
