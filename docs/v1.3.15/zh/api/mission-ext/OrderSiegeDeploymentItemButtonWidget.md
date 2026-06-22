<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSiegeDeploymentItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
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
// OrderSiegeDeploymentItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 OrderSiegeDeploymentItemButtonWidget
var widget = root.GetChild("orderSiegeDeploymentItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)