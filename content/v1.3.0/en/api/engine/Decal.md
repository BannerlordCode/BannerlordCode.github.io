---
title: "Decal"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Decal`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Decal

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Decal : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `TaleWorlds.Engine/Decal.cs`

## Overview

`Decal` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |

## Key Methods

### CreateDecal
`public static Decal CreateDecal(string name = null)`

**Purpose:** Creates a new `decal` instance or object.

### CreateCopy
`public Decal CreateCopy()`

**Purpose:** Creates a new `copy` instance or object.

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Gets the current value of `factor1`.

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**Purpose:** Sets the value or state of `factor1 linear`.

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Sets the value or state of `factor1`.

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument`.

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument2`.

### GetMaterial
`public Material GetMaterial()`

**Purpose:** Gets the current value of `material`.

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Sets the value or state of `material`.

### SetFrame
`public void SetFrame(MatrixFrame Frame)`

**Purpose:** Sets the value or state of `frame`.

## Usage Example

```csharp
Decal.CreateDecal("example");
```

## See Also

- [Complete Class Catalog](../catalog)