---
title: "MatrixFrame"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MatrixFrame`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MatrixFrame

**Namespace:** TaleWorlds.Library  
**File:** `bannerlord-1.3.15/TaleWorlds.Library/MatrixFrame.cs`  
**Type:** struct (`[Serializable]`)

The engine's general-purpose affine transform: a 3x3 rotation [`Mat3`](./Mat3) plus a translation origin [`Vec3`](./Vec3). It is stored internally as a 4x4 homogeneous matrix — the three basis vectors of `rotation` (`s` = side/right, `f` = forward, `u` = up) form the top three rows and `origin` forms the fourth. The struct is used throughout the engine for entity placement, cameras, bones, and coordinate-space conversions.

## Overview

`MatrixFrame` carries both position and orientation and is the basic unit for describing how an object is posed in the world. Its two core operations are `TransformToParent` (mapping a local point/child frame into this frame's space, i.e. "to world") and `TransformToLocal` (the inverse, mapping a world point into this frame's local space). Move along the local axes with `Strafe` / `Advance` / `Elevate`; rotate about an arbitrary axis with `Rotate`. Multiple transforms compose with the `*` operator.

> Note: this is a `struct` (value type) — assignment and passing copy it. `Advance` / `Strafe` / `Elevate` / `Rotate` / `Scale` mutate `this` in place and return `this`.

## Mental Model

Treat `MatrixFrame` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Fields

| Name | Type | Description |
|------|------|-------------|
| rotation | Mat3 | Rotation part, made of basis vectors `s`, `f`, `u` |
| origin | Vec3 | Translation/origin (row 4) |

## Constructors

| Constructor | Description |
|-------------|-------------|
| `MatrixFrame(in Mat3 rot, in Vec3 o)` | Build directly from rotation and origin |
| `MatrixFrame(float _11.._43)` (12 floats) | 3x3 + origin xyz; `origin.w = -1` |
| `MatrixFrame(float _11.._44)` (16 floats) | Full 4x4 components; `s/f/u` each carry `w`, `origin` carries `w` |

```csharp
public MatrixFrame(in Mat3 rot, in Vec3 o)
public MatrixFrame(float _11, float _12, float _13,
                   float _21, float _22, float _23,
                   float _31, float _32, float _33,
                   float _41, float _42, float _43)
public MatrixFrame(float _11, float _12, float _13, float _14,
                   float _21, float _22, float _23, float _24,
                   float _31, float _32, float _33, float _34,
                   float _41, float _42, float _43, float _44)
