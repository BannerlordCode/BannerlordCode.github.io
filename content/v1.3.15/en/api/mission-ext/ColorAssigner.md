---
title: "ColorAssigner"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ColorAssigner`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ColorAssigner

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ColorAssigner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/ColorAssigner.cs`

## Overview

`ColorAssigner` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShipColor` | `public Color ShipColor { get; }` |
| `RamDebrisColor` | `public Color RamDebrisColor { get; }` |

## Key Methods

### SetColor
`public void SetColor(WeakGameEntity entity)`

**Purpose:** Sets the value or state of `color`.

## Usage Example

```csharp
var value = new ColorAssigner();
value.SetColor(entity);
```

## See Also

- [Complete Class Catalog](../catalog)