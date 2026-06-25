---
title: "MatrixFrame"
description: "Auto-generated class reference for MatrixFrame."
---
# MatrixFrame

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MatrixFrame`
**Base:** none
**File:** `TaleWorlds.Library/MatrixFrame.cs`

## Overview

`MatrixFrame` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Identity` | `public static MatrixFrame Identity { get; }` |
| `Zero` | `public static MatrixFrame Zero { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsZero` | `public bool IsZero { get; }` |
| `this` | `public Vec3 this { get; }` |
| `this` | `public float this { get; }` |

## Key Methods

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParent(v);
```

### TransformToParentDouble
`public Vec3 TransformToParentDouble(in Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToParentDouble logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParentDouble(v);
```

### TransformToParent
`public Vec2 TransformToParent(in Vec2 v)`

**Purpose:** **Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParent(v);
```

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocal(v);
```

### TransformToLocalNonUnit
`public Vec3 TransformToLocalNonUnit(in Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToLocalNonUnit logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocalNonUnit(v);
```

### NearlyEquals
`public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)`

**Purpose:** **Purpose:** Executes the NearlyEquals logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.NearlyEquals(rhs, 0);
```

### TransformToLocalNonOrthogonal
`public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToLocalNonOrthogonal logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocalNonOrthogonal(v);
```

### TransformToLocalNonOrthogonal
`public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)`

**Purpose:** **Purpose:** Executes the TransformToLocalNonOrthogonal logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocalNonOrthogonal(frame);
```

### Lerp
`public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**Purpose:** **Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
MatrixFrame.Lerp(m1, m2, 0);
```

### LerpNonOrthogonal
`public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**Purpose:** **Purpose:** Executes the LerpNonOrthogonal logic.

```csharp
// Static call; no instance required
MatrixFrame.LerpNonOrthogonal(m1, m2, 0);
```

### Slerp
`public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**Purpose:** **Purpose:** Executes the Slerp logic.

```csharp
// Static call; no instance required
MatrixFrame.Slerp(m1, m2, 0);
```

### TransformToParent
`public MatrixFrame TransformToParent(in MatrixFrame m)`

**Purpose:** **Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParent(m);
```

### TransformToLocal
`public MatrixFrame TransformToLocal(in MatrixFrame m)`

**Purpose:** **Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToLocal(m);
```

### TransformToParentWithW
`public Vec3 TransformToParentWithW(Vec3 _s)`

**Purpose:** **Purpose:** Executes the TransformToParentWithW logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.TransformToParentWithW(_s);
```

### GetUnitRotFrame
`public MatrixFrame GetUnitRotFrame(float removedScale)`

**Purpose:** **Purpose:** Reads and returns the unit rot frame value held by the this instance.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.GetUnitRotFrame(0);
```

### InverseFast
`public MatrixFrame InverseFast()`

**Purpose:** **Purpose:** Executes the InverseFast logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.InverseFast();
```

### Inverse
`public MatrixFrame Inverse()`

**Purpose:** **Purpose:** Executes the Inverse logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Inverse();
```

### Determinant4X4
`public float Determinant4X4()`

**Purpose:** **Purpose:** Executes the Determinant4X4 logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Determinant4X4();
```

### Rotate
`public void Rotate(float radian, in Vec3 axis)`

**Purpose:** **Purpose:** Executes the Rotate logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
matrixFrame.Rotate(0, axis);
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.GetHashCode();
```

### Strafe
`public MatrixFrame Strafe(float a)`

**Purpose:** **Purpose:** Executes the Strafe logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Strafe(0);
```

### Advance
`public MatrixFrame Advance(float a)`

**Purpose:** **Purpose:** Executes the Advance logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Advance(0);
```

### Elevate
`public MatrixFrame Elevate(float a)`

**Purpose:** **Purpose:** Executes the Elevate logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.Elevate(0);
```

### Scale
`public void Scale(in Vec3 scalingVector)`

**Purpose:** **Purpose:** Executes the Scale logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
matrixFrame.Scale(scalingVector);
```

### GetScale
`public Vec3 GetScale()`

**Purpose:** **Purpose:** Reads and returns the scale value held by the this instance.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
var result = matrixFrame.GetScale();
```

### CreateLookAt
`public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)`

**Purpose:** **Purpose:** Constructs a new look at entity and returns it to the caller.

```csharp
// Static call; no instance required
MatrixFrame.CreateLookAt(position, target, upVector);
```

### CenterFrameOfTwoPoints
`public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)`

**Purpose:** **Purpose:** Executes the CenterFrameOfTwoPoints logic.

```csharp
// Static call; no instance required
MatrixFrame.CenterFrameOfTwoPoints(p1, p2, upVector);
```

### Fill
`public void Fill()`

**Purpose:** **Purpose:** Executes the Fill logic.

```csharp
// Obtain an instance of MatrixFrame from the subsystem API first
MatrixFrame matrixFrame = ...;
matrixFrame.Fill();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MatrixFrame matrixFrame = ...;
matrixFrame.TransformToParent(v);
```

## See Also

- [Area Index](../)