<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPrisonerDonationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPrisonerDonationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonerDonationModel : PrisonerDonationModel`
**Base:** `PrisonerDonationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerDonationModel.cs`

## Overview

`DefaultPrisonerDonationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel())` to change how it computes.

## Key Methods

### CalculateRelationGainAfterHeroPrisonerDonate
```csharp
public override float CalculateRelationGainAfterHeroPrisonerDonate(PartyBase donatingParty, Hero donatedHero, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterPrisonerDonation
```csharp
public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)
```

### CalculateInfluenceGainAfterTroopDonation
```csharp
public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)
```

## Usage Example

```csharp
// Typical usage of DefaultPrisonerDonationModel (Model)
Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel());
```

## See Also

- [Complete Class Catalog](../catalog)