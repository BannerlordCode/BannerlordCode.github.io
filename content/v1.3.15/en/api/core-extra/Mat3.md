---
title: "Mat3"
description: "Auto-generated class reference for Mat3."
---
# Mat3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat3`
**Base:** none
**File:** `TaleWorlds.Library/Mat3.cs`

## Overview

`Mat3` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; set; }` |
| `Identity` | `public static Mat3 Identity { get; }` |

## Key Methods

### RotateAboutSide
`public void RotateAboutSide(float a)`

**Purpose:** Executes the RotateAboutSide logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.RotateAboutSide(0);
```

### RotateAboutForward
`public void RotateAboutForward(float a)`

**Purpose:** Executes the RotateAboutForward logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.RotateAboutForward(0);
```

### RotateAboutUp
`public void RotateAboutUp(float a)`

**Purpose:** Executes the RotateAboutUp logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.RotateAboutUp(0);
```

### RotateAboutAnArbitraryVector
`public void RotateAboutAnArbitraryVector(in Vec3 v, float a)`

**Purpose:** Executes the RotateAboutAnArbitraryVector logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.RotateAboutAnArbitraryVector(v, 0);
```

### IsOrthonormal
`public bool IsOrthonormal()`

**Purpose:** Determines whether the this instance is in the orthonormal state or condition.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.IsOrthonormal();
```

### IsLeftHanded
`public bool IsLeftHanded()`

**Purpose:** Determines whether the this instance is in the left handed state or condition.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.IsLeftHanded();
```

### NearlyEquals
`public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)`

**Purpose:** Executes the NearlyEquals logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.NearlyEquals(rhs, 0);
```

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.TransformToParent(v);
```

### TransformToParent
`public Vec2 TransformToParent(in Vec2 v)`

**Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.TransformToParent(v);
```

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.TransformToLocal(v);
```

### TransformToLocal
`public Vec2 TransformToLocal(in Vec2 v)`

**Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.TransformToLocal(v);
```

### TransformToParent
`public Mat3 TransformToParent(in Mat3 m)`

**Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.TransformToParent(m);
```

### TransformToLocal
`public Mat3 TransformToLocal(in Mat3 m)`

**Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.TransformToLocal(m);
```

### Orthonormalize
`public void Orthonormalize()`

**Purpose:** Executes the Orthonormalize logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.Orthonormalize();
```

### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()`

**Purpose:** Executes the OrthonormalizeAccordingToForwardAndKeepUpAsZAxis logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.OrthonormalizeAccordingToForwardAndKeepUpAsZAxis();
```

### GetUnitRotation
`public Mat3 GetUnitRotation(float removedScale)`

**Purpose:** Reads and returns the unit rotation value held by the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.GetUnitRotation(0);
```

### MakeUnit
`public Vec3 MakeUnit()`

**Purpose:** Executes the MakeUnit logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.MakeUnit();
```

### IsUnit
`public bool IsUnit()`

**Purpose:** Determines whether the this instance is in the unit state or condition.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.IsUnit();
```

### ApplyScaleLocal
`public void ApplyScaleLocal(float scaleAmount)`

**Purpose:** Applies the effect of scale local to the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.ApplyScaleLocal(0);
```

### ApplyScaleLocal
`public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)`

**Purpose:** Applies the effect of scale local to the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.ApplyScaleLocal(scaleAmountXYZ);
```

### HasScale
`public bool HasScale()`

**Purpose:** Determines whether the this instance already holds scale.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.HasScale();
```

### GetScaleVector
`public Vec3 GetScaleVector()`

**Purpose:** Reads and returns the scale vector value held by the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.GetScaleVector();
```

### GetScaleVectorSquared
`public Vec3 GetScaleVectorSquared()`

**Purpose:** Reads and returns the scale vector squared value held by the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.GetScaleVectorSquared();
```

### ToQuaternion
`public void ToQuaternion(out Quaternion quat)`

**Purpose:** Executes the ToQuaternion logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.ToQuaternion(quat);
```

### ToQuaternion
`public Quaternion ToQuaternion()`

**Purpose:** Executes the ToQuaternion logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.ToQuaternion();
```

### Lerp
`public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)`

**Purpose:** Executes the Lerp logic.

```csharp
// Static call; no instance required
Mat3.Lerp(m1, m2, 0);
```

### LerpNonOrthogonal
`public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)`

**Purpose:** Executes the LerpNonOrthogonal logic.

```csharp
// Static call; no instance required
Mat3.LerpNonOrthogonal(m1, m2, 0);
```

### CreateMat3WithForward
`public static Mat3 CreateMat3WithForward(in Vec3 direction)`

**Purpose:** Constructs a new mat3 with forward entity and returns it to the caller.

```csharp
// Static call; no instance required
Mat3.CreateMat3WithForward(direction);
```

### CreateDiagonalMat3
`public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)`

**Purpose:** Constructs a new diagonal mat3 entity and returns it to the caller.

```csharp
// Static call; no instance required
Mat3.CreateDiagonalMat3(diagonalData);
```

### GetEulerAngles
`public Vec3 GetEulerAngles()`

**Purpose:** Reads and returns the euler angles value held by the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.GetEulerAngles();
```

### Transpose
`public Mat3 Transpose()`

**Purpose:** Executes the Transpose logic.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.Transpose();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.ToString();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.GetHashCode();
```

### IsIdentity
`public bool IsIdentity()`

**Purpose:** Determines whether the this instance is in the identity state or condition.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.IsIdentity();
```

### IsZero
`public bool IsZero()`

**Purpose:** Determines whether the this instance is in the zero state or condition.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.IsZero();
```

### IsUniformScaled
`public bool IsUniformScaled()`

**Purpose:** Determines whether the this instance is in the uniform scaled state or condition.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
var result = mat3.IsUniformScaled();
```

### ApplyEulerAngles
`public void ApplyEulerAngles(in Vec3 eulerAngles)`

**Purpose:** Applies the effect of euler angles to the this instance.

```csharp
// Obtain an instance of Mat3 from the subsystem API first
Mat3 mat3 = ...;
mat3.ApplyEulerAngles(eulerAngles);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Mat3 mat3 = ...;
mat3.RotateAboutSide(0);
```

## See Also

- [Area Index](../)