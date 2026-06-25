---
title: "TooltipRegistry"
description: "Auto-generated class reference for TooltipRegistry."
---
# TooltipRegistry

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct TooltipRegistry`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`

## Overview

`TooltipRegistry` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TooltipRegistry
`public struct TooltipRegistry(Type tooltipType, object onRefreshData, string movieName)`

**Purpose:** Executes the TooltipRegistry logic.

```csharp
// Obtain an instance of TooltipRegistry from the subsystem API first
TooltipRegistry tooltipRegistry = ...;
var result = tooltipRegistry.TooltipRegistry(tooltipType, onRefreshData, "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TooltipRegistry tooltipRegistry = ...;
tooltipRegistry.TooltipRegistry(tooltipType, onRefreshData, "example");
```

## See Also

- [Area Index](../)