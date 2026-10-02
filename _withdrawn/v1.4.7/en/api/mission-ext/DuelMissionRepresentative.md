---
title: "DuelMissionRepresentative"
description: "DuelMissionRepresentative — class in TaleWorlds.MountAndBlade.MissionRepresentatives. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# DuelMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`  
**Base:** `MissionRepresentativeBase`  
**Source:** `TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs`

## Overview

`DuelMissionRepresentative` is a named type in the TaleWorlds.MountAndBlade.MissionRepresentatives namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends MissionRepresentativeBase, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Instance members** (14): `Bounty`, `Score`, `NumberOfWins`, `Initialize`, `AddRemoveMessageHandlers`, `OnInteraction`, ….
- **Extension points** (2): `Initialize`, `OnAgentSpawned`.
- **Data and constants** (6): `DuelPrepTime`, `OnDuelRequestSentEvent`, `OnAgentSpawnedWithoutDuelEvent`, `OnDuelEndedEvent`, `OnDuelRoundEndedEvent`, `OnMyPreferredZoneChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Initialize` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentSpawned` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AddRemoveMessageHandlers` | method | Instance entry point. Takes 1 argument: `GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode`. Adds to the collection or relation this type owns. |
| `Bounty` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CheckHasRequestFromAndRemoveRequestIfNeeded` | method | Instance entry point. Takes 1 argument: `MissionPeer requestOwner`. Returns `bool`. |
| `DuelRequested` | method | Instance entry point. Takes 2 arguments: `Agent requesterAgent`, `TroopType selectedAreaTroopType`. |
| `NumberOfWins` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnDuelPreparation` | method | Instance entry point. Takes 2 arguments: `MissionPeer requesterPeer`, `MissionPeer requesteePeer`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDuelWon` | method | Instance entry point. Takes 1 argument: `float gainedScore`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInteraction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnObjectFocused` | method | Instance entry point. Takes 1 argument: `IFocusable focusedObject`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnObjectFocusLost` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ResetBountyAndNumberOfWins` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `Score` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `DuelPrepTime` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `OnAgentSpawnedWithoutDuelEvent` | field | Instance entry point `Action` field — direct storage with no validation or notification. |
| `OnDuelEndedEvent` | field | Instance entry point `Action<MissionPeer>` field — direct storage with no validation or notification. |
| `OnDuelRequestSentEvent` | field | Instance entry point `Action<MissionPeer>` field — direct storage with no validation or notification. |
| `OnDuelRoundEndedEvent` | field | Instance entry point `Action<MissionPeer>` field — direct storage with no validation or notification. |
| `OnMyPreferredZoneChanged` | field | Instance entry point `Action<TroopType>` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// DuelMissionRepresentative is read through its properties:
//   Bounty : int
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [GameNetworkMessage](../GameNetworkMessage/) — `TaleWorlds.MountAndBlade.Network.Messages`.
- [Client](../../engine/Client/) — `TaleWorlds.Diamond`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/mission-ext/](../) — the other types in this bucket.
