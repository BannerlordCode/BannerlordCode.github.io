<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSiegeMachineItemButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeMachineItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeMachineItemButtonWidget.cs`

## 概述

`OrderSiegeMachineItemButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingCount` | `public int RemainingCount { get; set; }` |
| `RemainingCountWidget` | `public TextWidget RemainingCountWidget { get; set; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `MachineIconWidget` | `public Widget MachineIconWidget { get; set; }` |

## 使用示例

```csharp
// OrderSiegeMachineItemButtonWidget (Widget) 的典型用法
// 声明/访问一个 OrderSiegeMachineItemButtonWidget
var widget = root.GetChild("orderSiegeMachineItemButtonWidget");;
```

## 参见

- [完整类目录](../catalog)