<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Path`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Path

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Path` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `NumberOfPoints` | `public int NumberOfPoints { get; }` |
| `TotalDistance` | `public float TotalDistance { get; }` |


## 主要方法

### GetHermiteFrameForDt

```csharp
public MatrixFrame GetHermiteFrameForDt(float phase, int first_point)
```

### GetFrameForDistance

```csharp
public MatrixFrame GetFrameForDistance(float distance)
```

### GetNearestFrameWithValidAlphaForDistance

```csharp
public MatrixFrame GetNearestFrameWithValidAlphaForDistance(float distance, bool searchForward = true, float alphaThreshold = 0.5f)
```

### GetFrameAndColorForDistance

```csharp
public void GetFrameAndColorForDistance(float distance, out MatrixFrame frame, out Vec3 color)
```

### GetArcLength

```csharp
public float GetArcLength(int first_point)
```

### GetPoints

```csharp
public void GetPoints(MatrixFrame points)
```

### GetTotalLength

```csharp
public float GetTotalLength()
```

### GetVersion

```csharp
public int GetVersion()
```

### SetFrameOfPoint

```csharp
public void SetFrameOfPoint(int pointIndex, ref MatrixFrame frame)
```

### SetTangentPositionOfPoint

```csharp
public void SetTangentPositionOfPoint(int pointIndex, int tangentIndex, ref Vec3 position)
```

### AddPathPoint

```csharp
public int AddPathPoint(int newNodeIndex)
```

### DeletePathPoint

```csharp
public void DeletePathPoint(int nodeIndex)
```

### HasValidAlphaAtPathPoint

```csharp
public bool HasValidAlphaAtPathPoint(int nodeIndex, float alphaThreshold = 0.5f)
```

### GetName

```csharp
public string GetName()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)