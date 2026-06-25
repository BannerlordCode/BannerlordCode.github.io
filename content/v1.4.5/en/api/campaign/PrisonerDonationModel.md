---
title: "PrisonerDonationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonerDonationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**Base:** `MBGameModel<PrisonerDonationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PrisonerDonationModel.cs`

## Overview

`PrisonerDonationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PrisonerDonationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateRelationGainAfterHeroPrisonerDonate
`public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)`

**Purpose:** Handles logic related to `calculate relation gain after hero prisoner donate`.

### CalculateInfluenceGainAfterPrisonerDonation
`public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**Purpose:** Handles logic related to `calculate influence gain after prisoner donation`.

### CalculateInfluenceGainAfterTroopDonation
`public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement)`

**Purpose:** Handles logic related to `calculate influence gain after troop donation`.

## Usage Example

```csharp
var implementation = new CustomPrisonerDonationModel();
```

## See Also

- [Complete Class Catalog](../catalog)