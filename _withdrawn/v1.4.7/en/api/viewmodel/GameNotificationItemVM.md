---
title: "GameNotificationItemVM"
description: "GameNotificationItemVM — class in TaleWorlds.Core.ViewModelCollection.Information. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# GameNotificationItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class GameNotificationItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs`

## Overview

`GameNotificationItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameNotificationItemVM`.
- **Data and constants** (3): `Priority`, `IsDialog`, `Handle`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GameNotificationItemVM` | ctor | Instance entry point. Takes 8 arguments: `string notificationText`, `int extraTimeInMs`, `BasicCharacterObject announcerCharacter`, `Equipment characterEquipment`, …. Returns ``. |
| `Handle` | field | Instance entry point `MBInformationManager.DialogNotificationHandle` field — direct storage with no validation or notification. |
| `IsDialog` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Priority` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public GameNotificationItemVM(string notificationText, int extraTimeInMs, BasicCharacterObject announcerCharacter, Equipment characterEquipment, string soundId, int priority, bool isDialog, string dialogSoundPath)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameNotificationItemVM(notificationText, extraTimeInMs, announcerCharacter, characterEquipment, soundId, priority, isDialog, dialogSoundPath);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.Core.ViewModelCollection/Information/GameNotificationItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterImageIdentifierVM](../CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/viewmodel/](../) — the other types in this bucket.
