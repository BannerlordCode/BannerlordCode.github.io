<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Decal`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Decal

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Decal` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |


## 主要方法

### CreateDecal

```csharp
public static Decal CreateDecal(string name = null)
```

### CreateCopy

```csharp
public Decal CreateCopy()
```

### CheckAndRegisterToDecalSet

```csharp
public void CheckAndRegisterToDecalSet()
```

### SetIsVisible

```csharp
public void SetIsVisible(bool value)
```

### GetFactor1

```csharp
public uint GetFactor1()
```

### OverrideRoadBoundaryP0

```csharp
public void OverrideRoadBoundaryP0(Vec2 data)
```

### OverrideRoadBoundaryP1

```csharp
public void OverrideRoadBoundaryP1(Vec2 data)
```

### SetFactor1Linear

```csharp
public void SetFactor1Linear(uint linearFactorColor1)
```

### SetFactor1

```csharp
public void SetFactor1(uint factorColor1)
```

### SetAlpha

```csharp
public void SetAlpha(float alpha)
```

### SetVectorArgument

```csharp
public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### SetVectorArgument2

```csharp
public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### GetMaterial

```csharp
public Material GetMaterial()
```

### SetMaterial

```csharp
public void SetMaterial(Material material)
```

### SetFrame

```csharp
public void SetFrame(MatrixFrame Frame)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)