---
title: "InventoryScreenHelper"
description: "The v1.4.5 campaign helper that builds inventory states for trade, loot, stash, and item-transfer flows."
---
# InventoryScreenHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class InventoryScreenHelper`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## Responsibility

`InventoryScreenHelper` is the campaign entry-point layer for inventory presentations. It creates an [InventoryState](../../campaign/InventoryState), configures its [InventoryLogic](../../campaign/InventoryLogic), and pushes the state through [GameStateManager](../../core-extra/GameStateManager). The helper does not own a screen instance and it does not replace the roster or settlement systems; the presentation logic and its callbacks perform those later operations.

## Mental model

Think of every public `OpenScreen` entry method as the same three-stage transition:

```text
real campaign context -> InventoryState + InventoryLogic -> GameStateManager.PushState
```

The method name selects the initialization contract. Trade methods attach a listener that reads and writes merchant or caravan gold. Loot, stash, warehouse, and receive-item methods select an inventory mode and roster arrangement. `OpenScreenAsInventoryOf` creates a non-trading comparison or transfer view. Closing is the reverse transition: `CloseScreen` lets `InventoryLogic.DoneLogic()` finish, invokes the optional completion delegate, clears the logic and delegate, and pops the state.

This is a state factory, not an object to instantiate, subclass, or cache. Call it only while the campaign has a usable `Game.Current`, state manager, and source rosters.

## When to use and when not to use

- **Use it** when a campaign behavior, view model, or mod-owned interaction already has the real `ItemRoster`, `PartyBase`, `MobileParty`, `SettlementComponent`, or callback needed by a specific inventory mode.
- **Use `GetActiveInventoryState`** only when the caller already owns a flow that is running with `InventoryState` active. It asserts and returns `null` if another state is active.
- **Do not instantiate it.** The type is static, and its methods construct the state internally.
- **Do not treat `CloseScreen` as a harmless navigation call.** `DoneLogic`, inventory callbacks, trade listeners, and roster logic can commit or reject changes before the state is popped.
- **Do not pass arbitrary loot dictionaries or party objects.** The source expects the main party to be present in the loot dictionary and expects the rosters to agree with the selected mode.

## Public surface

### Inventory modes and filters

```csharp
public enum InventoryMode
{
    Default,
    Trade,
    Loot,
    Stash,
    Warehouse
}

[Flags]
public enum InventoryItemType
{
    None = 0,
    Weapon = 1,
    Shield = 2,
    HeadArmor = 4,
    BodyArmor = 8,
    LegArmor = 0x10,
    HandArmor = 0x20,
    Horse = 0x40,
    HorseHarness = 0x80,
    Goods = 0x100,
    Book = 0x200,
    Animal = 0x400,
    Cape = 0x800,
    Banner = 0x1000,
    HorseCategory = 0xC0,
    Armors = 0x83C,
    Equipable = 0x18FF,
    All = 0xFFF
}

public enum InventoryCategoryType
{
    None = -1,
    All,
    Armors,
    Weapon,
    Shield,
    HorseCategory,
    Goods,
    CategoryTypeAmount
}
```

`InventoryMode` controls the presentation contract. `InventoryItemType` is a bit mask used by inventory UI code; `HorseCategory`, `Armors`, `Equipable`, and `All` are combinations rather than new item records. `InventoryCategoryType` is the merchant filter passed into `InventoryLogic.Initialize`.

### State access and closing

```csharp
public static InventoryState GetActiveInventoryState()
public static void PlayerAcceptTradeOffer()
public static void CloseScreen(bool fromCancel)
public static InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)
```

`GetActiveInventoryState` reads `GameStateManager.Current.ActiveState`. If it is not an `InventoryState`, the source emits a failed assertion and returns `null`. `PlayerAcceptTradeOffer` forwards to the active logic's `SetPlayerAcceptTraderOffer` when available. `GetInventoryItemTypeOfItem` maps an `ItemObject.ItemTypeEnum` to a flag and returns `None` for a `null` item or an unmapped type.

`CloseScreen` optionally resets the logic when it came from cancellation. When `DoneLogic()` accepts the close, the helper invokes `DoneLogicExtrasDelegate`, clears both the delegate and `InventoryLogic`, and calls `Game.Current.GameStateManager.PopState()`.

## Inventory and transfer entry points

The public open methods fall into these source-defined groups:

