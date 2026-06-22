<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyBattleRewardWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyBattleRewardWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyBattleRewardWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs`

## 概述

`MultiplayerLobbyBattleRewardWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `TextRevealAnimationDuration` | `public float TextRevealAnimationDuration { get; set; }` |
| `AnimationInitialScaleMultiplier` | `public float AnimationInitialScaleMultiplier { get; set; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

### StartPreAnimation
```csharp
public void StartPreAnimation()
```

### EndAnimation
```csharp
public void EndAnimation()
```

## 使用示例

```csharp
// MultiplayerLobbyBattleRewardWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyBattleRewardWidget
var widget = root.GetChild("multiplayerLobbyBattleRewardWidget");;
```

## 参见

- [完整类目录](../catalog)