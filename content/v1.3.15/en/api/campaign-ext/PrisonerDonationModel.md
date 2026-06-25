---
title: "PrisonerDonationModel"
description: "Auto-generated class reference for PrisonerDonationModel."
---
# PrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**Base:** `MBGameModel<PrisonerDonationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs`

## Overview

`PrisonerDonationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PrisonerDonationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateRelationGainAfterHeroPrisonerDonate
`public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)`

**Purpose:** Calculates the current value or result of relation gain after hero prisoner donate.

```csharp
// Obtain an instance of PrisonerDonationModel from the subsystem API first
PrisonerDonationModel prisonerDonationModel = ...;
var result = prisonerDonationModel.CalculateRelationGainAfterHeroPrisonerDonate(donatingParty, donatedHero, donatedSettlement);
```

### CalculateInfluenceGainAfterPrisonerDonation
`public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**Purpose:** Calculates the current value or result of influence gain after prisoner donation.

```csharp
// Obtain an instance of PrisonerDonationModel from the subsystem API first
PrisonerDonationModel prisonerDonationModel = ...;
var result = prisonerDonationModel.CalculateInfluenceGainAfterPrisonerDonation(donatingParty, donatedPrisoner, donatedSettlement);
```

### CalculateInfluenceGainAfterTroopDonation
`public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement)`

**Purpose:** Calculates the current value or result of influence gain after troop donation.

```csharp
// Obtain an instance of PrisonerDonationModel from the subsystem API first
PrisonerDonationModel prisonerDonationModel = ...;
var result = prisonerDonationModel.CalculateInfluenceGainAfterTroopDonation(donatingParty, donatedTroop, donatedSettlement);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PrisonerDonationModel instance = ...;
```

## See Also

- [Area Index](../)