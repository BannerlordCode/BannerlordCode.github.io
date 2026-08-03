---
title: "ItemRoster"
description: "The flat inventory collection held by a party or settlement — a de-duplicated list of item stacks (ItemObject + optional modifier + amount) with cached derived totals like value, food, and mounts, plus add/remove/query members and save-game serialization hooks."
---

# ItemRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`
**Base:** (no base class; derives directly from `object` and implements `IReadOnlyList<ItemRosterElement>` / `IEnumerable<ItemRosterElement>` / `ISerializableObject`)
**Source:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

## Overview

`ItemRoster` is the **flat, de-duplicated collection of every item a party or settlement currently carries** in the campaign — weapons, trade goods, food, horses — each entry being one `ItemRosterElement` (an `EquipmentElement` = `ItemObject` plus an optional `ItemModifier`, paired with an `Amount`). The list is keyed by `EquipmentElement`, so all stacks of the same item-and-modifier are merged into a single element and mutated in place. Almost every system that asks "what is this party hauling" — trade AI, food consumption, party size and wage limits, loot distribution, shop buy/sell — reads this roster or its cached derived totals directly.

## Mental Model

Think of `ItemRoster` as **a live snapshot of a faction's backpack**, not a free-floating list you can copy at will:

- **It is live campaign data.** You usually do not `new ItemRoster()` yourself (except for throwaway calculations); what you hold is the real `PartyBase.ItemRoster` field. Any `AddToCounts` / `Remove` immediately changes the owning party or settlement's actual inventory, bumps the cached totals, increments `VersionNo`, and raises `RosterUpdatedEvent`.
- **A settlement can have two rosters.** `Settlement.ItemRoster` is the same object as its garrison party's `Party.ItemRoster` (the items carried by the town/castle garrison), while `Settlement.Stash` (a separate `readonly ItemRoster`) is the player's independent stash — the two are unrelated.
- **The element key is the `EquipmentElement`.** The same sword, with vs. without an `ItemModifier`, occupies two separate rows. `FindIndexOfElement` compares with `EquipmentElement.IsEqualTo`, so the modifier is included in the match.
- **Indexes are volatile.** When an element's amount drops to zero (or negative), it is compacted out of the internal array and every later index shifts left. Do not cache an index and keep assuming it points at the same item after further mutations — prefer `FindIndexOfItem` / `GetItemNumber` for item-keyed lookups.
- **Layer.** Pure campaign layer (`TaleWorlds.CampaignSystem`). Once a battle (Mission) starts, items appear as `Equipment` / `Agent` and no longer travel as a roster.

## When to Use / When NOT to Use

Use `ItemRoster` when you need to **read or mutate the inventory of a specific party or settlement**: query how many of an item exist, add or remove stacks, or subscribe to `RosterUpdatedEvent` to refresh a UI panel.

Do **NOT** use raw `AddToCounts` / `Remove` when the change involves **money or the other side's inventory** (buying, selling, gifting between parties). In those cases call [GiveItemAction](../GiveItemAction/) or [SellItemsAction](../SellItemsAction/) instead — they keep both inventories, the gold flow, the trade/buy-sell events, and the trade-AI counters consistent. Direct mutation only updates the one roster and leaves the economy out of sync. Also do not mutate a roster from inside a load/deserialize callback (see Risks).

## How to Acquire an ItemRoster

You never construct the canonical rosters; you read them off the owning object:

```csharp
// Most common path: the player main party's inventory
ItemRoster mainRoster = MobileParty.MainParty.ItemRoster;

// Any party (AI caravans, enemy armies, garrisons) — ItemRoster is on MobileParty directly
ItemRoster partyRoster = someMobileParty.ItemRoster;

// Settlement garrison items (== settlement.Party.ItemRoster)
ItemRoster garrisonRoster = someSettlement.ItemRoster;

// The player's stash at that settlement — a SEPARATE roster from the garrison
ItemRoster stash = someSettlement.Stash;

// Loot collected during an encounter
ItemRoster loot = PlayerEncounter.Current.RosterToReceiveLootItems;
```

> `PartyBase.ItemRoster` has a private setter — you **cannot** replace it with `party.ItemRoster = new ItemRoster()`. You may only add to or remove from its existing elements.

## Members by Theme

Each member below notes **purpose + side effect + when to call**, rather than only its signature.

### Add / Remove (mutating the inventory)

