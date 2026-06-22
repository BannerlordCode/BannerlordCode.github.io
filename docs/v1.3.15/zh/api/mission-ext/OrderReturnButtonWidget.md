<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderReturnButtonWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderReturnButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderReturnButtonWidget : OrderItemButtonWidget`
**Base:** `OrderItemButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderReturnButtonWidget.cs`

## 概述

`OrderReturnButtonWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `InputVisualParent` | `public Widget InputVisualParent { get; set; }` |
| `IsHolding` | `public bool IsHolding { get; set; }` |
| `CanUseShortcuts` | `public bool CanUseShortcuts { get; set; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; set; }` |
| `IsDeployment` | `public bool IsDeployment { get; set; }` |

## 使用示例

```csharp
// OrderReturnButtonWidget (Widget) 的典型用法
// 声明/访问一个 OrderReturnButtonWidget
var widget = root.GetChild("orderReturnButtonWidget");;
```

## 参见

- [完整类目录](../catalog)