<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBodyPropertiesModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultBodyPropertiesModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBodyPropertiesModel : BodyPropertiesModel`
**Base:** `BodyPropertiesModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBodyPropertiesModel.cs`

## Overview

`DefaultBodyPropertiesModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel())` to change how it computes.

## Key Methods

### GetHairIndicesForCulture
```csharp
public override int GetHairIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetBeardIndicesForCulture
```csharp
public override int GetBeardIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

### GetTattooIndicesForCulture
```csharp
public override int GetTattooIndicesForCulture(int race, int gender, float age, CultureObject culture)
```

## Usage Example

```csharp
// Typical usage of DefaultBodyPropertiesModel (Model)
Game.Current.ReplaceModel<DefaultBodyPropertiesModel>(new MyDefaultBodyPropertiesModel());
```

## See Also

- [Complete Class Catalog](../catalog)