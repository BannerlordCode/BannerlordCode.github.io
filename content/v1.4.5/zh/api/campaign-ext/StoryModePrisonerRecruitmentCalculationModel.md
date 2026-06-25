---
title: "StoryModePrisonerRecruitmentCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModePrisonerRecruitmentCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## 概述

`StoryModePrisonerRecruitmentCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModePrisonerRecruitmentCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateRecruitableNumber
`public override int CalculateRecruitableNumber(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 处理 `calculate recruitable number` 相关逻辑。

### GetConformityChangePerHour
`public override ExplainedNumber GetConformityChangePerHour(PartyBase party, CharacterObject character)`

**用途 / Purpose:** 获取 `conformity change per hour` 的当前值。

### GetConformityNeededToRecruitPrisoner
`public override int GetConformityNeededToRecruitPrisoner(CharacterObject character)`

**用途 / Purpose:** 获取 `conformity needed to recruit prisoner` 的当前值。

### GetPrisonerRecruitmentMoraleEffect
`public override int GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`

**用途 / Purpose:** 获取 `prisoner recruitment morale effect` 的当前值。

### IsPrisonerRecruitable
`public override bool IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`

**用途 / Purpose:** 处理 `is prisoner recruitable` 相关逻辑。

### ShouldPartyRecruitPrisoners
`public override bool ShouldPartyRecruitPrisoners(PartyBase party)`

**用途 / Purpose:** 处理 `should party recruit prisoners` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModePrisonerRecruitmentCalculationModel>(new MyStoryModePrisonerRecruitmentCalculationModel());
```

## 参见

- [完整类目录](../catalog)