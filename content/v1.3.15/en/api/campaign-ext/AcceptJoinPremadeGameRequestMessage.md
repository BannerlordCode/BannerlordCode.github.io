---
title: "AcceptJoinPremadeGameRequestMessage"
description: "Auto-generated class reference for AcceptJoinPremadeGameRequestMessage."
---
# AcceptJoinPremadeGameRequestMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class AcceptJoinPremadeGameRequestMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromClient/ToLobbyServer/AcceptJoinPremadeGameRequestMessage.cs`

## Overview

`AcceptJoinPremadeGameRequestMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyId` | `public Guid PartyId { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
AcceptJoinPremadeGameRequestMessage instance = ...;
```

## See Also

- [Area Index](../)