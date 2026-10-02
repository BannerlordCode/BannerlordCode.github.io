---
title: "PartyPlayerNameplateVM"
description: "PartyPlayerNameplateVM — class in SandBox.ViewModelCollection.Nameplate. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyPlayerNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`  
**Base:** `PartyNameplateVM`  
**Source:** `SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs`

## Overview

`PartyPlayerNameplateVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends PartyNameplateVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyPlayerNameplateVM`.
- **Instance members** (6): `InitializePlayerNameplate`, `Clear`, `RefreshDynamicProperties`, `RefreshBinding`, `RefreshPosition`, `ExecuteSetCameraPosition`.
- **Extension points** (4): `Clear`, `RefreshDynamicProperties`, `RefreshBinding`, `RefreshPosition`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Clear` | method (override) | Overrides the base member. Takes no arguments. |
| `RefreshBinding` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshDynamicProperties` | method (override) | Overrides the base member. Takes 1 argument: `bool forceUpdate`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshPosition` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteSetCameraPosition` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializePlayerNameplate` | method | Instance entry point. Takes 1 argument: `Action resetCamera`. |
| `PartyPlayerNameplateVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public PartyPlayerNameplateVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyPlayerNameplateVM();

// Command the widget invokes on confirm:
viewModel.InitializePlayerNameplate(resetCamera);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PartyNameplateVM](../PartyNameplateVM/) — `SandBox.ViewModelCollection.Nameplate`.
- [CharacterImageIdentifierVM](../../viewmodel/CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [CampaignUIHelper](../../viewmodel/CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [SandBoxUIHelper](../SandBoxUIHelper/) — `SandBox.ViewModelCollection`.

Section: [api/sandbox/](../) — the other types in this bucket.
