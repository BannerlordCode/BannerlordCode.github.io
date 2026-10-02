---
title: "DefaultCrimeModel"
description: "DefaultCrimeModel 的自动生成类参考。"
---
# DefaultCrimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCrimeModel : CrimeModel `
**Base:** CrimeModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs

## 概述

`DefaultCrimeModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### DoesPlayerHaveAnyCrimeRating
`public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction) `

### IsPlayerCrimeRatingSevere
`public override bool IsPlayerCrimeRatingSevere(IFaction faction) `

### IsPlayerCrimeRatingModerate
`public override bool IsPlayerCrimeRatingModerate(IFaction faction) `

### IsPlayerCrimeRatingMild
`public override bool IsPlayerCrimeRatingMild(IFaction faction) `

### GetCost
`public override float GetCost(IFaction faction,CrimeModel.PaymentMethod paymentMethod,float minimumCrimeRating) `

### GetEffectiveCrimeChange
`public override ExplainedNumber GetEffectiveCrimeChange(IFaction faction,float deltaCrimeRating) `

### GetDailyCrimeRatingChange
`public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction,bool includeDescriptions = false) `

### GetMaxCrimeRating
`public override float GetMaxCrimeRating() `

### GetMinAcceptableCrimeRating
`public override float GetMinAcceptableCrimeRating(IFaction faction) `

### GetCrimeRatingAfterPunishment
`public override float GetCrimeRatingAfterPunishment() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
