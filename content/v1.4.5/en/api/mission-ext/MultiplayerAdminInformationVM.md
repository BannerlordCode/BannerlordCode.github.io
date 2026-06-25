---
title: "MultiplayerAdminInformationVM"
description: "Auto-generated class reference for MultiplayerAdminInformationVM."
---
# MultiplayerAdminInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAdminInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerAdminInformationVM.cs`

## Overview

`MultiplayerAdminInformationVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageQueue` | `public MBBindingList<StringItemWithActionVM> MessageQueue { get; set; }` |

## Key Methods

### OnNewMessageReceived
`public void OnNewMessageReceived(string message)`

**Purpose:** Invoked when the new message received event is raised.

```csharp
// Obtain an instance of MultiplayerAdminInformationVM from the subsystem API first
MultiplayerAdminInformationVM multiplayerAdminInformationVM = ...;
multiplayerAdminInformationVM.OnNewMessageReceived("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerAdminInformationVM multiplayerAdminInformationVM = ...;
multiplayerAdminInformationVM.OnNewMessageReceived("example");
```

## See Also

- [Area Index](../)