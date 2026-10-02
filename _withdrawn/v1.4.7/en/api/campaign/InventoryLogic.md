---
title: "InventoryLogic"
description: "InventoryLogic — class in TaleWorlds.CampaignSystem.Inventory. 67 public members (1 static)."
---

<!-- v147-skeleton -->
# InventoryLogic

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class InventoryLogic`  
**Source:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## Overview

`InventoryLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `InventoryLogic`, `InventoryLogic`.
- **Static entry points** (1): `IsEquipmentSide`.
- **Instance members** (61): `DisableNetwork`, `TotalAmountChange`, `DonationXpChange`, `RightMemberRoster`, `LeftMemberRoster`, `InitialEquipmentCharacter`, ….
- **Data and constants** (3): `AfterReset`, `AfterTransfer`, `IsPreviewingItem`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsEquipmentSide` | method (static) | Static entry point. Takes 1 argument: `InventoryLogic.InventorySide side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `AddTransferCommand` | method | Instance entry point. Takes 1 argument: `TransferCommand command`. Adds to the collection or relation this type owns. |
| `AddTransferCommands` | method | Instance entry point. Takes 1 argument: `IEnumerable<TransferCommand> commands`. Adds to the collection or relation this type owns. |
| `AfterResetDelegate` | method | Instance entry point. Takes 2 arguments: `InventoryLogic inventoryLogic`, `bool fromCancel`. Returns `delegate void`. |
| `CanDonateItem` | method | Instance entry point. Takes 2 arguments: `ItemRosterElement element`, `InventoryLogic.InventorySide sideOfItem`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanGainXpFromDiscarding` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanInventoryCapacityIncrease` | method | Instance entry point. Takes 1 argument: `InventoryLogic.InventorySide side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanPlayerCompleteTransaction` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanSlaughterItem` | method | Instance entry point. Takes 2 arguments: `ItemRosterElement element`, `InventoryLogic.InventorySide sideOfItem`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CapacityData` | property | Instance entry point `class` property. Read it for current state; a declared setter writes that state in place. |
| `CheckItemRosterHasElement` | method | Instance entry point. Takes 3 arguments: `InventoryLogic.InventorySide side`, `ItemRosterElement rosterElement`, `int number`. Returns `bool`. |
| `CurrentMobileParty` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentSettlementComponent` | property | Instance entry point `SettlementComponent` property. Read it for current state; a declared setter writes that state in place. |
| `DisableNetwork` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `DonateItem` | method | Instance entry point. Takes 1 argument: `ItemRosterElement itemRosterElement`. |
| `DonationXpChange` | property | Instance entry point `Action` property. Read it for current state; a declared setter writes that state in place. |
| `DoneLogic` | method | Instance entry point. Takes no arguments. Returns `bool`. |
| `FindItemFromSide` | method | Instance entry point. Takes 2 arguments: `InventoryLogic.InventorySide side`, `EquipmentElement item`. Returns `ItemRosterElement?`. Read path: prefer it over reaching for the backing store. |
| `GetAveragePriceFactorItemCategory` | method | Instance entry point. Takes 1 argument: `ItemCategory category`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetBoughtItems` | method | Instance entry point. Takes no arguments. Returns `List<ValueTuple<ItemRosterElement, int>>`. Read path: prefer it over reaching for the backing store. |
| `GetCanItemIncreaseInventoryCapacity` | method | Instance entry point. Takes 1 argument: `ItemObject item`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetCostOfItemRosterElement` | method | Instance entry point. Takes 2 arguments: `ItemRosterElement itemRosterElement`, `InventoryLogic.InventorySide side`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetElementCountOnSide` | method | Instance entry point. Takes 1 argument: `InventoryLogic.InventorySide side`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetElementsInInitialRoster` | method | Instance entry point. Takes 1 argument: `InventoryLogic.InventorySide side`. Returns `IReadOnlyList<ItemRosterElement>`. Read path: prefer it over reaching for the backing store. |

- Constructed as `public InventoryLogic(MobileParty ownerParty, CharacterObject ownerCharacter, PartyBase merchantParty)`.
- Constructed as `public InventoryLogic(PartyBase merchantParty)`.

43 further public members follow the same patterns.
## Usage Example

```csharp
public class MyInventoryLogic : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyInventoryLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- The declaration in `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [InventoryListener](../InventoryListener/) — `TaleWorlds.CampaignSystem.Inventory`.
- [PlayerEncounter](../PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [FakeInventoryListener](../FakeInventoryListener/) — `TaleWorlds.CampaignSystem.Inventory`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [DefaultPerks](../DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.

Section: [api/campaign/](../) — the other types in this bucket.
