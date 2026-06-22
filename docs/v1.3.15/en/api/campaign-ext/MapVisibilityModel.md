<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapVisibilityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**Base:** `MBGameModel<MapVisibilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`

## Overview

`MapVisibilityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<MapVisibilityModel>(new MyMapVisibilityModel())` to change how it computes.

## Key Methods

### MaximumSeeingRange
```csharp
public abstract float MaximumSeeingRange()
```

### GetPartySpottingRangeBase
```csharp
public abstract float GetPartySpottingRangeBase(MobileParty party)
```

### GetPartySpottingRange
```csharp
public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)
```

### GetPartyRelativeInspectionRange
```csharp
public abstract float GetPartyRelativeInspectionRange(IMapPoint party)
```

### GetPartySpottingDifficulty
```csharp
public abstract float GetPartySpottingDifficulty(MobileParty spotterParty, MobileParty party)
```

### GetHideoutSpottingDistance
```csharp
public abstract float GetHideoutSpottingDistance()
```

## Usage Example

```csharp
// Typical usage of MapVisibilityModel (Model)
Game.Current.ReplaceModel<MapVisibilityModel>(new MyMapVisibilityModel());
```

## See Also

- [Complete Class Catalog](../catalog)