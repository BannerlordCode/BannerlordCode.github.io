<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBHaltonColorGenerator`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBHaltonColorGenerator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBHaltonColorGenerator`
**Base:** none
**File:** `TaleWorlds.Core/MBHaltonColorGenerator.cs`

## Overview

`MBHaltonColorGenerator` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Base` | `public int Base { get; }` |
| `Offset` | `public float Offset { get; }` |

## Key Methods

### SetBase
`public void SetBase()`

**Purpose:** Sets the value or state of `base`.

### SetBase
`public void SetBase(int baseValue)`

**Purpose:** Sets the value or state of `base`.

### SetOffset
`public void SetOffset(float offset)`

**Purpose:** Sets the value or state of `offset`.

### SetRandomOffset
`public void SetRandomOffset()`

**Purpose:** Sets the value or state of `random offset`.

### GetColor
`public Color GetColor(int index, int maxIndex)`

**Purpose:** Gets the current value of `color`.

## Usage Example

```csharp
var value = new MBHaltonColorGenerator();
value.SetBase();
```

## See Also

- [Complete Class Catalog](../catalog)