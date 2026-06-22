<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultGenericXpModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultGenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultGenericXpModel.cs`

## Overview

`DefaultGenericXpModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel())` to change how it computes.

## Key Methods

### GetXpMultiplier
```csharp
public override float GetXpMultiplier(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultGenericXpModel (Model)
Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel());
```

## See Also

- [Complete Class Catalog](../catalog)