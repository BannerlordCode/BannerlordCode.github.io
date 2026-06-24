<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCutsceneSelectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCutsceneSelectionModel.cs`

## Overview

`DefaultCutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Gets the current value of `kingdom destroyed scene notification`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCutsceneSelectionModel>(new MyDefaultCutsceneSelectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)