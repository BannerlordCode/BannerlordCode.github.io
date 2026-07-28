---
title: "ItemObject"
description: "Item type blueprint: weapon/armor/mount/food/trade good MBObject definition. Inventory counts live on ItemRoster, not on ItemObject itself."
---
# ItemObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.Core/ItemObject.cs`

## One-line job

**Definition / template for one item kind** (XML-loaded `MBObject`): value, weight, type, meshes, and `ItemComponent` (weapon / armor / horse / food, …). It does **not** mean "how many are in a bag".

## Mental Model

```
XML <Item id="grain" ... />
        │
        ▼
   ItemObject  (blueprint, one global instance per id)
        │
        ├── ItemRosterElement(item, count)     ← party / shop stock
        ├── EquipmentElement(item, modifier) ← worn on a body
        └── Agent gear / loot / craft instances
```

| Dimension | Meaning |
|-----------|---------|
| Who creates | Main-data XML + `MBObjectManager`; trade goods can use `InitializeTradeGood`; crafting can use `InitAsPlayerCraftedItem` |
| Who holds | ObjectManager type list; referenced by Roster / Equipment |
| Layer | Core base object; Campaign and Mission share the same blueprint |
| Lifetime | Loaded with modules; crafted items can register at runtime |
| What it is not | **Not** a stack count; counts live on `ItemRoster.AddToCounts` |

### When to use

- Resolve by id: `MBObjectManager.Instance.GetObject<ItemObject>("grain")`.
- Type checks: `IsFood`, `IsTradeGood`, `HasWeaponComponent`, `ItemType`.
- Add/remove stock on parties/shops: get `ItemObject`, then mutate `ItemRoster`.
- Read base economy fields: `Value`, `Weight`, `ItemCategory`.
- Ammo kind: `GetAmmoTypeForItemType`.

### When not to use / do not write fields directly

| Don't | Why | Do instead |
|-------|-----|------------|
| Change global `grain.Value` for one trade | Template is global; whole-save economy shifts | `ItemModifier`, price Model, or trade logic overrides |
| `new ItemObject()` without registration as loot | Save / net / UI cannot resolve id | XML or `MBObjectManager` create + register |
| Treat `ItemObject` as "player backpack" | No quantity | `MobileParty.ItemRoster` / `PartyBase` |
| `AddWeapon` on a shared blueprint instance | Pollutes that id for the whole game | Clone / craft-only instances |
| Call `PrimaryWeapon` on non-weapons | NRE | Guard with `HasWeaponComponent` |

## Dependencies

### Upstream

| Type | Relation |
|------|----------|
| `MBObjectManager` | Load, lookup, type lists |
| XML items | Mesh names, type, component child nodes |
| `ItemCategory` | Economy category |

### Downstream

| Type | Relation |
|------|----------|
| `ItemRoster` / [`MobileParty`](../../campaign/MobileParty) | Stock counts |
| `Equipment` / [`Hero`](../../campaign/Hero) / `CharacterObject` | Worn gear |
| `WeaponComponent` / `ArmorComponent` / `HorseComponent` / `TradeItemComponent` | Concrete behavior |
| Mission equipment and projectiles | Combat presentation |

### Models / Save

| Channel | Relation |
|---------|----------|
| Models | Price, demand, craft difficulty often read Item fields then compute |
| Save | Inventories store **item ref + count + modifier**; blueprints resolve by StringId. Crafted items need a restorable id/hash (`GetCraftedItemObjectFromHashedCode`) |

## Risks and crash boundaries

| Risk | Result | Mitigation |
|------|--------|------------|
| Mutate shared template numbers | Map-wide economy / balance breaks | Treat as read-only recipe |
| Unregistered item into Roster | Load loss / exceptions | Proper registration |
| Typo in `GetObject` id | null → NRE | Null checks |
| Duplicate StringId across modules | Override / conflict | Unique prefixes |
| Feed non-food into food tick | Logic bugs | `IsFood` / `HasFoodComponent` |

## Key members (purpose + timing)

### Lookup and factories

| Member | Purpose | Timing |
|--------|---------|--------|
| `MBObjectManager.Instance.GetObject<ItemObject>(id)` | Main lookup | Any loaded stage |
| `GetObjectTypeList<ItemObject>()` | Walk all | Debug / encyclopedia |
| `InitializeTradeGood(...)` | Init trade-good fields | Dynamic trade goods |
| `InitAsPlayerCraftedItem(ref item)` | Mark player-crafted | After craft |
| `GetCraftedItemObjectFromHashedCode` | Crafted by hash | Load / share |
| `GetItemFromWeaponKind` | Weapon kind → item | Low-level weapon tables |
| `GetAmmoTypeForItemType` | Ammo type | Before shooting |
| `GetAirFrictionConstant` | Projectile drag | Projectiles |

### Type and components

