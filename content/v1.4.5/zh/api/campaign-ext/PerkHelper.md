---
title: "PerkHelper"
description: "PerkHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 captain perks for troop usages 的结果。

```csharp
// 静态调用，不需要实例
PerkHelper.GetCaptainPerksForTroopUsages(troopUsageFlags);
```

### PlayerHasAnyItemDonationPerk
`public static bool PlayerHasAnyItemDonationPerk()`

**用途 / Purpose:** 调用 PlayerHasAnyItemDonationPerk 对应的操作。

```csharp
// 静态调用，不需要实例
PerkHelper.PlayerHasAnyItemDonationPerk();
```

### AddPerkBonusForParty
`public static void AddPerkBonusForParty(PerkObject perk, MobileParty party, bool isPrimaryBonus, ref ExplainedNumber stat, bool shouldApplyNavalMultiplier = false)`

**用途 / Purpose:** 将 perk bonus for party 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PerkHelper.AddPerkBonusForParty(perk, party, false, stat, false);
```

### AddPerkBonusForCharacter
`public static void AddPerkBonusForCharacter(PerkObject perk, CharacterObject character, bool isPrimaryBonus, ref ExplainedNumber bonuses, bool shouldApplyNavalMultiplier = false)`

**用途 / Purpose:** 将 perk bonus for character 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PerkHelper.AddPerkBonusForCharacter(perk, character, false, bonuses, false);
```

### AddEpicPerkBonusForCharacter
`public static void AddEpicPerkBonusForCharacter(PerkObject perk, CharacterObject character, SkillObject skillType, bool applyPrimaryBonus, ref ExplainedNumber bonuses, int skillRequired, bool shouldApplyNavalMultiplier = false)`

**用途 / Purpose:** 将 epic perk bonus for character 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PerkHelper.AddEpicPerkBonusForCharacter(perk, character, skillType, false, bonuses, 0, false);
```

### AddPerkBonusFromCaptain
`public static void AddPerkBonusFromCaptain(PerkObject perk, CharacterObject captainCharacter, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 将 perk bonus from captain 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PerkHelper.AddPerkBonusFromCaptain(perk, captainCharacter, bonuses);
```

### AddPerkBonusForTown
`public static void AddPerkBonusForTown(PerkObject perk, Town town, ref ExplainedNumber bonuses)`

**用途 / Purpose:** 将 perk bonus for town 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
PerkHelper.AddPerkBonusForTown(perk, town, bonuses);
```

### GetPerkValueForTown
`public static bool GetPerkValueForTown(PerkObject perk, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 perk value for town 的结果。

```csharp
// 静态调用，不需要实例
PerkHelper.GetPerkValueForTown(perk, town);
```

### GetGovernorPerksForHero
`public static List<PerkObject> GetGovernorPerksForHero(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 governor perks for hero 的结果。

```csharp
// 静态调用，不需要实例
PerkHelper.GetGovernorPerksForHero(hero);
```

### GetGovernorEngineeringSkillEffectForHero
`public static ValueTuple<TextObject, TextObject> GetGovernorEngineeringSkillEffectForHero(Hero governor)`

**用途 / Purpose:** 读取并返回当前对象中 governor engineering skill effect for hero 的结果。

```csharp
// 静态调用，不需要实例
PerkHelper.GetGovernorEngineeringSkillEffectForHero(governor);
```

### AvailablePerkCountOfHero
`public static int AvailablePerkCountOfHero(Hero hero)`

**用途 / Purpose:** 调用 AvailablePerkCountOfHero 对应的操作。

```csharp
// 静态调用，不需要实例
PerkHelper.AvailablePerkCountOfHero(hero);
```

## 使用示例

```csharp
PerkHelper.Initialize();
```

## 参见

- [本区域目录](../)