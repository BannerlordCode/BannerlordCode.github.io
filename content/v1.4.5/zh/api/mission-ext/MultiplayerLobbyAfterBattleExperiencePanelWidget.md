---
title: "MultiplayerLobbyAfterBattleExperiencePanelWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLobbyAfterBattleExperiencePanelWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## 概述

`MultiplayerLobbyAfterBattleExperiencePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyAfterBattleExperiencePanelWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public void StartAnimation(float animationDelay)`

**用途 / Purpose:** 处理 `start animation` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

## 使用示例

```csharp
var widget = new MultiplayerLobbyAfterBattleExperiencePanelWidget(context);
```

## 参见

- [完整类目录](../catalog)