| Member | Purpose |
|--------|---------|
| `ItemType` / `Type` | Coarse enum |
| `ItemCategory` / `DetermineItemCategoryForItem` | Economy category |
| `ItemFlags` / `SetItemFlagsForCosmetics` | Flags |
| `HasWeaponComponent` / `WeaponComponent` / `PrimaryWeapon` / `Weapons` / `GetWeaponWithUsageIndex` | Weapons |
| `HasArmorComponent` / `ArmorComponent` | Armor |
| `HasHorseComponent` / `HorseComponent` / `IsMountable` / `IsAnimal` | Mounts / animals |
| `HasFoodComponent` / `FoodComponent` / `IsFood` | Food |
| `IsTradeGood` / `IsBannerItem` / `IsUniqueItem` / `NotMerchandise` | Circulation and specials |
| `IsCraftedWeapon` / `IsCraftedByPlayer` / `WeaponDesign` / `Tier` | Crafting |

### Economy and presentation

| Member | Purpose |
|--------|---------|
| `Name` / `Value` / `Weight` / `Difficulty` / `Effectiveness` / `Appearance` | Base numbers |
| `Culture` | Culture tag |
| `MultiMeshName` / `HolsterMeshName` / `BodyName` / `PrefabName`, … | Asset names |
| `IsCivilian` / `IsStealthItem` / `IsTransferable` | Use contexts |

## Real examples

### Example 1: Give items to the main party

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

public void GiveItemToMainParty(string itemId, int count)
{
    ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>(itemId);
    if (item == null || MobileParty.MainParty == null || count == 0)
    {
        return;
    }
    MobileParty.MainParty.ItemRoster.AddToCounts(item, count);
}
```

### Example 2: List all food items

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

public void ListFoods()
{
    foreach (ItemObject item in MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
    {
        if (item.IsFood)
        {
            InformationManager.DisplayMessage(
                new InformationMessage($"{item.StringId}: {item.Name}"));
        }
    }
}
```

### Example 3: Does this weapon need ammo?

```csharp
using TaleWorlds.Core;

public bool NeedsAmmo(ItemObject item)
{
    if (item == null || !item.HasWeaponComponent)
    {
        return false;
    }
    ItemObject.ItemTypeEnum ammo = ItemObject.GetAmmoTypeForItemType(item.ItemType);
    return ammo != ItemObject.ItemTypeEnum.Invalid;
}
```

### Example 4: Find a cheap trade good in campaign

```csharp
using System.Linq;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

public ItemObject FindCheapTradeGood(int maxValue)
{
    return MBObjectManager.Instance.GetObjectTypeList<ItemObject>()
        .FirstOrDefault(i => i.IsTradeGood && !i.NotMerchandise && i.Value <= maxValue);
}
```

## Working with campaign objects

| Scene | Correct path |
|-------|--------------|
| Give player supplies | `MobileParty.MainParty.ItemRoster.AddToCounts(item, n)` |
| Equip a hero | Change `Hero` / `CharacterObject` `Equipment` slots (prefer official equip APIs) |
| Shop buy/sell | Read pricing fields on `ItemObject` + town market logic / trade Actions; do **not** rewrite template `Value` |
| Quest reward unique items | Prefer existing ids or module-XML new ids; crafted items restore via hash |
| "Can this feed the party?" | `IsFood` or `HasFoodComponent`, then party food tick |

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

// Daily Behavior sketch: top up grain when low (shows lookup path)
public void EnsureMainPartyHasSomeFood()
{
    if (Campaign.Current == null || MobileParty.MainParty == null)
    {
        return;
    }
    MobileParty main = MobileParty.MainParty;
    if (main.ItemRoster.TotalFood > 10)
    {
        return;
    }
    ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
    if (grain != null)
    {
        main.ItemRoster.AddToCounts(grain, 20);
    }
}
```

## Cross-version notes

- **1.3.x / 1.4.5:** `GetObject` + Roster pattern is stable.
- **1.4.5:** Crafting and `WeaponDesign` are richer; stealth item flags show up more often.
- Custom items: module XML + unique `id`. Avoid runtime edits to vanilla templates.

## ↑ Parent Navigation

- [core section](./)
- [API section](../)
- [SDK overview](../../../architecture/sdk-overview)

## Sibling Navigation

| Page | Relation |
|------|----------|
| [core-extra/ItemObject](../../core-extra/ItemObject) | Path anchor for the same type |
| [MobileParty](../../campaign/MobileParty) | Holds item bags |
| [CharacterObject](../../campaign/CharacterObject) | Equipment references items |
| [Hero](../../campaign/Hero) | Character equipment |
| [PartyBase](../../campaign/PartyBase) | Roster root |

## See also

- [Asset pipeline](../../../guide/asset-pipeline): item XML
- [Crash boundaries § MBObjectManager](../../../architecture/crash-boundaries)
- [Campaign system guide](../../../guide/campaign-system)
