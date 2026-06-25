---
title: "Color"
description: "Color 的自动生成类参考。"
---
# Color

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Color`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Color.cs`

## 概述

`Color` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Color
`public struct Color(float red, float green, float blue, float alpha = 1f)`

**用途 / Purpose:** 处理与 「color」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.Color(0, 0, 0, 0);
```

### ToVector3
`public Vector3 ToVector3()`

**用途 / Purpose:** 处理与 「to vector3」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.ToVector3();
```

### ToVec3
`public Vec3 ToVec3()`

**用途 / Purpose:** 处理与 「to vec3」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.ToVec3();
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.Equals(obj);
```

### FromVector3
`public static Color FromVector3(Vector3 vector3)`

**用途 / Purpose:** 处理与 「from vector3」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Color.FromVector3(vector3);
```

### FromVector3
`public static Color FromVector3(Vec3 vector3)`

**用途 / Purpose:** 处理与 「from vector3」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Color.FromVector3(vector3);
```

### Length
`public float Length()`

**用途 / Purpose:** 处理与 「length」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.Length();
```

### ToUnsignedInteger
`public uint ToUnsignedInteger()`

**用途 / Purpose:** 处理与 「to unsigned integer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.ToUnsignedInteger();
```

### FromUint
`public static Color FromUint(uint color)`

**用途 / Purpose:** 处理与 「from uint」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Color.FromUint(0);
```

### FromHSV
`public static Color FromHSV(float h, float s, float v)`

**用途 / Purpose:** 处理与 「from hsv」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Color.FromHSV(0, 0, 0);
```

### ConvertStringToColor
`public static Color ConvertStringToColor(string color)`

**用途 / Purpose:** 把「string to color」转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
Color.ConvertStringToColor("example");
```

### Lerp
`public static Color Lerp(Color start, Color end, float ratio)`

**用途 / Purpose:** 处理与 「lerp」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Color.Lerp(start, end, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Color 实例
Color color = ...;
var result = color.ToString();
```

### UIntToColorString
`public static string UIntToColorString(uint color)`

**用途 / Purpose:** 处理与 「u int to color string」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Color.UIntToColorString(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Color color = ...;
color.Color(0, 0, 0, 0);
```

## 参见

- [本区域目录](../)