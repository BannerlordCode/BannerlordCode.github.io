<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SceneModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SceneModel : MBGameModel<SceneModel>`
**Base:** `MBGameModel<SceneModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs`

## Overview

`SceneModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<SceneModel>(new MySceneModel())` to change how it computes.

## Key Methods

### GetConversationSceneForMapPosition
```csharp
public abstract string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)
```

### GetBattleSceneForMapPatch
```csharp
public abstract string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)
```

## Usage Example

```csharp
// Typical usage of SceneModel (Model)
Game.Current.ReplaceModel<SceneModel>(new MySceneModel());
```

## See Also

- [Complete Class Catalog](../catalog)