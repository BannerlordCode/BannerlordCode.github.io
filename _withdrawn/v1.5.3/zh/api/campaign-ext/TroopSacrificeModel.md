---
title: "TroopSacrificeModel"
description: "TroopSacrificeModel 的自动生成类参考。"
---
# TroopSacrificeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSacrificeModel : MBGameModel<TroopSacrificeModel> `
**Base:** MBGameModel<TroopSacrificeModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs

## 概述

`TroopSacrificeModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSacrificeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetLostTroopCountForBreakingInBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingInBesiegedSettlement(MobileParty party,SiegeEvent siegeEvent)`

### GetLostTroopCountForBreakingOutOfBesiegedSettlement
`public abstract ExplainedNumber GetLostTroopCountForBreakingOutOfBesiegedSettlement(MobileParty party,SiegeEvent siegeEvent,bool isBreakingOutFromPort)`

### GetNumberOfTroopsSacrificedForTryingToGetAway
`public abstract int GetNumberOfTroopsSacrificedForTryingToGetAway(BattleSideEnum playerBattleSide,MapEvent mapEvent)`

### GetShipsToSacrificeForTryingToGetAway
`public abstract void GetShipsToSacrificeForTryingToGetAway(BattleSideEnum playerBattleSide,MapEvent mapEvent,out MBList<Ship> shipsToCapture,out Ship shipToTakeDamage,out float damageToApplyForLastShip)`

### CanPlayerGetAwayFromEncounter
`public abstract bool CanPlayerGetAwayFromEncounter(out TextObject explanation)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
