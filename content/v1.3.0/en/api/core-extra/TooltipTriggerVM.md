---
title: "TooltipTriggerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipTriggerVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipTriggerVM

**Namespace:** TaleWorlds.Library.Information
**Module:** TaleWorlds.Library
**Type:** `public class TooltipTriggerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Library/Information/TooltipTriggerVM.cs`

## Overview

`TooltipTriggerVM` lives in `TaleWorlds.Library.Information` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Information` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

## Usage Example

```csharp
var value = new TooltipTriggerVM();
value.ExecuteBeginHint();
```

## See Also

- [Complete Class Catalog](../catalog)