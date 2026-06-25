---
title: "DefaultBodyPropertiesModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBodyPropertiesModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBodyPropertiesModel : BodyPropertiesModel`
**Base:** `BodyPropertiesModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBodyPropertiesModel.cs`

## Overview

`DefaultBodyPropertiesModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBodyPropertiesModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHairIndicesForCulture
`public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Gets the current value of `hair indices for culture`.

### GetBeardIndicesForCulture
`public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Gets the current value of `beard indices for culture`.

### GetTattooIndicesForCulture
`public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Gets the current value of `tattoo indices for culture`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel());
```

## See Also

- [Complete Class Catalog](../catalog)