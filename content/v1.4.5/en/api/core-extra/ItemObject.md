---
title: "ItemObject"
description: "The registered item definition for identity, components, and base trade data; it is not a party inventory count."
---
# ItemObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public sealed class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemObject.cs`

## Responsibility

`ItemObject` is the shared definition of one registered item: it supplies the name, type, components, base value, and weight, but it does not say how many copies a party owns.

## Mental model

Treat it as one row in the game's item catalogue, not as one slot in a backpack. XML content, default-item registration, or a module's loading phase creates and registers it. During a campaign, `MobileParty`, `Settlement`, and `EquipmentElement` reference that registered object. Inventory counts, modifiers, and quest-item state belong to `ItemRosterElement` or `EquipmentElement`, so changing the shared `ItemObject` cannot safely customize only one owner.

This is a `TaleWorlds.Core` content-definition object. It feeds [Equipment](../Equipment) and [EquipmentElement](../EquipmentElement), and it is read by [ItemRoster](../../campaign/ItemRoster), character equipment, trade models, and campaign behaviors. `StringId`, `Id`, and `IsReady` describe registration and load state; unloading or replacing a referenced object affects save resolution, equipment, and inventory UI together.

## When to use / when not to use

### Use it for

- Classifying content with `ItemType`, `IsFood`, `IsTradeGood`, `IsAnimal`, `IsMountable`, and component flags.
- Reading base economic and weight inputs such as `Value`, `Weight`, `Difficulty`, `Tier`, and `RelevantSkill`. A context-specific trade price still belongs to [Town](../../campaign/Town) and the active item-value model.
- Resolving a loaded item by stable `StringId` through [MBObjectManager](../../campaign-ext/MBObjectManager), then putting it into an [ItemRoster](../../campaign/ItemRoster) or an `EquipmentElement`.
- Selecting weapon, horse, armor, banner, or trade behavior through `HasWeaponComponent`, `HasHorseComponent`, `HasArmorComponent`, `HasBannerComponent`, and the other typed component accessors.

### Do not use it for

- Do not treat it as an inventory record. `Value`, `ItemComponent`, and similar properties are definition data, usually exposed with private setters; forcing a change would affect every owner.
- Do not cache `new ItemObject("grain")` before ObjectManager registration. An unregistered object has no normal XML, equipment, or save identity; use `DefaultItems.Grain` or a loaded ObjectManager result after content initialization.
- Do not use `Value` as the final transaction price or use `IsTransferable` to bypass inventory, tax, quest, and trade events.
- Do not pass an `ItemObject` where an API expects an `EquipmentElement` or `ItemRosterElement`; those types carry modifiers, quest state, and/or amount.

## Dependency map

```text
XML / DefaultItems / ObjectManager
        -> ItemObject (shared definition and StringId)
        -> EquipmentElement (Item + ItemModifier + CosmeticItem)
        -> Equipment / CharacterObject equipment slots
        -> ItemRosterElement (EquipmentElement + Amount)
        -> MobileParty / Settlement.ItemRoster
        -> GiveItemAction / SellItemsAction / InventoryLogic / Models
```

- **Upstream:** content loading, `DefaultItems`, and [MBObjectManager](../../campaign-ext/MBObjectManager) determine when this object can be resolved; [MBObjectBase](../../core/MBObjectBase) supplies object identity and readiness.
- **Composition:** [EquipmentElement](../EquipmentElement) combines the item with an `ItemModifier`, cosmetic item, and quest flag. [Equipment](../Equipment) places those values in battle, civilian, or stealth slots.
- **Inventory:** [ItemRoster](../../campaign/ItemRoster) merges `EquipmentElement` values by identity and amount and raises `RosterUpdatedEvent` for settlement components, markets, and behaviors.
- **Mutation flows:** [GiveItemAction](../../campaign-ext/GiveItemAction) and [SellItemsAction](../../campaign-ext/SellItemsAction) own cross-party/settlement transfers and their events or gold effects. Reading an `ItemObject` alone has no such side effects.

## Key members and timing

