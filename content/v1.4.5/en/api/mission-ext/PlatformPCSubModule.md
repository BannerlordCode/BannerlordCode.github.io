---
title: "PlatformPCSubModule"
description: "Auto-generated class reference for PlatformPCSubModule."
---
# PlatformPCSubModule

**Namespace:** TaleWorlds.MountAndBlade.Platform.PC
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlatformPCSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.Platform.PC/TaleWorlds.MountAndBlade.Platform.PC/PlatformPCSubModule.cs`

## Overview

`PlatformPCSubModule` lives in `TaleWorlds.MountAndBlade.Platform.PC` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Platform.PC` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionBehaviorInitialize
`public override void OnMissionBehaviorInitialize(Mission mission)`

**Purpose:** Invoked when the mission behavior initialize event is raised.

```csharp
// Obtain an instance of PlatformPCSubModule from the subsystem API first
PlatformPCSubModule platformPCSubModule = ...;
platformPCSubModule.OnMissionBehaviorInitialize(mission);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlatformPCSubModule platformPCSubModule = ...;
platformPCSubModule.OnMissionBehaviorInitialize(mission);
```

## See Also

- [Area Index](../)