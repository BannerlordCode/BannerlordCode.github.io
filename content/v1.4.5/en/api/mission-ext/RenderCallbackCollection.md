---
title: "RenderCallbackCollection"
description: "Auto-generated class reference for RenderCallbackCollection."
---
# RenderCallbackCollection

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct RenderCallbackCollection`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/RenderCallbackCollection.cs`

## Overview

`RenderCallbackCollection` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SetActions` | `public List<Action<Texture>> SetActions { get; }` |
| `CancelActions` | `public List<Action> CancelActions { get; }` |

## Key Methods

### CreateEmpty
`public static RenderCallbackCollection CreateEmpty()`

**Purpose:** Constructs a new empty entity and returns it to the caller.

```csharp
// Static call; no instance required
RenderCallbackCollection.CreateEmpty();
```

## Usage Example

```csharp
RenderCallbackCollection.CreateEmpty();
```

## See Also

- [Area Index](../)