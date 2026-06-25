---
title: "DefaultCutsceneSelectionModel"
description: "Auto-generated class reference for DefaultCutsceneSelectionModel."
---
# DefaultCutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultCutsceneSelectionModel.cs`

## Overview

`DefaultCutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultCutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Reads and returns the kingdom destroyed scene notification value held by the this instance.

```csharp
// Obtain an instance of DefaultCutsceneSelectionModel from the subsystem API first
DefaultCutsceneSelectionModel defaultCutsceneSelectionModel = ...;
var result = defaultCutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultCutsceneSelectionModel>(new MyDefaultCutsceneSelectionModel());
```

## See Also

- [Area Index](../)