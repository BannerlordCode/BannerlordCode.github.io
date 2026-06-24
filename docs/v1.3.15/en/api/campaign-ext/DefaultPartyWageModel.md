<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyWageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyWageModel.cs`

## Overview

`DefaultPartyWageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyWageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public override int MaxWagePaymentLimit { get; }` |

## Key Methods

### GetCharacterWage
`public override int GetCharacterWage(CharacterObject character)`

**Purpose:** Gets the current value of `character wage`.

### GetTotalWage
`public override ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `total wage`.

### GetTroopRecruitmentCost
`public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** Gets the current value of `troop recruitment cost`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyWageModel>(new MyDefaultPartyWageModel());
```

## See Also

- [Complete Class Catalog](../catalog)