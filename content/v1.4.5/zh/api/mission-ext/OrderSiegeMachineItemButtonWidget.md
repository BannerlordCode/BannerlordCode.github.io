---
title: "OrderSiegeMachineItemButtonWidget"
description: "OrderSiegeMachineItemButtonWidget 的自动生成类参考。"
---
# OrderSiegeMachineItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineItemButtonWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order/OrderSiegeMachineItemButtonWidget.cs`

## 概述

`OrderSiegeMachineItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OrderSiegeMachineItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `RemainingCountWidget` | `public TextWidget RemainingCountWidget { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `MachineIconWidget` | `public Widget MachineIconWidget { get; set; }` |

## 主要方法

### OrderSiegeMachineItemButtonWidget
`public class OrderSiegeMachineItemButtonWidget(UIContext context)`

**用途 / Purpose:** 处理与 「order siege machine item button widget」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 OrderSiegeMachineItemButtonWidget 实例
OrderSiegeMachineItemButtonWidget orderSiegeMachineItemButtonWidget = ...;
var result = orderSiegeMachineItemButtonWidget.OrderSiegeMachineItemButtonWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
OrderSiegeMachineItemButtonWidget widget = ...;
```

## 参见

- [本区域目录](../)