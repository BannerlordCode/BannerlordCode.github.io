---
title: "MatrixExtensions"
description: "Auto-generated class reference for MatrixExtensions."
---
# MatrixExtensions

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class MatrixExtensions`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/MatrixExtensions.cs`

## Overview

`MatrixExtensions` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ToMatrix4x4
`public static Matrix4x4 ToMatrix4x4(this MatrixFrame matrixFrame)`

**Purpose:** Executes the ToMatrix4x4 logic.

```csharp
// Static call; no instance required
MatrixExtensions.ToMatrix4x4(matrixFrame);
```

### ToMatrixFrame
`public static MatrixFrame ToMatrixFrame(this Matrix4x4 matrix)`

**Purpose:** Executes the ToMatrixFrame logic.

```csharp
// Static call; no instance required
MatrixExtensions.ToMatrixFrame(matrix);
```

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this Matrix4x4 matrix)`

**Purpose:** Executes the AreAllComponentsValid logic.

```csharp
// Static call; no instance required
MatrixExtensions.AreAllComponentsValid(matrix);
```

### AreAllComponentsValid
`public static bool AreAllComponentsValid(this MatrixFrame matrix)`

**Purpose:** Executes the AreAllComponentsValid logic.

```csharp
// Static call; no instance required
MatrixExtensions.AreAllComponentsValid(matrix);
```

### CreateOrthographicOffCenter
`public static MatrixFrame CreateOrthographicOffCenter(float left, float right, float bottom, float top, float zNearPlane, float zFarPlane)`

**Purpose:** Constructs a new orthographic off center entity and returns it to the caller.

```csharp
// Static call; no instance required
MatrixExtensions.CreateOrthographicOffCenter(0, 0, 0, 0, 0, 0);
```

## Usage Example

```csharp
MatrixExtensions.ToMatrix4x4(matrixFrame);
```

## See Also

- [Area Index](../)