---
title: "GetItemTask"
description: "Auto-generated class reference for GetItemTask."
---
# GetItemTask

**Namespace:** TaleWorlds.MountAndBlade.SteamWorkshop
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GetItemTask : ToolTask`
**Base:** `ToolTask`
**File:** `TaleWorlds.MountAndBlade.SteamWorkshop/GetItemTask.cs`

## Overview

`GetItemTask` lives in `TaleWorlds.MountAndBlade.SteamWorkshop` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.SteamWorkshop` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### LoadFrom
`public override void LoadFrom(XmlNode xmlNode)`

**Purpose:** **Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of GetItemTask from the subsystem API first
GetItemTask getItemTask = ...;
getItemTask.LoadFrom(xmlNode);
```

### DoJob
`public override void DoJob()`

**Purpose:** **Purpose:** Executes the DoJob logic.

```csharp
// Obtain an instance of GetItemTask from the subsystem API first
GetItemTask getItemTask = ...;
getItemTask.DoJob();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GetItemTask getItemTask = ...;
getItemTask.LoadFrom(xmlNode);
```

## See Also

- [Area Index](../)