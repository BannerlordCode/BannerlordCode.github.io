---
title: "Ship"
description: "Ship — class in TaleWorlds.CampaignSystem.Naval. 47 public members (0 static)."
---

<!-- v147-skeleton -->
# Ship

**Namespace:** `TaleWorlds.CampaignSystem.Naval`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`  
**Base:** `IShipOrigin, IRandomOwner`  
**Source:** `TaleWorlds.CampaignSystem/Naval/Ship.cs`

## Overview

`Ship` is a named type in the TaleWorlds.CampaignSystem.Naval namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IShipOrigin, IRandomOwner, so the members it does not redeclare are inherited from there. 33 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `Ship`.
- **Instance members** (46): `CustomSailPatternId`, `UnlockedUpgradePieces`, `Name`, `VersionNo`, `Owner`, `HitPoints`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AdditionalAmmo` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `AdditionalArcherQuivers` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `AdditionalThrowingWeaponStack` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CampaignSpeedBonusFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CanEquipFigurehead` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ChangeFigurehead` | method | Instance entry point. Takes 1 argument: `Figurehead figurehead`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CrewCapacityBonusFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CrewMeleeDamageFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CrewShieldHitPointsFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CustomSailPatternId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `EquipUpgradePiece` | method | Instance entry point. Takes 2 arguments: `string slotTag`, `ShipUpgradePiece newUpgradePiece`. |
| `FlagshipScore` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ForwardDragFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `FurlUnfurlSpeedFactor` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetCampaignSpeed` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetCombatFactor` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetPieceAtSlot` | method | Instance entry point. Takes 1 argument: `string slotTag`. Returns `ShipUpgradePiece`. Read path: prefer it over reaching for the backing store. |
| `GetShipSlotAndPieceNames` | method | Instance entry point. Takes no arguments. Returns `List<ShipSlotAndPieceName>`. Read path: prefer it over reaching for the backing store. |
| `GetShipVisualSlotInfos` | method | Instance entry point. Takes no arguments. Returns `List<ShipVisualSlotInfo>`. Read path: prefer it over reaching for the backing store. |
| `GetSiegeEngines` | method | Instance entry point. Takes no arguments. Returns `MBList<SiegeEngineType>`. Read path: prefer it over reaching for the backing store. |
| `HasSlot` | method | Instance entry point. Takes 1 argument: `string slotTag`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HitPoints` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `InventoryCapacity` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `MainDeckCrewCapacity` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public Ship(ShipHull shipHull)`.

23 further public members follow the same patterns.
## Usage Example

```csharp
var ship = new Ship(shipHull);
ship.ChangeFigurehead(figurehead);
// Read current state through ship.CustomSailPatternId.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Naval/Ship.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Figurehead](../Figurehead/) — `TaleWorlds.CampaignSystem.Naval`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
