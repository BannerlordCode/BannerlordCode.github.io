<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPrisonerDonationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate relation gain after hero prisoner donate`.

### CalculateInfluenceGainAfterPrisonerDonation
`public override float CalculateInfluenceGainAfterPrisonerDonation(PartyBase donatingParty, CharacterObject donatedPrisoner, Settlement donatedSettlement)`

**Purpose:** Handles logic related to `calculate influence gain after prisoner donation`.

### CalculateInfluenceGainAfterTroopDonation
`public override float CalculateInfluenceGainAfterTroopDonation(PartyBase donatingParty, CharacterObject donatedCharacter, Settlement donatedSettlement)`

**Purpose:** Handles logic related to `calculate influence gain after troop donation`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPrisonerDonationModel>(new MyDefaultPrisonerDonationModel());
```

## See Also

- [Complete Class Catalog](../catalog)