---
title: "StoryModePartyWageModel"
description: "StoryModePartyWageModel 的自动生成类参考。"
---
# StoryModePartyWageModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModePartyWageModel.cs`

## 概述

`StoryModePartyWageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModePartyWageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「character wage」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartyWageModel 实例
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetCharacterWage(character);
```

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**用途 / Purpose:** 读取并返回当前对象中 「total wage」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartyWageModel 实例
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetTotalWage(mobileParty, troopRoster, false);
```

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**用途 / Purpose:** 读取并返回当前对象中 「troop recruitment cost」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModePartyWageModel 实例
StoryModePartyWageModel storyModePartyWageModel = ...;
var result = storyModePartyWageModel.GetTroopRecruitmentCost(troop, buyerHero, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModePartyWageModel>(new MyStoryModePartyWageModel());
```

## 参见

- [本区域目录](../)