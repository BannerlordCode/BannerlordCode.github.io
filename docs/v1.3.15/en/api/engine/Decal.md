<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Decal`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Decal

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Decal : GameEntityComponent`
**Base:** `GameEntityComponent`
**Area:** engine

## Overview

`Decal` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

### CheckAndRegisterToDecalSet
`public void CheckAndRegisterToDecalSet()`

**Purpose:** Handles logic related to `check and register to decal set`.

### SetIsVisible
`public void SetIsVisible(bool value)`

**Purpose:** Sets the value or state of `is visible`.

### GetFactor1
`public uint GetFactor1()`

**Purpose:** Gets the current value of `factor1`.

### OverrideRoadBoundaryP0
`public void OverrideRoadBoundaryP0(Vec2 data)`

**Purpose:** Handles logic related to `override road boundary p0`.

### OverrideRoadBoundaryP1
`public void OverrideRoadBoundaryP1(Vec2 data)`

**Purpose:** Handles logic related to `override road boundary p1`.

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**Purpose:** Sets the value or state of `factor1 linear`.

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**Purpose:** Sets the value or state of `factor1`.

### SetAlpha
`public void SetAlpha(float alpha)`

**Purpose:** Sets the value or state of `alpha`.

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
// Prepare the required context, then call the static entry point directly
Decal.CreateDecal("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
