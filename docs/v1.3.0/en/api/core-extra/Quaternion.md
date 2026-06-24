<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Quaternion`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Quaternion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Quaternion`
**Base:** none
**File:** `TaleWorlds.Library/Quaternion.cs`

## Overview

`Quaternion` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public float this { get; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsUnit` | `public bool IsUnit { get; }` |
| `Identity` | `public static Quaternion Identity { get; }` |

## Key Methods

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### Normalize
`public float Normalize()`

**Purpose:** Handles logic related to `normalize`.

### SafeNormalize
`public float SafeNormalize()`

**Purpose:** Handles logic related to `safe normalize`.

### NormalizeWeighted
`public float NormalizeWeighted()`

**Purpose:** Handles logic related to `normalize weighted`.

### SetToRotationX
`public void SetToRotationX(float angle)`

**Purpose:** Sets the value or state of `to rotation x`.

### SetToRotationY
`public void SetToRotationY(float angle)`

**Purpose:** Sets the value or state of `to rotation y`.

### SetToRotationZ
`public void SetToRotationZ(float angle)`

**Purpose:** Sets the value or state of `to rotation z`.

### Flip
`public void Flip()`

**Purpose:** Handles logic related to `flip`.

### TransformToParent
`public Quaternion TransformToParent(Quaternion q)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToLocal
`public Quaternion TransformToLocal(Quaternion q)`

**Purpose:** Handles logic related to `transform to local`.

### TransformToLocalWithoutNormalize
`public Quaternion TransformToLocalWithoutNormalize(Quaternion q)`

**Purpose:** Handles logic related to `transform to local without normalize`.

### Slerp
`public static Quaternion Slerp(Quaternion from, Quaternion to, float t)`

**Purpose:** Handles logic related to `slerp`.

### Lerp
`public static Quaternion Lerp(Quaternion from, Quaternion to, float t)`

**Purpose:** Handles logic related to `lerp`.

### Mat3FromQuaternion
`public static Mat3 Mat3FromQuaternion(Quaternion quat)`

**Purpose:** Handles logic related to `mat3 from quaternion`.

### QuaternionFromEulerAngles
`public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)`

**Purpose:** Handles logic related to `quaternion from euler angles`.

### QuaternionFromMat3
`public static Quaternion QuaternionFromMat3(Mat3 m)`

**Purpose:** Handles logic related to `quaternion from mat3`.

### AxisAngleFromQuaternion
`public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)`

**Purpose:** Handles logic related to `axis angle from quaternion`.

### QuaternionFromAxisAngle
`public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)`

**Purpose:** Handles logic related to `quaternion from axis angle`.

### EulerAngleFromQuaternion
`public static Vec3 EulerAngleFromQuaternion(Quaternion quat)`

**Purpose:** Handles logic related to `euler angle from quaternion`.

### FindShortestArcAsQuaternion
`public static Quaternion FindShortestArcAsQuaternion(Vec3 v0, Vec3 v1)`

**Purpose:** Handles logic related to `find shortest arc as quaternion`.

### Dotp4
`public float Dotp4(Quaternion q2)`

**Purpose:** Handles logic related to `dotp4`.

### ToMat3
`public Mat3 ToMat3()`

**Purpose:** Handles logic related to `to mat3`.

### InverseDirection
`public bool InverseDirection(Quaternion q2)`

**Purpose:** Handles logic related to `inverse direction`.

### Conjugate
`public Quaternion Conjugate()`

**Purpose:** Handles logic related to `conjugate`.

### Inverse
`public Quaternion Inverse()`

**Purpose:** Handles logic related to `inverse`.

## Usage Example

```csharp
var value = new Quaternion();
value.GetHashCode();
```

## See Also

- [Complete Class Catalog](../catalog)