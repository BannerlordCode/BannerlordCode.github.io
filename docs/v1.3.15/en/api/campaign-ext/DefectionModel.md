<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DefectionModel : MBGameModel<DefaultDefectionModel>`
**Base:** `MBGameModel<DefaultDefectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DefectionModel.cs`

## Overview

`DefectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefectionModel>(new MyDefectionModel())` to change how it computes.

## Key Methods

### CanHeroDefectToFaction
```csharp
public abstract bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of DefectionModel (Model)
Game.Current.ReplaceModel<DefectionModel>(new MyDefectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)