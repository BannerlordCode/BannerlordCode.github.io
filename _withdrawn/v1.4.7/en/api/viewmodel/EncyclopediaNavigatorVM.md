---
title: "EncyclopediaNavigatorVM"
description: "EncyclopediaNavigatorVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaNavigatorVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaNavigatorVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs`

## Overview

`EncyclopediaNavigatorVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaNavigatorVM`.
- **Instance members** (16): `OnFinalize`, `RefreshValues`, `ExecuteHome`, `ExecuteBarLink`, `ExecuteCloseEncyclopedia`, `ResetHistory`, ….
- **Extension points** (2): `OnFinalize`, `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddHistory` | method | Instance entry point. Takes 2 arguments: `string pageId`, `object obj`. Adds to the collection or relation this type owns. |
| `ExecuteBack` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteBarLink` | method | Instance entry point. Takes 1 argument: `string targetID`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCloseEncyclopedia` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteForward` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteHome` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOnSearchActivated` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetLastPage` | method | Instance entry point. Takes no arguments. Returns `Tuple<string, object>`. Read path: prefer it over reaching for the backing store. |
| `ResetHistory` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ResetSearch` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetNextPageInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetPreviousPageInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdatePageName` | method | Instance entry point. Takes 1 argument: `string value`. Called from the owner’s update loop — do not assume a frame boundary. |
| `EncyclopediaNavigatorVM` | ctor | Instance entry point. Takes 5 arguments: `Func<string`, `object`, `bool`, `EncyclopediaPageVM> goToLink`, …. Returns ``. |

- Constructed as `public EncyclopediaNavigatorVM(Func<string, object, bool, EncyclopediaPageVM> goToLink, Action closeEncyclopedia)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaNavigatorVM(theTarget, theTarget, true, goToLink, closeEncyclopedia);

// Command the widget invokes on confirm:
viewModel.OnFinalize();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaNavigatorVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaSearchResultVM](../EncyclopediaSearchResultVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [TutorialNotificationElementChangeEvent](../TutorialNotificationElementChangeEvent/) — `TaleWorlds.Core.ViewModelCollection.Tutorial`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [EncyclopediaListItem](../../campaign/EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