| Entry points | State contract |
| --- | --- |
| `OpenScreenAsInventory`, `OpenScreenAsInventoryOf`, `OpenScreenAsInventoryOfSubParty`, `OpenScreenAsInventoryForCraftedItemDecomposition` | Build `InventoryMode.Default` logic for a player, party, sub-party, or crafting decomposition flow. |
| `OpenScreenAsTrade`, `ActivateTradeWithCurrentSettlement`, `OpenTradeWithCaravanOrAlleyParty` | Set `InventoryMode.Trade`, enable trading, and attach a settlement or caravan `InventoryListener`. |
| `OpenScreenAsLoot`, `OpenScreenAsStash`, `OpenScreenAsWarehouse`, `OpenScreenAsReceiveItems` | Select the corresponding mode or receive-item arrangement and push the state with the supplied item roster. |

Every entry point creates a fresh `InventoryState`, assigns `InventoryLogic`, optionally stores a completion delegate, and pushes that state. The helper does not reuse the currently active state.

## Real call-site examples

`PlayerTownVisitCampaignBehavior` uses the helper with a real settlement inventory and stash. These calls are state-changing UI entry points and require the player to be in the corresponding settlement flow:

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.Settlements;

InventoryScreenHelper.OpenScreenAsTrade(
    Settlement.CurrentSettlement.ItemRoster,
    Settlement.CurrentSettlement.Town);

InventoryScreenHelper.OpenScreenAsStash(
    Settlement.CurrentSettlement.Stash);
```

The same behavior opens the garrison and trade screens from its menu context, while `PlayerEncounter` and caravan behavior provide real loot rosters to `OpenScreenAsLoot`. The loot overload indexes the dictionary with `PartyBase.MainParty`, so the caller must include that key before invoking it.

Inventory view models use the item classifier against a real equipment element rather than constructing an `InventoryScreenHelper`:

```csharp
IsEquipableItem =
    (InventoryScreenHelper.GetInventoryItemTypeOfItem(
        newItem.EquipmentElement.Item)
     & InventoryScreenHelper.InventoryItemType.Equipable) != 0;
```

That source pattern from `SPItemVM` asks a filter question only. It does not equip the item or mutate an `ItemRoster`.

## Dependencies and ownership

- [InventoryState](../../campaign/InventoryState) is the pushed game state and stores the active [InventoryLogic](../../campaign/InventoryLogic) and completion delegate.
- [GameStateManager](../../core-extra/GameStateManager) owns `CreateState`, `PushState`, and `PopState`; the helper is a caller of that lifecycle, not its owner.
- [ItemRoster](../../campaign/ItemRoster), [PartyBase](../../campaign/PartyBase), and [MobileParty](../../campaign/MobileParty) supply the item and troop-side context used to initialize the logic.
- [ItemObject](../../core-extra/ItemObject) supplies the item type consumed by `GetInventoryItemTypeOfItem`.
- `MerchantInventoryListener` writes settlement gold through `SettlementComponent.ChangeGold`; `CaravanInventoryListener` writes `MobileParty.PartyTradeGold`.

## Risks and version boundaries

- `OpenScreenAsLoot` directly looks up `itemRostersToLoot[PartyBase.MainParty]`; a dictionary without that key fails before the state can be shown.
- Settlement trade uses a `MerchantInventoryListener` whose `SetGold` applies a delta through `SettlementComponent.ChangeGold`; do not replace it with direct field assignment in a custom flow.
- Caravan trade uses `PartyTradeGold`, while the settlement listener uses settlement component gold. They are not interchangeable ownership paths.
- `OpenScreenAsInventory` may populate a test inventory when `Game.Current.CheatMode` is enabled and the test base is not active. Do not use that path as a general item-provisioning API.
- `CloseScreen` can invoke completion delegates and `DoneLogic`; closing with the wrong `fromCancel` value can change whether the current transfer is reset or committed.
- The exact v1.4.5 flag values and mode names belong to this source version. Treat combination flags as masks, not as stable IDs for save data.

## Version note

This page follows v1.4.5 `InventoryScreenHelper.cs`. The helper is transient UI orchestration. Inventory ownership, pricing, capacity, and save behavior remain in the linked state, logic, roster, and campaign systems.

## Navigation

- [↑ API system index](../)
- [Sibling: PartyScreenHelper](../PartyScreenHelper)
- [Related: InventoryState](../../campaign/InventoryState)
- [Related: InventoryLogic](../../campaign/InventoryLogic)
- [Related: GameStateManager](../../core-extra/GameStateManager)
- [中文页面](../../../../zh/api/system/InventoryScreenHelper)
