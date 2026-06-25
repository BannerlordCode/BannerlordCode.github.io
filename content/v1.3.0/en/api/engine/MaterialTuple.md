---
title: "MaterialTuple"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MaterialTuple`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MaterialTuple

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public struct MaterialTuple : IEquatable<TwoDimensionEnginePlatform.MaterialTuple>`
**Base:** `IEquatable<TwoDimensionEnginePlatform.MaterialTuple>`
**Area:** engine

## Overview

`MaterialTuple` lives in `TaleWorlds.Engine.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### Equals
`public bool Equals(TwoDimensionEnginePlatform.MaterialTuple other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
// First obtain a MaterialTuple instance from game state, then call one of its public methods
var value = new MaterialTuple();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
