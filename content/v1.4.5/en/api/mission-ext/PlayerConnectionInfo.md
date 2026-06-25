---
title: "PlayerConnectionInfo"
description: "Auto-generated class reference for PlayerConnectionInfo."
---
# PlayerConnectionInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerConnectionInfo`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/PlayerConnectionInfo.cs`

## Overview

`PlayerConnectionInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SessionKey` | `public int SessionKey { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NetworkPeer` | `public NetworkCommunicator NetworkPeer { get; set; }` |

## Key Methods

### AddParameter
`public void AddParameter(string name, object parameter)`

**Purpose:** Adds parameter to the current collection or state.

```csharp
// Obtain an instance of PlayerConnectionInfo from the subsystem API first
PlayerConnectionInfo playerConnectionInfo = ...;
playerConnectionInfo.AddParameter("example", parameter);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerConnectionInfo playerConnectionInfo = ...;
playerConnectionInfo.AddParameter("example", parameter);
```

## See Also

- [Area Index](../)