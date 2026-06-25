---
title: "HandIndex"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HandIndex`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HandIndex

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum HandIndex`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`HandIndex` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
HandIndex example = HandIndex.Value;
```

## See Also

- [Complete Class Catalog](../catalog)