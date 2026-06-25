---
title: "JoinPremadeGameRequestMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JoinPremadeGameRequestMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JoinPremadeGameRequestMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class JoinPremadeGameRequestMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToClient/JoinPremadeGameRequestMessage.cs`

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

**Purpose:** Creates a new `clan game request` instance or object.

### CreatePracticeGameRequest
`public static JoinPremadeGameRequestMessage CreatePracticeGameRequest(Guid challengerPartyId, PlayerId leaderId, PlayerId challengerPlayers)`

**Purpose:** Creates a new `practice game request` instance or object.

## Usage Example

```csharp
JoinPremadeGameRequestMessage.CreateClanGameRequest(challengerPartyId, "example", "example", challengerPlayers);
```

## See Also

- [Complete Class Catalog](../catalog)