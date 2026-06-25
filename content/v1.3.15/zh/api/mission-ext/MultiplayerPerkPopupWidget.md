---
title: "MultiplayerPerkPopupWidget"
description: "MultiplayerPerkPopupWidget 的自动生成类参考。"
---
# MultiplayerPerkPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkPopupWidget.cs`

## 概述

`MultiplayerPerkPopupWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerPerkPopupWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShowAboveContainer` | `public bool ShowAboveContainer { get; set; }` |

## 主要方法

### SetPopupPerksContainer
`public void SetPopupPerksContainer(MultiplayerPerkContainerPanelWidget container)`

**用途 / Purpose:** 为 popup perks container 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerPerkPopupWidget 实例
MultiplayerPerkPopupWidget multiplayerPerkPopupWidget = ...;
multiplayerPerkPopupWidget.SetPopupPerksContainer(container);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerPerkPopupWidget widget = ...;
```

## 参见

- [本区域目录](../)