<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WallSegment`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WallSegment

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`WallSegment` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `MiddlePosition` | `public TacticalPosition MiddlePosition { get; }` |
| `WaitPosition` | `public TacticalPosition WaitPosition { get; }` |
| `AttackerWaitPosition` | `public TacticalPosition AttackerWaitPosition { get; }` |
| `AttackerSiegeWeapon` | `public IPrimarySiegeWeapon AttackerSiegeWeapon { get; }` |
| `DefencePoints` | `public IEnumerable<DefencePoint> DefencePoints { get; }` |
| `IsBreachedWall` | `public bool IsBreachedWall { get; }` |
| `MiddleFrame` | `public WorldFrame MiddleFrame { get; }` |
| `DefenseWaitFrame` | `public WorldFrame DefenseWaitFrame { get; }` |
| `AttackerWaitFrame` | `public WorldFrame AttackerWaitFrame { get; }` |
| `DefenseSide` | `public FormationAI.BehaviorSide DefenseSide { get; }` |


## 主要方法

### GetPosition

```csharp
public Vec3 GetPosition()
```

### OnChooseUsedWallSegment

```csharp
public void OnChooseUsedWallSegment(bool isBroken)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)