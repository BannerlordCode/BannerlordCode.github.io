<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyNavigationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**Base:** `MBGameModel<PartyNavigationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`

## Overview

`PartyNavigationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PartyNavigationModel>(new MyPartyNavigationModel())` to change how it computes.

## Key Methods

### CanPlayerNavigateToPosition
```csharp
public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)
```

### GetEmbarkDisembarkThresholdDistance
```csharp
public abstract float GetEmbarkDisembarkThresholdDistance()
```

### IsTerrainTypeValidForNavigationType
```csharp
public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)
```

### GetInvalidTerrainTypesForNavigationType
```csharp
public abstract int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)
```

### HasNavalNavigationCapability
```csharp
public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of PartyNavigationModel (Model)
Game.Current.ReplaceModel<PartyNavigationModel>(new MyPartyNavigationModel());
```

## See Also

- [Complete Class Catalog](../catalog)