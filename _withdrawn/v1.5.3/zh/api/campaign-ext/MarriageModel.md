---
title: "MarriageModel"
description: "MarriageModel 的自动生成类参考。"
---
# MarriageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MarriageModel : MBGameModel<MarriageModel> `
**Base:** MBGameModel<MarriageModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs

## 概述

`MarriageModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MarriageModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### IsCoupleSuitableForMarriage
`public abstract bool IsCoupleSuitableForMarriage(Hero firstHero,Hero secondHero)`

### GetEffectiveRelationIncrease
`public abstract int GetEffectiveRelationIncrease(Hero firstHero,Hero secondHero)`

### GetClanAfterMarriage
`public abstract Clan GetClanAfterMarriage(Hero firstHero,Hero secondHero)`

### IsSuitableForMarriage
`public abstract bool IsSuitableForMarriage(Hero hero)`

### IsClanSuitableForMarriage
`public abstract bool IsClanSuitableForMarriage(Clan clan)`

### NpcCoupleMarriageChance
`public abstract float NpcCoupleMarriageChance(Hero firstHero,Hero secondHero)`

### ShouldNpcMarriageBetweenClansBeAllowed
`public abstract bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan,Clan targetClan)`

### GetAdultChildrenSuitableForMarriage
`public abstract List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
