---
title: "CrimeModel"
description: "CrimeModel 的自动生成类参考。"
---
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel> `
**Base:** MBGameModel<CrimeModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs

## 概述

`CrimeModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMaxCrimeRating
`public abstract float GetMaxCrimeRating()`

### GetMinAcceptableCrimeRating
`public abstract float GetMinAcceptableCrimeRating(IFaction faction)`

### GetCrimeRatingAfterPunishment
`public abstract float GetCrimeRatingAfterPunishment()`

### DoesPlayerHaveAnyCrimeRating
`public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`

### IsPlayerCrimeRatingSevere
`public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`

### IsPlayerCrimeRatingModerate
`public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`

### IsPlayerCrimeRatingMild
`public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`

### GetCost
`public abstract float GetCost(IFaction faction,CrimeModel.PaymentMethod paymentMethod,float minimumCrimeRating)`

### GetEffectiveCrimeChange
`public abstract ExplainedNumber GetEffectiveCrimeChange(IFaction faction,float deltaCrimeRating)`

### GetDailyCrimeRatingChange
`public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction,bool includeDescriptions = false)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
