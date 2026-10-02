---
title: "PartyPlayerInLobbyClient"
description: "PartyPlayerInLobbyClient: a public class in TaleWorlds.MountAndBlade.Diamond; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PartyPlayerInLobbyClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyPlayerInLobbyClient

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PartyPlayerInLobbyClient`
**File:** `TaleWorlds.MountAndBlade.Diamond/PartyPlayerInLobbyClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PartyPlayerInLobbyClient lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PartyPlayerInLobbyClient.cs. It is a public class; the inheritance chain is PartyPlayerInLobbyClient. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyPlayerInLobbyClient lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PartyPlayerInLobbyClient. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PartyPlayerInLobbyClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `Name` | `public string Name` | property |
| `WaitingInvitation` | `public bool WaitingInvitation` | property |
| `IsPartyLeader` | `public bool IsPartyLeader` | property |
| `PartyPlayerInLobbyClient` | `public PartyPlayerInLobbyClient(PlayerId playerId, string name, bool isPartyLeader = false)` | constructor |
| `SetAtParty` | `public void SetAtParty()` | method |
| `SetLeader` | `public void SetLeader()` | method |
| `SetMember` | `public void SetMember()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
