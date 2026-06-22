<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PerkHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)