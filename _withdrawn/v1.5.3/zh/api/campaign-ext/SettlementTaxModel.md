---
title: "SettlementTaxModel"
description: "SettlementTaxModel 的自动生成类参考。"
---
# SettlementTaxModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementTaxModel : MBGameModel<SettlementTaxModel> `
**Base:** MBGameModel<SettlementTaxModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs

## 概述

`SettlementTaxModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementTaxModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetTownTaxRatio
`public abstract float GetTownTaxRatio(Town town)`

### GetVillageTaxRatio
`public abstract float GetVillageTaxRatio(Village village)`

### GetTownCommissionChangeBasedOnSecurity
`public abstract float GetTownCommissionChangeBasedOnSecurity(Town town,float commission)`

### CalculateTownTax
`public abstract ExplainedNumber CalculateTownTax(Town town,bool includeDescriptions = false)`

### CalculateVillageTaxFromIncome
`public abstract int CalculateVillageTaxFromIncome(Village village,int marketIncome)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
