<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyDesertionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyDesertionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyDesertionModel : MBGameModel<PartyDesertionModel>`
**Base:** `MBGameModel<PartyDesertionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyDesertionModel.cs`

## Overview

`PartyDesertionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyDesertionModel>(new MyPartyDesertionModel())` to change how it computes.

## Key Methods

### GetTroopsToDesert
```csharp
public abstract TroopRoster GetTroopsToDesert(MobileParty mobileParty)
```

### GetDesertionChanceForTroop
```csharp
public abstract float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)
```

### GetMoraleThresholdForTroopDesertion
```csharp
public abstract int GetMoraleThresholdForTroopDesertion()
```

## Usage Example

```csharp
// Typical usage of PartyDesertionModel (Model)
Game.Current.ReplaceModel<PartyDesertionModel>(new MyPartyDesertionModel());
```

## See Also

- [Complete Class Catalog](../catalog)