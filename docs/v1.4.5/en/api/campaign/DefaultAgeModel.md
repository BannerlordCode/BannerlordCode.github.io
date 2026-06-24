<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAgeModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultAgeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAgeModel : AgeModel`
**Base:** `AgeModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultAgeModel.cs`

## Overview

`DefaultAgeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAgeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgeLimitForLocation
`public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`

**Purpose:** Gets the current value of `age limit for location`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAgeModel>(new MyDefaultAgeModel());
```

## See Also

- [Complete Class Catalog](../catalog)