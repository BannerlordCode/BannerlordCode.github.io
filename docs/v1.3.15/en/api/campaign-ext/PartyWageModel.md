<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyWageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`
**Base:** `MBGameModel<PartyWageModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyWageModel.cs`

## Overview

`PartyWageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyWageModel>(new MyPartyWageModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public abstract int MaxWagePaymentLimit { get; }` |

## Key Methods

### GetCharacterWage
```csharp
public abstract int GetCharacterWage(CharacterObject character)
```

### GetTotalWage
```csharp
public abstract ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)
```

### GetTroopRecruitmentCost
```csharp
public abstract ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
```

## Usage Example

```csharp
// Typical usage of PartyWageModel (Model)
Game.Current.ReplaceModel<PartyWageModel>(new MyPartyWageModel());
```

## See Also

- [Complete Class Catalog](../catalog)