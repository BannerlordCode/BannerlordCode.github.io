<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerProgressionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PlayerProgressionModel : MBGameModel<PlayerProgressionModel>`
**Base:** `MBGameModel<PlayerProgressionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PlayerProgressionModel.cs`

## Overview

`PlayerProgressionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PlayerProgressionModel>(new MyPlayerProgressionModel())` to change how it computes.

## Key Methods

### GetPlayerProgress
```csharp
public abstract float GetPlayerProgress()
```

## Usage Example

```csharp
// Typical usage of PlayerProgressionModel (Model)
Game.Current.ReplaceModel<PlayerProgressionModel>(new MyPlayerProgressionModel());
```

## See Also

- [Complete Class Catalog](../catalog)