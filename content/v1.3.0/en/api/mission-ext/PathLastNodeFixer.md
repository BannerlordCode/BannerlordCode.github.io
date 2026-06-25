---
title: "PathLastNodeFixer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathLastNodeFixer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PathLastNodeFixer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PathLastNodeFixer : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/PathLastNodeFixer.cs`

## Overview

`PathLastNodeFixer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new PathLastNodeFixer();
value.Update();
```

## See Also

- [Complete Class Catalog](../catalog)