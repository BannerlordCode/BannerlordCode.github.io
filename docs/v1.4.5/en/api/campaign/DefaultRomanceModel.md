<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultRomanceModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultRomanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRomanceModel : RomanceModel`
**Base:** `RomanceModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultRomanceModel.cs`

## Overview

`DefaultRomanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRomanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAttractionValuePercentage
`public override int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`

**Purpose:** Gets the current value of `attraction value percentage`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel());
```

## See Also

- [Complete Class Catalog](../catalog)