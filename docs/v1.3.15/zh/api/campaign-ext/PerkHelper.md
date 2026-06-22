<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PerkHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetCaptainPerksForTroopUsages

```csharp
public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags troopUsageFlags)
```

### PlayerHasAnyItemDonationPerk

```csharp
public static bool PlayerHasAnyItemDonationPerk()
```

### AddPerkBonusForParty

```csharp
public static void AddPerkBonusForParty(PerkObject perk, MobileParty party, bool isPrimaryBonus, ref ExplainedNumber stat, bool shouldApplyNavalMultiplier = false)
```

### AddPerkBonusForCharacter

```csharp
public static void AddPerkBonusForCharacter(PerkObject perk, CharacterObject character, bool isPrimaryBonus, ref ExplainedNumber bonuses, bool shouldApplyNavalMultiplier = false)
```

### AddEpicPerkBonusForCharacter

```csharp
public static void AddEpicPerkBonusForCharacter(PerkObject perk, CharacterObject character, SkillObject skillType, bool applyPrimaryBonus, ref ExplainedNumber bonuses, int skillRequired, bool shouldApplyNavalMultiplier = false)
```

### AddPerkBonusFromCaptain

```csharp
public static void AddPerkBonusFromCaptain(PerkObject perk, CharacterObject captainCharacter, ref ExplainedNumber bonuses)
```

### AddPerkBonusForTown

```csharp
public static void AddPerkBonusForTown(PerkObject perk, Town town, ref ExplainedNumber bonuses)
```

### GetPerkValueForTown

```csharp
public static bool GetPerkValueForTown(PerkObject perk, Town town)
```

### GetGovernorPerksForHero

```csharp
public static List<PerkObject> GetGovernorPerksForHero(Hero hero)
```

### GetGovernorEngineeringSkillEffectForHero

```csharp
public static ValueTuple<TextObject, TextObject> GetGovernorEngineeringSkillEffectForHero(Hero governor)
```

### AvailablePerkCountOfHero

```csharp
public static int AvailablePerkCountOfHero(Hero hero)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)