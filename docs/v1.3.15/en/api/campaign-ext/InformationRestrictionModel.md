<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationRestrictionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InformationRestrictionModel : MBGameModel<InformationRestrictionModel>`
**Base:** `MBGameModel<InformationRestrictionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs`

## Overview

`InformationRestrictionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<InformationRestrictionModel>(new MyInformationRestrictionModel())` to change how it computes.

## Key Methods

### DoesPlayerKnowDetailsOf
```csharp
public abstract bool DoesPlayerKnowDetailsOf(Settlement settlement)
```

### DoesPlayerKnowDetailsOf
```csharp
public abstract bool DoesPlayerKnowDetailsOf(Hero hero)
```

## Usage Example

```csharp
// Typical usage of InformationRestrictionModel (Model)
Game.Current.ReplaceModel<InformationRestrictionModel>(new MyInformationRestrictionModel());
```

## See Also

- [Complete Class Catalog](../catalog)