---
title: "NameplateVM"
description: "NameplateVM — class in SandBox.ViewModelCollection.Nameplate. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# NameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class NameplateVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Nameplate/NameplateVM.cs`

## Overview

`NameplateVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 9 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Instance members** (14): `Scale`, `NameplateOrder`, `OnTutorialNotificationElementChanged`, `RefreshDynamicProperties`, `RefreshPosition`, `RefreshRelationStatus`, ….
- **Extension points** (4): `RefreshDynamicProperties`, `RefreshPosition`, `RefreshRelationStatus`, `RefreshTutorialStatus`.
- **Data and constants** (1): `_bindIsTargetedByTutorial`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshDynamicProperties` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool forceUpdate`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshRelationStatus` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshTutorialStatus` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `string newTutorialHighlightElementID`. Called from the owner’s update loop — do not assume a frame boundary. |
| `CanParley` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DistanceToCamera` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FactionColor` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsTargetedByTutorial` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisibleOnMap` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `NameplateOrder` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Position` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `Scale` | property | Instance entry point `double` property. Read it for current state; a declared setter writes that state in place. |
| `NameplateSize` | property | Protected — for subclasses only `enum` property. Read it for current state; a declared setter writes that state in place. |
| `OnTutorialNotificationElementChanged` | method | Protected — for subclasses only. Takes 1 argument: `TutorialNotificationElementChangeEvent obj`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `_bindIsTargetedByTutorial` | field | Protected — for subclasses only `bool` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.
// viewModel.Scale = ...;   // double
// viewModel.NameplateOrder = ...;   // int
// viewModel.FactionColor = ...;   // string

// Command the widget invokes on confirm:
viewModel.OnTutorialNotificationElementChanged(obj);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Nameplate/NameplateVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TutorialNotificationElementChangeEvent](../../viewmodel/TutorialNotificationElementChangeEvent/) — `TaleWorlds.Core.ViewModelCollection.Tutorial`.

Section: [api/sandbox/](../) — the other types in this bucket.
