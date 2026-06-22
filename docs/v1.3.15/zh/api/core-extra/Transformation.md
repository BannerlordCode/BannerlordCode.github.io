<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Transformation`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Transformation

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Transformation` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Identity` | `public static Transformation Identity { get; }` |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame { get; }` |


## 主要方法

### CreateFromMatrixFrame

```csharp
public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)
```

### CreateFromRotation

```csharp
public static Transformation CreateFromRotation(Mat3 rotation)
```

### TransformToParent

```csharp
public Vec3 TransformToParent(Vec3 v)
```

### TransformToParent

```csharp
public Transformation TransformToParent(Transformation t)
```

### TransformToLocal

```csharp
public Vec3 TransformToLocal(Vec3 v)
```

### TransformToLocal

```csharp
public Transformation TransformToLocal(Transformation t)
```

### Rotate

```csharp
public void Rotate(float radian, Vec3 axis)
```

### ApplyScale

```csharp
public void ApplyScale(Vec3 vec3)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### ToString

```csharp
public override string ToString()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)