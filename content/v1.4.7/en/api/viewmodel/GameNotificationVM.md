---
title: "GameNotificationVM"
description: "GameNotificationVM — class in TaleWorlds.Core.ViewModelCollection.Information. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# GameNotificationVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class GameNotificationVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs`

## Overview

`GameNotificationVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameNotificationVM`.
- **Instance members** (9): `FadeOutCurrentNotification`, `SkipCurrentNotification`, `ClearNotifications`, `AddDialogNotification`, `GetStatusOfDialogNotification`, `ClearDialogNotification`, ….
- **Data and constants** (1): `CurrentNotificationChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddDialogNotification` | method | Instance entry point. Takes 6 arguments: `TextObject text`, `int extraTimeInMs`, `BasicCharacterObject announcerCharacter`, `Equipment equipment`, …. Returns `MBInformationManager.DialogNotificationHandle`. Adds to the collection or relation this type owns. |
| `AddGameNotification` | method | Instance entry point. Takes 5 arguments: `string notificationText`, `int extraTimeInMs`, `BasicCharacterObject announcerCharacter`, `Equipment equipment`, …. Adds to the collection or relation this type owns. |
| `ClearAllDialogNotifications` | method | Instance entry point. Takes 1 argument: `bool fadeOut`. Removes from or clears the collection this type owns. |
| `ClearDialogNotification` | method | Instance entry point. Takes 2 arguments: `MBInformationManager.DialogNotificationHandle handle`, `bool fadeOut`. Removes from or clears the collection this type owns. |
| `ClearNotifications` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `FadeOutCurrentNotification` | method | Instance entry point. Takes 1 argument: `bool useExtraDisplayTime`. |
| `GetIsAnyDialogNotificationActiveOrQueued` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetStatusOfDialogNotification` | method | Instance entry point. Takes 1 argument: `MBInformationManager.DialogNotificationHandle handle`. Returns `MBInformationManager.NotificationStatus`. Read path: prefer it over reaching for the backing store. |
| `SkipCurrentNotification` | method | Instance entry point. Takes no arguments. |
| `GameNotificationVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `CurrentNotificationChanged` | field | Instance entry point `Action<GameNotificationItemVM>` field — direct storage with no validation or notification. |

- Constructed as `public GameNotificationVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameNotificationVM();

// Command the widget invokes on confirm:
viewModel.FadeOutCurrentNotification(useExtraDisplayTime);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNotificationItemVM](../GameNotificationItemVM/) — `TaleWorlds.Core.ViewModelCollection.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
