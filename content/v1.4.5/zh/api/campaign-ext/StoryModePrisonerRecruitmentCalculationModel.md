---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "StoryModePrisonerRecruitmentCalculationModel 的自动生成类参考。"
---
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## 概述

`StoryModePrisonerRecruitmentCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModePrisonerRecruitmentCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 计算recruitable number的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModePrisonerRecruitmentCalculationModel 实例
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.CalculateRecruitableNumber(party, character);
```

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 conformity change per hour 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePrisonerRecruitmentCalculationModel 实例
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetConformityChangePerHour(party, character);
```

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 conformity needed to recruit prisoner 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePrisonerRecruitmentCalculationModel 实例
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetConformityNeededToRecruitPrisoner(character);
```

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 prisoner recruitment morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePrisonerRecruitmentCalculationModel 实例
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.GetPrisonerRecruitmentMoraleEffect(party, character, 0);
```

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 prisoner recruitable 状态或条件。

```csharp
// 先通过子系统 API 拿到 StoryModePrisonerRecruitmentCalculationModel 实例
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.IsPrisonerRecruitable(party, character, conformityNeeded);
```

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldPartyRecruitPrisoners 对应的操作。

```csharp
// 先通过子系统 API 拿到 StoryModePrisonerRecruitmentCalculationModel 实例
StoryModePrisonerRecruitmentCalculationModel storyModePrisonerRecruitmentCalculationModel = ...;
var result = storyModePrisonerRecruitmentCalculationModel.ShouldPartyRecruitPrisoners(party);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModePrisonerRecruitmentCalculationModel>(new MyStoryModePrisonerRecruitmentCalculationModel());
```

## 参见

- [本区域目录](../)