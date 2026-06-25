---
title: "PartyPlayerInLobbyClient"
description: "Auto-generated class reference for PartyPlayerInLobbyClient."
---
# PartyPlayerInLobbyClient

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PartyPlayerInLobbyClient`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/PartyPlayerInLobbyClient.cs`

## Overview

`PartyPlayerInLobbyClient` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `Name` | `public string Name { get; }` |
| `WaitingInvitation` | `public bool WaitingInvitation { get; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; }` |

## Key Methods

### SetAtParty
`public void SetAtParty()`

**Purpose:** Assigns a new value to at party and updates the object's internal state.

```csharp
// Obtain an instance of PartyPlayerInLobbyClient from the subsystem API first
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetAtParty();
```

### SetLeader
`public void SetLeader()`

**Purpose:** Assigns a new value to leader and updates the object's internal state.

```csharp
// Obtain an instance of PartyPlayerInLobbyClient from the subsystem API first
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetLeader();
```

### SetMember
`public void SetMember()`

**Purpose:** Assigns a new value to member and updates the object's internal state.

```csharp
// Obtain an instance of PartyPlayerInLobbyClient from the subsystem API first
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetMember();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyPlayerInLobbyClient partyPlayerInLobbyClient = ...;
partyPlayerInLobbyClient.SetAtParty();
```

## See Also

- [Area Index](../)