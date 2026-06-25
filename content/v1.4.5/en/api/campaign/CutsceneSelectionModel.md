---
title: "CutsceneSelectionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CutsceneSelectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CutsceneSelectionModel : MBGameModel<CutsceneSelectionModel>`
**Base:** `MBGameModel<CutsceneSelectionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CutsceneSelectionModel.cs`

## Overview

`CutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public abstract SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Gets the current value of `kingdom destroyed scene notification`.

## Usage Example

```csharp
var implementation = new CustomCutsceneSelectionModel();
```

## See Also

- [Complete Class Catalog](../catalog)