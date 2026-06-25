---
title: "WindMill"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WindMill`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WindMill

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WindMill : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**Area:** mission-ext

## Overview

`WindMill` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIntegerFromStringEnd
`public static int GetIntegerFromStringEnd(string str)`

**Purpose:** Gets the current value of `integer from string end`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
WindMill.GetIntegerFromStringEnd("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
