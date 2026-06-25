---
title: "ArmyOverlayCohesionFillBarWidget"
description: "ArmyOverlayCohesionFillBarWidget 的自动生成类参考。"
---
# ArmyOverlayCohesionFillBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayCohesionFillBarWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.Overlay/ArmyOverlayCohesionFillBarWidget.cs`

## 概述

`ArmyOverlayCohesionFillBarWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ArmyOverlayCohesionFillBarWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `IsArmyLeader` | `public bool IsArmyLeader { get; set; }` |

## 主要方法

### ArmyOverlayCohesionFillBarWidget
`public class ArmyOverlayCohesionFillBarWidget(UIContext context)`

**用途 / Purpose:** 调用 ArmyOverlayCohesionFillBarWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 ArmyOverlayCohesionFillBarWidget 实例
ArmyOverlayCohesionFillBarWidget armyOverlayCohesionFillBarWidget = ...;
var result = armyOverlayCohesionFillBarWidget.ArmyOverlayCohesionFillBarWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ArmyOverlayCohesionFillBarWidget widget = ...;
```

## 参见

- [本区域目录](../)