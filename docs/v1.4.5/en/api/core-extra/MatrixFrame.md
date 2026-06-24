<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatrixFrame`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MatrixFrame

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct MatrixFrame`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/MatrixFrame.cs`

## Overview

`MatrixFrame` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsIdentity` | `public bool IsIdentity { get; }` |
| `IsZero` | `public bool IsZero { get; }` |
| `this` | `public Vec3 this { get; set; }` |
| `this` | `public float this { get; set; }` |

## Key Methods

### TransformToParent
`public Vec3 TransformToParent(in Vec3 v)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToParentDouble
`public Vec3 TransformToParentDouble(in Vec3 v)`

**Purpose:** Handles logic related to `transform to parent double`.

### TransformToParent
`public Vec2 TransformToParent(in Vec2 v)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToLocal
`public Vec3 TransformToLocal(in Vec3 v)`

**Purpose:** Handles logic related to `transform to local`.

### TransformToLocalNonUnit
`public Vec3 TransformToLocalNonUnit(in Vec3 v)`

**Purpose:** Handles logic related to `transform to local non unit`.

### NearlyEquals
`public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)`

**Purpose:** Handles logic related to `nearly equals`.

### TransformToLocalNonOrthogonal
`public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)`

**Purpose:** Handles logic related to `transform to local non orthogonal`.

### TransformToLocalNonOrthogonal
`public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)`

**Purpose:** Handles logic related to `transform to local non orthogonal`.

### Lerp
`public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**Purpose:** Handles logic related to `lerp`.

### LerpNonOrthogonal
`public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**Purpose:** Handles logic related to `lerp non orthogonal`.

### Slerp
`public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)`

**Purpose:** Handles logic related to `slerp`.

### TransformToParent
`public MatrixFrame TransformToParent(in MatrixFrame m)`

**Purpose:** Handles logic related to `transform to parent`.

### TransformToLocal
`public MatrixFrame TransformToLocal(in MatrixFrame m)`

**Purpose:** Handles logic related to `transform to local`.

### TransformToParentWithW
`public Vec3 TransformToParentWithW(Vec3 _s)`

**Purpose:** Handles logic related to `transform to parent with w`.

### GetUnitRotFrame
`public MatrixFrame GetUnitRotFrame(float removedScale)`

**Purpose:** Gets the current value of `unit rot frame`.

### InverseFast
`public MatrixFrame InverseFast()`

**Purpose:** Handles logic related to `inverse fast`.

### Inverse
`public MatrixFrame Inverse()`

**Purpose:** Handles logic related to `inverse`.

### Determinant4X4
`public float Determinant4X4()`

**Purpose:** Handles logic related to `determinant4 x4`.

### Rotate
`public void Rotate(float radian, in Vec3 axis)`

**Purpose:** Handles logic related to `rotate`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Strafe
`public MatrixFrame Strafe(float a)`

**Purpose:** Handles logic related to `strafe`.

### Advance
`public MatrixFrame Advance(float a)`

**Purpose:** Handles logic related to `advance`.

### Elevate
`public MatrixFrame Elevate(float a)`

**Purpose:** Handles logic related to `elevate`.

### Scale
`public void Scale(in Vec3 scalingVector)`

**Purpose:** Handles logic related to `scale`.

### GetScale
`public Vec3 GetScale()`

**Purpose:** Gets the current value of `scale`.

### CreateLookAt
`public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)`

**Purpose:** Creates a new `look at` instance or object.

### CenterFrameOfTwoPoints
`public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)`

**Purpose:** Handles logic related to `center frame of two points`.

### Fill
`public void Fill()`

**Purpose:** Handles logic related to `fill`.

### Filled
`public MatrixFrame Filled()`

**Purpose:** Handles logic related to `filled`.

## Usage Example

```csharp
var value = new MatrixFrame();
value.TransformToParent(v);
```

## See Also

- [Complete Class Catalog](../catalog)