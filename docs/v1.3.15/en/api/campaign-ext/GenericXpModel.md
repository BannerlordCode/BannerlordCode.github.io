<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GenericXpModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class GenericXpModel : MBGameModel<GenericXpModel>`
**Base:** `MBGameModel<GenericXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/GenericXpModel.cs`

## Overview

`GenericXpModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<GenericXpModel>(new MyGenericXpModel())` to change how it computes.

## Key Methods

### GetXpMultiplier
```csharp
public abstract float GetXpMultiplier(Hero hero)
```

## Usage Example

```csharp
// Typical usage of GenericXpModel (Model)
Game.Current.ReplaceModel<GenericXpModel>(new MyGenericXpModel());
```

## See Also

- [Complete Class Catalog](../catalog)