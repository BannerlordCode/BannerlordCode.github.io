<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMapVisibilityModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`

## Overview

`DefaultMapVisibilityModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel())` to change how it computes.

## Key Methods

### MaximumSeeingRange
```csharp
public override float MaximumSeeingRange()
```

### GetPartySpottingRangeBase
```csharp
public override float GetPartySpottingRangeBase(MobileParty party)
```

### GetPartySpottingRange
```csharp
public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)
```

### GetPartyRelativeInspectionRange
```csharp
public override float GetPartyRelativeInspectionRange(IMapPoint party)
```

### GetPartySpottingDifficulty
```csharp
public override float GetPartySpottingDifficulty(MobileParty spottingParty, MobileParty party)
```

### GetHideoutSpottingDistance
```csharp
public override float GetHideoutSpottingDistance()
```

## Usage Example

```csharp
// Typical usage of DefaultMapVisibilityModel (Model)
Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());
```

## See Also

- [Complete Class Catalog](../catalog)