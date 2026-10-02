---
title: "CharacterCreationFaceGeneratorStage"
description: "CharacterCreationFaceGeneratorStage — class in TaleWorlds.CampaignSystem.CharacterCreationContent. No public members of its own."
---

<!-- v147-skeleton -->
# CharacterCreationFaceGeneratorStage

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterCreationFaceGeneratorStage : CharacterCreationStageBase`  
**Base:** `CharacterCreationStageBase`  
**Source:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationFaceGeneratorStage.cs`

## Overview

`CharacterCreationFaceGeneratorStage` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends CharacterCreationStageBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on CharacterCreationFaceGeneratorStage itself in `TaleWorlds.CampaignSystem.CharacterCreationContent`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// CharacterCreationFaceGeneratorStage declares no public members.
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationFaceGeneratorStage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.

Section: [api/campaign/](../) — the other types in this bucket.