#### `public int AddToCounts(ItemObject item, int number)`
The core write entry point. Adds (or, when `number < 0`, removes) `number` of `item`. Returns the element's index in the internal array; returns `-1` and does nothing when `number == 0`.
**Side effects:** incrementally refreshes `TotalValue` / `TradeGoodsTotalValue` / `TotalFood` / `FoodVariety` / mount-and-livestock counters, increments `VersionNo`, and raises `RosterUpdatedEvent`. If `number < 0` but the item is absent, it triggers `Debug.FailedAssert("Trying to delete an element from Item Roster that does not exist!")`; if the resulting `Amount <= 0` the element is removed (array compaction → later indexes shift left).
**When to call:** whenever you directly change a party/settlement's items. If money or the counterparty's inventory is involved, prefer `GiveItemAction` / `SellItemsAction`.

#### `public int AddToCounts(EquipmentElement rosterElement, int number)`
Same as above but expressed as an `EquipmentElement`, so the same item with different `ItemModifier` lands in a different element.

#### `public void Add(ItemRosterElement element)` / `public void Add(IEnumerable<ItemRosterElement> rosterElementList)`
Convenience writers that internally call `AddToCounts(EquipmentElement, Amount)` per element.

#### `public void Remove(ItemRosterElement element)`
Convenience removal, equivalent to `AddToCounts(EquipmentElement, -Amount)`.

