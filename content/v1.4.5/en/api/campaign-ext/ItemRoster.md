---
title: "ItemRoster"
description: "The 'item collection' held by a party or settlement: a flat list of ItemRosterElement (equipment element + amount), supporting add/remove, query-by-item and cached derived quantities like total value / food / livestock; the real source of campaign-layer item data."
---
# ItemRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemRoster : IReadOnlyList<ItemRosterElement>, IEnumerable<ItemRosterElement>, IReadOnlyCollection<ItemRosterElement>, ISerializableObject`
**Base:** （无基类；直接继承 `object`，实现 `IReadOnlyList<ItemRosterElement>` / `IEnumerable<ItemRosterElement>` / `ISerializableObject`）
**File:** `TaleWorlds.CampaignSystem/Roster/ItemRoster.cs`

## Overview

`ItemRoster` is the **flat collection of items a party or settlement currently holds** in Bannerlord's campaign (equipment, trade goods, food, horses). Internally it keeps an `ItemRosterElement[]` array, each element = one `EquipmentElement` (`ItemObject` + optional `ItemModifier`) + its `Amount` (count). The whole list is **deduplicated by item**: all amounts of the same `ItemObject` (and the same `ItemModifier`) are merged into one element, and add/remove only changes that element's `Amount`.

It does not distinguish "weapon" from "food" from "trade good" — all items are mixed in the same list, distinguished by flags like `ItemObject.IsTradeGood` / `IsFood` / `HasHorseComponent`. Almost every system related to "how much cargo this party carries" (trade AI, food consumption, party size limit, loot distribution, shop buy/sell) reads it or its cached derived quantities directly.

## Mental Model

Think of `ItemRoster` as **"a live snapshot of a faction's backpack"**, not a standalone list you can freely copy:

- **It is live campaign data:** usually you do not `new ItemRoster()` yourself (except for temporary computation); what you get is the real field `PartyBase.ItemRoster`. Any `AddToCounts` / `Remove` immediately changes that party / settlement's actual inventory, and cascades to refresh caches, increment `VersionNo` and fire `RosterUpdatedEvent`.
- **A settlement may have two rosters:** `Settlement.ItemRoster` actually equals its `Party.ItemRoster` (i.e. the garrison party's items); whereas `Settlement.Stash` (`Settlement.cs:93`'s `public readonly ItemRoster Stash`) is a **separate roster for the player's stash**, independent of each other.
- **The element key is `EquipmentElement`:** the same sword, with or without an enchant, is two rows; `FindIndexOfElement` compares with `EquipmentElement.IsEqualTo`, including `ItemModifier`.
- **The index is volatile:** the internal array is compacted (the element removed) when an element's count hits zero (or goes negative), and subsequent indices shift forward as a whole. Do not cache an index and still assume it points at the same item after multiple changes; query-by-item like `FindIndexOfItem` / `GetItemNumber` is safer.
- **Layer:** pure Campaign layer (`TaleWorlds.CampaignSystem`). After entering a battle (Mission) items appear as `Equipment` / `Agent`, no longer participating as a roster.

## How to Obtain ItemRoster

```csharp
// The player main party's item inventory (most common path: MobileParty.Party.ItemRoster)
ItemRoster mainRoster = MobileParty.MainParty.ItemRoster;

// Any party's inventory (including AI caravans, enemy armies)
ItemRoster partyRoster = someMobileParty.ItemRoster;

// A settlement garrison's carried items (equals settlement.Party.ItemRoster)
ItemRoster garrisonRoster = someSettlement.ItemRoster;

// The player's stash at that settlement (two separate rosters from the garrison items)
ItemRoster stash = someSettlement.Stash;

// The loot collection temporarily obtained in a battle / event
ItemRoster loot = PlayerEncounter.Current.RosterToReceiveLootItems;
```

> Note: `PartyBase.ItemRoster` is `private set`, you **cannot** replace it with `party.ItemRoster = new ItemRoster()`; you can only add / remove its internal elements.

## Key Members

Grouped by topic below. Each member notes **purpose + side effects + when to call**; signatures are not listed separately.

### Add / remove (mutate inventory)

#### `public int AddToCounts(ItemObject item, int number)`
The core write entry. Increase (or, when `number < 0`, decrease) `item` by `number`. Returns the element's index in the internal array; when `number == 0` returns `-1` directly (no-op).
**Side effects:** cascades to refresh `TotalValue` / `TradeGoodsTotalValue` / `TotalFood` / `FoodVariety` / various livestock counts, increments `VersionNo`, and fires `RosterUpdatedEvent`. If `number < 0` but the item does not exist, it triggers `Debug.FailedAssert("Trying to delete an element from Item Roster that does not exist!")`; if after decrement `Amount <= 0`, the element is removed from the internal array (array compacted, **subsequent indices shift forward**).
**When to call:** when you need to directly change a party / settlement's items. If the change also involves money or the other side's inventory (buy/sell, gift), prefer `./GiveItemAction/` or `./SellItemsAction/`, otherwise economy and events fall out of sync.

