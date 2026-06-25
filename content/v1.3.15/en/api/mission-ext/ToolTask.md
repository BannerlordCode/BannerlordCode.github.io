---
title: "ToolTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ToolTask`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Loads `from` data.

### DoJob
`public abstract void DoJob()`

**Purpose:** Handles logic related to `do job`.

## Usage Example

```csharp
var implementation = new CustomToolTask();
```

## See Also

- [Complete Class Catalog](../catalog)