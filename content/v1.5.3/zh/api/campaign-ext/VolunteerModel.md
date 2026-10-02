---
title: "VolunteerModel"
description: "VolunteerModel 的自动生成类参考。"
---
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel> `
**Base:** MBGameModel<VolunteerModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs

## 概述

`VolunteerModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### MaximumIndexHeroCanRecruitFromHero
`public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero,Hero sellerHero,int useValueAsRelation = -101)`

### MaximumIndexGarrisonCanRecruitFromHero
`public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement,Hero sellerHero)`

### GetDailyVolunteerProductionProbability
`public abstract float GetDailyVolunteerProductionProbability(Hero hero,int index,Settlement settlement)`

### GetBasicVolunteer
`public abstract CharacterObject GetBasicVolunteer(Hero hero)`

### CanHaveRecruits
`public abstract bool CanHaveRecruits(Hero hero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
