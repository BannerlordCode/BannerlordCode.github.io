---
title: "ItemRoster"
description: "A Party- or Settlement-owned collection of item counts that merges EquipmentElement values, maintains caches, and raises update events."
---
# ItemRoster

**Namespace:** `TaleWorlds.CampaignSystem.Roster`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IEnumerable, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`  
**Base:** `IReadOnlyList<ItemRosterElement>`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Roster/ItemRoster.cs`

## Responsibility

`ItemRoster` is the inventory container for `ItemRosterElement` counts: it merges items and modifiers, maintains food/value/animal caches, and notifies the owning systems when counts change.

## Mental model

Separate three kinds of roster. `MobileParty.ItemRoster` and `Settlement.ItemRoster` are authoritative world containers. `new ItemRoster(existingRoster)` is an independent copy used for trade, loot, or menu work. The rosters inside `InventoryLogic` are a working set for one inventory interaction. Only the first kind directly changes world state.

Each record is an `ItemRosterElement`: an `EquipmentElement` (`ItemObject`, optional `ItemModifier`, and related flags) plus a non-negative `Amount`. The same item with different modifiers is a different element. `AddToCounts` changes the count, updates `VersionNo`, refreshes cached totals, and raises `RosterUpdatedEvent`; `GetElementCopyAtIndex` returns a value copy, so changing that copy does not change the roster.

This is a Campaign-state container between [ItemObject](../../core-extra/ItemObject) / [EquipmentElement](../../core-extra/EquipmentElement) definitions and [MobileParty](../MobileParty) / [Settlement](../Settlement) owners. It is not a cross-container transaction manager. Party-to-party movement should use [GiveItemAction](../../campaign-ext/GiveItemAction), [SellItemsAction](../../campaign-ext/SellItemsAction), or the inventory flow so events, gold, and market caches stay coherent.

## When to use / when not to use

### Use it for

- Reading current Party/Settlement counts with `GetItemNumber`, `FindIndexOfItem`, enumeration, or aggregate values such as `TotalFood`, `TotalValue`, and `FoodVariety`.
- Adding or removing a known registered item from one explicit world container with `AddToCounts(ItemObject, number)` or the `EquipmentElement` overload.
- Running trade or loot calculations against a copy, then applying the confirmed result to the authoritative roster.
- Subscribing to `RosterUpdatedEvent` to invalidate your own UI/cache, and unsubscribing when the owner or listener lifetime ends.

### Do not use it for

- Do not replace a Party or Settlement's existing roster with `new ItemRoster()`. Owners, saves, and listeners still refer to the original object.
- Do not change `ItemRosterElement.Amount` on a returned copy to modify inventory. Use `AddToCounts` so caches and events update together.
- Do not assign `TotalValue`, `TotalFood`, or `FoodVariety` as if they were authoritative inputs; they are maintained by mutations and load-time recalculation.
- Do not implement a cross-Party/Settlement transfer by only adding and subtracting counts unless you also own every transaction, gold, tax, quest, and inventory-exchange side effect. Normal transfers belong to the relevant Action or `InventoryLogic`.
- Do not mutate the same roster while enumerating it, and do not retain an index across an add/remove operation; removal fills the hole with the last element.

## Dependency map

```text
ItemObject + ItemModifier
        -> EquipmentElement
        -> ItemRosterElement (Amount >= 0)
        -> ItemRoster
           -> VersionNo / cached food-value-animal stats
           -> RosterUpdatedEvent
        -> MobileParty / Settlement / InventoryLogic
        -> GiveItemAction / SellItemsAction / CampaignEvents
```

- **Upstream:** [ItemObject](../../core-extra/ItemObject), [EquipmentElement](../../core-extra/EquipmentElement), and `ItemModifier` provide element identity. Unregistered or unready objects are not safe roster contents for saves.
- **Owners:** [PartyBase](../PartyBase) creates and owns a party inventory; [MobileParty](../MobileParty) exposes its Party roster; [Settlement](../Settlement) exposes the settlement party roster.
- **Update consumers:** `SettlementComponent.OnInventoryUpdated`, town market data, food consumption, trade, workshops, and AI behaviors read or subscribe to changes; event timing is part of the mutation contract.
- **Flow consumers:** `GiveItemAction`, `SellItemsAction`, `InventoryLogic`, and `CampaignEvents` connect roster changes to Party/Settlement state, gold, tax, quests, and UI.

## Key members and behavior

