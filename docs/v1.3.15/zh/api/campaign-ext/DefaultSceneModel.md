<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSceneModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSceneModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSceneModel : SceneModel`
**Base:** `SceneModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs`

## 概述

`DefaultSceneModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetBattleSceneForMapPatch
```csharp
public override string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)
```

### GetConversationSceneForMapPosition
```csharp
public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)
```

## 使用示例

```csharp
// DefaultSceneModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSceneModel>(new MyDefaultSceneModel());
```

## 参见

- [完整类目录](../catalog)