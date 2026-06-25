---
title: "RenderDetails"
description: "Auto-generated class reference for RenderDetails."
---
# RenderDetails

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct RenderDetails`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/RenderDetails.cs`

## Overview

`RenderDetails` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Actions` | `public List<Action<Texture>> Actions { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
RenderDetails instance = ...;
```

## See Also

- [Area Index](../)