---
title: "DefaultPrisonerDonationModel"
description: "Auto-generated class reference for DefaultPrisonerDonationModel."
---
# DefaultPrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerDonationModel : PrisonerDonationModel`
**Base:** `PrisonerDonationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs`

## Overview

`DefaultPrisonerDonationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPrisonerDonationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateRelationGainAfterHeroPrisonerDonate
`public override float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)`

**Purpose:** **Purpose:** Calculates the current value or result of relation gain after hero prisoner donate.

```csharp
// Obtain an instance of DefaultPrisonerDonationModel from the subsystem API first
DefaultPrisonerDonationModel defaultPrisonerDonationModel = ...;
var result = defaultPrisonerDonationModel.CalculateRelationGainAfterHeroPrisonerDonate(donatingParty, donatedHero, donatedSettlement);
```

### CalculateInfluenceGainAfterPrisonerDonation
`public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**Purpose:** **Purpose:** Calculates the current value or result of influence gain after prisoner donation.

```csharp
// Obtain an instance of DefaultPrisonerDonationModel from the subsystem API first
DefaultPrisonerDonationModel defaultPrisonerDonationModel = ...;
var result = defaultPrisonerDonationModel.CalculateInfluenceGainAfterPrisonerDonation(donatingParty, donatedPrisoner, donatedSettlement);
```

### CalculateInfluenceGainAfterTroopDonation
`public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)`

**Purpose:** **Purpose:** Calculates the current value or result of influence gain after troop donation.

```csharp
// Obtain an instance of DefaultPrisonerDonationModel from the subsystem API first
DefaultPrisonerDonationModel defaultPrisonerDonationModel = ...;
var result = defaultPrisonerDonationModel.CalculateInfluenceGainAfterTroopDonation(donatingParty, donatedCharacter, donatedSettlement);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel());
```

## See Also

- [Area Index](../)