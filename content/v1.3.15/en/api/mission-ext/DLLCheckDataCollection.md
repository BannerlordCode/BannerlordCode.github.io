---
title: "DLLCheckDataCollection"
description: "Auto-generated class reference for DLLCheckDataCollection."
---
# DLLCheckDataCollection

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library.UserDatas
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DLLCheckDataCollection`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/DLLCheckDataCollection.cs`

## Overview

`DLLCheckDataCollection` lives in `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DLLData` | `public List<DLLCheckData> DLLData { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DLLCheckDataCollection instance = ...;
```

## See Also

- [Area Index](../)