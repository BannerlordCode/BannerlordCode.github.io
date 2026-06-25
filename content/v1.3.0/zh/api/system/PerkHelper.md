---
title: "PerkHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PerkHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PerkHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`

## 概述

`PerkHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PerkHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCaptainPerksForTroopUsages
`public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags troopUsageFlags)`

**用途 / Purpose:** 获取 `captain perks for troop usages` 的当前值。

### PlayerHasAnyItemDonationPerk
`public static bool PlayerHasAnyItemDonationPerk()`

**用途 / Purpose:** 处理 `player has any item donation perk` 相关逻辑。

### AddPerkBonusForParty
`public static void AddPerkBonusForParty(PerkObject perk, MobileParty party, bool isPrimaryBonus, ref ExplainedNumber stat)`

**用途 / Purpose:** 向当前集合/状态中添加 `perk bonus for party`。

### AddPerkBonusForCharacter
`public static void AddPerkBonusForCharacter(PerkObject perk, CharacterObject character, bool isPrimaryBonus, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 向当前集合/状态中添加 `perk bonus for character`。

### AddEpicPerkBonusForCharacter
`public static void AddEpicPerkBonusForCharacter(PerkObject perk, CharacterObject character, SkillObject skillType, bool applyPrimaryBonus, ref ExplainedNumber bonuses, int skillRequired)`

**用途 / Purpose:** 向当前集合/状态中添加 `epic perk bonus for character`。

### AddPerkBonusFromCaptain
`public static void AddPerkBonusFromCaptain(PerkObject perk, CharacterObject captainCharacter, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 向当前集合/状态中添加 `perk bonus from captain`。

### AddPerkBonusForTown
`public static void AddPerkBonusForTown(PerkObject perk, Town town, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 向当前集合/状态中添加 `perk bonus for town`。

### GetPerkValueForTown
`public static bool GetPerkValueForTown(PerkObject perk, Town town)`

**用途 / Purpose:** 获取 `perk value for town` 的当前值。

### GetGovernorPerksForHero
`public static List<PerkObject> GetGovernorPerksForHero(Hero hero)`

**用途 / Purpose:** 获取 `governor perks for hero` 的当前值。

### GetGovernorEngineeringSkillEffectForHero
`public static ValueTuple<TextObject, TextObject> GetGovernorEngineeringSkillEffectForHero(Hero governor)`

**用途 / Purpose:** 获取 `governor engineering skill effect for hero` 的当前值。

### SetDescriptionTextVariable
`public static void SetDescriptionTextVariable(TextObject description, float bonus, EffectIncrementType effectIncrementType)`

**用途 / Purpose:** 设置 `description text variable` 的值或状态。

### AvailablePerkCountOfHero
`public static int AvailablePerkCountOfHero(Hero hero)`

**用途 / Purpose:** 处理 `available perk count of hero` 相关逻辑。

## 使用示例

```csharp
PerkHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)