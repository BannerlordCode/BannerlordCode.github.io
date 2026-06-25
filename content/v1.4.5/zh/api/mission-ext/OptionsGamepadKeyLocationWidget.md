---
title: "OptionsGamepadKeyLocationWidget"
description: "OptionsGamepadKeyLocationWidget 的自动生成类参考。"
---
# OptionsGamepadKeyLocationWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadKeyLocationWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad/OptionsGamepadKeyLocationWidget.cs`

## 概述

`OptionsGamepadKeyLocationWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OptionsGamepadKeyLocationWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ForceVisible` | `public bool ForceVisible { get; set; }` |
| `KeyID` | `public int KeyID { get; }` |
| `NormalPositionXOffset` | `public int NormalPositionXOffset { get; }` |
| `NormalPositionYOffset` | `public int NormalPositionYOffset { get; }` |
| `NormalSizeXOfImage` | `public int NormalSizeXOfImage { get; }` |
| `NormalSizeYOfImage` | `public int NormalSizeYOfImage { get; }` |
| `CurrentSizeXOfImage` | `public int CurrentSizeXOfImage { get; }` |
| `CurrentSizeYOfImage` | `public int CurrentSizeYOfImage { get; }` |
| `IsKeyToTheLeftOfTheGamepad` | `public bool IsKeyToTheLeftOfTheGamepad { get; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
OptionsGamepadKeyLocationWidget widget = ...;
```

## 参见

- [本区域目录](../)