#### `public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`
Removes `match(el)` units from each element (clamped to the element's actual amount), returning the removed elements. Ideal for bulk operations like "take all food" or "clear all trade goods".

#### `public void Clear()`
Empties all elements, recomputes the cached totals, raises `RosterUpdatedEvent` (with `default(ItemRosterElement)` and `0`), and increments `VersionNo`.

### Query / Count

#### `public ItemRosterElement this[int index]` / `public int Count`
Indexer (returns a **value copy** of the `ItemRosterElement`; remember indexes drift as you add/remove) and the count of **distinct elements** (not total item count).

#### `public int FindIndexOfItem(ItemObject item)`
Finds the index by `ItemObject` (**ignoring** `ItemModifier`); returns `-1` if not found. The safest item-keyed lookup.

#### `public int FindIndexOfElement(EquipmentElement rosterElement)`
Finds the exact index by `EquipmentElement` (modifier included).

#### `public int FindIndex(Predicate<ItemObject> predicate)` / `FindIndexFirstAfterXthElement(Predicate<ItemObject> predicate, int x)`
Predicate-based search; the latter wraps around from position `x` and is used in loot random-distribution.

#### `public ItemObject GetItemAtIndex(int index)` / `public int GetElementNumber(int index)` / `public int GetElementUnitCost(int index)`
Read the item, amount, and unit value (`ItemObject.Value`) at an index. Out-of-range triggers `Debug.FailedAssert` and returns a default.

#### `public int GetItemNumber(ItemObject item)`
"How many of this item do I have in total?" (internally uses `FindIndexOfItem`); returns `0` if absent. The most common read for inventory checks.

### Derived totals / caches (all `[CachedData]` — read them, never hand-write)

| Member | Meaning |
|--------|---------|
| `TotalValue` | Sum of `ItemObject.Value × Amount` over all elements. |
| `TradeGoodsTotalValue` | Cumulative value of `IsTradeGood` items only (excludes gear/food/horses). |
| `TotalFood` | Food item count plus livestock meat, where each animal contributes `HorseComponent.MeatCount`. |
| `FoodVariety` | Number of **distinct food types** currently present (incremented when a type goes 0→positive, decremented on positive→0). |
| `NumberOfPackAnimals` / `NumberOfMounts` | Pack animals / mounts (**only counted when `ItemModifier == null`**). |
| `NumberOfLivestockAnimals` | Livestock count (regardless of modifier). |
| `VersionNo` | Incremented on every change; UI/VMs use it to decide whether to refresh. |

> These totals are maintained **incrementally** on each `AddToCounts` / `Remove` (`OnRosterUpdated`), and fully recomputed (`CalculateCachedStats`) on `Clear()`, copy-construction, and `DeserializeFrom` (load). They are NOT derived by live enumeration, so if you mutate the internal array via reflection or other non-public means without going through the public write path, the caches will diverge from the real state.

**Total weight (no built-in property):** `ItemRoster` does **not** expose a `TotalWeight` member. Total weight is obtained by summing `ItemRosterElement.GetRosterElementWeight()` across elements, where each element's weight equals `EquipmentElement.GetEquipmentElementWeight() × Amount`. The campaign uses this sum (via `PartyBaseHelper.GetSpeedLimitation` and similar) to limit party movement speed.

#### `public event RosterUpdatedEventDelegate RosterUpdatedEvent`
Signature `void(ItemRosterElement item, int count)`, where a positive `count` means added and negative means removed. Subscribe to update your panel or trigger logic when inventory changes — but note it also fires during load, so avoid re-entrant writes inside the handler.

### Static / save hooks

#### `public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`
Compares two rosters element-by-element (item, modifier, amount) for exact equality.

#### `public static void CalculateCachedStatsOnLoad()` / `public void OnLoadStarted(MetaData metaData)`
Engine load hooks: `OnLoadStarted` carries `[LoadInitializationCallback]` and registers every roster into `InstanceListForLoadGame`; after all objects are loaded the engine calls `CalculateCachedStatsOnLoad()`, which for each roster replaces any not-yet-ready (`!IsReady`) item/modifier with `DefaultItems.Trash` and unregisters the old object, drops zero-amount elements, then recomputes caches. **Mods should not call these manually.**

## Dependencies

- **Upstream (who owns / supplies elements)**
  - [PartyBase](../../campaign/PartyBase/) — the real owner of an `ItemRoster` (`ItemRoster { get; private set; }`).
  - [MobileParty](../../campaign/MobileParty/) / [Settlement](../../campaign/Settlement/) — both delegate `ItemRoster` to `Party.ItemRoster`; `Settlement` additionally has its own `Stash`.
  - [ItemObject](../../core/ItemObject/) — the item body behind every element (`EquipmentElement.Item`).
  - [EquipmentElement](../../core-extra/EquipmentElement/) / [ItemModifier](../../core-extra/ItemModifier/) — an element = item + optional modifier.
  - [ItemRosterElement](../../core-extra/ItemRosterElement/) — the stack struct (`ISavedStruct`) stored in the array.
  - [DefaultItems](../DefaultItems/) — the source of the `Trash` item that unresolved items fall back to on load.
  - [CachedDataAttribute](../../core-extra/CachedDataAttribute/) — the attribute marking the incrementally maintained totals.
- **Downstream (who consumes this data)**
  - Trade AI (`PartiesSellLootCampaignBehavior`, [SellItemsAction](../SellItemsAction/)), food consumption (`FoodConsumptionBehavior`), loot distribution, shop buy/sell.
  - Party size & wage: [PartySizeLimitModel](../PartySizeLimitModel/) / [PartyWageModel](../PartyWageModel/) derive limits and wages from carried items/troops.
  - Speed: element weight (via `ItemRosterElement.GetRosterElementWeight()`) feeds `PartyBaseHelper.GetSpeedLimitation`.
- **Related events ([CampaignEvents](../CampaignEvents/))**
  - `ItemsLooted`, `OnItemSoldEvent`, `HeroOrPartyGaveItem`, `OnItemsDiscardedByPlayerEvent`, `OnCollectLootsItemsEvent`, `OnLootDistributedToPartyEvent`, `OnItemsRefinedEvent`, `PlayerInventoryExchangeEvent` — all fired as items enter or leave a roster.
- **Related types / operations**
  - [TroopRoster](../TroopRoster/) — same `Roster` family, but manages troops, not items.
  - [GiveItemAction](../GiveItemAction/) / [SellItemsAction](../SellItemsAction/) — the correct entry points for transferring/selling items across owners.
  - [InventoryLogic](../InventoryLogic/) — the logic behind the player inventory UI, which moves `ItemRosterElement`s between two rosters.
  - [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) — serializes rosters as part of the save game.

## Risks

1. **Cached totals diverge if you bypass the public API.** `TotalValue` and friends are only maintained incrementally inside `AddToCounts` / the removal path. Mutating `_data` / `_count` directly via reflection skips the cache refresh and never raises `RosterUpdatedEvent` or bumps `VersionNo`, so dependents read stale data.
2. **Don't keep element references across a save/load.** `ItemRosterElement` is a `struct` (value copy), but the `ItemObject` / `ItemModifier` inside are real object references. After load, `MBObjectManager` re-resolves them, and `CalculateCachedStatsOnLoad` **replaces unresolved items with `Trash` and unregisters the old objects**. Never store an `ItemRosterElement` or its inner `ItemObject` as long-lived state across saves — re-query by `ItemObject` (via `MBGUID` / `StringId`) when you need it.
3. **Don't transfer items on only one side.** Giving A's item to B by calling only `A.ItemRoster.AddToCounts(x, -n)` without adding to B or going through `GiveItemAction` / `SellItemsAction` breaks economic consistency (gold, buy/sell events, trade-AI counters all desync). Use an Action whenever money or both inventories are involved.
4. **Don't confuse gear vs. trade good vs. food.** The list is flat and holds everything. `TotalValue` counts it all; only `TradeGoodsTotalValue` is pure trade goods; `TotalFood` includes livestock meat. Always classify with `ItemObject.IsTradeGood` / `IsFood` / `HasHorseComponent` — don't assume every element is a weapon or a good.
5. **Negative-removal edge cases.** `AddToCounts(item, -n)` when the item is absent triggers `Debug.FailedAssert` (hard assert in dev builds); removing down to `<= 0` compacts the element and shifts later indexes left. If you cached an index and then operate on that same index again, you may hit the wrong item. Prefer `RemoveIf` for bulk removal.
6. **`ItemRosterElement.Amount` cannot be set negative.** The `Amount` setter throws `MBUnderFlowException` on a negative value. Normal `AddToCounts` avoids this (it uses field-level `_amount += number` addition), but `new ItemRosterElement(...)` followed by a manual negative `Amount` assignment will blow up.
7. **Don't write to a roster inside a load/deserialize callback.** During `OnLoadStarted` / `CalculateCachedStatsOnLoad` the object graph is not fully ready; mutating then may touch uninitialized related objects. Wait until `Campaign.Current` is in normal tick before changing inventories.

## Examples

### Example 1: Read the player main party's inventory and add/remove items

```csharp
// Real acquisition path: MobileParty.MainParty.ItemRoster
ItemRoster roster = MobileParty.MainParty.ItemRoster;

// Iterate (IEnumerable<ItemRosterElement>); element is a value copy, but ItemObject is a live instance
int elementIndex = 0;
foreach (ItemRosterElement element in roster)
{
    ItemObject item = element.EquipmentElement.Item;
    int amount = element.Amount;
    float weight = element.GetRosterElementWeight(); // single-element weight = unit weight x amount

    if (item.IsTradeGood)
    {
        int unitValue = roster.GetElementUnitCost(elementIndex); // trade-good unit value only
    }
    elementIndex++;
}

// Direct add/remove (fine when no gold is involved; refreshes caches, VersionNo, and raises the event)
ItemObject booty = roster.GetItemAtIndex(0); // a real item already in the roster, e.g. first loot element
int addedIndex = roster.AddToCounts(booty, 10); // +10
roster.AddToCounts(booty, -3);                  // -3; dropping to zero removes the element, shifting indexes
int left = roster.GetItemNumber(booty);         // remaining count (prefer item-keyed lookup over index)

// Read the summary derived totals
int totalValue = roster.TotalValue;            // total value of all items
int tradeValue = roster.TradeGoodsTotalValue;  // trade goods only
int food = roster.TotalFood;                   // food (including livestock meat)
```

### Example 2: Transfer an item between two parties correctly (use an Action)

```csharp
PartyBase giver = MobileParty.MainParty.Party;
PartyBase receiver = enemyParty.Party;

// Take a real item reference from the giver's existing stock (avoid hardcoding a StringId)
ItemObject sword = giver.ItemRoster.GetItemAtIndex(0);

// Must use the Action: it maintains both inventories, the gold flow, buy/sell/gift events, and the caches
ItemRosterElement toGive = new ItemRosterElement(sword, 1);
GiveItemAction.ApplyForParties(giver, receiver, in toGive);

// Do not assume the giver still holds this sword afterward — it has been decremented by 1
int remaining = giver.ItemRoster.GetItemNumber(sword);
```

## See Also

- [↑ Campaign-ext API index](../)
- [↑ Campaign](../../campaign/Campaign/) — the campaign world hub
- [↔ TroopRoster](../TroopRoster/) — same family, manages troops not items
- [↔ GiveItemAction](../GiveItemAction/) — correct entry point for giving items across owners
- [↔ SellItemsAction](../SellItemsAction/) — correct entry point for selling items
- [↔ CampaignEvents](../CampaignEvents/) — events broadcast as items enter/leave a roster
- [↔ InventoryLogic](../InventoryLogic/) — the logic moving elements behind the player inventory UI
- [↔ DefaultItems](../DefaultItems/) — the `Trash` item unresolved items fall back to on load
- [↔ PartySizeLimitModel](../PartySizeLimitModel/) / [PartyWageModel](../PartyWageModel/) — derive size/wage from carried load
- [↑ PartyBase](../../campaign/PartyBase/) — the real owner of an `ItemRoster`
- [↑ Settlement](../../campaign/Settlement/) — `ItemRoster` and `Stash`
- [↑ MobileParty](../../campaign/MobileParty/) — party inventories
- [↑ ItemObject](../../core/ItemObject/) — the item body behind every element
- [↑ EquipmentElement](../../core-extra/EquipmentElement/) / [ItemModifier](../../core-extra/ItemModifier/) — element = item + optional modifier
