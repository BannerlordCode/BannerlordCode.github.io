---
title: "Vector"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Vector`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Vector

**Namespace:** System.Numerics
**Module:** System.Numerics
**Type:** `public struct Vector<T> : IEquatable<Vector<T>>, IFormattable where T : struct`
**Base:** `IEquatable<Vector<T>>`
**File:** `Bannerlord.Source/bin/System.Numerics.Vectors/System.Numerics/Vector.cs`

## Overview

`Vector` lives in `System.Numerics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `System.Numerics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public unsafe T this { get; }` |

## Key Methods

### Vector
`public unsafe Vector(T value)`

**Purpose:** Handles logic related to `vector`.

### Vector
`public unsafe Vector(T values, int index)`

**Purpose:** Handles logic related to `vector`.

### CopyTo
`public void CopyTo(T destination)`

**Purpose:** Handles logic related to `copy to`.

### CopyTo
`public unsafe void CopyTo(T destination, int startIndex)`

**Purpose:** Handles logic related to `copy to`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public bool Equals(Vector<T> other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string format)`

**Purpose:** Handles logic related to `to string`.

### ToString
`public string ToString(string format, IFormatProvider formatProvider)`

**Purpose:** Handles logic related to `to string`.

### Widen
`public unsafe static void Widen(Vector<byte> source, out Vector<ushort> low, out Vector<ushort> high)`

**Purpose:** Handles logic related to `widen`.

### Widen
`public unsafe static void Widen(Vector<ushort> source, out Vector<uint> low, out Vector<uint> high)`

**Purpose:** Handles logic related to `widen`.

### Widen
`public unsafe static void Widen(Vector<uint> source, out Vector<ulong> low, out Vector<ulong> high)`

**Purpose:** Handles logic related to `widen`.

### Widen
`public unsafe static void Widen(Vector<sbyte> source, out Vector<short> low, out Vector<short> high)`

**Purpose:** Handles logic related to `widen`.

### Widen
`public unsafe static void Widen(Vector<short> source, out Vector<int> low, out Vector<int> high)`

**Purpose:** Handles logic related to `widen`.

### Widen
`public unsafe static void Widen(Vector<int> source, out Vector<long> low, out Vector<long> high)`

**Purpose:** Handles logic related to `widen`.

### Widen
`public unsafe static void Widen(Vector<float> source, out Vector<double> low, out Vector<double> high)`

**Purpose:** Handles logic related to `widen`.

### Narrow
`public unsafe static Vector<byte> Narrow(Vector<ushort> low, Vector<ushort> high)`

**Purpose:** Handles logic related to `narrow`.

### Narrow
`public unsafe static Vector<ushort> Narrow(Vector<uint> low, Vector<uint> high)`

**Purpose:** Handles logic related to `narrow`.

### Narrow
`public unsafe static Vector<uint> Narrow(Vector<ulong> low, Vector<ulong> high)`

**Purpose:** Handles logic related to `narrow`.

### Narrow
`public unsafe static Vector<sbyte> Narrow(Vector<short> low, Vector<short> high)`

**Purpose:** Handles logic related to `narrow`.

### Narrow
`public unsafe static Vector<short> Narrow(Vector<int> low, Vector<int> high)`

**Purpose:** Handles logic related to `narrow`.

### Narrow
`public unsafe static Vector<int> Narrow(Vector<long> low, Vector<long> high)`

**Purpose:** Handles logic related to `narrow`.

### Narrow
`public unsafe static Vector<float> Narrow(Vector<double> low, Vector<double> high)`

**Purpose:** Handles logic related to `narrow`.

### ConvertToSingle
`public unsafe static Vector<float> ConvertToSingle(Vector<int> value)`

**Purpose:** Handles logic related to `convert to single`.

### ConvertToSingle
`public unsafe static Vector<float> ConvertToSingle(Vector<uint> value)`

**Purpose:** Handles logic related to `convert to single`.

### ConvertToDouble
`public unsafe static Vector<double> ConvertToDouble(Vector<long> value)`

**Purpose:** Handles logic related to `convert to double`.

### ConvertToDouble
`public unsafe static Vector<double> ConvertToDouble(Vector<ulong> value)`

**Purpose:** Handles logic related to `convert to double`.

### ConvertToInt32
`public unsafe static Vector<int> ConvertToInt32(Vector<float> value)`

**Purpose:** Handles logic related to `convert to int32`.

### ConvertToUInt32
`public unsafe static Vector<uint> ConvertToUInt32(Vector<float> value)`

**Purpose:** Handles logic related to `convert to u int32`.

### ConvertToInt64
`public unsafe static Vector<long> ConvertToInt64(Vector<double> value)`

**Purpose:** Handles logic related to `convert to int64`.

### ConvertToUInt64
`public unsafe static Vector<ulong> ConvertToUInt64(Vector<double> value)`

**Purpose:** Handles logic related to `convert to u int64`.

### ConditionalSelect
`public static Vector<float> ConditionalSelect(Vector<int> condition, Vector<float> left, Vector<float> right)`

**Purpose:** Handles logic related to `conditional select`.

### ConditionalSelect
`public static Vector<double> ConditionalSelect(Vector<long> condition, Vector<double> left, Vector<double> right)`

**Purpose:** Handles logic related to `conditional select`.

### Equals
`public static Vector<int> Equals(Vector<float> left, Vector<float> right)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public static Vector<int> Equals(Vector<int> left, Vector<int> right)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public static Vector<long> Equals(Vector<double> left, Vector<double> right)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public static Vector<long> Equals(Vector<long> left, Vector<long> right)`

**Purpose:** Handles logic related to `equals`.

### LessThan
`public static Vector<int> LessThan(Vector<float> left, Vector<float> right)`

**Purpose:** Handles logic related to `less than`.

### LessThan
`public static Vector<int> LessThan(Vector<int> left, Vector<int> right)`

**Purpose:** Handles logic related to `less than`.

### LessThan
`public static Vector<long> LessThan(Vector<double> left, Vector<double> right)`

**Purpose:** Handles logic related to `less than`.

### LessThan
`public static Vector<long> LessThan(Vector<long> left, Vector<long> right)`

**Purpose:** Handles logic related to `less than`.

### LessThanOrEqual
`public static Vector<int> LessThanOrEqual(Vector<float> left, Vector<float> right)`

**Purpose:** Handles logic related to `less than or equal`.

### LessThanOrEqual
`public static Vector<int> LessThanOrEqual(Vector<int> left, Vector<int> right)`

**Purpose:** Handles logic related to `less than or equal`.

### LessThanOrEqual
`public static Vector<long> LessThanOrEqual(Vector<long> left, Vector<long> right)`

**Purpose:** Handles logic related to `less than or equal`.

### LessThanOrEqual
`public static Vector<long> LessThanOrEqual(Vector<double> left, Vector<double> right)`

**Purpose:** Handles logic related to `less than or equal`.

### GreaterThan
`public static Vector<int> GreaterThan(Vector<float> left, Vector<float> right)`

**Purpose:** Handles logic related to `greater than`.

### GreaterThan
`public static Vector<int> GreaterThan(Vector<int> left, Vector<int> right)`

**Purpose:** Handles logic related to `greater than`.

### GreaterThan
`public static Vector<long> GreaterThan(Vector<double> left, Vector<double> right)`

**Purpose:** Handles logic related to `greater than`.

### GreaterThan
`public static Vector<long> GreaterThan(Vector<long> left, Vector<long> right)`

**Purpose:** Handles logic related to `greater than`.

### GreaterThanOrEqual
`public static Vector<int> GreaterThanOrEqual(Vector<float> left, Vector<float> right)`

**Purpose:** Handles logic related to `greater than or equal`.

### GreaterThanOrEqual
`public static Vector<int> GreaterThanOrEqual(Vector<int> left, Vector<int> right)`

**Purpose:** Handles logic related to `greater than or equal`.

### GreaterThanOrEqual
`public static Vector<long> GreaterThanOrEqual(Vector<long> left, Vector<long> right)`

**Purpose:** Handles logic related to `greater than or equal`.

### GreaterThanOrEqual
`public static Vector<long> GreaterThanOrEqual(Vector<double> left, Vector<double> right)`

**Purpose:** Handles logic related to `greater than or equal`.

## Usage Example

```csharp
var value = new Vector();
value.Vector(value);
```

## See Also

- [Complete Class Catalog](../catalog)