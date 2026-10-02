---
title: "DefaultGameMenuOverlayProvider"
description: "DefaultGameMenuOverlayProvider — class in SandBox.View.Overlay. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# DefaultGameMenuOverlayProvider

**Namespace:** `SandBox.View.Overlay`  
**Module:** `SandBox.View`  
**Type:** `public class DefaultGameMenuOverlayProvider : IGameMenuOverlayProvider`  
**Base:** `IGameMenuOverlayProvider`  
**Source:** `SandBox.View/Overlay/DefaultGameMenuOverlayProvider.cs`

## Overview

`DefaultGameMenuOverlayProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends IGameMenuOverlayProvider, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (1): `GetOverlay`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetOverlay` | method | Instance entry point. Takes 1 argument: `GameMenu.MenuOverlayType menuOverlayType`. Returns `GameMenuOverlay`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// DefaultGameMenuOverlayProvider exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `SandBox.View/Overlay/DefaultGameMenuOverlayProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [GameMenuOverlay](../../viewmodel/GameMenuOverlay/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`.
- [EncounterMenuOverlayVM](../../viewmodel/EncounterMenuOverlayVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`.
- [SettlementMenuOverlayVM](../../viewmodel/SettlementMenuOverlayVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`.

Section: [api/sandbox/](../) — the other types in this bucket.
