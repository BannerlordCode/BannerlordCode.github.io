---
title: "TooltipBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TooltipBaseVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TooltipBaseVM

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class TooltipBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/TooltipBaseVM.cs`

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

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public virtual void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var implementation = new CustomTooltipBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)