---
title: "MultiplayerScoreboardEndOfBattlePanelWidget"
description: "MultiplayerScoreboardEndOfBattlePanelWidget 的自动生成类参考。"
---
# MultiplayerScoreboardEndOfBattlePanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerScoreboardEndOfBattlePanelWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs`

## 概述

`MultiplayerScoreboardEndOfBattlePanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerScoreboardEndOfBattlePanelWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `FirstDelay` | `public float FirstDelay { get; set; }` |
| `SecondDelay` | `public float SecondDelay { get; set; }` |

## 主要方法

### MultiplayerScoreboardEndOfBattlePanelWidget
`public class MultiplayerScoreboardEndOfBattlePanelWidget(UIContext context)`

**用途 / Purpose:** 处理与 「multiplayer scoreboard end of battle panel widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerScoreboardEndOfBattlePanelWidget 实例
MultiplayerScoreboardEndOfBattlePanelWidget multiplayerScoreboardEndOfBattlePanelWidget = ...;
var result = multiplayerScoreboardEndOfBattlePanelWidget.MultiplayerScoreboardEndOfBattlePanelWidget(context);
```

### StartAnimation
`public void StartAnimation()`

**用途 / Purpose:** 启动「animation」流程或状态机。

```csharp
// 先通过子系统 API 拿到 MultiplayerScoreboardEndOfBattlePanelWidget 实例
MultiplayerScoreboardEndOfBattlePanelWidget multiplayerScoreboardEndOfBattlePanelWidget = ...;
multiplayerScoreboardEndOfBattlePanelWidget.StartAnimation();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerScoreboardEndOfBattlePanelWidget widget = ...;
```

## 参见

- [本区域目录](../)