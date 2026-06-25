---
title: "TooltipTriggerVM"
description: "Auto-generated class reference for TooltipTriggerVM."
---
# TooltipTriggerVM

**Namespace:** TaleWorlds.Library.Information
**Module:** TaleWorlds.Library
**Type:** `public class TooltipTriggerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.Information/TooltipTriggerVM.cs`

## Overview

`TooltipTriggerVM` lives in `TaleWorlds.Library.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of TooltipTriggerVM from the subsystem API first
TooltipTriggerVM tooltipTriggerVM = ...;
tooltipTriggerVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of TooltipTriggerVM from the subsystem API first
TooltipTriggerVM tooltipTriggerVM = ...;
tooltipTriggerVM.ExecuteEndHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TooltipTriggerVM tooltipTriggerVM = ...;
tooltipTriggerVM.ExecuteBeginHint();
```

## See Also

- [Area Index](../)