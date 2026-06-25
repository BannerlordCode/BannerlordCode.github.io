---
title: "RefiningFormula"
description: "Auto-generated class reference for RefiningFormula."
---
# RefiningFormula

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class RefiningFormula`
**Base:** none
**File:** `TaleWorlds.Core/Crafting.cs`

## Overview

`RefiningFormula` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Output` | `public CraftingMaterials Output { get; }` |
| `OutputCount` | `public int OutputCount { get; }` |
| `Output2` | `public CraftingMaterials Output2 { get; }` |
| `Output2Count` | `public int Output2Count { get; }` |
| `Input1` | `public CraftingMaterials Input1 { get; }` |
| `Input1Count` | `public int Input1Count { get; }` |
| `Input2` | `public CraftingMaterials Input2 { get; }` |
| `Input2Count` | `public int Input2Count { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
RefiningFormula instance = ...;
```

## See Also

- [Area Index](../)