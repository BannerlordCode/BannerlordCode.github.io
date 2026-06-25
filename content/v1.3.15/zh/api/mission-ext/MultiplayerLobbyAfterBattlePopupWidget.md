---
title: "MultiplayerLobbyAfterBattlePopupWidget"
description: "MultiplayerLobbyAfterBattlePopupWidget 的自动生成类参考。"
---
# MultiplayerLobbyAfterBattlePopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyAfterBattlePopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattlePopupWidget.cs`

## 概述

`MultiplayerLobbyAfterBattlePopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerLobbyAfterBattlePopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public void StartAnimation()`

**用途 / Purpose:** **用途 / Purpose:** 启动animation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerLobbyAfterBattlePopupWidget 实例
MultiplayerLobbyAfterBattlePopupWidget multiplayerLobbyAfterBattlePopupWidget = ...;
multiplayerLobbyAfterBattlePopupWidget.StartAnimation();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerLobbyAfterBattlePopupWidget widget = ...;
```

## 参见

- [本区域目录](../)