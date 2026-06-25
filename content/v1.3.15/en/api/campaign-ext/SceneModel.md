---
title: "SceneModel"
description: "Auto-generated class reference for SceneModel."
---
# SceneModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SceneModel : MBGameModel<SceneModel>`
**Base:** `MBGameModel<SceneModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs`

## Overview

`SceneModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SceneModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetConversationSceneForMapPosition
`public abstract string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**Purpose:** **Purpose:** Reads and returns the conversation scene for map position value held by the this instance.

```csharp
// Obtain an instance of SceneModel from the subsystem API first
SceneModel sceneModel = ...;
var result = sceneModel.GetConversationSceneForMapPosition(campaignPosition);
```

### GetBattleSceneForMapPatch
`public abstract string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)`

**Purpose:** **Purpose:** Reads and returns the battle scene for map patch value held by the this instance.

```csharp
// Obtain an instance of SceneModel from the subsystem API first
SceneModel sceneModel = ...;
var result = sceneModel.GetBattleSceneForMapPatch(mapPatch, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SceneModel instance = ...;
```

## See Also

- [Area Index](../)