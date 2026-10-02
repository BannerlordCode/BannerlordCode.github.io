---
title: "CaravanModel"
description: "CaravanModel 的自动生成类参考。"
---
# CaravanModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CaravanModel : MBGameModel<CaravanModel> `
**Base:** MBGameModel<CaravanModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs

## 概述

`CaravanModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/CaravanModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetMaxGoldToSpendOnOneItemCategory
`public abstract int GetMaxGoldToSpendOnOneItemCategory(MobileParty caravan,ItemCategory itemCategory)`

### GetInitialTradeGold
`public abstract int GetInitialTradeGold(Hero owner,bool isNavalCaravan,bool eliteCaravan)`

### GetCaravanFormingCost
`public abstract int GetCaravanFormingCost(bool eliteCaravan,bool navalCaravan)`

### GetPowerChangeAfterCaravanCreation
`public abstract int GetPowerChangeAfterCaravanCreation(Hero hero,MobileParty caravanParty)`

### CanHeroCreateCaravan
`public abstract bool CanHeroCreateCaravan(Hero hero)`

### GetEliteCaravanSpawnChance
`public abstract float GetEliteCaravanSpawnChance(Hero hero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
