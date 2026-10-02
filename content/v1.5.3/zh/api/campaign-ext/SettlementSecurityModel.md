---
title: "SettlementSecurityModel"
description: "SettlementSecurityModel 的自动生成类参考。"
---
# SettlementSecurityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel> `
**Base:** MBGameModel<SettlementSecurityModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs

## 概述

`SettlementSecurityModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetLootedNearbyPartySecurityEffect
`public abstract float GetLootedNearbyPartySecurityEffect(Town town,float sumOfAttackedPartyStrengths)`

### CalculateSecurityChange
`public abstract ExplainedNumber CalculateSecurityChange(Town town,bool includeDescriptions = false)`

### GetNearbyBanditPartyDefeatedSecurityEffect
`public abstract float GetNearbyBanditPartyDefeatedSecurityEffect(Town town,float sumOfAttackedPartyStrengths)`

### CalculateGoldGainDueToHighSecurity
`public abstract void CalculateGoldGainDueToHighSecurity(Town town,ref ExplainedNumber explainedNumber)`

### CalculateGoldCutDueToLowSecurity
`public abstract void CalculateGoldCutDueToLowSecurity(Town town,ref ExplainedNumber explainedNumber)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
