<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSiegeDeploymentScreenWidget`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeDeploymentScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeDeploymentScreenWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs`

## 概述

`OrderSiegeDeploymentScreenWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSiegeDeploymentDisabled` | `public bool IsSiegeDeploymentDisabled { get; set; }` |
| `DeploymentTargetsParent` | `public Widget DeploymentTargetsParent { get; set; }` |
| `DeploymentListPanel` | `public ListPanel DeploymentListPanel { get; set; }` |

## 主要方法

### SetSelectedDeploymentItem
```csharp
public void SetSelectedDeploymentItem(OrderSiegeDeploymentItemButtonWidget deploymentItem)
```

## 使用示例

```csharp
// OrderSiegeDeploymentScreenWidget (Widget) 的典型用法
// 声明/访问一个 OrderSiegeDeploymentScreenWidget
var widget = root.GetChild("orderSiegeDeploymentScreenWidget");;
```

## 参见

- [完整类目录](../catalog)