<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BodyPropertiesModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**Base:** `MBGameModel<BodyPropertiesModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BodyPropertiesModel.cs`

## Overview

`BodyPropertiesModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BodyPropertiesModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetHairIndicesForCulture
`public abstract int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Gets the current value of `hair indices for culture`.

### GetBeardIndicesForCulture
`public abstract int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Gets the current value of `beard indices for culture`.

### GetTattooIndicesForCulture
`public abstract int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)`

**Purpose:** Gets the current value of `tattoo indices for culture`.

## Usage Example

```csharp
var implementation = new CustomBodyPropertiesModel();
```

## See Also

- [Complete Class Catalog](../catalog)