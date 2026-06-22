<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CircularFormation`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CircularFormation

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`CircularFormation` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `Depth` | `public override float Depth { get; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |
| `MaximumWidth` | `public override float MaximumWidth { get; }` |


## 主要方法

### Clone

```csharp
public override IFormationArrangement Clone(IFormation formation)
```

### GetLocalDirectionOfUnitOrDefault

```csharp
public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)
```

### GetCircumferenceFromRankCount

```csharp
public float GetCircumferenceFromRankCount(int rankCount)
```

### FormFromCircumference

```csharp
public void FormFromCircumference(float circumference)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)