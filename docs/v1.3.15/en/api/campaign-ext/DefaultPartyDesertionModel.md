<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyDesertionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**Base:** `PartyDesertionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`

## Overview

`DefaultPartyDesertionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel())` to change how it computes.

## Key Methods

### GetMoraleThresholdForTroopDesertion
```csharp
public override int GetMoraleThresholdForTroopDesertion()
```

### GetDesertionChanceForTroop
```csharp
public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
```

### GetTroopsToDesert
```csharp
public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyDesertionModel (Model)
Game.Current.ReplaceModel<DefaultPartyDesertionModel>(new MyDefaultPartyDesertionModel());
```

## See Also

- [Complete Class Catalog](../catalog)