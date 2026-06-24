<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mat2`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Mat2

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Mat2`
**Base:** none
**File:** `TaleWorlds.Library/Mat2.cs`

## Overview

`Mat2` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RotateCounterClockWise
`public void RotateCounterClockWise(float a)`

**Purpose:** Handles logic related to `rotate counter clock wise`.

## Usage Example

```csharp
var value = new Mat2();
value.RotateCounterClockWise(0);
```

## See Also

- [Complete Class Catalog](../catalog)