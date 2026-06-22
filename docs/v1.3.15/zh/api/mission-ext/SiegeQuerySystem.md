<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeQuerySystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeQuerySystem

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SiegeQuerySystem` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `LeftRegionMemberCount` | `public int LeftRegionMemberCount { get; }` |
| `LeftCloseAttackerCount` | `public int LeftCloseAttackerCount { get; }` |
| `MiddleRegionMemberCount` | `public int MiddleRegionMemberCount { get; }` |
| `MiddleCloseAttackerCount` | `public int MiddleCloseAttackerCount { get; }` |
| `RightRegionMemberCount` | `public int RightRegionMemberCount { get; }` |
| `RightCloseAttackerCount` | `public int RightCloseAttackerCount { get; }` |
| `InsideAttackerCount` | `public int InsideAttackerCount { get; }` |
| `LeftDefenderCount` | `public int LeftDefenderCount { get; }` |
| `MiddleDefenderCount` | `public int MiddleDefenderCount { get; }` |
| `RightDefenderCount` | `public int RightDefenderCount { get; }` |
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin { get; }` |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin { get; }` |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin { get; }` |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin { get; }` |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin { get; }` |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin { get; }` |
| `LeftToMidDir` | `public Vec2 LeftToMidDir { get; }` |
| `MidToLeftDir` | `public Vec2 MidToLeftDir { get; }` |
| `MidToRightDir` | `public Vec2 MidToRightDir { get; }` |
| `RightToMidDir` | `public Vec2 RightToMidDir { get; }` |


## 主要方法

### Expire

```csharp
public void Expire()
```

### DeterminePositionAssociatedSide

```csharp
public int DeterminePositionAssociatedSide(Vec3 position)
```

### AreSidesRelated

```csharp
public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)
```

### SideDistance

```csharp
public static int SideDistance(int connectedSides, int side)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)