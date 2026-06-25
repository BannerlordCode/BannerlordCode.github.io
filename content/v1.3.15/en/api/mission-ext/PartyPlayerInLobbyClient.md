---
title: "PartyPlayerInLobbyClient"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyPlayerInLobbyClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `at party`.

### SetLeader
`public void SetLeader()`

**Purpose:** Sets the value or state of `leader`.

### SetMember
`public void SetMember()`

**Purpose:** Sets the value or state of `member`.

## Usage Example

```csharp
var value = new PartyPlayerInLobbyClient();
value.SetAtParty();
```

## See Also

- [Complete Class Catalog](../catalog)