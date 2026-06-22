<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Color`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Color

**命名空间:** TaleWorlds.Library
**模块:** TaleWorlds.Library
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Color` 是 `TaleWorlds.Library` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Black` | `public static Color Black { get; }` |
| `White` | `public static Color White { get; }` |


## 主要方法

### ToVector3

```csharp
public Vector3 ToVector3()
```

### ToVec3

```csharp
public Vec3 ToVec3()
```

### GetHashCode

```csharp
public override int GetHashCode()
```

### Equals

```csharp
public override bool Equals(object obj)
```

### FromVector3

```csharp
public static Color FromVector3(Vector3 vector3)
```

### FromVector3

```csharp
public static Color FromVector3(Vec3 vector3)
```

### Length

```csharp
public float Length()
```

### ToUnsignedInteger

```csharp
public uint ToUnsignedInteger()
```

### FromUint

```csharp
public static Color FromUint(uint color)
```

### FromHSV

```csharp
public static Color FromHSV(float h, float s, float v)
```

### ConvertStringToColor

```csharp
public static Color ConvertStringToColor(string color)
```

### Lerp

```csharp
public static Color Lerp(Color start, Color end, float ratio)
```

### ToString

```csharp
public override string ToString()
```

### UIntToColorString

```csharp
public static string UIntToColorString(uint color)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)