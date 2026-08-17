---
title: "MBObjectBase"
description: "Root base class for registerable game objects in TaleWorlds.ObjectSystem: provides StringId, MBGUID, XML initialization, and the save/load lifecycle contract that every world object (Hero, ItemObject, Settlement, …) flows through."
---

# MBObjectBase

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public class MBObjectBase`  
**Base:** `System.Object`  
**Source:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectBase.cs`

## Overview

`MBObjectBase` is the root class for objects that are **registered by [MBObjectManager](../MBObjectManager/), looked up by id, created from XML, and may enter the save graph as object references**. `Hero`, `ItemObject`, `Settlement`, `Clan`, `Kingdom`, and `MobileParty` all reach the object table through this path.

It is **not** a business base class you `new` freely and use as a DTO. Its real job is to plug an object into three foundational contracts:

1. `StringId` is the logical identity used by XML and `GetObject<T>(string)`.
2. `Id` is the `MBGUID` assigned by the object manager for this session — used for internal references inside the object graph.
3. `Initialize`, `Deserialize`, `AfterRegister`, `OnBeforeLoad`, `PreAfterLoad`, `AfterLoad` split XML loading and save restoration into overridable phases.

## Mental Model

Think of it as a **registration card in an object ledger**, not an ordinary DTO. Once registered, the manager maintains a `StringId` table, an `MBGUID` table, and per-type lists. `OnRegistered` is what actually marks the object as registered and calls `AfterRegister`. The XML path first creates or obtains a *presumed* object, then calls `Deserialize` and `AfterInitialized`. If an object never becomes ready, `UnregisterNonReadyObjects` removes it.

`StringId` is the stable entry point for mod code; `Id` is **not** a cross-load business key. When persisting cross-save associations, store a rebuildable object reference or the `StringId` — never cache last playthrough's object instance in a static field.

## Acquisition & Lifecycle

You normally obtain an already-registered object through the manager:

```csharp
MBObjectManager objects = MBObjectManager.Instance;
Hero lord = objects.GetObject<Hero>("lord_1");
ItemObject sword = objects.GetObject<ItemObject>("iron_sword_t2");

if (lord != null && sword != null && lord.IsReady)
{
    TextObject message = new TextObject("{=mod_found}Found {ITEM} for {HERO}.");
    message.SetTextVariable("ITEM", sword.Name);
    message.SetTextVariable("HERO", lord.Name);
    InformationManager.DisplayMessage(new InformationMessage(message.ToString()));
}
```

During XML loading, the base `Deserialize` calls `Initialize()` and writes `StringId` from the `id` attribute; a subclass should call `base.Deserialize` first, then read its own XML attributes and object references. During save loading, `OnBeforeLoad` brings the object back into the manager, and `PreAfterLoad` / `AfterLoad` are dispatched by the manager only after all types have been restored. Cross-object references must be resolved no earlier than `AfterLoad`.

## Overridable Members

| Member | Purpose | What to do / avoid |
| --- | --- | --- |
| `StringId` / `Id` | Logical identity / per-session GUID | Query objects, express references; never treat `Id` as a version-stable key |
| `Initialize()` | Default init for new or XML objects | Set defaults; do **not** assume referenced objects are already loaded |
| `Deserialize(MBObjectManager, XmlNode)` | Fill object from XML | Call base first, then read XML; defer complex references to `AfterLoad` |
| `AfterRegister()` | Callback after registration completes | Initialize things that depend on registered objects; avoid recursive registration |
| `OnBeforeLoad()` | Before binary member restoration | Prepare for restore; do **not** treat it as "all objects exist" stage |
| `PreAfterLoad()` / `AfterLoad()` | Two phases after global restore | Rebind cross-object runtime references in `AfterLoad` |
| `GetName()` | Default builds a `TextObject` from `StringId` | Override in business subclasses when a localized name is needed |

## Real Example: Register and Create a Custom Object

The call shapes below correspond to the real `MBObjectManager.RegisterType<T>` and `CreateObject<T>(string)` APIs. Type registration belongs in the game's `OnRegisterTypes` / equivalent registration phase; object creation must run after the type is registered.

```csharp
public sealed class RelicObject : MBObjectBase
{
    [SaveableField(1)]
    private int _discoveredCount;

    public RelicObject() { }

    public RelicObject(string stringId) : base(stringId) { }

    public void MarkDiscovered()
    {
        _discoveredCount++;
    }
}

// Run during Game.OnRegisterTypes or the equivalent game-type registration phase
MBObjectManager.Instance.RegisterType<RelicObject>(
    "Relic", "Relics", 220u, autoCreateInstance: false, isTemporary: false);

// Run after the type is registered
RelicObject relic = MBObjectManager.Instance.CreateObject<RelicObject>("my_mod_relic_01");
relic.MarkDiscovered();
RelicObject sameRelic = MBObjectManager.Instance.GetObject<RelicObject>("my_mod_relic_01");
```

`[SaveableField]` by itself does **not** add the new type to the save-definition table; you also need a [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) that registers `RelicObject`. If the object only needs to exist at runtime, you may omit save members, but you must still obey object-registration and unique-id rules.

## Risks & Save-Corruption Boundaries

- **A duplicate `StringId` is not preserved as-is.** `RegisterObject` keeps looking for a free id from a numeric suffix and rewrites the object's `StringId`. Use a `my_mod_` prefix and rely on the object's *actual* `StringId` after creation; do not assume a collision throws.
- **Do not treat `MBGUID` as a persistent business id.** It is assigned by the manager per type and counter; it should not be an external association key when load order or the module set changes.
- **Do not dereference too early inside `Deserialize`.** Objects referenced in XML may not be fully initialized yet; leave string / deferred references for `AfterLoad`, or you get null references and load-order-dependent errors.
- **Unfinished presumed objects get cleared.** Custom XML or manual `RegisterPresumedObject` must eventually finish initialization, or `UnregisterNonReadyObjects` removes it.
- **Save indices are part of the type contract.** Custom fields need a unique, stable `LocalSaveId` and a definer; changing the index or swapping the field type outright breaks old saves.
- **Do not cache cross-playthrough instances.** `ClearAllObjects` empties the current object table; the next load should re-obtain objects via `StringId` or references already restored by the save system.

## Cross-Version Notes

The `MBObjectBase` lifecycle and the `MBObjectManager` registration / query / XML-loading APIs are essentially identical between 1.3.15 and 1.4.5. The 1.4.5 source still explicitly keeps the two phases `AfterLoad` and `OnBeforeLoad`. When you target both versions, still confirm individually whether a specific derived class exists in each; do not assume the module type table is the same just because the base class matches.

## Dependencies

- **Upstream:** [MBObjectManager](../MBObjectManager/) owns type registration, the object table, and the XML entry point.
- **Save:** [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) and [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) define custom members.
- **Campaign use:** [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase/) is the common host that reads and mutates registered objects during the campaign lifecycle.
- **Typical downstream:** [Hero](../../campaign/Hero/) and [ItemObject](../../core/ItemObject/) show the business constraints of concrete objects; message text routes to [TextObject](../../localization/TextObject/).

## Navigation

- Parent: [campaign-ext API](./)
- Sibling: [MBObjectManager](../MBObjectManager/) · [IDataStore](../../campaign/IDataStore/)
- Related: [SaveManager](../../save-system/SaveManager/) · [Campaign](../../campaign/Campaign/)