```

## Static Properties

| Name | Type | Description |
|------|------|-------------|
| Identity | MatrixFrame | Identity transform: `Mat3.Identity` + origin `(0,0,0,1)` |
| Zero | MatrixFrame | All-zero rotation + origin `(0,0,0,1)` |

## Instance Properties

| Name | Type | Description |
|------|------|-------------|
| IsIdentity | bool | `true` when origin is zero and rotation is the identity |
| IsZero | bool | `true` when origin is zero and rotation is the zero matrix |
| this[int i] | Vec3 | Row access: `0`=s, `1`=f, `2`=u, `3`=origin; out of range throws `IndexOutOfRangeException` |
| this[int i, int j] | float | Element access at row `i`, column `j`; out of range throws `IndexOutOfRangeException` |

## Transform Methods

### TransformToParent (Vec3)

```csharp
public Vec3 TransformToParent(in Vec3 v)
```

Maps a local vector `v` into this frame's space (applies rotation + translation). That is, "local → world".

**Parameters:**
- `v` - vector in local space

**Returns:** The transformed world-space vector (`w = -1`).

### TransformToParent (MatrixFrame)

```csharp
public MatrixFrame TransformToParent(in MatrixFrame m)
```

Maps the child frame `m` into this frame's space: rotation via `this.rotation.TransformToParent(m.rotation)`, origin via `this.TransformToParent(m.origin)`.

**Returns:** A new composed `MatrixFrame`.

### TransformToParent (Vec2)

```csharp
public Vec2 TransformToParent(in Vec2 v)
```

2D variant: uses only the xy components of the `s` and `f` basis vectors and the origin's xy.

### TransformToParentDouble

```csharp
public Vec3 TransformToParentDouble(in Vec3 v)
```

Same as `TransformToParent(in Vec3)` but computes intermediates in `double` precision to reduce error at large coordinates.

### TransformToParentWithW

```csharp
public Vec3 TransformToParentWithW(Vec3 _s)
```

Full 4x4 transform that preserves and computes the `w` component (for homogeneous/projective coordinates).

### TransformToLocal

```csharp
public Vec3 TransformToLocal(in Vec3 v)
public MatrixFrame TransformToLocal(in MatrixFrame m)
```

Maps a world-space vector/frame `v` into this frame's local space (subtract `origin`, then apply the transpose of the rotation). The Vec3 overload assumes an orthonormal rotation basis.

### TransformToLocalNonUnit

```csharp
public Vec3 TransformToLocalNonUnit(in Vec3 v)
```

Same computation as `TransformToLocal(in Vec3)`, for cases where the rotation is not normalized.

### TransformToLocalNonOrthogonal

```csharp
public Vec3 TransformToLocalNonOrthogonal(in Vec3 v)
public MatrixFrame TransformToLocalNonOrthogonal(in MatrixFrame frame)
```

Transforms by building the full 4x4 and calling `Inverse()`, for non-orthogonal rotations (with scale/shear). More expensive than `TransformToLocal`.

## Movement Methods

Translates `origin` along the local axes, mutating `this` and returning it for chaining.

```csharp
public MatrixFrame Strafe(float a)   // along s (right)
public MatrixFrame Advance(float a)  // along f (forward)
public MatrixFrame Elevate(float a)  // along u (up)
```

| Method | Direction | Equivalent to |
|--------|-----------|----------------|
| Strafe | right (s) | `origin += rotation.s * a` |
| Advance | forward (f) | `origin += rotation.f * a` |
| Elevate | up (u) | `origin += rotation.u * a` |

## Rotation / Scale

### Rotate

```csharp
public void Rotate(float radian, in Vec3 axis)
```

Rotates by `radian` radians about an arbitrary `axis` (no need to pre-normalize; the rotation matrix is built via Rodrigues' formula), mutating `origin` and `rotation` in place.

### Scale

```csharp
public void Scale(in Vec3 scalingVector)
```

Scales this frame by `scalingVector` (builds a scale matrix and composes it with this frame).

### GetScale

```csharp
public Vec3 GetScale()
```

**Returns:** The per-axis scale `(rotation.s.Length, rotation.f.Length, rotation.u.Length)`.

### GetUnitRotFrame

```csharp
public MatrixFrame GetUnitRotFrame(float removedScale)
```

Returns a new frame that keeps `origin` but normalizes the rotation (removing `removedScale` of scaling).

## Inverse / Determinant

### Inverse / InverseFast

```csharp
public MatrixFrame Inverse()
public MatrixFrame InverseFast()
```

`Inverse()` forwards directly to `InverseFast()`, which inverts via the 4x4 adjugate method and divides through by the determinant when it is not 1.

### Determinant4X4

```csharp
public float Determinant4X4()
```

**Returns:** The determinant of the 4x4 matrix.

### NearlyEquals

```csharp
public bool NearlyEquals(MatrixFrame rhs, float epsilon = 1E-05f)
```

**Returns:** `true` when both rotation and origin are within `epsilon` of `rhs`.

### Fill

```csharp
public void Fill()
```

Sets `rotation.s.w / f.w / u.w` to 0 and `origin.w` to 1, making the frame a canonical homogeneous matrix.

## Static Methods

### Lerp / LerpNonOrthogonal / Slerp

```csharp
public static MatrixFrame Lerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)
public static MatrixFrame LerpNonOrthogonal(in MatrixFrame m1, in MatrixFrame m2, float alpha)
public static MatrixFrame Slerp(in MatrixFrame m1, in MatrixFrame m2, float alpha)
```

Interpolate between frames. `origin` always uses `Vec3.Lerp`; for rotation: `Lerp` uses `Mat3.Lerp`, `LerpNonOrthogonal` uses `Mat3.LerpNonOrthogonal` and calls `Fill()`, and `Slerp` goes through quaternion spherical interpolation (`Quaternion.Slerp`) and converts back to `Mat3`.

### CreateLookAt

```csharp
public static MatrixFrame CreateLookAt(in Vec3 position, in Vec3 target, in Vec3 upVector)
```

Builds a "look at target" view frame: forward = `(target - position)` normalized, side = `up × forward`, up = `forward × side`, with the origin translation set to `-dot(basis, position)`.

### CenterFrameOfTwoPoints

```csharp
public static MatrixFrame CenterFrameOfTwoPoints(in Vec3 p1, in Vec3 p2, Vec3 upVector)
```

Builds a frame with origin at the midpoint of `p1`/`p2` and `s` along `p2 - p1`; falls back to `(0,1,0)` when `s` is nearly parallel to `upVector` (>0.95), then calls `Fill()`.

## Operators

| Operator | Signature | Description |
|----------|-----------|-------------|
| `*` | `operator *(in MatrixFrame m1, in MatrixFrame m2)` | Equivalent to `m1.TransformToParent(m2)` — composes `m2` in `m1`'s space |
| `==` | `operator ==(in MatrixFrame m1, in MatrixFrame m2)` | Both `origin` and `rotation` equal |
| `!=` | `operator !=(in MatrixFrame m1, in MatrixFrame m2)` | Negation of the above |

> The struct overrides `Equals(object)` (compares via `==`) and `ToString()` (prints Rotation and Origin), but `GetHashCode()` is not overridden (uses the base implementation).

## Usage Example

```csharp
using TaleWorlds.Library;

// 1) Place an entity at a world position, facing east.
//    Mat3 basis: s=right, f=forward, u=up; here forward points along +X.
var spawnFrame = new MatrixFrame(
    new Mat3(
        new Vec3(0f, 1f, 0f),  // s (right)   -> +Y
        new Vec3(1f, 0f, 0f),  // f (forward) -> +X
        new Vec3(0f, 0f, 1f)), // u (up)      -> +Z
    new Vec3(100f, 50f, 0f));

// 2) Move 10 units along local forward, then 2 units to the right.
spawnFrame.Advance(10f).Strafe(2f);

// 3) Rotate 90 degrees about the world Z axis.
spawnFrame.Rotate(MathF.PI / 2f, new Vec3(0f, 0f, 1f));

// 4) Transform a local-space offset point into world space.
Vec3 localOffset = new Vec3(0f, 0f, 5f);   // 5 units "straight up" locally
Vec3 worldPoint = spawnFrame.TransformToParent(localOffset);

// 5) Compose parent/child transforms with *: parent frame + relative child frame.
MatrixFrame parent = MatrixFrame.Identity;
parent.origin = new Vec3(0f, 0f, 100f);
MatrixFrame childLocal = spawnFrame;
MatrixFrame childWorld = parent * childLocal; // == parent.TransformToParent(childLocal)

// 6) Inverse: convert a world point back into spawnFrame's local space.
Vec3 localAgain = spawnFrame.TransformToLocal(worldPoint);
```

## See Also

- [Vec3](./Vec3)
- [Mat3](./Mat3)
