---
title: "ISynchedMissionObjectReadableRecord"
description: "Auto-generated class reference for ISynchedMissionObjectReadableRecord."
---
# ISynchedMissionObjectReadableRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface ISynchedMissionObjectReadableRecord`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/ISynchedMissionObjectReadableRecord.cs`

## Overview

`ISynchedMissionObjectReadableRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IISynchedMissionObjectReadableRecord service = ...;
```

## See Also

- [Area Index](../)