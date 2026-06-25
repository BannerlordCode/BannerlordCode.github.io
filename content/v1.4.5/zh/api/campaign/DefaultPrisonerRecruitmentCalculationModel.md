---
title: "DefaultPrisonerRecruitmentCalculationModel"
description: "DefaultPrisonerRecruitmentCalculationModel 的自动生成类参考。"
---
# DefaultPrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`

## 概述

`DefaultPrisonerRecruitmentCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPrisonerRecruitmentCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 conformity needed to recruit prisoner 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerRecruitmentCalculationModel 实例
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject troopToBoost)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 conformity change per hour 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerRecruitmentCalculationModel 实例
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, troopToBoost);
```

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 prisoner recruitment morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerRecruitmentCalculationModel 实例
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 prisoner recruitable 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerRecruitmentCalculationModel 实例
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldPartyRecruitPrisoners 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerRecruitmentCalculationModel 实例
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 计算recruitable number的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPrisonerRecruitmentCalculationModel 实例
DefaultPrisonerRecruitmentCalculationModel defaultPrisonerRecruitmentCalculationModel = ...;
var result = defaultPrisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPrisonerRecruitmentCalculationModel>(new MyDefaultPrisonerRecruitmentCalculationModel());
```

## 参见

- [本区域目录](../)