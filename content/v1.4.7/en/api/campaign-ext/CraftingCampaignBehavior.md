---
title: "CraftingCampaignBehavior"
description: "CraftingCampaignBehavior — class in TaleWorlds.CampaignSystem.CampaignBehaviors. 24 public members (0 static)."
---

<!-- v147-skeleton -->
# CraftingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CraftingCampaignBehavior : CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler`  
**Base:** `CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs`

## Overview

`CraftingCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (24): `CraftingHistory`, `SyncData`, `RegisterEvents`, `IsOpened`, `GetCraftingDifficulty`, `OnSessionLaunched`, ….
- **Extension points** (2): `SyncData`, `RegisterEvents`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `CancelCustomOrder` | method | Instance entry point. Takes 2 arguments: `Town town`, `CraftingOrder craftingOrder`. Capability check used to gate an operation. |
| `CompleteOrder` | method | Instance entry point. Takes 4 arguments: `Town town`, `CraftingOrder craftingOrder`, `ItemObject craftedItem`, `Hero completerHero`. |
| `CraftingHistory` | property | Instance entry point `IReadOnlyCollection<WeaponDesign>` property. Read it for current state; a declared setter writes that state in place. |
| `CraftingOrderSlots` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `CreateCraftedWeaponInCraftingOrderMode` | method | Instance entry point. Takes 3 arguments: `Hero crafterHero`, `CraftingOrder craftingOrder`, `WeaponDesign weaponDesign`. Returns `ItemObject`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateCraftedWeaponInFreeBuildMode` | method | Instance entry point. Takes 3 arguments: `Hero hero`, `WeaponDesign weaponDesign`, `ItemModifier weaponModifier`. Returns `ItemObject`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateCustomOrderForHero` | method | Instance entry point. Takes 4 arguments: `Hero orderOwner`, `float orderDifficulty`, `WeaponDesign weaponDesign`, `CraftingTemplate craftingTemplate`. Returns `CraftingOrder`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateTownOrder` | method | Instance entry point. Takes 2 arguments: `Hero orderOwner`, `int orderSlot`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `DoRefinement` | method | Instance entry point. Takes 2 arguments: `Hero hero`, `Crafting.RefiningFormula refineFormula`. |
| `DoSmelting` | method | Instance entry point. Takes 2 arguments: `Hero currentCraftingHero`, `EquipmentElement equipmentElement`. |
| `GetActiveCraftingHero` | method | Instance entry point. Takes no arguments. Returns `Hero`. Read path: prefer it over reaching for the backing store. |
| `GetCraftingDifficulty` | method | Instance entry point. Takes 1 argument: `WeaponDesign weaponDesign`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetCurrentItemModifier` | method | Instance entry point. Takes no arguments. Returns `ItemModifier`. Read path: prefer it over reaching for the backing store. |
| `GetHeroCraftingStamina` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMaxHeroCraftingStamina` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetOrderResult` | method | Instance entry point. Takes 6 arguments: `CraftingOrder craftingOrder`, `ItemObject craftedItem`, `out bool isSucceed`, `out TextObject orderRemark`, …. Read path: prefer it over reaching for the backing store. |
| `IsOpened` | method | Instance entry point. Takes 2 arguments: `CraftingPiece craftingPiece`, `CraftingTemplate craftingTemplate`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnSessionLaunched` | method | Instance entry point. Takes 1 argument: `CampaignGameStarter campaignGameStarter`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetActiveCraftingHero` | method | Instance entry point. Takes 1 argument: `Hero hero`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCraftedWeaponName` | method | Instance entry point. Takes 2 arguments: `ItemObject craftedWeaponItem`, `TextObject name`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCurrentItemModifier` | method | Instance entry point. Takes 1 argument: `ItemModifier modifier`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetHeroCraftingStamina` | method | Instance entry point. Takes 2 arguments: `Hero hero`, `int value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

## Usage Example

```csharp
public class MyCraftingCampaignBehavior : CampaignBehaviorBase, ICraftingCampaignBehavior, ICampaignBehavior, INonReadyObjectHandler
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyCraftingCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/CampaignBehaviors/CraftingCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [CraftingOrder](../../campaign/CraftingOrder/) — `TaleWorlds.CampaignSystem.CraftingSystem`.
- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [DefaultPerks](../../campaign/DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [CraftingState](../../campaign/CraftingState/) — `TaleWorlds.CampaignSystem.GameState`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
