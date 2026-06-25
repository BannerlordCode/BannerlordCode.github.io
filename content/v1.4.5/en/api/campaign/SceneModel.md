---
title: "SceneModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SceneModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SceneModel : MBGameModel<SceneModel>`
**Base:** `MBGameModel<SceneModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SceneModel.cs`

## Overview

`SceneModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SceneModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetConversationSceneForMapPosition
`public abstract string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**Purpose:** Gets the current value of `conversation scene for map position`.

### GetBattleSceneForMapPatch
`public abstract string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)`

**Purpose:** Gets the current value of `battle scene for map patch`.

## Usage Example

```csharp
var implementation = new CustomSceneModel();
```

## See Also

- [Complete Class Catalog](../catalog)