---
title: "PathLastNodeFixer"
description: "Auto-generated class reference for PathLastNodeFixer."
---
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

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of PathLastNodeFixer from the subsystem API first
PathLastNodeFixer pathLastNodeFixer = ...;
pathLastNodeFixer.Update();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PathLastNodeFixer pathLastNodeFixer = ...;
pathLastNodeFixer.Update();
```

## See Also

- [Area Index](../)