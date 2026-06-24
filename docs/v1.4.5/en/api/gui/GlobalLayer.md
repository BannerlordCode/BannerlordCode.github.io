<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GlobalLayer`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GlobalLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class GlobalLayer : IComparable`
**Base:** `IComparable`
**File:** `Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/GlobalLayer.cs`

## Overview

`GlobalLayer` lives in `TaleWorlds.ScreenSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ScreenSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Layer` | `public ScreenLayer Layer { get; set; }` |

## Key Methods

### CompareTo
`public int CompareTo(object obj)`

**Purpose:** Handles logic related to `compare to`.

### UpdateLayout
`public virtual void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

## Usage Example

```csharp
var value = new GlobalLayer();
value.CompareTo(obj);
```

## See Also

- [Complete Class Catalog](../catalog)