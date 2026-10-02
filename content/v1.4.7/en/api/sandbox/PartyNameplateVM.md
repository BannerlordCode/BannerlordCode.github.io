---
title: "PartyNameplateVM"
description: "PartyNameplateVM — class in SandBox.ViewModelCollection.Nameplate. 68 public members (10 static)."
---

<!-- v147-skeleton -->
# PartyNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class PartyNameplateVM : NameplateVM`  
**Base:** `NameplateVM`  
**Source:** `SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs`

## Overview

`PartyNameplateVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends NameplateVM, so the members it does not redeclare are inherited from there. 31 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyNameplateVM`.
- **Static entry points** (10): `PositiveIndicator`, `PositiveArmyIndicator`, `NegativeIndicator`, `NegativeArmyIndicator`, `NeutralIndicator`, `NeutralArmyIndicator`, ….
- **Instance members** (31): `Party`, `InitializeWith`, `Clear`, `RefreshValues`, `RegisterEvents`, `UnregisterEvents`, ….
- **Extension points** (6): `Clear`, `RefreshValues`, `RefreshDynamicProperties`, `RefreshPosition`, `RefreshTutorialStatus`, `RefreshBinding`.
- **Data and constants** (26): `_latestX`, `_latestY`, `_latestW`, `_cachedSpeed`, `_mapCamera`, `_isPartyBannerDirty`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AllianceArmyIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `AllianceIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `MainPartyArmyIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `MainPartyIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeArmyIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NegativeIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NeutralArmyIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NeutralIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PositiveArmyIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `PositiveIndicator` | property (static) | Static entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshDynamicProperties` | method (override) | Overrides the base member. Takes 1 argument: `bool forceUpdate`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshPosition` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshTutorialStatus` | method (override) | Overrides the base member. Takes 1 argument: `string newTutorialHighlightElementID`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Clear` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `RefreshBinding` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Count` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `DetermineIsVisibleOnMap` | method | Instance entry point. Takes no arguments. |
| `ExtraInfoText` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `FullName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `HeadPosition` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `InitializeWith` | method | Instance entry point. Takes 2 arguments: `MobileParty party`, `Camera mapCamera`. |
| `IsArmy` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsBehind` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

- Constructed as `public PartyNameplateVM()`.

44 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyNameplateVM();
// viewModel.Party = ...;   // MobileParty
// viewModel.HeadPosition = ...;   // Vec2
// viewModel.Count = ...;   // string

// Command the widget invokes on confirm:
viewModel.InitializeWith(party, mapCamera);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [NameplateVM](../NameplateVM/) — `SandBox.ViewModelCollection.Nameplate`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [QuestMarkerVM](../../viewmodel/QuestMarkerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Quests`.
- [CampaignUIHelper](../../viewmodel/CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [EventManager](../../core-extra/EventManager/) — `TaleWorlds.Library.EventSystem`.
- [TutorialNotificationElementChangeEvent](../../viewmodel/TutorialNotificationElementChangeEvent/) — `TaleWorlds.Core.ViewModelCollection.Tutorial`.
- [SandBoxUIHelper](../SandBoxUIHelper/) — `SandBox.ViewModelCollection`.
- [BannerImageIdentifierVM](../../viewmodel/BannerImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.

Section: [api/sandbox/](../) — the other types in this bucket.
