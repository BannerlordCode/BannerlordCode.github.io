<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CutsceneSelectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CutsceneSelectionModel : MBGameModel<CutsceneSelectionModel>`
**Base:** `MBGameModel<CutsceneSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CutsceneSelectionModel.cs`

## Overview

`CutsceneSelectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel())` to change how it computes.

## Key Methods

### GetKingdomDestroyedSceneNotification
```csharp
public abstract SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of CutsceneSelectionModel (Model)
Game.Current.ReplaceModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)