#### `public int AddToCounts(EquipmentElement rosterElement, int number)`
Same as above, but expresses "item + enchant" with `EquipmentElement`, so the same item with a different `ItemModifier` lands in a different element.

#### `public void Add(ItemRosterElement element)` / `public void Add(IEnumerable<ItemRosterElement> rosterElementList)`
Convenience write: internally calls `AddToCounts(EquipmentElement, Amount)` one by one.

#### `public void Remove(ItemRosterElement element)`
Convenience remove: equivalent to `AddToCounts(EquipmentElement, -Amount)`.

#### `public IEnumerable<ItemRosterElement> RemoveIf(Func<ItemRosterElement, int> match)`
Remove `match(el)` items from each element by predicate (truncated to the actual count when exceeding the element count), returns the list of removed elements. Suitable for bulk operations like "take away all food" or "clear all trade goods".

#### `public void Clear()`
Clear all elements, recompute caches, fire `RosterUpdatedEvent` (with `default(ItemRosterElement)` and `0` as parameters), increment `VersionNo`.

### Query / count

#### `public ItemRosterElement this[int index]` / `public int Count`
Index access (returns a **value copy** of `ItemRosterElement`; note the index drifts with add/remove), and the "number of distinct elements" (not the total amount).

#### `public int FindIndexOfItem(ItemObject item)`
Find the index by `ItemObject` (**ignoring** `ItemModifier`), returns `-1` if not found. The safest item-based locator.

#### `public int FindIndexOfElement(EquipmentElement rosterElement)`
Find the index precisely by `EquipmentElement` (including `ItemModifier`).

#### `public int FindIndex(Predicate<ItemObject> predicate)` / `FindIndexFirstAfterXthElement(...)`
Search by predicate (the latter is for wrap-around search from a position, common in random loot distribution).

#### `public ItemObject GetItemAtIndex(int index)` / `public int GetElementNumber(int index)` / `public int GetElementUnitCost(int index)`
Get the item, count, unit value (`ItemObject.Value`) at the index. Index out of range triggers `Debug.FailedAssert` and returns the default.

#### `public int GetItemNumber(ItemObject item)`
Directly ask "how many of this item in total" (internally goes through `FindIndexOfItem`); returns `0` if not present. The most common way to read inventory.

### Derived quantities / caches (all `[CachedData]`, read for art / logic, do not hand-edit)

| Member | Meaning |
|------|------|
| `TotalValue` | Sum of `ItemObject.Value × Amount` for all elements. |
| `TradeGoodsTotalValue` | Cumulative value of only `IsTradeGood` items (excluding equipment / food / horses). |
| `TotalFood` | Food item count + livestock's meat yield per `HorseComponent.MeatCount`. |
| `FoodVariety` | Number of **distinct food types** currently present (food variety +1 when going 0→positive, −1 when positive→0). |
| `NumberOfPackAnimals` / `NumberOfMounts` | Pack animals / mounts (requires `ItemModifier == null` to count). |
| `NumberOfLivestockAnimals` | Livestock count (regardless of enchant). |
| `VersionNo` | Incremented on every change; UI / VM uses it to judge whether a refresh is needed. |

> These quantities are maintained **incrementally** on each `AddToCounts` / `Remove` (`OnRosterUpdated`), and recomputed wholesale (`CalculateCachedStats`) on `Clear()`, copy-construction and `DeserializeFrom` (load). They are not derived from a real-time traversal, so if you use reflection or unconventional means to change the internal array without going through the public write entry, the cache will be inconsistent with the real state.

#### `public event RosterUpdatedEventDelegate RosterUpdatedEvent`
Signature `void(ItemRosterElement item, int count)`. `count` positive means added, negative means removed. Subscribe to it to update your panel or trigger logic when inventory changes (note: it also fires during load, avoid reentrant writes inside the event).

### Static / save hooks

#### `public static bool RostersAreIdentical(ItemRoster a, ItemRoster b)`
Compare whether two rosters' elements (item, enchant, count) are completely identical.

#### `public static void CalculateCachedStatsOnLoad()` / `public void OnLoadStarted(MetaData metaData)`
The engine's load hooks: `OnLoadStarted` carries `[LoadInitializationCallback]`, registering all rosters into `InstanceListForLoadGame`; after all objects load the engine calls `CalculateCachedStatsOnLoad()`, which for each roster "replaces unready (`!IsReady`) items / enchants with `./DefaultItems/`'s `Trash` and deregisters the old object" and "discards elements with count 0" then recomputes caches. **A mod generally should not call these manually.**

