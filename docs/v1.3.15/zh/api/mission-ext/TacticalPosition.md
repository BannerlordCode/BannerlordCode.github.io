<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TacticalPosition`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TacticalPosition

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`TacticalPosition` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Position` | `public WorldPosition Position { get; set; }` |
| `Direction` | `public Vec2 Direction { get; set; }` |
| `Width` | `public float Width { get; }` |
| `Slope` | `public float Slope { get; }` |
| `IsInsurmountable` | `public bool IsInsurmountable { get; }` |
| `IsOuterEdge` | `public bool IsOuterEdge { get; set; }` |
| `LinkedTacticalPositions` | `public List<TacticalPosition> LinkedTacticalPositions { get; set; }` |
| `TacticalPositionType` | `public TacticalPosition.TacticalPositionTypeEnum TacticalPositionType { get; }` |
| `TacticalRegionMembership` | `public TacticalRegion.TacticalRegionTypeEnum TacticalRegionMembership { get; }` |
| `TacticalPositionSide` | `public FormationAI.BehaviorSide TacticalPositionSide { get; }` |


## 主要方法

### AfterMissionStart

```csharp
public override void AfterMissionStart()
```

### SetWidth

```csharp
public void SetWidth(float width)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)