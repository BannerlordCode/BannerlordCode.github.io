<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArcherPosition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArcherPosition

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ArcherPosition` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition { get; }` |
| `ConnectedSides` | `public int ConnectedSides { get; }` |


## 主要方法

### GetLastAssignedFormation

```csharp
public Formation GetLastAssignedFormation(int teamIndex)
```

### IsArcherPositionRelatedToSide

```csharp
public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)
```

### GetArcherPositionClosestSide

```csharp
public FormationAI.BehaviorSide GetArcherPositionClosestSide()
```

### OnDeploymentFinished

```csharp
public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)
```

### SetLastAssignedFormation

```csharp
public void SetLastAssignedFormation(int teamIndex, Formation formation)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)