---
title: "Color"
description: "Auto-generated class reference for Color."
---
# Color

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Color`
**Base:** none
**File:** `TaleWorlds.Library/Color.cs`

## Overview

`Color` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Black` | `public static Color Black { get; }` |
| `White` | `public static Color White { get; }` |

## Key Methods

### ToVector3
`public Vector3 ToVector3()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.ToVector3();
```

### ToVec3
`public Vec3 ToVec3()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.ToVec3();
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.Equals(obj);
```

### FromVector3
`public static Color FromVector3(Vector3 vector3)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Color.FromVector3(vector3);
```

### FromVector3
`public static Color FromVector3(Vec3 vector3)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Color.FromVector3(vector3);
```

### Length
`public float Length()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.Length();
```

### ToUnsignedInteger
`public uint ToUnsignedInteger()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.ToUnsignedInteger();
```

### FromUint
`public static Color FromUint(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Color.FromUint(0);
```

### FromHSV
`public static Color FromHSV(float h, float s, float v)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Color.FromHSV(0, 0, 0);
```

### ConvertStringToColor
`public static Color ConvertStringToColor(string color)`

**Purpose:** Converts `string to color` into another representation or type.

```csharp
// Static call; no instance required
Color.ConvertStringToColor("example");
```

### Lerp
`public static Color Lerp(Color start, Color end, float ratio)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Color.Lerp(start, end, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of Color from the subsystem API first
Color color = ...;
var result = color.ToString();
```

### UIntToColorString
`public static string UIntToColorString(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Color.UIntToColorString(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Color color = ...;
color.ToVector3();
```

## See Also

- [Area Index](../)