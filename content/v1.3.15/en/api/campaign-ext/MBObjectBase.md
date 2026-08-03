---
title: "MBObjectBase"
description: "The root of registered Bannerlord objects: StringId, MBGUID identity, XML initialization, and save-load lifecycle hooks."
---
# MBObjectBase

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public class MBObjectBase`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.ObjectSystem/MBObjectBase.cs`

## Overview

`MBObjectBase` is the root contract for objects registered by [MBObjectManager](../MBObjectManager/), looked up by ID, created from XML, and potentially stored as object references in a save. `Hero`, `ItemObject`, `Settlement`, `Clan`, `Kingdom`, and `MobileParty` all enter the world through this object-system path.

It is not a business DTO that a mod should construct and use outside the manager. Its job is to connect a type to three contracts:

1. `StringId` is the logical identity used by XML and `GetObject<T>(string)`.
2. `Id` is the session-assigned `MBGUID` used for internal object-graph references.
3. `Initialize`, `Deserialize`, `AfterRegister`, `OnBeforeLoad`, `PreAfterLoad`, and `AfterLoad` divide XML loading and save restoration into explicit hooks.

## Mental Model

Treat this class as an entry in an object registry, not as an ordinary DTO. Once registered, the manager maintains a `StringId` table, an `MBGUID` table, and a per-type list. `OnRegistered` marks the object registered and invokes `AfterRegister`. XML loading creates or retrieves a presumed object, then calls `Deserialize` and `AfterInitialized`; an object that never becomes ready is removed by `UnregisterNonReadyObjects`.

`StringId` is the stable mod-facing lookup key. `Id` is not a version-stable business key. Save an association as a restorable object reference or `StringId`, and never retain an object instance from a previous campaign session in a static field.

## Access and lifecycle

The normal access path is a manager lookup:

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

For XML, the base `Deserialize` calls `Initialize` and reads the `id` attribute into `StringId`; a subclass should call `base.Deserialize` before reading its own attributes and references. During save loading, `OnBeforeLoad` re-registers the object, while `PreAfterLoad` and `AfterLoad` are broadcast after the manager has restored the object records. Resolve cross-object runtime references in `AfterLoad`.

## Overridable members

| Member | Role | Appropriate use |
| --- | --- | --- |
| `StringId` / `Id` | logical identity / session GUID | lookup and references; never treat `Id` as a version-stable key |
| `Initialize()` | defaults for new or XML objects | establish local defaults; do not assume every reference is loaded |
| `Deserialize(MBObjectManager, XmlNode)` | populate from XML | call the base method first; defer complex references |
| `AfterRegister()` | callback after registration | initialize against registered dependencies; avoid recursive registration |
| `OnBeforeLoad()` | before binary members are restored | prepare for restoration; not a “everything exists” phase |
| `PreAfterLoad()` / `AfterLoad()` | two post-load phases | rebind cross-object runtime references in `AfterLoad` |
| `GetName()` | defaults to a `TextObject` from `StringId` | override when the business type has a localized name |

## Real example: register and create a custom object

The following uses the real `RegisterType<T>` and `CreateObject<T>(string)` shapes. Type registration belongs in the game's `OnRegisterTypes` or equivalent registration stage; object creation belongs after that type is registered.

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

// Run from Game.OnRegisterTypes or the equivalent game-type registration stage.
MBObjectManager.Instance.RegisterType<RelicObject>(
    "Relic", "Relics", 220u, autoCreateInstance: false, isTemporary: false);

// Run after type registration has completed.
RelicObject relic = MBObjectManager.Instance.CreateObject<RelicObject>("my_mod_relic_01");
relic.MarkDiscovered();
RelicObject sameRelic = MBObjectManager.Instance.GetObject<RelicObject>("my_mod_relic_01");
```

`[SaveableField]` alone does not add a new type to the save definition table; [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) must also register `RelicObject`. A runtime-only object can omit save members, but it still must obey registration and unique-ID rules.

## Risks and crash boundaries

- **A duplicate `StringId` is not preserved.** `RegisterObject` keeps looking for an unused numeric suffix and rewrites the object's `StringId`. Use a `my_mod_` prefix, and use the object's actual ID after creation instead of assuming a collision throws.
- **Do not use `MBGUID` as a persistent business ID.** The manager allocates it from type and counters; load order or module changes can invalidate that assumption.
- **Do not resolve references too early in `Deserialize`.** XML references may point to objects that are not fully initialized. Defer them to `AfterLoad` to avoid null and load-order failures.
- **Incomplete presumed objects are removed.** Custom XML or manual `RegisterPresumedObject` calls must finish initialization or `UnregisterNonReadyObjects` will remove the object.
- **Save IDs are a type-level contract.** Custom members need unique, stable `LocalSaveId` values and a definer; changing an ID or changing a member type in place can make old saves restore incorrectly.
- **Do not cache objects across sessions.** `ClearAllObjects` empties the current registry; after a load, query by `StringId` or use a reference restored by the save system.

## Cross-version notes

The 1.3.15 and 1.4.5 `MBObjectBase` lifecycle and `MBObjectManager` registration, lookup, and XML-loading APIs are substantially the same. The 1.4.5 source retains the `AfterLoad` and `OnBeforeLoad` phases. When targeting both versions, verify the concrete module types separately; a stable base class does not imply identical type tables.

## Dependencies

- Upstream: [MBObjectManager](../MBObjectManager/) owns type registration, object tables, and XML entry points.
- Persistence: [SaveableFieldAttribute](../../save-system/SaveableFieldAttribute/) and [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) define custom members.
- Campaign host: [CampaignBehaviorBase](../CampaignBehaviorBase/) is a common lifecycle host for reading and changing registered objects.
- Concrete consumers: [Hero](../../campaign/Hero/) and [ItemObject](../../core/ItemObject/) document business constraints; messages can use [TextObject](../../localization/TextObject/).

## Navigation

- Parent: [campaign-ext API](./)
- Siblings: [MBObjectManager](../MBObjectManager/) · [IDataStore](../IDataStore/)
- Related: [SaveManager](../../save-system/SaveManager/) · [Campaign](../../campaign/Campaign/)
