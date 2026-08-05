---
title: "InventoryMode"
description: "The v1.4.5 mode contract stored on InventoryState for default, trade, loot, stash, and warehouse presentations."
---
# InventoryMode

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum InventoryMode`  
**Owner:** [InventoryScreenHelper](../InventoryScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## Responsibility

`InventoryMode` labels the inventory presentation that `InventoryScreenHelper` configures on [InventoryState](../../campaign/InventoryState). It is a transient UI contract consumed by [InventoryLogic](../../campaign/InventoryLogic), not a save identifier or an item category.

## Mental model

The helper chooses a mode before it initializes logic and pushes the state:

```
InventoryScreenHelper entry -> InventoryState.InventoryMode -> InventoryLogic presentation rules
```

`Default` covers ordinary inventory and transfer views. `Trade`, `Loot`, `Stash`, and `Warehouse` select their corresponding roster, listener, and capacity behavior.

## Values

| Value | Meaning in v1.4.5 |
| --- | --- |
| `Default` | Ordinary inventory, party inventory, receive-item, or crafted-item decomposition presentation. |
| `Trade` | Trading with a settlement, caravan, or alley party. |
| `Loot` | Taking items from a loot roster through the inventory presentation. |
| `Stash` | Moving items between the player party and a stash roster. |
| `Warehouse` | Moving items with a warehouse capacity contract. |

## Real use

The active campaign state exposes the mode while the inventory screen is running:

```csharp
Game game = Game.Current;
InventoryState state = InventoryScreenHelper.GetActiveInventoryState();
bool isTrade = state != null
    && state.InventoryMode == InventoryScreenHelper.InventoryMode.Trade;
```

The enum is normally assigned by `OpenScreenAsTrade`, `OpenScreenAsLoot`, `OpenScreenAsStash`, or `OpenScreenAsWarehouse`; mods should select the helper entry point instead of pushing a hand-built state with an unrelated mode.

## Dependencies

- [InventoryScreenHelper](../InventoryScreenHelper) owns the mode assignment.
- [InventoryState](../../campaign/InventoryState) stores the active mode.
- [InventoryLogic](../../campaign/InventoryLogic) consumes the mode during initialization and transfer behavior.
- [GameStateManager](../../core-extra/GameStateManager) owns the state stack that makes the mode active.

## Risks and version boundary

`InventoryMode` is not a permission check. `Trade` does not create a merchant listener by itself, and `Loot` does not supply a loot roster by itself. Those contracts come from the helper method that initialized the state. The names and values documented here follow v1.4.5 and should not be persisted as a cross-version numeric schema.

## Navigation

- [↑ API system index](../)
- [Owner: InventoryScreenHelper](../InventoryScreenHelper)
- [Related: InventoryState](../../campaign/InventoryState)
- [中文页面](../../../../zh/api/system/InventoryMode)
