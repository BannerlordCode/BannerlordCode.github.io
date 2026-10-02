---
title: "MBEquipmentRosterExtensions"
description: "MBEquipmentRosterExtensions — class in TaleWorlds.CampaignSystem.Extensions. 6 public members (6 static)."
---

<!-- v147-skeleton -->
# MBEquipmentRosterExtensions

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MBEquipmentRosterExtensions`  
**Source:** `TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs`

## Overview

`MBEquipmentRosterExtensions` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (6): `All`, `GetCivilianEquipments`, `GetStealthEquipments`, `GetBattleEquipments`, `GetRandomCivilianEquipment`, `GetRandomStealthEquipment`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<MBEquipmentRoster>` property. Read it for current state; a declared setter writes that state in place. |
| `GetBattleEquipments` | method (static) | Static entry point. Takes 1 argument: `this MBEquipmentRoster instance`. Returns `IEnumerable<Equipment>`. Read path: prefer it over reaching for the backing store. |
| `GetCivilianEquipments` | method (static) | Static entry point. Takes 1 argument: `this MBEquipmentRoster instance`. Returns `IEnumerable<Equipment>`. Read path: prefer it over reaching for the backing store. |
| `GetRandomCivilianEquipment` | method (static) | Static entry point. Takes 1 argument: `this MBEquipmentRoster instance`. Returns `Equipment`. Read path: prefer it over reaching for the backing store. |
| `GetRandomStealthEquipment` | method (static) | Static entry point. Takes 1 argument: `this MBEquipmentRoster instance`. Returns `Equipment`. Read path: prefer it over reaching for the backing store. |
| `GetStealthEquipments` | method (static) | Static entry point. Takes 1 argument: `this MBEquipmentRoster instance`. Returns `IEnumerable<Equipment>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Static entry points on MBEquipmentRosterExtensions:
MBEquipmentRosterExtensions.GetCivilianEquipments(theTarget);
MBEquipmentRosterExtensions.GetStealthEquipments(theTarget);
MBEquipmentRosterExtensions.GetBattleEquipments(theTarget);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.CampaignSystem/Extensions/MBEquipmentRosterExtensions.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/campaign/](../) — the other types in this bucket.
