<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonerDonationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonerDonationModel : MBGameModel<PrisonerDonationModel>`
**Base:** `MBGameModel<PrisonerDonationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerDonationModel.cs`

## Overview

`PrisonerDonationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PrisonerDonationModel>(new MyPrisonerDonationModel())` to change how it computes.

## Key Methods

### CalculateRelationGainAfterHeroPrisonerDonate
```csharp
public abstract float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterPrisonerDonation
```csharp
public abstract float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterTroopDonation
```csharp
public abstract float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedTroop, Settlement donatedSettlement)
```

## Usage Example

```csharp
// Typical usage of PrisonerDonationModel (Model)
Game.Current.ReplaceModel<PrisonerDonationModel>(new MyPrisonerDonationModel());
```

## See Also

- [Complete Class Catalog](../catalog)