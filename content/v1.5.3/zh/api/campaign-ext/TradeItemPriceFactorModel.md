---
title: "TradeItemPriceFactorModel"
description: "TradeItemPriceFactorModel 的自动生成类参考。"
---
# TradeItemPriceFactorModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeItemPriceFactorModel : MBGameModel<TradeItemPriceFactorModel> `
**Base:** MBGameModel<TradeItemPriceFactorModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs

## 概述

`TradeItemPriceFactorModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeItemPriceFactorModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTradePenalty
`public abstract float GetTradePenalty(ItemObject item,MobileParty clientParty,PartyBase merchant,bool isSelling,float inStore,float supply,float demand)`

### GetBasePriceFactor
`public abstract float GetBasePriceFactor(ItemCategory itemCategory,float inStoreValue,float supply,float demand,bool isSelling,int transferValue)`

### GetPrice
`public abstract int GetPrice(EquipmentElement itemRosterElement,MobileParty clientParty,PartyBase merchant,bool isSelling,float inStoreValue,float supply,float demand)`

### GetTheoreticalMaxItemMarketValue
`public abstract int GetTheoreticalMaxItemMarketValue(ItemObject item)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
