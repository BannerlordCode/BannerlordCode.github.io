---
title: "ToggleStateButtonWidget"
description: "ToggleStateButtonWidget 的自动生成类参考。"
---
# ToggleStateButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ToggleStateButtonWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ToggleStateButtonWidget.cs`

## 概述

`ToggleStateButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `ToggleStateButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `WidgetToClose` | `public Widget WidgetToClose { get; set; }` |
| `AllowSwitchOff` | `public bool AllowSwitchOff { get; set; }` |
| `NotifyParentForSelection` | `public bool NotifyParentForSelection { get; set; }` |

## 主要方法

### ToggleStateButtonWidget
`public class ToggleStateButtonWidget(UIContext context)`

**用途 / Purpose:** 处理与 「toggle state button widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ToggleStateButtonWidget 实例
ToggleStateButtonWidget toggleStateButtonWidget = ...;
var result = toggleStateButtonWidget.ToggleStateButtonWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
ToggleStateButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)