| Member | Use and boundary |
|---|---|
| `StringId` / `Id` / `IsReady` | Registration identity, save references, and load completion. Use a stable ID, not a localized display name, as a persistent key. |
| `Name` / `ItemType` / `ItemCategory` | UI and classification. `Name` is a `TextObject`, not a stable identifier. |
| `ItemComponent` and `WeaponComponent` / `HorseComponent` / `ArmorComponent` / `TradeItemComponent` | Typed domain data. Check the matching `Has*Component` property before reading a component. |
| `Value` / `Weight` / `Difficulty` / `Tier` / `RelevantSkill` | Definition and model inputs. Current price, skill effects, and transfer permission can depend on the active model and context. |
| `IsFood` / `IsTradeGood` / `IsAnimal` / `IsMountable` / `IsTransferable` | Select food, trade, livestock, mount, or inventory branches. `IsTransferable` consults `Game.Current.BasicModels`, so it is not a safe pre-initialization constant. |
| `InitializeTradeGood(name, meshName, category, value, weight, itemType)` | Content-initialization helper for creating a trade-good definition; it does not add an item to any inventory and does not replace registration. |

These members describe definition facts. Counts belong to `ItemRoster.AddToCounts`, equipment-slot replacement belongs to the owning character/equipment lifecycle, and cross-owner movement belongs to an Action.

## Real acquisition and examples

### Read a registered item and add it to the player party

`DefaultItems.Grain` is a registered default item and `MobileParty.MainParty.ItemRoster` is the current player party's authoritative roster. This changes the roster count, not the shared definition:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

ItemObject grain = DefaultItems.Grain;
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 5);
```

For an item registered by XML or another module, resolve it after content loading and check the result:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject hardwood = MBObjectManager.Instance.GetObject<ItemObject>("hardwood");
if (hardwood != null && hardwood.IsReady && hardwood.IsTransferable)
{
    MobileParty.MainParty.ItemRoster.AddToCounts(hardwood, 10);
}
```

### Read the definition from an equipment element

When code has a hero's battle equipment, `EquipmentElement.Item` is the `ItemObject`; its modifier and any roster amount are separate data:

```csharp
EquipmentElement mainHand = Hero.MainHero.BattleEquipment[EquipmentIndex.WeaponItemBeginSlot];
ItemObject equippedItem = mainHand.Item;
if (equippedItem != null && equippedItem.HasWeaponComponent)
{
    WeaponComponentData weapon = equippedItem.PrimaryWeapon;
}
```

For a cross-party or settlement transfer, pass the current `ItemRosterElement` to [GiveItemAction](../../campaign-ext/GiveItemAction) or [SellItemsAction](../../campaign-ext/SellItemsAction) instead of manually editing one side. That preserves events, gold, tax, and market state.

## Risks and lifecycle

- **ObjectManager identity:** `ItemObject` is referenced by `StringId`/`MBGUID` from `EquipmentElement` and saves. Putting an unregistered or unready object into equipment or a roster can produce a missing object, assertion, or bad save/load resolution.
- **Shared-definition pollution:** One `ItemObject` is shared by every owner. A definition change also changes market, equipment, AI, and UI interpretation; do not use reflection to mutate its private setters.
- **Initialization:** Do not read model-backed properties such as `IsTransferable` or `Tier` before `Game.Current`, ObjectManager, and basic models are initialized. Run such reads after the SubModule/campaign initialization boundary.
- **Save boundary:** The item identity is saved, while the inventory amount lives in `ItemRosterElement.Amount` and modifiers live in `EquipmentElement`. New custom content needs a stable ID, component, and registration order or old saves can resolve to the wrong item or null.
- **Transfer side effects:** Direct `AddToCounts` is suitable for an explicit single-roster adjustment. Cross-container movement must not only subtract one side; otherwise `HeroOrPartyGaveItem`, `OnItemSold`, gold, and caches will diverge.

## Version note

This page follows the v1.4.5 `ItemObject.cs` contract, including typed components, `Tierf`/`Tier`, and `IsTransferable`. v1.3.15 content registration and public members can differ; a cross-version mod should target the actual assembly's registration and component contract rather than assuming the 1.4.5 shape is a stable ABI.

## Navigation

- **↑ Parent:** [Core-extra API](./)
- **↔ Sibling:** [Equipment](../Equipment) · [EquipmentElement](../EquipmentElement) · [ItemModifier](../ItemModifier)
- **Related:** [ItemRoster](../../campaign/ItemRoster) · [MobileParty](../../campaign/MobileParty) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [MBObjectBase](../../core/MBObjectBase)
