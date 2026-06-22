<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDefectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDefectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDefectionModel : DefectionModel`
**Base:** `DefectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDefectionModel.cs`

## Overview

`DefaultDefectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel())` to change how it computes.

## Key Methods

### CanHeroDefectToFaction
```csharp
public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of DefaultDefectionModel (Model)
Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)