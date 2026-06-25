---
title: "JoinPremadeGameRequestMessage"
description: "Auto-generated class reference for JoinPremadeGameRequestMessage."
---
# JoinPremadeGameRequestMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class JoinPremadeGameRequestMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/JoinPremadeGameRequestMessage.cs`

## Overview

`JoinPremadeGameRequestMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ChallengerPartyId` | `public Guid ChallengerPartyId { get; }` |
| `ClanName` | `public string ClanName { get; }` |
| `Sigil` | `public string Sigil { get; }` |
| `ChallengerPlayers` | `public PlayerId ChallengerPlayers { get; }` |
| `ChallengerPartyLeaderId` | `public PlayerId ChallengerPartyLeaderId { get; }` |
| `PremadeGameType` | `public PremadeGameType PremadeGameType { get; }` |

## Key Methods

### CreateClanGameRequest
`public static JoinPremadeGameRequestMessage CreateClanGameRequest(Guid challengerPartyId, string clanName, string sigil, PlayerId challengerPlayers)`

**Purpose:** Constructs a new `clan game request` entity and returns it to the caller.

```csharp
// Static call; no instance required
JoinPremadeGameRequestMessage.CreateClanGameRequest(challengerPartyId, "example", "example", challengerPlayers);
```

### CreatePracticeGameRequest
`public static JoinPremadeGameRequestMessage CreatePracticeGameRequest(Guid challengerPartyId, PlayerId leaderId, PlayerId challengerPlayers)`

**Purpose:** Constructs a new `practice game request` entity and returns it to the caller.

```csharp
// Static call; no instance required
JoinPremadeGameRequestMessage.CreatePracticeGameRequest(challengerPartyId, leaderId, challengerPlayers);
```

## Usage Example

```csharp
JoinPremadeGameRequestMessage.CreateClanGameRequest(challengerPartyId, "example", "example", challengerPlayers);
```

## See Also

- [Area Index](../)