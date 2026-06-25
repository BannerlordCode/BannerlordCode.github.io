---
title: "CutsceneSelectionModel"
description: "Auto-generated class reference for CutsceneSelectionModel."
---
# CutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CutsceneSelectionModel : MBGameModel<CutsceneSelectionModel>`
**Base:** `MBGameModel<CutsceneSelectionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CutsceneSelectionModel.cs`

## Overview

`CutsceneSelectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `CutsceneSelectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetKingdomDestroyedSceneNotification
`public abstract SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**Purpose:** Reads and returns the `kingdom destroyed scene notification` value held by the current object.

```csharp
// Obtain an instance of CutsceneSelectionModel from the subsystem API first
CutsceneSelectionModel cutsceneSelectionModel = ...;
var result = cutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CutsceneSelectionModel instance = ...;
```

## See Also

- [Area Index](../)