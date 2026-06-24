<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DifficultyModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DifficultyModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**Base:** `MBGameModel<DifficultyModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DifficultyModel.cs`

## 概述

`DifficultyModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DifficultyModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerTroopsReceivedDamageMultiplier
`public abstract float GetPlayerTroopsReceivedDamageMultiplier()`

**用途 / Purpose:** 获取 `player troops received damage multiplier` 的当前值。

### GetPlayerRecruitSlotBonus
`public abstract int GetPlayerRecruitSlotBonus()`

**用途 / Purpose:** 获取 `player recruit slot bonus` 的当前值。

### GetPlayerMapMovementSpeedBonusMultiplier
`public abstract float GetPlayerMapMovementSpeedBonusMultiplier()`

**用途 / Purpose:** 获取 `player map movement speed bonus multiplier` 的当前值。

### GetCombatAIDifficultyMultiplier
`public abstract float GetCombatAIDifficultyMultiplier()`

**用途 / Purpose:** 获取 `combat a i difficulty multiplier` 的当前值。

### GetPersuasionBonusChance
`public abstract float GetPersuasionBonusChance()`

**用途 / Purpose:** 获取 `persuasion bonus chance` 的当前值。

### GetClanMemberDeathChanceMultiplier
`public abstract float GetClanMemberDeathChanceMultiplier()`

**用途 / Purpose:** 获取 `clan member death chance multiplier` 的当前值。

### GetStealthDifficultyMultiplier
`public abstract float GetStealthDifficultyMultiplier()`

**用途 / Purpose:** 获取 `stealth difficulty multiplier` 的当前值。

### GetDisguiseDifficultyMultiplier
`public abstract float GetDisguiseDifficultyMultiplier()`

**用途 / Purpose:** 获取 `disguise difficulty multiplier` 的当前值。

## 使用示例

```csharp
var implementation = new CustomDifficultyModel();
```

## 参见

- [完整类目录](../catalog)