---
title: "CharacterDeveloperHeroItemVM"
description: "CharacterDeveloperHeroItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterDeveloperHeroItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## Overview

`CharacterDeveloperHeroItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterDeveloperHeroItemVM`.
- **Instance members** (19): `HeroDeveloper`, `Hero`, `OrgUnspentFocusPoints`, `OrgUnspentAttributePoints`, `CharacterAttributes`, `RefreshValues`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ApplyChanges` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CanAddFocusToSkillWithFocusAmount` | method | Instance entry point. Takes 1 argument: `int currentFocusAmount`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CharacterAttributes` | property | Instance entry point `IReadOnlyPropertyOwner<CharacterAttribute>` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteStopInspectingCurrentAttribute` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetNameWithNumOfUnopenedPerks` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfUnselectedPerks` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetRequiredFocusPointsToAddFocusWithCurrentFocus` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `Hero` | property | Instance entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `HeroDeveloper` | property | Instance entry point `HeroDeveloper` property. Read it for current state; a declared setter writes that state in place. |
| `IsSkillMaxAmongOtherSkills` | method | Instance entry point. Takes 1 argument: `SkillVM skill`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsThereAnyChanges` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OrgUnspentAttributePoints` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OrgUnspentFocusPoints` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshCharacterValues` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshPerksOfSkill` | method | Instance entry point. Takes 1 argument: `SkillObject skill`. Called from the owner’s update loop — do not assume a frame boundary. |
| `ResetChanges` | method | Instance entry point. Takes 1 argument: `bool isCancel`. Removes from or clears the collection this type owns. |
| `SetCurrentSkill` | method | Instance entry point. Takes 1 argument: `SkillVM skill`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CharacterDeveloperHeroItemVM` | ctor | Instance entry point. Takes 2 arguments: `Hero hero`, `Action onPerkSelection`. Returns ``. |

- Constructed as `public CharacterDeveloperHeroItemVM(Hero hero, Action onPerkSelection)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CharacterDeveloperHeroItemVM(hero, onPerkSelection);
// viewModel.HeroDeveloper = ...;   // HeroDeveloper
// viewModel.Hero = ...;   // Hero
// viewModel.OrgUnspentFocusPoints = ...;   // int

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterDeveloperHeroItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.
- [HeroDeveloper](../../campaign/HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [CharacterAttributeItemVM](../CharacterAttributeItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`.
- [PerkSelectionVM](../PerkSelectionVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection`.
- [CharacterViewModel](../CharacterViewModel/) — `TaleWorlds.Core.ViewModelCollection`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [PerkVM](../PerkVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`.

Section: [api/viewmodel/](../) — the other types in this bucket.
