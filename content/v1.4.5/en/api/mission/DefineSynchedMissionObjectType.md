---
title: "DefineSynchedMissionObjectType"
description: "Auto-generated class reference for DefineSynchedMissionObjectType."
---
# DefineSynchedMissionObjectType

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal sealed class DefineSynchedMissionObjectType : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefineSynchedMissionObjectType.cs`

## Overview

`DefineSynchedMissionObjectType` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DefineSynchedMissionObjectType instance = ...;
```

## See Also

- [Area Index](../)