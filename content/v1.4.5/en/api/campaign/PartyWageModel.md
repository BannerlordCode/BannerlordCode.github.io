---
title: "PartyWageModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyWageModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyWageModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyWageModel : MBGameModel<PartyWageModel>`
**Base:** `MBGameModel<PartyWageModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyWageModel.cs`

## Overview

`PartyWageModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyWageModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxWagePaymentLimit` | `public abstract int MaxWagePaymentLimit { get; }` |

## Key Methods

### GetCharacterWage
`public abstract int GetCharacterWage(CharacterObject character)`

**Purpose:** Gets the current value of `character wage`.

### GetTotalWage
`public abstract ExplainedNumber GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`

**Purpose:** Gets the current value of `total wage`.

### GetTroopRecruitmentCost
`public abstract ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`

**Purpose:** Gets the current value of `troop recruitment cost`.

## Usage Example

```csharp
var implementation = new CustomPartyWageModel();
```

## See Also

- [Complete Class Catalog](../catalog)