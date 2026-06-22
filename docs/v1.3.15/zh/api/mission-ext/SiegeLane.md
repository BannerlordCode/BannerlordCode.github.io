<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeLane`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeLane

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SiegeLane` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LaneState` | `public SiegeLane.LaneStateEnum LaneState { get; }` |
| `LaneSide` | `public FormationAI.BehaviorSide LaneSide { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `IsOpen` | `public bool IsOpen { get; }` |
| `IsBreach` | `public bool IsBreach { get; }` |
| `HasGate` | `public bool HasGate { get; }` |
| `DefensePoints` | `public List<ICastleKeyPosition> DefensePoints { get; }` |
| `DefenderOrigin` | `public WorldPosition DefenderOrigin { get; }` |
| `AttackerOrigin` | `public WorldPosition AttackerOrigin { get; }` |


## 主要方法

### CalculateIsLaneUnusable

```csharp
public bool CalculateIsLaneUnusable()
```

### GetLastAssignedFormation

```csharp
public Formation GetLastAssignedFormation(int teamIndex)
```

### SetLaneState

```csharp
public void SetLaneState(SiegeLane.LaneStateEnum newLaneState)
```

### SetLastAssignedFormation

```csharp
public void SetLastAssignedFormation(int teamIndex, Formation formation)
```

### SetSiegeQuerySystem

```csharp
public void SetSiegeQuerySystem(SiegeQuerySystem siegeQuerySystem)
```

### CalculateLaneCapacity

```csharp
public float CalculateLaneCapacity()
```

### GetDefenseState

```csharp
public SiegeLane.LaneDefenseStates GetDefenseState()
```

### IsUnderAttack

```csharp
public bool IsUnderAttack()
```

### IsDefended

```csharp
public bool IsDefended()
```

### DetermineLaneState

```csharp
public void DetermineLaneState()
```

### GetCurrentAttackerPosition

```csharp
public WorldPosition GetCurrentAttackerPosition()
```

### DetermineOrigins

```csharp
public void DetermineOrigins()
```

### RefreshLane

```csharp
public void RefreshLane()
```

### SetPrimarySiegeWeapons

```csharp
public void SetPrimarySiegeWeapons(List<IPrimarySiegeWeapon> primarySiegeWeapons)
```

### SetDefensePoints

```csharp
public void SetDefensePoints(List<ICastleKeyPosition> defensePoints)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)