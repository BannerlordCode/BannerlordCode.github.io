---
title: "SPPersonalKillNotificationItemVM"
description: "SPPersonalKillNotificationItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# SPPersonalKillNotificationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class SPPersonalKillNotificationItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs`

## Overview

`SPPersonalKillNotificationItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (3): `SPPersonalKillNotificationItemVM`, `SPPersonalKillNotificationItemVM`, `SPPersonalKillNotificationItemVM`.
- **Instance members** (1): `ExecuteRemove`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteRemove` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SPPersonalKillNotificationItemVM` | ctor | Instance entry point. Takes 7 arguments: `int damageAmount`, `bool isMountDamage`, `bool isFriendlyFire`, `bool isHeadshot`, …. Returns ``. |
| `SPPersonalKillNotificationItemVM` | ctor | Instance entry point. Takes 5 arguments: `int amount`, `bool isMountDamage`, `bool isFriendlyFire`, `string killedAgentName`, …. Returns ``. |
| `SPPersonalKillNotificationItemVM` | ctor | Instance entry point. Takes 2 arguments: `string victimAgentName`, `Action<SPPersonalKillNotificationItemVM> onRemoveItem`. Returns ``. |

- Constructed as `public SPPersonalKillNotificationItemVM(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious, Action<SPPersonalKillNotificationItemVM> onRemoveItem)`.
- Constructed as `public SPPersonalKillNotificationItemVM(int amount, bool isMountDamage, bool isFriendlyFire, string killedAgentName, Action<SPPersonalKillNotificationItemVM> onRemoveItem)`.
- Constructed as `public SPPersonalKillNotificationItemVM(string victimAgentName, Action<SPPersonalKillNotificationItemVM> onRemoveItem)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SPPersonalKillNotificationItemVM(damageAmount, isMountDamage, isFriendlyFire, isHeadshot, killedAgentName, isUnconscious, onRemoveItem);

// Command the widget invokes on confirm:
viewModel.ExecuteRemove();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/Personal/SPPersonalKillNotificationItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
