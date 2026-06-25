---
title: "DefaultDifficultyModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultDifficultyModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**Base:** `DifficultyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs`

## 概述

`DefaultDifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultDifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerTroopsReceivedDamageMultiplier
`public override float GetPlayerTroopsReceivedDamageMultiplier()`

**用途 / Purpose:** 获取 `player troops received damage multiplier` 的当前值。

### GetPlayerRecruitSlotBonus
`public override int GetPlayerRecruitSlotBonus()`

**用途 / Purpose:** 获取 `player recruit slot bonus` 的当前值。

### GetPlayerMapMovementSpeedBonusMultiplier
`public override float GetPlayerMapMovementSpeedBonusMultiplier()`

**用途 / Purpose:** 获取 `player map movement speed bonus multiplier` 的当前值。

### GetStealthDifficultyMultiplier
`public override float GetStealthDifficultyMultiplier()`

**用途 / Purpose:** 获取 `stealth difficulty multiplier` 的当前值。

### GetDisguiseDifficultyMultiplier
`public override float GetDisguiseDifficultyMultiplier()`

**用途 / Purpose:** 获取 `disguise difficulty multiplier` 的当前值。

### GetCombatAIDifficultyMultiplier
`public override float GetCombatAIDifficultyMultiplier()`

**用途 / Purpose:** 获取 `combat a i difficulty multiplier` 的当前值。

### GetPersuasionBonusChance
`public override float GetPersuasionBonusChance()`

**用途 / Purpose:** 获取 `persuasion bonus chance` 的当前值。

### GetClanMemberDeathChanceMultiplier
`public override float GetClanMemberDeathChanceMultiplier()`

**用途 / Purpose:** 获取 `clan member death chance multiplier` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultDifficultyModel>(new MyDefaultDifficultyModel());
```

## 参见

- [完整类目录](../catalog)