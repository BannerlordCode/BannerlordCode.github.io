---
title: "MultiplayerClassLoadoutTroopCardBrushWidget"
description: "MultiplayerClassLoadoutTroopCardBrushWidget 的自动生成类参考。"
---
# MultiplayerClassLoadoutTroopCardBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopCardBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopCardBrushWidget.cs`

## 概述

`MultiplayerClassLoadoutTroopCardBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MultiplayerClassLoadoutTroopCardBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CultureID` | `public string CultureID { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `ClassBorder` | `public BrushWidget ClassBorder { get; set; }` |
| `ClassFrame` | `public BrushWidget ClassFrame { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MultiplayerClassLoadoutTroopCardBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)