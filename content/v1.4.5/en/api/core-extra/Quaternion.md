---
title: "Quaternion"
description: "Auto-generated class reference for Quaternion."
---
# Quaternion

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Quaternion`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Quaternion.cs`

## Overview

`Quaternion` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public float this { get; set; }` |
| `IsIdentity` | `public bool IsIdentity { get; }` |

## Key Methods

### Quaternion
`public struct Quaternion(float x, float y, float z, float w)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.Quaternion(0, 0, 0, 0);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.GetHashCode();
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.Equals(obj);
```

### Normalize
`public float Normalize()`

**Purpose:** Normalizes the current object into a standard form or range.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.Normalize();
```

### SafeNormalize
`public float SafeNormalize()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.SafeNormalize();
```

### NormalizeWeighted
`public float NormalizeWeighted()`

**Purpose:** Normalizes `weighted` into a standard form or range.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.NormalizeWeighted();
```

### SetToRotationX
`public void SetToRotationX(float angle)`

**Purpose:** Assigns a new value to `to rotation x` and updates the object's internal state.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
quaternion.SetToRotationX(0);
```

### SetToRotationY
`public void SetToRotationY(float angle)`

**Purpose:** Assigns a new value to `to rotation y` and updates the object's internal state.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
quaternion.SetToRotationY(0);
```

### SetToRotationZ
`public void SetToRotationZ(float angle)`

**Purpose:** Assigns a new value to `to rotation z` and updates the object's internal state.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
quaternion.SetToRotationZ(0);
```

### Flip
`public void Flip()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
quaternion.Flip();
```

### TransformToParent
`public Quaternion TransformToParent(Quaternion q)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.TransformToParent(q);
```

### TransformToLocal
`public Quaternion TransformToLocal(Quaternion q)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.TransformToLocal(q);
```

### TransformToLocalWithoutNormalize
`public Quaternion TransformToLocalWithoutNormalize(Quaternion q)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.TransformToLocalWithoutNormalize(q);
```

### Slerp
`public static Quaternion Slerp(Quaternion from, Quaternion to, float t)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.Slerp(from, to, 0);
```

### Lerp
`public static Quaternion Lerp(Quaternion from, Quaternion to, float t)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.Lerp(from, to, 0);
```

### Mat3FromQuaternion
`public static Mat3 Mat3FromQuaternion(Quaternion quat)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.Mat3FromQuaternion(quat);
```

### QuaternionFromEulerAngles
`public static Quaternion QuaternionFromEulerAngles(float yaw, float pitch, float roll)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.QuaternionFromEulerAngles(0, 0, 0);
```

### QuaternionFromMat3
`public static Quaternion QuaternionFromMat3(Mat3 m)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.QuaternionFromMat3(m);
```

### AxisAngleFromQuaternion
`public static void AxisAngleFromQuaternion(out Vec3 axis, out float angle, Quaternion quat)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.AxisAngleFromQuaternion(axis, angle, quat);
```

### QuaternionFromAxisAngle
`public static Quaternion QuaternionFromAxisAngle(Vec3 axis, float angle)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.QuaternionFromAxisAngle(axis, 0);
```

### EulerAngleFromQuaternion
`public static Vec3 EulerAngleFromQuaternion(Quaternion quat)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Quaternion.EulerAngleFromQuaternion(quat);
```

### FindShortestArcAsQuaternion
`public static Quaternion FindShortestArcAsQuaternion(Vec3 v0, Vec3 v1)`

**Purpose:** Looks up the matching `shortest arc as quaternion` in the current collection or scope.

```csharp
// Static call; no instance required
Quaternion.FindShortestArcAsQuaternion(v0, v1);
```

### Dotp4
`public float Dotp4(Quaternion q2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.Dotp4(q2);
```

### ToMat3
`public Mat3 ToMat3()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.ToMat3();
```

### InverseDirection
`public bool InverseDirection(Quaternion q2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.InverseDirection(q2);
```

### Conjugate
`public Quaternion Conjugate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.Conjugate();
```

### Inverse
`public Quaternion Inverse()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Quaternion from the subsystem API first
Quaternion quaternion = ...;
var result = quaternion.Inverse();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Quaternion quaternion = ...;
quaternion.Quaternion(0, 0, 0, 0);
```

## See Also

- [Area Index](../)