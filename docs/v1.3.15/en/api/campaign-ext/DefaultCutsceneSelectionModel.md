<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCutsceneSelectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCutsceneSelectionModel.cs`

## Overview

`DefaultCutsceneSelectionModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultCutsceneSelectionModel>(new MyDefaultCutsceneSelectionModel())` to change how it computes.

## Key Methods

### GetKingdomDestroyedSceneNotification
```csharp
public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)
```

## Usage Example

```csharp
// Typical usage of DefaultCutsceneSelectionModel (Model)
Game.Current.ReplaceModel<DefaultCutsceneSelectionModel>(new MyDefaultCutsceneSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)