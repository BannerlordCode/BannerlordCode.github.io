---
title: "SettlementAccessModel"
description: "SettlementAccessModel 的自动生成类参考。"
---
# SettlementAccessModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel> `
**Base:** MBGameModel<SettlementAccessModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs

## 概述

`SettlementAccessModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CanMainHeroEnterSettlement
`public abstract void CanMainHeroEnterSettlement(Settlement settlement,out SettlementAccessModel.AccessDetails accessDetails)`

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement,out SettlementAccessModel.AccessDetails accessDetails)`

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement,out SettlementAccessModel.AccessDetails accessDetails)`

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement,string locationId,out bool disableOption,out TextObject disabledText)`

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement,SettlementAccessModel.SettlementAction settlementAction,out bool disableOption,out TextObject disabledText)`

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement,out bool disableOption,out TextObject disabledText)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
