---
title: "OrderSiegeDeploymentItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSiegeDeploymentItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeDeploymentItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentItemButtonWidget.cs`

## 概述

`OrderSiegeDeploymentItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `OrderSiegeDeploymentItemButtonWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BreachedTextWidget` | `public TextWidget BreachedTextWidget { get; set; }` |
| `TypeIconWidget` | `public Widget TypeIconWidget { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `PointType` | `public int PointType { get; set; }` |
| `IsInsideWindow` | `public bool IsInsideWindow { get; set; }` |
| `IsInFront` | `public bool IsInFront { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `ScreenWidget` | `public OrderSiegeDeploymentScreenWidget ScreenWidget { get; set; }` |

## 使用示例

```csharp
var widget = new OrderSiegeDeploymentItemButtonWidget(context);
```

## 参见

- [完整类目录](../catalog)