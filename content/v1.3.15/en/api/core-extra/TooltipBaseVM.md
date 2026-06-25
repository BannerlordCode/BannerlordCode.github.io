---
title: "TooltipBaseVM"
description: "Auto-generated class reference for TooltipBaseVM."
---
# TooltipBaseVM

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class TooltipBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Library/TooltipBaseVM.cs`

## Overview

`TooltipBaseVM` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsExtended` | `public bool IsExtended { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of TooltipBaseVM from the subsystem API first
TooltipBaseVM tooltipBaseVM = ...;
tooltipBaseVM.OnFinalize();
```

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of TooltipBaseVM from the subsystem API first
TooltipBaseVM tooltipBaseVM = ...;
tooltipBaseVM.Tick(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TooltipBaseVM instance = ...;
```

## See Also

- [Area Index](../)