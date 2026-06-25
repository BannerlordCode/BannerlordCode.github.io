---
title: "DefaultSceneModel"
description: "Auto-generated class reference for DefaultSceneModel."
---
# DefaultSceneModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSceneModel : SceneModel`
**Base:** `SceneModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs`

## Overview

`DefaultSceneModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSceneModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBattleSceneForMapPatch
`public override string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)`

**Purpose:** Reads and returns the `battle scene for map patch` value held by the current object.

```csharp
// Obtain an instance of DefaultSceneModel from the subsystem API first
DefaultSceneModel defaultSceneModel = ...;
var result = defaultSceneModel.GetBattleSceneForMapPatch(mapPatch, false);
```

### GetConversationSceneForMapPosition
`public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**Purpose:** Reads and returns the `conversation scene for map position` value held by the current object.

```csharp
// Obtain an instance of DefaultSceneModel from the subsystem API first
DefaultSceneModel defaultSceneModel = ...;
var result = defaultSceneModel.GetConversationSceneForMapPosition(campaignPosition);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel());
```

## See Also

- [Area Index](../)