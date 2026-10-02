---
title: "MissionNameMarkerHelper"
description: "MissionNameMarkerHelper — class in SandBox.ViewModelCollection.Missions.NameMarker. 20 public members (2 static)."
---

<!-- v147-skeleton -->
# MissionNameMarkerHelper

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public static class MissionNameMarkerHelper`  
**Source:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerHelper.cs`

## Overview

`MissionNameMarkerHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (2): `AgentHeightOffset`, `DefaultHeightOffset`.
- **Data and constants** (18): `NameTypeNeutral`, `NameTypeFriendly`, `NameTypeEnemy`, `NameTypeNoble`, `NameTypePassage`, `NameTypeEnemyPassage`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AgentHeightOffset` | property (static) | Static entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `DefaultHeightOffset` | property (static) | Static entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `IconTypeBarber` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeBlacksmith` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeCharacter` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeCommonArea` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeGameHost` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeHermit` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeNoble` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypePrisoner` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeQuest` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeSentry` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeShipWright` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `IconTypeStealthArea` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NameTypeEnemy` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NameTypeEnemyPassage` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NameTypeFriendly` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NameTypeNeutral` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NameTypeNoble` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `NameTypePassage` | const | Instance entry point. Takes no arguments. Returns `string`. |

## Usage Example

```csharp
// MissionNameMarkerHelper exposes no public members in SandBox.ViewModelCollection.Missions.NameMarker.
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Passage](../Passage/) — `SandBox.Objects.Usables`.

Section: [api/sandbox/](../) — the other types in this bucket.
