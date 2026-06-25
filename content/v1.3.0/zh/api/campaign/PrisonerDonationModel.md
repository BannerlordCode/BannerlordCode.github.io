---
title: "PrisonerDonationModel"
description: "PrisonerDonationModel 的自动生成类参考。"
---
# PrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**Base:** `MBGameModel<PrisonerDonationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs`

## 概述

`PrisonerDonationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PrisonerDonationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateRelationGainAfterHeroPrisonerDonate
`public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)`

**用途 / Purpose:** 计算「relation gain after hero prisoner donate」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PrisonerDonationModel 实例
PrisonerDonationModel prisonerDonationModel = ...;
var result = prisonerDonationModel.CalculateRelationGainAfterHeroPrisonerDonate(donatingParty, donatedHero, donatedSettlement);
```

### CalculateInfluenceGainAfterPrisonerDonation
`public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**用途 / Purpose:** 计算「influence gain after prisoner donation」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PrisonerDonationModel 实例
PrisonerDonationModel prisonerDonationModel = ...;
var result = prisonerDonationModel.CalculateInfluenceGainAfterPrisonerDonation(donatingParty, donatedPrisoner, donatedSettlement);
```

### CalculateInfluenceGainAfterTroopDonation
`public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement)`

**用途 / Purpose:** 计算「influence gain after troop donation」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PrisonerDonationModel 实例
PrisonerDonationModel prisonerDonationModel = ...;
var result = prisonerDonationModel.CalculateInfluenceGainAfterTroopDonation(donatingParty, donatedTroop, donatedSettlement);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PrisonerDonationModel instance = ...;
```

## 参见

- [本区域目录](../)