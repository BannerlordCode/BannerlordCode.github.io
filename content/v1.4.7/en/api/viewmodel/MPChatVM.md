---
title: "MPChatVM"
description: "MPChatVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer. 31 public members (0 static)."
---

<!-- v147-skeleton -->
# MPChatVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MPChatVM : ViewModel, IChatHandler`  
**Base:** `ViewModel, IChatHandler`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs`

## Overview

`MPChatVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, IChatHandler, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MPChatVM`.
- **Instance members** (26): `ActiveChannelType`, `RefreshValues`, `ToggleIncludeCombatLog`, `ExecuteToggleIncludeShouts`, `Tick`, `Hide`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (4): `DefaultCategory`, `CombatCategory`, `SocialCategory`, `BarkCategory`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ActiveChannelType` | property | Instance entry point `ChatChannelType` property. Read it for current state; a declared setter writes that state in place. |
| `CheckChatFading` | method | Instance entry point. Takes 1 argument: `float dt`. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `ExecuteSaveSizes` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteToggleIncludeShouts` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Hide` | method | Instance entry point. Takes no arguments. |
| `IsChatAllowedByOptions` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SendCurrentlyTypedMessage` | method | Instance entry point. Takes no arguments. |
| `SendMessageToChannel` | method | Instance entry point. Takes 2 arguments: `ChatChannelType channel`, `string message`. |
| `SetChatDisabledStateChangedCallback` | method | Instance entry point. Takes 1 argument: `Action<bool> onChatDisabledStateChanged`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetGetCancelSendingKeyTextFunc` | method | Instance entry point. Takes 1 argument: `Func<TextObject> getCancelSendingKeyText`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetGetCycleChannelKeyTextFunc` | method | Instance entry point. Takes 1 argument: `Func<TextObject> getCycleChannelsKeyText`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetGetKeyTextFromKeyIDFunc` | method | Instance entry point. Takes 1 argument: `Func<TextObject> getToggleChatKeyText`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetGetSendMessageKeyTextFunc` | method | Instance entry point. Takes 1 argument: `Func<TextObject> getSendMessageKeyText`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMessageHistoryCapacity` | method | Instance entry point. Takes 1 argument: `int capacity`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StartInspectingMessages` | method | Instance entry point. Takes no arguments. |
| `StartTyping` | method | Instance entry point. Takes no arguments. |
| `StopInspectingMessages` | method | Instance entry point. Takes no arguments. |
| `StopTyping` | method | Instance entry point. Takes 1 argument: `bool resetWrittenText`. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `ToggleIncludeCombatLog` | method | Instance entry point. Takes no arguments. |
| `TypeToChannelAll` | method | Instance entry point. Takes 1 argument: `bool startTyping`. |

- Constructed as `public MPChatVM()`.

7 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MPChatVM();
// viewModel.ActiveChannelType = ...;   // ChatChannelType

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../../mission-ext/GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [MPChatLineVM](../MPChatLineVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/viewmodel/](../) — the other types in this bucket.
