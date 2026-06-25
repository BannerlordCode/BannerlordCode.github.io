---
title: "Vector"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Vector`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Vector

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector<T> : IEquatable<Vector<T>>, IFormattable where T : struct`
**Base:** `IEquatable<Vector<T>>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector.cs`

## 概述

`Vector` 位于 `System.Numerics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Numerics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public unsafe T this { get; }` |

## 主要方法

### Vector
`public unsafe Vector(T value)`

**用途 / Purpose:** 处理 `vector` 相关逻辑。

### Vector
`public unsafe Vector(T values, int index)`

**用途 / Purpose:** 处理 `vector` 相关逻辑。

### CopyTo
`public void CopyTo(T destination)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public unsafe void CopyTo(T destination, int startIndex)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public bool Equals(Vector<T> other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(string format)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### ToString
`public string ToString(string format, IFormatProvider formatProvider)`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<byte> source, out Vector<ushort> low, out Vector<ushort> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<ushort> source, out Vector<uint> low, out Vector<uint> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<uint> source, out Vector<ulong> low, out Vector<ulong> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<sbyte> source, out Vector<short> low, out Vector<short> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<short> source, out Vector<int> low, out Vector<int> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<int> source, out Vector<long> low, out Vector<long> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Widen
`public unsafe static void Widen(Vector<float> source, out Vector<double> low, out Vector<double> high)`

**用途 / Purpose:** 处理 `widen` 相关逻辑。

### Narrow
`public unsafe static Vector<byte> Narrow(Vector<ushort> low, Vector<ushort> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### Narrow
`public unsafe static Vector<ushort> Narrow(Vector<uint> low, Vector<uint> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### Narrow
`public unsafe static Vector<uint> Narrow(Vector<ulong> low, Vector<ulong> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### Narrow
`public unsafe static Vector<sbyte> Narrow(Vector<short> low, Vector<short> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### Narrow
`public unsafe static Vector<short> Narrow(Vector<int> low, Vector<int> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### Narrow
`public unsafe static Vector<int> Narrow(Vector<long> low, Vector<long> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### Narrow
`public unsafe static Vector<float> Narrow(Vector<double> low, Vector<double> high)`

**用途 / Purpose:** 处理 `narrow` 相关逻辑。

### ConvertToSingle
`public unsafe static Vector<float> ConvertToSingle(Vector<int> value)`

**用途 / Purpose:** 处理 `convert to single` 相关逻辑。

### ConvertToSingle
`public unsafe static Vector<float> ConvertToSingle(Vector<uint> value)`

**用途 / Purpose:** 处理 `convert to single` 相关逻辑。

### ConvertToDouble
`public unsafe static Vector<double> ConvertToDouble(Vector<long> value)`

**用途 / Purpose:** 处理 `convert to double` 相关逻辑。

### ConvertToDouble
`public unsafe static Vector<double> ConvertToDouble(Vector<ulong> value)`

**用途 / Purpose:** 处理 `convert to double` 相关逻辑。

### ConvertToInt32
`public unsafe static Vector<int> ConvertToInt32(Vector<float> value)`

**用途 / Purpose:** 处理 `convert to int32` 相关逻辑。

### ConvertToUInt32
`public unsafe static Vector<uint> ConvertToUInt32(Vector<float> value)`

**用途 / Purpose:** 处理 `convert to u int32` 相关逻辑。

### ConvertToInt64
`public unsafe static Vector<long> ConvertToInt64(Vector<double> value)`

**用途 / Purpose:** 处理 `convert to int64` 相关逻辑。

### ConvertToUInt64
`public unsafe static Vector<ulong> ConvertToUInt64(Vector<double> value)`

**用途 / Purpose:** 处理 `convert to u int64` 相关逻辑。

### ConditionalSelect
`public static Vector<float> ConditionalSelect(Vector<int> condition, Vector<float> left, Vector<float> right)`

**用途 / Purpose:** 处理 `conditional select` 相关逻辑。

### ConditionalSelect
`public static Vector<double> ConditionalSelect(Vector<long> condition, Vector<double> left, Vector<double> right)`

**用途 / Purpose:** 处理 `conditional select` 相关逻辑。

### Equals
`public static Vector<int> Equals(Vector<float> left, Vector<float> right)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public static Vector<int> Equals(Vector<int> left, Vector<int> right)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public static Vector<long> Equals(Vector<double> left, Vector<double> right)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### Equals
`public static Vector<long> Equals(Vector<long> left, Vector<long> right)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### LessThan
`public static Vector<int> LessThan(Vector<float> left, Vector<float> right)`

**用途 / Purpose:** 处理 `less than` 相关逻辑。

### LessThan
`public static Vector<int> LessThan(Vector<int> left, Vector<int> right)`

**用途 / Purpose:** 处理 `less than` 相关逻辑。

### LessThan
`public static Vector<long> LessThan(Vector<double> left, Vector<double> right)`

**用途 / Purpose:** 处理 `less than` 相关逻辑。

### LessThan
`public static Vector<long> LessThan(Vector<long> left, Vector<long> right)`

**用途 / Purpose:** 处理 `less than` 相关逻辑。

### LessThanOrEqual
`public static Vector<int> LessThanOrEqual(Vector<float> left, Vector<float> right)`

**用途 / Purpose:** 处理 `less than or equal` 相关逻辑。

### LessThanOrEqual
`public static Vector<int> LessThanOrEqual(Vector<int> left, Vector<int> right)`

**用途 / Purpose:** 处理 `less than or equal` 相关逻辑。

### LessThanOrEqual
`public static Vector<long> LessThanOrEqual(Vector<long> left, Vector<long> right)`

**用途 / Purpose:** 处理 `less than or equal` 相关逻辑。

### LessThanOrEqual
`public static Vector<long> LessThanOrEqual(Vector<double> left, Vector<double> right)`

**用途 / Purpose:** 处理 `less than or equal` 相关逻辑。

### GreaterThan
`public static Vector<int> GreaterThan(Vector<float> left, Vector<float> right)`

**用途 / Purpose:** 处理 `greater than` 相关逻辑。

### GreaterThan
`public static Vector<int> GreaterThan(Vector<int> left, Vector<int> right)`

**用途 / Purpose:** 处理 `greater than` 相关逻辑。

### GreaterThan
`public static Vector<long> GreaterThan(Vector<double> left, Vector<double> right)`

**用途 / Purpose:** 处理 `greater than` 相关逻辑。

### GreaterThan
`public static Vector<long> GreaterThan(Vector<long> left, Vector<long> right)`

**用途 / Purpose:** 处理 `greater than` 相关逻辑。

### GreaterThanOrEqual
`public static Vector<int> GreaterThanOrEqual(Vector<float> left, Vector<float> right)`

**用途 / Purpose:** 处理 `greater than or equal` 相关逻辑。

### GreaterThanOrEqual
`public static Vector<int> GreaterThanOrEqual(Vector<int> left, Vector<int> right)`

**用途 / Purpose:** 处理 `greater than or equal` 相关逻辑。

### GreaterThanOrEqual
`public static Vector<long> GreaterThanOrEqual(Vector<long> left, Vector<long> right)`

**用途 / Purpose:** 处理 `greater than or equal` 相关逻辑。

### GreaterThanOrEqual
`public static Vector<long> GreaterThanOrEqual(Vector<double> left, Vector<double> right)`

**用途 / Purpose:** 处理 `greater than or equal` 相关逻辑。

## 使用示例

```csharp
var value = new Vector();
value.Vector(value);
```

## 参见

- [完整类目录](../catalog)