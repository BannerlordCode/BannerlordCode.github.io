---
title: "AlleyModel"
description: "AlleyModel 的自动生成类参考。"
---
# AlleyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel> `
**Base:** MBGameModel<AlleyModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs

## 概述

`AlleyModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetDailyXpGainForAssignedClanMember
`public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

### GetDailyXpGainForMainHero
`public abstract float GetDailyXpGainForMainHero()`

### GetInitialXpGainForMainHero
`public abstract float GetInitialXpGainForMainHero()`

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

### GetTroopsOfAIOwnedAlley
`public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

### GetTroopsOfAlleyForBattleMission
`public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

### GetDailyIncomeOfAlley
`public abstract int GetDailyIncomeOfAlley(Alley alley)`

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
`public abstract List<ValueTuple<Hero,DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley,float random)`

### GetDisabledReasonTextForHero
`public abstract TextObject GetDisabledReasonTextForHero(Hero hero,Alley alley,DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

### GetAlleyAttackResponseTimeInDays
`public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
