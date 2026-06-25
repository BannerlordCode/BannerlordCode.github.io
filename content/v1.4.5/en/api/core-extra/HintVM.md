---
title: "HintVM"
description: "Auto-generated class reference for HintVM."
---
# HintVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information
**Module:** TaleWorlds.Core
**Type:** `public class HintVM : TooltipBaseVM`
**Base:** `TooltipBaseVM`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.Information/HintVM.cs`

## Overview

`HintVM` lives in `TaleWorlds.Core.ViewModelCollection.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |

## Key Methods

### RefreshGenericHintTooltip
`public static void RefreshGenericHintTooltip(HintVM hint, object args)`

**Purpose:** **Purpose:** Keeps the display or cache of generic hint tooltip in sync with the underlying state.

```csharp
// Static call; no instance required
HintVM.RefreshGenericHintTooltip(hint, args);
```

## Usage Example

```csharp
HintVM.RefreshGenericHintTooltip(hint, args);
```

## See Also

- [Area Index](../)