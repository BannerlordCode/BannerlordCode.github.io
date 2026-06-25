---
title: "DefaultPartyTrainingModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyTrainingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**Base:** `PartyTrainingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTrainingModel.cs`

## 概述

`DefaultPartyTrainingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyTrainingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetXpReward
`public override int GetXpReward(CharacterObject character)`

**用途 / Purpose:** 获取 `xp reward` 的当前值。

### GetEffectiveDailyExperience
`public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)`

**用途 / Purpose:** 获取 `effective daily experience` 的当前值。

### GenerateSharedXp
`public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**用途 / Purpose:** 处理 `generate shared xp` 相关逻辑。

### CalculateXpGainFromBattles
`public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**用途 / Purpose:** 处理 `calculate xp gain from battles` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel());
```

## 参见

- [完整类目录](../catalog)