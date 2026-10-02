---
title: "MissionNameMarkerUIHandler"
description: "MissionNameMarkerUIHandler — class in SandBox.View.Missions.NameMarkers. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionNameMarkerUIHandler

**Namespace:** `SandBox.View.Missions.NameMarkers`  
**Module:** `SandBox.View`  
**Type:** `public class MissionNameMarkerUIHandler : MissionBattleUIBaseView`  
**Base:** `MissionBattleUIBaseView`  
**Source:** `SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs`

## Overview

`MissionNameMarkerUIHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionBattleUIBaseView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (5): `SetMarkersDirty`, `OnCreateView`, `OnDestroyView`, `OnResumeView`, `OnSuspendView`.
- **Extension points** (5): `SetMarkersDirty`, `OnCreateView`, `OnDestroyView`, `OnResumeView`, `OnSuspendView`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetMarkersDirty` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnCreateView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDestroyView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnResumeView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSuspendView` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// MissionNameMarkerUIHandler exposes no public members in SandBox.View.Missions.NameMarkers.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Missions/NameMarkers/MissionNameMarkerUIHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionBattleUIBaseView](../../mission-ext/MissionBattleUIBaseView/) — `TaleWorlds.MountAndBlade.View.MissionViews`.

Section: [api/sandbox/](../) — the other types in this bucket.
