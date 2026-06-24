<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSiegeMachineVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderSiegeMachineVM : OrderSubjectVM`
**Base:** `OrderSubjectVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/OrderSiegeMachineVM.cs`

## 概述

`OrderSiegeMachineVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; }` |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon { get; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `CurrentHP` | `public double CurrentHP { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |

## 主要方法

### RefreshSiegeWeapon
`public void RefreshSiegeWeapon()`

**用途 / Purpose:** 刷新 `siege weapon` 的显示或缓存。

### GetSiegeType
`public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)`

**用途 / Purpose:** 获取 `siege type` 的当前值。

## 使用示例

```csharp
var value = new OrderSiegeMachineVM();
value.RefreshSiegeWeapon();
```

## 参见

- [完整类目录](../catalog)