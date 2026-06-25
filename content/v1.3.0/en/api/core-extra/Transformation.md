---
title: "Transformation"
description: "Auto-generated class reference for Transformation."
---
# Transformation

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Transformation`
**Base:** none
**File:** `TaleWorlds.Library/Transformation.cs`

## Overview

`Transformation` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Identity` | `public static Transformation Identity { get; }` |
| `AsMatrixFrame` | `public MatrixFrame AsMatrixFrame { get; }` |

## Key Methods

### CreateFromMatrixFrame
`public static Transformation CreateFromMatrixFrame(MatrixFrame matrixFrame)`

**Purpose:** **Purpose:** Constructs a new from matrix frame entity and returns it to the caller.

```csharp
// Static call; no instance required
Transformation.CreateFromMatrixFrame(matrixFrame);
```

### HasNegativeScale
`public bool HasNegativeScale()`

**Purpose:** **Purpose:** Determines whether the this instance already holds negative scale.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.HasNegativeScale();
```

### CreateFromRotation
`public static Transformation CreateFromRotation(Mat3 rotation)`

**Purpose:** **Purpose:** Constructs a new from rotation entity and returns it to the caller.

```csharp
// Static call; no instance required
Transformation.CreateFromRotation(rotation);
```

### TransformToParent
`public Vec3 TransformToParent(Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.TransformToParent(v);
```

### TransformToParent
`public Transformation TransformToParent(Transformation t)`

**Purpose:** **Purpose:** Executes the TransformToParent logic.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.TransformToParent(t);
```

### TransformToLocal
`public Vec3 TransformToLocal(Vec3 v)`

**Purpose:** **Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.TransformToLocal(v);
```

### TransformToLocal
`public Transformation TransformToLocal(Transformation t)`

**Purpose:** **Purpose:** Executes the TransformToLocal logic.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.TransformToLocal(t);
```

### Rotate
`public void Rotate(float radian, Vec3 axis)`

**Purpose:** **Purpose:** Executes the Rotate logic.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
transformation.Rotate(0, axis);
```

### ApplyScale
`public void ApplyScale(Vec3 vec3)`

**Purpose:** **Purpose:** Applies the effect of scale to the this instance.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
transformation.ApplyScale(vec3);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.GetHashCode();
```

### ToString
`public override string ToString()`

**Purpose:** **Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Transformation from the subsystem API first
Transformation transformation = ...;
var result = transformation.ToString();
```

## Usage Example

```csharp
Transformation.CreateFromMatrixFrame(matrixFrame);
```

## See Also

- [Area Index](../)