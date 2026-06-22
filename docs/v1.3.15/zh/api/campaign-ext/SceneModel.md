<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SceneModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SceneModel : MBGameModel<SceneModel>`
**Base:** `MBGameModel<SceneModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs`

## 概述

`SceneModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SceneModel>(new MySceneModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetConversationSceneForMapPosition
```csharp
public abstract string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)
```

### GetBattleSceneForMapPatch
```csharp
public abstract string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)
```

## 使用示例

```csharp
// SceneModel (Model) 的典型用法
Game.Current.ReplaceModel<SceneModel>(new MySceneModel());
```

## 参见

- [完整类目录](../catalog)