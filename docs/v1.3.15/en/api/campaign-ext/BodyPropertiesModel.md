<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BodyPropertiesModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BodyPropertiesModel : MBGameModel<BodyPropertiesModel>`
**Base:** `MBGameModel<BodyPropertiesModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BodyPropertiesModel.cs`

## Overview

`BodyPropertiesModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<BodyPropertiesModel>(new MyBodyPropertiesModel())` to change how it computes.

## Key Methods

### GetHairIndicesForCulture
```csharp
public abstract int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetBeardIndicesForCulture
```csharp
public abstract int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetTattooIndicesForCulture
```csharp
public abstract int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

## Usage Example

```csharp
// Typical usage of BodyPropertiesModel (Model)
Game.Current.ReplaceModel<BodyPropertiesModel>(new MyBodyPropertiesModel());
```

## See Also

- [Complete Class Catalog](../catalog)