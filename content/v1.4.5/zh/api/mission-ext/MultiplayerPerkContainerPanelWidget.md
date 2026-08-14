---
title: "MultiplayerPerkContainerPanelWidget"
description: "MultiplayerPerkContainerPanelWidget 的自动生成类参考。"
---
# MultiplayerPerkContainerPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`

## 概述

`MultiplayerPerkContainerPanelWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerPerkContainerPanelWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst { get; set; }` |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond { get; set; }` |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird { get; set; }` |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget { get; set; }` |

## 主要方法

### PerkSelected
`public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)`

**用途 / Purpose:** 调用 PerkSelected 对应的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerPerkContainerPanelWidget 实例
MultiplayerPerkContainerPanelWidget multiplayerPerkContainerPanelWidget = ...;
multiplayerPerkContainerPanelWidget.PerkSelected(selectedItem);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerPerkContainerPanelWidget widget = ...;
```

## 参见

- [本区域目录](../)