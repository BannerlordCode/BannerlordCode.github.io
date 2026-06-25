---
title: "DefaultPrisonerDonationModel"
description: "DefaultPrisonerDonationModel 的自动生成类参考。"
---
# DefaultPrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerDonationModel : PrisonerDonationModel`
**Base:** `PrisonerDonationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPrisonerDonationModel.cs`

## 概述

`DefaultPrisonerDonationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPrisonerDonationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateRelationGainAfterHeroPrisonerDonate
`public override float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)`

**用途 / Purpose:** 计算relation gain after hero prisoner donate的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerDonationModel 实例
DefaultPrisonerDonationModel defaultPrisonerDonationModel = ...;
var result = defaultPrisonerDonationModel.CalculateRelationGainAfterHeroPrisonerDonate(donatingParty, donatedHero, donatedSettlement);
```

### CalculateInfluenceGainAfterPrisonerDonation
`public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**用途 / Purpose:** 计算influence gain after prisoner donation的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerDonationModel 实例
DefaultPrisonerDonationModel defaultPrisonerDonationModel = ...;
var result = defaultPrisonerDonationModel.CalculateInfluenceGainAfterPrisonerDonation(donatingParty, donatedPrisoner, donatedSettlement);
```

### CalculateInfluenceGainAfterTroopDonation
`public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)`

**用途 / Purpose:** 计算influence gain after troop donation的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerDonationModel 实例
DefaultPrisonerDonationModel defaultPrisonerDonationModel = ...;
var result = defaultPrisonerDonationModel.CalculateInfluenceGainAfterTroopDonation(donatingParty, donatedCharacter, donatedSettlement);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel());
```

## 参见

- [本区域目录](../)