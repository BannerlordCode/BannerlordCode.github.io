<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultInformationRestrictionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultInformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInformationRestrictionModel : InformationRestrictionModel`
**Base:** `InformationRestrictionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInformationRestrictionModel.cs`

## Overview

`DefaultInformationRestrictionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultInformationRestrictionModel>(new MyDefaultInformationRestrictionModel())` to change how it computes.

## Key Methods

### DoesPlayerKnowDetailsOf
```csharp
public override bool DoesPlayerKnowDetailsOf(Settlement settlement)
```

### DoesPlayerKnowDetailsOf
```csharp
public override bool DoesPlayerKnowDetailsOf(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultInformationRestrictionModel (Model)
Game.Current.ReplaceModel<DefaultInformationRestrictionModel>(new MyDefaultInformationRestrictionModel());
```

## See Also

- [Complete Class Catalog](../catalog)