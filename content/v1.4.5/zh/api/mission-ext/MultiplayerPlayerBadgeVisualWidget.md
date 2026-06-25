---
title: "MultiplayerPlayerBadgeVisualWidget"
description: "MultiplayerPlayerBadgeVisualWidget 的自动生成类参考。"
---
# MultiplayerPlayerBadgeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPlayerBadgeVisualWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs`

## 概述

`MultiplayerPlayerBadgeVisualWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerPlayerBadgeVisualWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BadgeId` | `public string BadgeId { get; set; }` |

## 主要方法

### SetForcedSize
`public void SetForcedSize(float width, float height)`

**用途 / Purpose:** 为 「forced size」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerPlayerBadgeVisualWidget 实例
MultiplayerPlayerBadgeVisualWidget multiplayerPlayerBadgeVisualWidget = ...;
multiplayerPlayerBadgeVisualWidget.SetForcedSize(0, 0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerPlayerBadgeVisualWidget widget = ...;
```

## 参见

- [本区域目录](../)