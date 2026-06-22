<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyAfterBattlePopupWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAfterBattlePopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattlePopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs`

## 概述

`MultiplayerLobbyAfterBattlePopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `RewardRevealDuration` | `public float RewardRevealDuration { get; set; }` |
| `ExperiencePanel` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget ExperiencePanel { get; set; }` |
| `ClickToContinueTextWidget` | `public TextWidget ClickToContinueTextWidget { get; set; }` |
| `RewardsListPanel` | `public ListPanel RewardsListPanel { get; set; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

## 使用示例

```csharp
// MultiplayerLobbyAfterBattlePopupWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyAfterBattlePopupWidget
var widget = root.GetChild("multiplayerLobbyAfterBattlePopupWidget");;
```

## 参见

- [完整类目录](../catalog)