<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CutsceneSelectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CutsceneSelectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CutsceneSelectionModel : MBGameModel<CutsceneSelectionModel>`
**Base:** `MBGameModel<CutsceneSelectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CutsceneSelectionModel.cs`

## 概述

`CutsceneSelectionModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetKingdomDestroyedSceneNotification
```csharp
public abstract SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)
```

## 使用示例

```csharp
// CutsceneSelectionModel (Model) 的典型用法
Game.Current.ReplaceModel<CutsceneSelectionModel>(new MyCutsceneSelectionModel());
```

## 参见

- [完整类目录](../catalog)