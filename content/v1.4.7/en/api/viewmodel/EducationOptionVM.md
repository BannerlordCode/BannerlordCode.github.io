---
title: "EducationOptionVM"
description: "EducationOptionVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Education. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# EducationOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class EducationOptionVM : StringItemWithActionVM`  
**Base:** `StringItemWithActionVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs`

## Overview

`EducationOptionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends StringItemWithActionVM, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EducationOptionVM`.
- **Instance members** (5): `OptionEffect`, `OptionDescription`, `CharacterProperties`, `ActionID`, `RefreshValues`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ActionID` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterProperties` | property | Instance entry point `EducationCampaignBehavior.EducationCharacterProperties[]` property. Read it for current state; a declared setter writes that state in place. |
| `OptionDescription` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OptionEffect` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EducationOptionVM` | ctor | Instance entry point. Takes 13 arguments: `Action<object> onExecute`, `string optionId`, `TextObject optionText`, `TextObject optionDescription`, …. Returns ``. |

- Constructed as `public EducationOptionVM(Action<object> onExecute, string optionId, TextObject optionText, TextObject optionDescription, TextObject optionEffect, bool isSelected, ValueTuple<CharacterAttribute, int>[] optionAttributes, ValueTuple<SkillObject, int>[] optionSkills, ValueTuple<SkillObject, int>[] optionFocusPoints, EducationCampaignBehavior.EducationCharacterProperties[] characterProperties)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new EducationOptionVM(onExecute, optionId, optionText, optionDescription, optionEffect, isSelected, theTarget, optionAttributes, theTarget, optionSkills, theTarget, optionFocusPoints, characterProperties);
// viewModel.OptionEffect = ...;   // string
// viewModel.OptionDescription = ...;   // string
// viewModel.CharacterProperties = ...;   // EducationCampaignBehavior.EducationCharacterProperties[]

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [StringItemWithActionVM](../StringItemWithActionVM/) — `TaleWorlds.Core.ViewModelCollection.Generic`.
- [EducationCampaignBehavior](../../campaign-ext/EducationCampaignBehavior/) — `TaleWorlds.CampaignSystem.CampaignBehaviors`.

Section: [api/viewmodel/](../) — the other types in this bucket.