## Risks and Crash Boundaries (must-read)

1. **Holding element references across saves becomes invalid:** `ItemRosterElement` is a `struct` (`ISavedStruct`), what you get is a value copy; but the `ItemObject` / `ItemModifier` inside it are real object references. After load `MBObjectManager` re-resolves these objects, and `CalculateCachedStatsOnLoad` replaces unready items with `Trash` and deregisters the old objects. So: **do not save `ItemRosterElement` / its inner `ItemObject` reference as long-term state across saves**; when needed, re-query by `ItemObject` (using `MBGUID` / `StringId`).
2. **Do not use reflection to change the internal array:** the cached quantities (`TotalValue`, etc.) are only maintained incrementally in the public write entry `AddToCounts` / remove path. Bypassing the public API to directly change `_data` / `_count` desyncs the cache from the real inventory, and does not fire `RosterUpdatedEvent` / increment `VersionNo`, causing dependents to read stale data.
3. **Do not change only one side when transferring items:** when giving A's item to B, if you only `A.ItemRoster.AddToCounts(x,-n)` without adding on B, or without going through `GiveItemAction` / `SellItemsAction`, you break economic consistency (money, buy/sell events, trade AI counts all misaligned). **Whenever money or both sides' inventory is involved, use an Action.**
4. **Confusing equipment vs trade good vs food:** the list is flat, everything is in it. `TotalValue` counts everything; only `TradeGoodsTotalValue` is pure trade goods; `TotalFood` includes livestock meat. When writing logic, always classify correctly with `ItemObject.IsTradeGood` / `IsFood` / `HasHorseComponent`; do not assume "every element is a weapon / is a good".
5. **Negative-decrement boundary:** `AddToCounts(item, -n)` triggers `Debug.FailedAssert` when the item does not exist (the dev build pops an assert directly); decrementing to `<= 0` removes the element and shifts indices forward. If you cache the index first and then keep operating by the same index, you point at the wrong item. For bulk removal prefer `RemoveIf`.
6. **`ItemRosterElement.Amount` does not allow direct negative assignment:** `ItemRosterElement.Amount`'s setter throws `MBUnderFlowException` on a negative value. Going through `AddToCounts` normally does not trigger it (it uses internal field-level `_amount += number`), but if you `new ItemRosterElement(...)` yourself and then manually assign a negative `Amount` it blows up.
7. **Do not write to the roster inside load / deserialize callbacks:** during `OnLoadStarted` / `CalculateCachedStatsOnLoad` the object graph is not fully ready, and add/remove then may read uninitialized related objects. Wait until `Campaign.Current` enters the normal tick before changing it.

## Typical Usage Examples

### Example 1: Read the player main party's inventory and add / remove items

```csharp
// Real acquisition path: MobileParty.MainParty.Party.ItemRoster
ItemRoster roster = MobileParty.MainParty.ItemRoster;

// Iterate (IEnumerable<ItemRosterElement>); the element is a value copy, but ItemObject is a real instance
foreach (ItemRosterElement element in roster)
{
    ItemObject item = element.EquipmentElement.Item;
    int amount = element.Amount;
    float weight = element.GetRosterElementWeight(); // Single-element weight = unit weight × count

    if (item.IsTradeGood)
    {
        // Only tally trade-good value
        int unitValue = roster.GetElementUnitCost(/* this element's index */ elementIndex);
    }
}

// Direct add/remove (usable when no money moves; refreshes cache, VersionNo and fires event)
ItemObject booty = roster.GetItemAtIndex(0); // Any real source, e.g. first loot element
int addedIndex = roster.AddToCounts(booty, 10);   // +10
roster.AddToCounts(booty, -3);                    // -3, result zero removes it, index shifts forward
int left = roster.GetItemNumber(booty);           // Remaining count (prefer item-based query, avoid relying on index)

// Read aggregate derived quantities
int totalValue = roster.TotalValue;           // Total value of all items
int tradeValue = roster.TradeGoodsTotalValue; // Trade goods only
int food = roster.TotalFood;                  // Food (including livestock meat)
```

### Example 2: Correctly transfer items between two parties (use an Action)

```csharp
PartyBase giver = MobileParty.MainParty.Party;
PartyBase receiver = enemyParty.Party;

// Take a real item reference (from giver's current inventory, avoid hardcoding StringId)
ItemObject sword = giver.ItemRoster.GetItemAtIndex(0);

// Must use an Action: it maintains both inventories, money, buy/gift events and cache together
ItemRosterElement toGive = new ItemRosterElement(sword, 1);
GiveItemAction.ApplyForParties(giver, receiver, in toGive);

// Do not assume afterwards that giver still holds this sword — it has been decremented by 1
int remaining = giver.ItemRoster.GetItemNumber(sword);
```

