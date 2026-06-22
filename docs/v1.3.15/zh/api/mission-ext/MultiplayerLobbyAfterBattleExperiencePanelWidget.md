<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyAfterBattleExperiencePanelWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## 概述

`MultiplayerLobbyAfterBattleExperiencePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `GainedExperience` | `public int GainedExperience { get; set; }` |
| `ExperienceFillBar` | `public MultiplayerScoreboardAnimatedFillBarWidget ExperienceFillBar { get; set; }` |
| `EarnedExperienceCounterTextWidget` | `public CounterTextBrushWidget EarnedExperienceCounterTextWidget { get; set; }` |
| `CurrentLevelTextWidget` | `public TextWidget CurrentLevelTextWidget { get; set; }` |
| `NextLevelTextWidget` | `public TextWidget NextLevelTextWidget { get; set; }` |

## 主要方法

### StartAnimation
```csharp
public void StartAnimation()
```

### Reset
```csharp
public void Reset()
```

## 使用示例

```csharp
// MultiplayerLobbyAfterBattleExperiencePanelWidget (Widget) 的典型用法
// 声明/访问一个 MultiplayerLobbyAfterBattleExperiencePanelWidget
var widget = root.GetChild("multiplayerLobbyAfterBattleExperiencePanelWidget");;
```

## 参见

- [完整类目录](../catalog)