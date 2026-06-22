<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Rectangle2D`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Rectangle2D

**命名空间:** TaleWorlds.TwoDimension
**模块:** TaleWorlds.TwoDimension
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Rectangle2D` 是 `TaleWorlds.TwoDimension` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Invalid` | `public static Rectangle2D Invalid { get; }` |


## 主要方法

### Create

```csharp
public static Rectangle2D Create()
```

### FillLocalValuesFrom

```csharp
public Rectangle2D FillLocalValuesFrom(in Rectangle2D other)
```

### GetVisualScale

```csharp
public Vector2 GetVisualScale()
```

### AddVisualOffset

```csharp
public void AddVisualOffset(float offsetX, float offsetY)
```

### SetVisualOffset

```csharp
public void SetVisualOffset(float offsetX, float offsetY)
```

### AddVisualScale

```csharp
public void AddVisualScale(float scaleX, float scaleY)
```

### SetVisualScale

```csharp
public void SetVisualScale(float scaleX, float scaleY)
```

### AddVisualRotationOffset

```csharp
public void AddVisualRotationOffset(float rotationOffset)
```

### SetVisualRotationOffset

```csharp
public void SetVisualRotationOffset(float rotationOffset)
```

### ValidateVisuals

```csharp
public void ValidateVisuals()
```

### DrawBoundingBox

```csharp
public void DrawBoundingBox()
```

### DrawCorners

```csharp
public void DrawCorners()
```

### CalculateMatrixFrame

```csharp
public void CalculateMatrixFrame(in Rectangle2D parentRectangle)
```

### CalculateVisualMatrixFrame

```csharp
public void CalculateVisualMatrixFrame()
```

### GetCachedOrigin

```csharp
public Vector2 GetCachedOrigin()
```

### GetCachedMatrixFrame

```csharp
public MatrixFrame GetCachedMatrixFrame()
```

### GetCachedVisualMatrixFrame

```csharp
public MatrixFrame GetCachedVisualMatrixFrame()
```

### GetCenter

```csharp
public Vector2 GetCenter()
```

### GetBoundingBox

```csharp
public SimpleRectangle GetBoundingBox()
```

### IsIdentical

```csharp
public bool IsIdentical(in Rectangle2D other)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)