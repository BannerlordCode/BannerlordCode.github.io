---
title: "EncyclopediaSearchResultVM"
description: "EncyclopediaSearchResultVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaSearchResultVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`

## Overview

`EncyclopediaSearchResultVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaSearchResultVM`.
- **Instance members** (4): `OrgNameText`, `UpdateSearchedText`, `Execute`, `LinkId`.
- **Data and constants** (3): `MatchStartIndex`, `PageType`, `_nameText`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Execute` | method | Instance entry point. Takes no arguments. |
| `LinkId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OrgNameText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateSearchedText` | method | Instance entry point. Takes 1 argument: `string searchedText`. Called from the owner’s update loop — do not assume a frame boundary. |
| `EncyclopediaSearchResultVM` | ctor | Instance entry point. Takes 3 arguments: `EncyclopediaListItem source`, `string searchedText`, `int matchStartIndex`. Returns ``. |
| `_nameText` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `MatchStartIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `PageType` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public EncyclopediaSearchResultVM(EncyclopediaListItem source, string searchedText, int matchStartIndex)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EncyclopediaSearchResultVM(source, searchedText, matchStartIndex);
// viewModel.OrgNameText = ...;   // string
// viewModel.LinkId = ...;   // string

// Command the widget invokes on confirm:
viewModel.UpdateSearchedText(searchedText);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EncyclopediaListItem](../../campaign/EncyclopediaListItem/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
