<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSceneModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSceneModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSceneModel : SceneModel`
**Base:** `SceneModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs`

## Overview

`DefaultSceneModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel())` to change how it computes.

## Key Methods

### GetBattleSceneForMapPatch
```csharp
public override string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)
```

### GetConversationSceneForMapPosition
```csharp
public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)
```

## Usage Example

```csharp
// Typical usage of DefaultSceneModel (Model)
Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel());
```

## See Also

- [Complete Class Catalog](../catalog)