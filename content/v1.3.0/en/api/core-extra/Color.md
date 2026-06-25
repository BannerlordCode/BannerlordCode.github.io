---
title: "Color"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Color`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `to vector3`.

### ToVec3
`public Vec3 ToVec3()`

**Purpose:** Handles logic related to `to vec3`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### FromVector3
`public static Color FromVector3(Vector3 vector3)`

**Purpose:** Handles logic related to `from vector3`.

### FromVector3
`public static Color FromVector3(Vec3 vector3)`

**Purpose:** Handles logic related to `from vector3`.

### Length
`public float Length()`

**Purpose:** Handles logic related to `length`.

### ToUnsignedInteger
`public uint ToUnsignedInteger()`

**Purpose:** Handles logic related to `to unsigned integer`.

### FromUint
`public static Color FromUint(uint color)`

**Purpose:** Handles logic related to `from uint`.

### FromHSV
`public static Color FromHSV(float h, float s, float v)`

**Purpose:** Handles logic related to `from h s v`.

### ConvertStringToColor
`public static Color ConvertStringToColor(string color)`

**Purpose:** Handles logic related to `convert string to color`.

### Lerp
`public static Color Lerp(Color start, Color end, float ratio)`

**Purpose:** Handles logic related to `lerp`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### UIntToColorString
`public static string UIntToColorString(uint color)`

**Purpose:** Handles logic related to `u int to color string`.

## Usage Example

```csharp
var value = new Color();
value.ToVector3();
```

## See Also

- [Complete Class Catalog](../catalog)