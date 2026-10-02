---
title: "EncyclopediaFamilyMemberVM"
description: "EncyclopediaFamilyMemberVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaFamilyMemberVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaFamilyMemberVM : HeroVM`  
**Base:** `HeroVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFamilyMemberVM.cs`

## Overview

`EncyclopediaFamilyMemberVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends HeroVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaFamilyMemberVM`.
- **Instance members** (1): `RefreshValues`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `EncyclopediaFamilyMemberVM` | ctor | Instance entry point. Takes 2 arguments: `Hero hero`, `Hero baseHero`. Returns ``. |

- Constructed as `public EncyclopediaFamilyMemberVM(Hero hero, Hero baseHero)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaFamilyMemberVM(hero, baseHero);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaFamilyMemberVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.
- [ConversationHelper](../../campaign-ext/ConversationHelper/) — `TaleWorlds.CampaignSystem.Conversation`.

Section: [api/viewmodel/](../) — the other types in this bucket.
