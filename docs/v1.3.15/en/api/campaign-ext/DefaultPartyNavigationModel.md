<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPartyNavigationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**Base:** `PartyNavigationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`

## Overview

`DefaultPartyNavigationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel())` to change how it computes.

## Key Methods

### GetEmbarkDisembarkThresholdDistance
```csharp
public override float GetEmbarkDisembarkThresholdDistance()
```

### GetInvalidTerrainTypesForNavigationType
```csharp
public override int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)
```

### IsTerrainTypeValidForNavigationType
```csharp
public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)
```

### HasNavalNavigationCapability
```csharp
public override bool HasNavalNavigationCapability(MobileParty mobileParty)
```

### CanPlayerNavigateToPosition
```csharp
public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)
```

## Usage Example

```csharp
// Typical usage of DefaultPartyNavigationModel (Model)
Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel());
```

## See Also

- [Complete Class Catalog](../catalog)