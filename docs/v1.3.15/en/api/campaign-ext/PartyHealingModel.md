<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyHealingModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyHealingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyHealingModel : MBGameModel<PartyHealingModel>`
**Base:** `MBGameModel<PartyHealingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyHealingModel.cs`

## Overview

`PartyHealingModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyHealingModel>(new MyPartyHealingModel())` to change how it computes.

## Key Methods

### GetSurgeryChance
```csharp
public abstract float GetSurgeryChance(PartyBase party)
```

### GetSurvivalChance
```csharp
public abstract float GetSurvivalChance(PartyBase party, CharacterObject agentCharacter, DamageTypes damageType, bool canDamageKillEvenIfBlunt, PartyBase enemyParty = null)
```

### GetSkillXpFromHealingTroop
```csharp
public abstract int GetSkillXpFromHealingTroop(PartyBase party)
```

### GetDailyHealingForRegulars
```csharp
public abstract ExplainedNumber GetDailyHealingForRegulars(PartyBase partyBase, bool isPrisoner, bool includeDescriptions = false)
```

### GetDailyHealingHpForHeroes
```csharp
public abstract ExplainedNumber GetDailyHealingHpForHeroes(PartyBase partyBase, bool isPrisoners, bool includeDescriptions = false)
```

### GetHeroesEffectedHealingAmount
```csharp
public abstract int GetHeroesEffectedHealingAmount(Hero hero, float healingRate)
```

### GetSiegeBombardmentHitSurgeryChance
```csharp
public abstract float GetSiegeBombardmentHitSurgeryChance(PartyBase party)
```

### GetBattleEndHealingAmount
```csharp
public abstract ExplainedNumber GetBattleEndHealingAmount(PartyBase partyBase, Hero hero)
```

## Usage Example

```csharp
// Typical usage of PartyHealingModel (Model)
Game.Current.ReplaceModel<PartyHealingModel>(new MyPartyHealingModel());
```

## See Also

- [Complete Class Catalog](../catalog)