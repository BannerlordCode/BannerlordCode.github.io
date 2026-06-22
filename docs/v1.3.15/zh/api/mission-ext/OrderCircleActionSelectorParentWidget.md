<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderCircleActionSelectorParentWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderCircleActionSelectorParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderCircleActionSelectorParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderCircleActionSelectorParentWidget.cs`

## 概述

`OrderCircleActionSelectorParentWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInFreeCameraMode` | `public bool IsInFreeCameraMode { get; set; }` |
| `CircleActionSelectorWidget` | `public CircleActionSelectorWidget CircleActionSelectorWidget { get; set; }` |

## 使用示例

```csharp
// OrderCircleActionSelectorParentWidget (Widget) 的典型用法
// 声明/访问一个 OrderCircleActionSelectorParentWidget
var widget = root.GetChild("orderCircleActionSelectorParentWidget");;
```

## 参见

- [完整类目录](../catalog)