## Cross-Version Notes

- **The `ItemRoster` public API is identical between v1.3.15 and v1.4.5:** `AddToCounts`, `Remove`, `Clear`, `GetItemNumber`, `TotalValue` / `TradeGoodsTotalValue` / `TotalFood` and other core members are exactly the same in both versions' source (compared `bannerlord-1.3.15/.../Roster/ItemRoster.cs` with `bannerlord-1.4.5/.../ItemRoster.cs`). This page is written against the 1.4.5 source and applies equally to 1.3.15.
- The "counting element" is `ItemRosterElement` in 1.3.15 / 1.4.5 (a `struct`, implementing `ISavedStruct`, with `[SaveableField(11)] _amount` and `[SaveableProperty(21)] EquipmentElement`). An earlier version used the name `ItemRosterElementCounter`; this page follows the current source.
- The load-replacement logic (`ReplaceInvalidItemsWithTrash` → `DefaultItems.Trash`) behaves the same in both versions.

## Dependencies

- **Upstream (who constructs / who supplies elements)**
  - [PartyBase](../../campaign/PartyBase/) — the real holder of `ItemRoster` (`ItemRoster { get; private set; }`).
  - [MobileParty](../../campaign/MobileParty/) / [Settlement](../../campaign/Settlement/) — both delegate `ItemRoster` to `Party.ItemRoster`; `Settlement` additionally has an independent `Stash`.
  - [ItemObject](../../core-extra/ItemObject/) — the item body of each element in the list (`EquipmentElement.Item`).
  - [EquipmentElement](../../core-extra/EquipmentElement/) / [ItemModifier](../../core-extra/ItemModifier/) — element = item + optional enchant.
  - [DefaultItems](../../campaign/DefaultItems) — the source of `Trash` that unready items are replaced with on load.
- **Downstream (who consumes this data)**
  - Trade AI (`PartiesSellLootCampaignBehavior`, `SellItemsAction`), food consumption (`FoodConsumptionBehavior`), loot distribution (`OnCollectLootsItemsEvent` / `OnLootDistributedToPartyEvent`), shop buy/sell.
  - Party size and wage: `./PartySizeLimitModel/`, `./PartyWageModel/` (derive limit and wage from carried items / people).
  - Weight / speed: element weight summed via `ItemRosterElement.GetRosterElementWeight()`, used by `PartyBaseHelper.GetSpeedLimitation` etc. for movement speed limits.
- **Related events (CampaignEvents)**
  - `./CampaignEvents/`'s `ItemsLooted`, `OnItemSoldEvent`, `HeroOrPartyGaveItem`, `OnItemsDiscardedByPlayerEvent`, `OnCollectLootsItemsEvent`, `OnLootDistributedToPartyEvent`, `OnItemsRefinedEvent`, `PlayerInventoryExchangeEvent` — all broadcast when items enter / leave a roster.
- **Related types / operations**
  - [TroopRoster](../TroopRoster/) — same `Roster` family, but manages people not items.
  - [GiveItemAction](../GiveItemAction/) / [SellItemsAction](../SellItemsAction/) — the **correct entry** to transfer / sell items across owners.
  - [InventoryLogic](../../campaign/InventoryLogic) — the logic behind the player's backpack UI, moving `ItemRosterElement` between the two rosters internally.

## See Also

- [↑ Campaign API index](../../)
- [↑ Campaign](../../campaign/Campaign/) — campaign world hub
- [↔ TroopRoster](../TroopRoster/) — same family, manages people not items
- [↔ DefaultItems](../../campaign/DefaultItems) — the Trash unready items fall back to on load
- [↔ GiveItemAction](../GiveItemAction/) — the correct entry to give items across owners
- [↔ SellItemsAction](../SellItemsAction/) — the correct entry to sell items
- [↔ CampaignEvents](../CampaignEvents/) — events broadcast when items enter / leave a roster
- [↔ PartySizeLimitModel](../../campaign/PartySizeLimitModel) / [PartyWageModel](../../campaign/PartyWageModel) — derive size / wage from carried amount
- [↔ SettlementFoodModel](../../campaign/SettlementFoodModel) — food consumption related
- [↔ InventoryLogic](../../campaign/InventoryLogic) — the move logic behind the player's backpack UI
- [Upstream PartyBase](../../campaign/PartyBase/) — the real holder of `ItemRoster`
- [Upstream Settlement](../../campaign/Settlement/) — `ItemRoster` and `Stash`
- [Upstream MobileParty](../../campaign/MobileParty/) — party item inventory
- [Upstream ItemObject](../../core-extra/ItemObject/) — the item body of list elements
- [Upstream EquipmentElement](../../core-extra/EquipmentElement/) / [ItemModifier](../../core-extra/ItemModifier/) — element = item + optional enchant
