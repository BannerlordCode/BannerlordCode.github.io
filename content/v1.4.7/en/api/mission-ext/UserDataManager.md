---
title: "UserDataManager"
description: "UserDataManager — class in TaleWorlds.MountAndBlade.Launcher.Library.UserDatas. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# UserDataManager

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`  
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`  
**Type:** `public class UserDataManager`  
**Source:** `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserDataManager.cs`

## Overview

`UserDataManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `UserDataManager`.
- **Instance members** (4): `UserData`, `HasUserData`, `LoadUserData`, `SaveUserData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `HasUserData` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LoadUserData` | method | Instance entry point. Takes no arguments. |
| `SaveUserData` | method | Instance entry point. Takes no arguments. |
| `UserData` | property | Instance entry point `UserData` property. Read it for current state; a declared setter writes that state in place. |
| `UserDataManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public UserDataManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var userDataManager = new UserDataManager();
// Read the live state through userDataManager.UserData.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.MountAndBlade.Launcher.Library/UserDatas/UserDataManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UserData](../UserData/) — `TaleWorlds.MountAndBlade.Launcher.Library.UserDatas`.

Section: [api/mission-ext/](../) — the other types in this bucket.
