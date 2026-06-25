---
title: "CreateItemTask"
description: "Auto-generated class reference for CreateItemTask."
---
# CreateItemTask

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CreateItemTask : ToolTask`
**Base:** `ToolTask`
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/CreateItemTask.cs`

## Overview

`CreateItemTask` lives in `TaleWorlds.MountAndBlade.SteamWorkshop` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.SteamWorkshop` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadFrom
`public override void LoadFrom(XmlNode xmlNode)`

**Purpose:** Reads `from` from persistent storage or a stream.

```csharp
// Obtain an instance of CreateItemTask from the subsystem API first
CreateItemTask createItemTask = ...;
createItemTask.LoadFrom(xmlNode);
```

### DoJob
`public override void DoJob()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CreateItemTask from the subsystem API first
CreateItemTask createItemTask = ...;
createItemTask.DoJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CreateItemTask createItemTask = ...;
createItemTask.LoadFrom(xmlNode);
```

## See Also

- [Area Index](../)