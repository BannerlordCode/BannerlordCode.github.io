---
title: "PlayerTownVisit"
description: "PlayerTownVisit — class in TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers. No public members of its own."
---

<!-- v147-skeleton -->
# PlayerTownVisit

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PlayerTownVisit`  
**Source:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandlers/PlayerTownVisit.cs`

## Overview

`PlayerTownVisit` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on PlayerTownVisit itself in `TaleWorlds.CampaignSystem.GameMenus.GameMenuInitializationHandlers`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// PlayerTownVisit declares no public members.
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandlers/PlayerTownVisit.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenuInitializationHandler](../GameMenuInitializationHandler/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [GameMenuEventHandler](../GameMenuEventHandler/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign/](../) — the other types in this bucket.
