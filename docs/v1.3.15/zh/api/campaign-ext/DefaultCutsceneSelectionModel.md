<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCutsceneSelectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCutsceneSelectionModel.cs`

## 概述

`DefaultCutsceneSelectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCutsceneSelectionModel>(new MyDefaultCutsceneSelectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetKingdomDestroyedSceneNotification
```csharp
public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)
```

## 使用示例

```csharp
// DefaultCutsceneSelectionModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCutsceneSelectionModel>(new MyDefaultCutsceneSelectionModel());
```

## 参见

- [完整类目录](../catalog)