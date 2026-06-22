<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderSiegeMachineVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderSiegeMachineVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderSiegeMachineVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.Order` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DeploymentPoint` | `public DeploymentPoint DeploymentPoint { get; }` |
| `SiegeWeapon` | `public SiegeWeapon SiegeWeapon { get; }` |
| `IsPrimarySiegeMachine` | `public bool IsPrimarySiegeMachine { get; }` |
| `MachineClass` | `public string MachineClass { get; set; }` |
| `CurrentHP` | `public double CurrentHP { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |


## 主要方法

### RefreshSiegeWeapon

```csharp
public void RefreshSiegeWeapon()
```

### GetSiegeType

```csharp
public static SiegeEngineType GetSiegeType(Type t, BattleSideEnum side)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)