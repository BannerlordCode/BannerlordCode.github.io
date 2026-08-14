---
title: "PrisonerRecruitmentCalculationModel"
description: "PrisonerRecruitmentCalculationModel 的自动生成类参考。"
---
# PrisonerRecruitmentCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**Base:** `MBGameModel<PrisonerRecruitmentCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`

## 概述

`PrisonerRecruitmentCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PrisonerRecruitmentCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetConformityNeededToRecruitPrisoner
`public abstract int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 conformity needed to recruit prisoner 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonerRecruitmentCalculationModel 实例
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetConformityChangePerHour
`public abstract ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 conformity change per hour 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonerRecruitmentCalculationModel 实例
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, character);
```

### GetPrisonerRecruitmentMoraleEffect
`public abstract int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**用途 / Purpose:** 读取并返回当前对象中 prisoner recruitment morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 PrisonerRecruitmentCalculationModel 实例
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public abstract bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**用途 / Purpose:** 判断当前对象是否处于 prisoner recruitable 状态或条件。

```csharp
// 先通过子系统 API 拿到 PrisonerRecruitmentCalculationModel 实例
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public abstract bool ShouldPartyRecruitPrisoners(PartyBase party)`

**用途 / Purpose:** 调用 ShouldPartyRecruitPrisoners 对应的操作。

```csharp
// 先通过子系统 API 拿到 PrisonerRecruitmentCalculationModel 实例
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

### CalculateRecruitableNumber
`public abstract int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 计算recruitable number的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PrisonerRecruitmentCalculationModel 实例
PrisonerRecruitmentCalculationModel prisonerRecruitmentCalculationModel = ...;
var result = prisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PrisonerRecruitmentCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)