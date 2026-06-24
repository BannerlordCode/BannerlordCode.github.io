<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mat3`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Mat3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat3`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Mat3.cs`

## Overview

`Mat3` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; set; }` |

## Key Methods

### RotateAboutSide
`public void RotateAboutSide(float a)`

**Purpose:** Handles logic related to `rotate about side`.

### RotateAboutForward
`public void RotateAboutForward(float a)`

**Purpose:** Handles logic related to `rotate about forward`.

### RotateAboutUp
`public void RotateAboutUp(float a)`

**Purpose:** Handles logic related to `rotate about up`.

### RotateAboutAnArbitraryVector
`public void RotateAboutAnArbitraryVector(in Vec3 v, float a)`

**Purpose:** Handles logic related to `rotate about an arbitrary vector`.

### IsOrthonormal
`public bool IsOrthonormal()`

**Purpose:** Handles logic related to `is orthonormal`.

### IsLeftHanded
`public bool IsLeftHanded()`

**Purpose:** Handles logic related to `is left handed`.

### NearlyEquals
`public bool NearlyEquals(in Mat3 rhs, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `nearly equals`.

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToParent
`public Vec2 TransformToParent(in Vec2 v)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**Purpose:** Handles logic related to `transform to local`.

### TransformToLocal
`public Vec2 TransformToLocal(in Vec2 v)`

**Purpose:** Handles logic related to `transform to local`.

### TransformToParent
`public Mat3 TransformToParent(in Mat3 m)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToLocal
`public Mat3 TransformToLocal(in Mat3 m)`

**Purpose:** Handles logic related to `transform to local`.

### Orthonormalize
`public void Orthonormalize()`

**Purpose:** Handles logic related to `orthonormalize`.

### OrthonormalizeAccordingToForwardAndKeepUpAsZAxis
`public void OrthonormalizeAccordingToForwardAndKeepUpAsZAxis()`

**Purpose:** Handles logic related to `orthonormalize according to forward and keep up as z axis`.

### GetUnitRotation
`public Mat3 GetUnitRotation(float removedScale)`

**Purpose:** Gets the current value of `unit rotation`.

### MakeUnit
`public Vec3 MakeUnit()`

**Purpose:** Handles logic related to `make unit`.

### IsUnit
`public bool IsUnit()`

**Purpose:** Handles logic related to `is unit`.

### ApplyScaleLocal
`public void ApplyScaleLocal(float scaleAmount)`

**Purpose:** Applies `scale local` to the current object.

### ApplyScaleLocal
`public void ApplyScaleLocal(in Vec3 scaleAmountXYZ)`

**Purpose:** Applies `scale local` to the current object.

### HasScale
`public bool HasScale()`

**Purpose:** Checks whether the current object has/contains `scale`.

### GetScaleVector
`public Vec3 GetScaleVector()`

**Purpose:** Gets the current value of `scale vector`.

### GetScaleVectorSquared
`public Vec3 GetScaleVectorSquared()`

**Purpose:** Gets the current value of `scale vector squared`.

### ToQuaternion
`public void ToQuaternion(out Quaternion quat)`

**Purpose:** Handles logic related to `to quaternion`.

### ToQuaternion
`public Quaternion ToQuaternion()`

**Purpose:** Handles logic related to `to quaternion`.

### Lerp
`public static Mat3 Lerp(in Mat3 m1, in Mat3 m2, float alpha)`

**Purpose:** Handles logic related to `lerp`.

### LerpNonOrthogonal
`public static Mat3 LerpNonOrthogonal(in Mat3 m1, in Mat3 m2, float alpha)`

**Purpose:** Handles logic related to `lerp non orthogonal`.

### Slerp
`public static Mat3 Slerp(in Mat3 m1, in Mat3 m2, float alpha)`

**Purpose:** Handles logic related to `slerp`.

### SlerpFPSIndependent
`public static Mat3 SlerpFPSIndependent(in Mat3 m1, in Mat3 m2, float alpha)`

**Purpose:** Handles logic related to `slerp f p s independent`.

### CreateMat3WithForward
`public static Mat3 CreateMat3WithForward(in Vec3 direction)`

**Purpose:** Creates a new `mat3 with forward` instance or object.

### CreateDiagonalMat3
`public static Mat3 CreateDiagonalMat3(in Vec3 diagonalData)`

**Purpose:** Creates a new `diagonal mat3` instance or object.

### GetEulerAngles
`public Vec3 GetEulerAngles()`

**Purpose:** Gets the current value of `euler angles`.

### Transpose
`public Mat3 Transpose()`

**Purpose:** Handles logic related to `transpose`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### IsIdentity
`public bool IsIdentity()`

**Purpose:** Handles logic related to `is identity`.

### IsZero
`public bool IsZero()`

**Purpose:** Handles logic related to `is zero`.

### IsUniformScaled
`public bool IsUniformScaled()`

**Purpose:** Handles logic related to `is uniform scaled`.

### ApplyEulerAngles
`public void ApplyEulerAngles(in Vec3 eulerAngles)`

**Purpose:** Applies `euler angles` to the current object.

## Usage Example

```csharp
var value = new Mat3();
value.RotateAboutSide(0);
```

## See Also

- [Complete Class Catalog](../catalog)