<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TransformedBoundingBoxPointsContainer`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransformedBoundingBoxPointsContainer

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 结构体 struct struct
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`TransformedBoundingBoxPointsContainer` 是 `TaleWorlds.Engine` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |
| `this` | `public Vec3 this { get; }` |


## 主要方法

### RelaxMinMaxWithPoint

```csharp
public void RelaxMinMaxWithPoint(in Vec3 point)
```

### RelaxMinMaxWithPointAndRadius

```csharp
public void RelaxMinMaxWithPointAndRadius(in Vec3 point, float radius)
```

### RecomputeRadius

```csharp
public void RecomputeRadius()
```

### GetTransformedTipPointsToParent

```csharp
public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToParent(in MatrixFrame parentFrame)
```

### GetTransformedTipPointsToChild

```csharp
public BoundingBox.TransformedBoundingBoxPointsContainer GetTransformedTipPointsToChild(in MatrixFrame childFrame)
```

### RelaxWithBoundingBox

```csharp
public void RelaxWithBoundingBox(BoundingBox modifiedBoundingBox)
```

### RelaxWithArbitraryBoundingBox

```csharp
public void RelaxWithArbitraryBoundingBox(BoundingBox otherBoundingBox, MatrixFrame otherGlobalFrame, MatrixFrame globalFrameOfThisBoundingBox)
```

### RelaxWithChildBoundingBox

```csharp
public void RelaxWithChildBoundingBox(BoundingBox childBoundingBox, MatrixFrame childFrame)
```

### BeginRelaxation

```csharp
public void BeginRelaxation()
```

### ArrangeWithAnotherBoundingBox

```csharp
public static bool ArrangeWithAnotherBoundingBox(ref BoundingBox boundingBox, BoundingBox otherBoundingBox, float changeAmount)
```

### PointInsideBox

```csharp
public bool PointInsideBox(Vec3 point, float epsilon)
```

### GetLongestHalfDimensionOfBoundingBox

```csharp
public static float GetLongestHalfDimensionOfBoundingBox(BoundingBox boundingBox)
```

### RenderBoundingBox

```csharp
public void RenderBoundingBox()
```

### ComputeTransformedMinMax

```csharp
public ValueTuple<Vec3, Vec3> ComputeTransformedMinMax()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)