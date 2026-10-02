---
title: "MapNavigationHelper"
description: "MapNavigationHelper — class in SandBox.View.Map.Navigation. 5 public members (5 static)."
---

<!-- v147-skeleton -->
# MapNavigationHelper

**Namespace:** `SandBox.View.Map.Navigation`  
**Module:** `SandBox.View`  
**Type:** `public static class MapNavigationHelper`  
**Source:** `SandBox.View/Map/Navigation/MapNavigationHelper.cs`

## Overview

`MapNavigationHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (5): `GetUnsavedChangedInquiry`, `GetUnapplicableChangedInquiry`, `IsMapTopScreen`, `IsNavigationBarEnabled`, `SwitchToANewScreen`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetUnapplicableChangedInquiry` | method (static) | Static entry point. Takes no arguments. Returns `InquiryData`. Read path: prefer it over reaching for the backing store. |
| `GetUnsavedChangedInquiry` | method (static) | Static entry point. Takes 1 argument: `Action openNewScreenAction`. Returns `InquiryData`. Read path: prefer it over reaching for the backing store. |
| `IsMapTopScreen` | method (static) | Static entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNavigationBarEnabled` | method (static) | Static entry point. Takes 1 argument: `MapNavigationHandler handler`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SwitchToANewScreen` | method (static) | Static entry point. Takes 1 argument: `Action openNewScreenAction`. |

## Usage Example

```csharp
// Static entry points on MapNavigationHelper:
MapNavigationHelper.GetUnsavedChangedInquiry(openNewScreenAction);
MapNavigationHelper.GetUnapplicableChangedInquiry();
MapNavigationHelper.IsMapTopScreen();
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `SandBox.View/Map/Navigation/MapNavigationHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapScreen](../MapScreen/) — `SandBox.View.Map`.
- [MapNavigationHandler](../MapNavigationHandler/) — `SandBox.View.Map.Navigation`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [IChangeableScreen](../IChangeableScreen/) — `SandBox.View`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/sandbox/](../) — the other types in this bucket.