| Member | Use, side effects, and timing |
|---|---|
| `Count` / `this[int]` / `GetEnumerator` | Reads current elements. Indices are only valid until the next mutation, and order is not a stable persistent ID. |
| `VersionNo` | Increments after `AddToCounts`, `Clear`, and explicit version updates. It is a cache/UI invalidation signal, not world time or a save version. |
| `GetItemNumber(ItemObject)` / `FindIndexOfItem` | Looks up by item definition. Use `FindIndexOfElement` when the exact modifier-bearing element matters. |
| `GetElementCopyAtIndex` / `GetElementNumber` / `GetElementUnitCost` | Reads a value copy, amount, or base unit value. An invalid index asserts and returns Invalid/0, so the result must not be treated as success. |
| `AddToCounts(ItemObject, int)` | Creates an unmodified `EquipmentElement` and merges it. Zero is a no-op; a negative count removes; removing a missing element asserts and fails. |
| `AddToCounts(EquipmentElement, int)` | Matches the full element, updates value/food/animal caches, raises `RosterUpdatedEvent`, and increments `VersionNo`. Reaching zero removes the element. |
| `Add` / `Remove` / `RemoveIf` | Compound mutations. `RemoveIf` receives an element and returns the number to remove, then returns the actual removed elements; normal update logic still runs per removal. |
| `Clear` | Clears all elements, recalculates caches, raises one default-element update event, and increments the version. Avoid calling it on an authoritative party roster casually. |
| `RosterUpdatedEvent` | Reports the affected element and count delta. Settlement and market listeners use it to update state; a listener cannot assume the change came from the player. |
| `RostersAreIdentical` / `SelectRandomIndex` | The first compares item, amount, and modifier; the second chooses a positive-weight random index or `-1`. Neither mutates inventory. |

## Real acquisition and examples

### Read and safely reduce player-party grain

`MobileParty.MainParty.ItemRoster` is a real authoritative acquisition path. Read the current amount, then use `AddToCounts` so all derived values remain synchronized:

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;

ItemRoster roster = MobileParty.MainParty.ItemRoster;
int currentGrain = roster.GetItemNumber(DefaultItems.Grain);
int amountToRemove = Math.Min(currentGrain, 3);

if (amountToRemove > 0)
{
    roster.AddToCounts(DefaultItems.Grain, -amountToRemove);
}
```

### Read settlement inventory and make a working copy

`Settlement.CurrentSettlement.ItemRoster` is a real settlement inventory path when the player is currently in a settlement. The copy is useful for sorting, comparison, or preview and does not change the settlement:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Roster;

Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null)
{
    ItemRoster preview = new ItemRoster(settlement.ItemRoster);
    ItemRosterElement first = preview.Count > 0
        ? preview.GetElementCopyAtIndex(0)
        : ItemRosterElement.Invalid;
}
```

### Cross-party movement

When both sides are real parties, read a value copy from the source and hand it to [GiveItemAction](../../campaign-ext/GiveItemAction). Do not use a temporary roster as an authority:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;

MobileParty receiver = MobileParty.ConversationParty;
if (receiver != null && receiver.Party != null && MobileParty.MainParty.ItemRoster.Count > 0)
{
    ItemRosterElement item = MobileParty.MainParty.ItemRoster.GetElementCopyAtIndex(0);
    GiveItemAction.ApplyForParties(PartyBase.MainParty, receiver.Party, in item);
}
```

This follows the Action's party-transfer path and raises the intended give-item event. Normal trades should still use `SellItemsAction` or `InventoryLogic` rather than manually splitting counts.

## Risks and lifecycle

- **Authoritative object:** A Party/Settlement roster is part of its owner. A copy cannot write back to the world, and replacing the backing roster leaves saves, caches, and listeners pointing at different state.
- **Cache consistency:** `TotalFood`, `FoodVariety`, `TotalValue`, `TradeGoodsTotalValue`, and animal counts depend on `OnRosterUpdated`/`CalculateCachedStats`. Direct array, amount, or cache edits make food, speed, market, and AI calculations stale.
- **Element identity:** An `EquipmentElement` modifier participates in matching and comparison. An item-only lookup may not identify a particular modifier-bearing element. `ItemRosterElement.Amount` must not be negative; its setter throws an underflow exception.
- **Index and mutation:** Removing an element fills its position with the last entry. Cached indices and an active enumeration can become invalid; copy elements first or iterate backwards before mutation.
- **Event timing:** `RosterUpdatedEvent` fires during count changes, and listeners can immediately recalculate market, food, or UI state. Do not unconditionally mutate the same roster from a callback or create recursive/repeated consumption.
- **Save loading:** `_data` and `_count` are serialized. At load completion the roster removes zero counts, recalculates caches, and replaces or removes unready items/modifiers. Custom content needs stable IDs and registration before load or an old save may contain Trash, empty slots, or lost counts.
- **Cross-system transactions:** Two direct count edits do not automatically dispatch CampaignEvents, tax, trade skill, or quest progress. Use an Action or `InventoryLogic` for a world transaction and respect the Campaign/Mission timing boundary.

## Version note

This page follows the v1.4.5 `ItemRoster.cs` cache and load-repair behavior. v1.3.15 may have different market or inventory subscribers, but the key boundary remains: `ItemObject` is definition data, `ItemRosterElement` carries amount, and an authoritative roster must not be replaced by a copy.

## Navigation

- **↑ Parent:** [Campaign API](./)
- **↔ Sibling:** [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [Settlement](../Settlement) · [TroopRoster](../TroopRoster)
- **Related:** [ItemObject](../../core-extra/ItemObject) · [Equipment](../../core-extra/Equipment) · [EquipmentElement](../../core-extra/EquipmentElement) · [GiveItemAction](../../campaign-ext/GiveItemAction) · [SellItemsAction](../../campaign-ext/SellItemsAction)
