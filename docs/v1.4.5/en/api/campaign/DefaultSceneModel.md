<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultSceneModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSceneModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSceneModel : SceneModel`
**Base:** `SceneModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSceneModel.cs`

## Overview

`DefaultSceneModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSceneModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBattleSceneForMapPatch
`public override string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)`

**Purpose:** Gets the current value of `battle scene for map patch`.

### GetConversationSceneForMapPosition
`public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)`

**Purpose:** Gets the current value of `conversation scene for map position`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel());
```

## See Also

- [Complete Class Catalog](../catalog)