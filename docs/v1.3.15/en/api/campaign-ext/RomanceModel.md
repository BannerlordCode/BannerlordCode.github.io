<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RomanceModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RomanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RomanceModel : MBGameModel<RomanceModel>`
**Base:** `MBGameModel<RomanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RomanceModel.cs`

## Overview

`RomanceModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<RomanceModel>(new MyRomanceModel())` to change how it computes.

## Key Methods

### GetAttractionValuePercentage
```csharp
public abstract int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)
```

## Usage Example

```csharp
// Typical usage of RomanceModel (Model)
Game.Current.ReplaceModel<RomanceModel>(new MyRomanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)