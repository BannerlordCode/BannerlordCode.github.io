---
title: "ItemObject"
description: "ItemObject (Core) navigation anchor: full handwritten guide lives at core/ItemObject; this page is not a signature wall."
---
# ItemObject

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class ItemObject : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.Core/ItemObject.cs`

## One-line job

Item **type blueprint** (not a backpack stack). This page is a path anchor in the `core-extra` tree. Full mental model, dependencies, risks, and real examples live on the core page.

## Full documentation (read this)

→ **[core / ItemObject (full handwritten page)](../../core/ItemObject)**

That page covers:

- Blueprint vs `ItemRoster` / `EquipmentElement` mental model  
- When to use / when not to mutate global templates  
- Dependencies on `MobileParty`, `MBObjectManager`, and component systems  
- Shared `Value` edits, unregistered ids, bad-save risks  
- Real `csharp` examples: `GetObject`, give grain, ammo type  

## 30-second cheat sheet

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
if (grain != null && MobileParty.MainParty != null)
{
    MobileParty.MainParty.ItemRoster.AddToCounts(grain, 50);
}
```

| Task | Entry |
|------|-------|
| Resolve by id | `MBObjectManager.Instance.GetObject<ItemObject>(id)` |
| Change count | `party.ItemRoster.AddToCounts(item, delta)` |
| Food / trade good | `item.IsFood` / `item.IsTradeGood` |
| Weapon component | `item.HasWeaponComponent` → `PrimaryWeapon` |

## Mental model (summary)

`ItemObject` is the runtime object for an XML item definition. "50 grain" on a party is a roster count; a sword on a hero is an `EquipmentElement`. Do not treat the template as instance inventory.

### When to use / when not

- **Use:** look up blueprints, read `Value` / `Weight` / `ItemType`, add or remove on a Roster.  
- **Don't:** rewrite global `grain.Value` for a one-off player effect; `new ItemObject()` without registration into the save graph.

## Dependencies

| Direction | Link |
|-----------|------|
| Full guide | [ItemObject (core)](../../core/ItemObject) |
| Downstream stock | [MobileParty](../../campaign/MobileParty) |
| Equipment side | [Hero](../../campaign/Hero), [CharacterObject](../../campaign/CharacterObject) |
| Register and find | `MBObjectManager` (see core page and [crash boundaries](../../../architecture/crash-boundaries)) |

## Risks (summary)

Polluting shared templates, unregistered StringId, dereferencing null `GetObject` → economy chaos / lost items on load / NRE. Full table: [core page risks](../../core/ItemObject#risks-and-crash-boundaries).

## ↑ Parent Navigation

- [core-extra section](./)
- [API section](../)
- [SDK overview](../../../architecture/sdk-overview)

## Sibling Navigation

| Page | Relation |
|------|----------|
| [ItemObject (core full page)](../../core/ItemObject) | Body for this anchor |
| [MobileParty](../../campaign/MobileParty) | Item bags |
| [PartyBase](../../campaign/PartyBase) | Roster holder |

## See also

- [core/ItemObject](../../core/ItemObject): **only full handwritten body**
- [Asset pipeline](../../../guide/asset-pipeline)
