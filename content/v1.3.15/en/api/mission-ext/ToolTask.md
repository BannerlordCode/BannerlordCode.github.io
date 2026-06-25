---
title: "ToolTask"
description: "Auto-generated class reference for ToolTask."
---
# ToolTask

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ToolTask`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/ToolTask.cs`

## Overview

`ToolTask` lives in `TaleWorlds.MountAndBlade.SteamWorkshop` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.SteamWorkshop` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadFrom
`public abstract void LoadFrom(XmlNode xmlNode)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of ToolTask from the subsystem API first
ToolTask toolTask = ...;
toolTask.LoadFrom(xmlNode);
```

### DoJob
`public abstract void DoJob()`

**Purpose:** Executes the DoJob logic.

```csharp
// Obtain an instance of ToolTask from the subsystem API first
ToolTask toolTask = ...;
toolTask.DoJob();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ToolTask instance = ...;
```

## See Also

- [Area Index](../)