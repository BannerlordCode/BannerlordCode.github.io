<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRomanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultRomanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRomanceModel : RomanceModel`
**Base:** `RomanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRomanceModel.cs`

## Overview

`DefaultRomanceModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel())` to change how it computes.

## Key Methods

### GetAttractionValuePercentage
```csharp
public override int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)
```

## Usage Example

```csharp
// Typical usage of DefaultRomanceModel (Model)
Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)