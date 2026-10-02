---
title: "CharacterAttributeItemVM"
description: "CharacterAttributeItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class CharacterAttributeItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs`

## Overview

`CharacterAttributeItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterAttributeItemVM`.
- **Instance members** (7): `AttributeType`, `RefreshValues`, `ExecuteInspectAttribute`, `ExecuteAddAttributePoint`, `Reset`, `RefreshWithCurrentValues`, ….
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AttributeType` | property | Instance entry point `CharacterAttribute` property. Read it for current state; a declared setter writes that state in place. |
| `Commit` | method | Instance entry point. Takes no arguments. |
| `ExecuteAddAttributePoint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteInspectAttribute` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshWithCurrentValues` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `CharacterAttributeItemVM` | ctor | Instance entry point. Takes 5 arguments: `Hero hero`, `CharacterAttribute currAtt`, `CharacterDeveloperHeroItemVM developerVM`, `Action<CharacterAttributeItemVM> onInpectAttribute`, …. Returns ``. |

- Constructed as `public CharacterAttributeItemVM(Hero hero, CharacterAttribute currAtt, CharacterDeveloperHeroItemVM developerVM, Action<CharacterAttributeItemVM> onInpectAttribute, Action<CharacterAttributeItemVM> onAddAttributePoint)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CharacterAttributeItemVM(hero, currAtt, developerVM, onInpectAttribute, onAddAttributePoint);
// viewModel.AttributeType = ...;   // CharacterAttribute

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [CharacterDeveloperHeroItemVM](../CharacterDeveloperHeroItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`.
- [HeroDeveloper](../../campaign/HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [AttributeBoundSkillItemVM](../AttributeBoundSkillItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/viewmodel/](../) — the other types in this bucket.
