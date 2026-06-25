---
title: "PartyHeaderToggleWidget"
description: "PartyHeaderToggleWidget 的自动生成类参考。"
---
# PartyHeaderToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyHeaderToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Party/PartyHeaderToggleWidget.cs`

## 概述

`PartyHeaderToggleWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `PartyHeaderToggleWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AutoToggleTransferButtonState` | `public bool AutoToggleTransferButtonState { get; set; }` |
| `ListPanel` | `public ListPanel ListPanel { get; set; }` |
| `TransferButtonWidget` | `public ButtonWidget TransferButtonWidget { get; set; }` |
| `CollapseIndicator` | `public BrushWidget CollapseIndicator { get; set; }` |
| `IsRelevant` | `public bool IsRelevant { get; set; }` |
| `BlockInputsWhenDisabled` | `public bool BlockInputsWhenDisabled { get; set; }` |

## 主要方法

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** **用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyHeaderToggleWidget 实例
PartyHeaderToggleWidget partyHeaderToggleWidget = ...;
partyHeaderToggleWidget.SetState("example");
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
PartyHeaderToggleWidget widget = ...;
```

## 参见

- [本区域目录](../)