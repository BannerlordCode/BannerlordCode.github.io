---
title: "MBObjectManager"
description: "The central object registry of TaleWorlds.ObjectSystem: it registers types, creates objects, looks them up by StringId, and drives XML loading and cleanup."
---

# MBObjectManager

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public sealed class MBObjectManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## Overview

`MBObjectManager` is the central registry for `MBObjectBase` objects. A game type first declares, via `RegisterType<T>`, which C# type corresponds to a given XML element; afterward the XML loader and mod code access those instances through `RegisterObject`, `CreateObject`, `GetObject`, and the per-type list accessors.

It solves the problem of "getting an object into the world and keeping it findable", not campaign business Actions, and not a global service locator for arbitrary objects. When you need to change the business state of a Hero, Settlement, or Kingdom, move to the matching Action/Model; the manager only gets you the correct object.

## Mental Model

Think of it as three synchronized tables:

- Type table: `RegisterType<T>(classPrefix, classListPrefix, typeId, ...)` binds the XML name, the list name, the type id, and the creation policy together.
- Identity table: every registered object is indexed both by `StringId` and by `MBGUID`.
- Type list: `GetObjectTypeList<T>()` returns the set of already-registered objects of that type, for loading, iteration, and diagnostics.

XML loading usually first obtains a presumed object, calls `Deserialize`, then `AfterInitialized`. Once all objects are restored, the manager broadcasts `PreAfterLoad` and `AfterLoad` per type. Therefore "the object is in the table" does not mean "all cross-object references are already usable".

## How to Obtain

The active object manager usually comes from `MBObjectManager.Instance`; it is created by `MBObjectManager.Init()` during game initialization. Mod code should not keep its own alternate instance.

```csharp
MBObjectManager objects = MBObjectManager.Instance;
Hero mainHero = objects.GetObject<Hero>("main_hero");
Settlement town = objects.GetObject<Settlement>(s => s.IsTown);

if (mainHero != null && town != null)
{
    MBReadOnlyList<Hero> heroes = objects.GetObjectTypeList<Hero>();
    foreach (Hero hero in heroes)
    {
        if (hero.IsLord && hero.Clan != null)
        {
            TaleWorlds.Library.Debug.Print(hero.StringId);
        }
    }
}
```

Lookup by `StringId` is the clearest common path; predicate lookup is for "the first object matching a condition", and `GetObjects<T>(predicate)` is for a filtered set. A reference to a non-existent object returns `null` — do not assume a module's XML always provides the target object.

## Key API

| API | Responsibility | When to use |
| --- | --- | --- |
| `Init()` / `Destroy()` | Create or destroy the manager instance | Controlled by the game lifecycle; mods should not reset it arbitrarily |
| `RegisterType<T>(...)` | Register an `MBObjectBase` derived type and its XML name | During the game type's `OnRegisterTypes` phase |
| `CreateObject<T>(string)` | Construct, assign `StringId`, and register an object | Create a runtime object after its type is registered |
| `RegisterObject<T>(T)` | Register an already-constructed object | When you need a custom construction flow |
| `RegisterPresumedObject<T>(T)` | Register a presumed object during XML/restore | Only for load code that truly understands the presumed lifecycle |
| `GetObject<T>(string)` | Look up by logical id | First choice when you know a stable `StringId` |
| `GetObject<T>(Func<T,bool>)` | Find the first matching object | When you have a condition but no id |
| `GetObjectTypeList<T>()` | Get the registered type list | Iteration, validation, and index building |
| `LoadXML` / `LoadXml` | Merge XML and create objects | During game loading; do not repeat a full load at runtime |
| `PreAfterLoad()` / `AfterLoad()` | Broadcast the global save-restore phase | Called by the load pipeline for object lifecycles |
| `ClearAllObjects()` | Clear the current object table | Session switch/destroy phase; old references become invalid afterward |

## Real Example: Register a Custom Type and Obtain an Instance

The registration shape below matches how `Game`'s `OnRegisterTypes` is used in source; `typeId` belongs to the object system's global type-id namespace and must not collide with other types.

```csharp
public sealed class RelicObject : MBObjectBase
{
    public RelicObject() { }
    public RelicObject(string stringId) : base(stringId) { }
}

protected override void OnRegisterTypes(MBObjectManager objectManager)
{
    base.OnRegisterTypes(objectManager);
    objectManager.RegisterType<RelicObject>(
        "Relic", "Relics", 220u, autoCreateInstance: false, isTemporary: false);
}

RelicObject relic = MBObjectManager.Instance.CreateObject<RelicObject>("my_mod_relic_01");
RelicObject lookedUp = MBObjectManager.Instance.GetObject<RelicObject>(relic.StringId);
```

`CreateObject` internally constructs the object, registers it, triggers `OnRegistered`, and notifies any added object-manager handlers. Do not `new` the same object yourself and then treat it as a registered object; when you need manual registration, use `RegisterObject` and check the returned object.

## XML and Save Boundaries

`LoadXml` first locates the registered type by the list element, then obtains the presumed object by the XML `id`, and calls that object's `Deserialize` and `AfterInitialized`. `CreateObjectFromXmlNode` is the single-node version. Objects resolve other objects inside `AfterLoad` because the manager's `PreAfterLoad`/`AfterLoad` run uniformly only after every type record is complete.

`UnregisterNonReadyObjects` records and removes presumed objects that never reached the ready state; `ClearAllObjects` removes every object of the current session. Both mean previously held C# references must not be treated as new-session objects.

## Risks and Crash Boundaries

- **Registering a type too late or duplicating it.** If a type is not registered before the XML arrives, the element will not be found; a duplicate or wrong `typeId` pollutes the type table or triggers an engine assertion. Put registration in the game type's unified registration phase and keep a fixed id for your mod.
- **`StringId` collision renames it.** When records collide, a number is appended until a free key is found; the original string is not necessarily the object's final id. Use a mod prefix and read `StringId` from the returned object.
- **Misusing presumed registration.** `RegisterPresumedObject` is an intermediate state of the load path; if the object never completes `Deserialize`/`AfterInitialized`, the cleanup phase removes it and later references become null.
- **Treating an empty query as success.** `GetObject`, predicate queries, and XML references can all return `null`. Cross-module dependencies must check for null explicitly and choose to skip, fall back, or report when missing, rather than dereferencing directly.
- **Modifying business at the wrong layer.** The manager only maintains identity and lifecycle; changing Hero gold, Settlement ownership, and the like should use the matching Action/Model, otherwise you may skip events, relations, and derived caches.
- **Old references after clearing the manager.** After `Destroy`/`ClearAllObjects` you must re-query from `Instance`; caching object references or treating an `MBGUID` as a permanent id causes mispointing after a load.

## Cross-Version Notes

Both 1.3.15 and 1.4.5 provide `RegisterType`, `CreateObject`, string/predicate queries, XML loading, and `PreAfterLoad`/`AfterLoad`. The concrete module's type registry and XML content can still change; a cross-version mod should not rely on a `StringId` that exists in only one version.

## Dependencies

- Root contract: [MBObjectBase](../MBObjectBase/) defines identity and the object lifecycle.
- XML / game host: [Game](../../core-extra/Game/) and its `OnRegisterTypes` phase provide the type-registration entry point.
- Campaign entry: [Campaign](../../campaign/Campaign/) manages campaign objects; [CampaignBehaviorBase](../CampaignBehaviorBase/) is a common business-call host.
- Persistence: [SaveManager](../../save-system/SaveManager/) and [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) own the object graph; the manager does not define field formats itself.

## See Also

- Parent: [campaign-ext API](./)
- Sibling: [MBObjectBase](../MBObjectBase/) · [IDataStore](../../campaign/IDataStore)
- Related: [Campaign](../../campaign/Campaign/) · [SaveManager](../../save-system/SaveManager/)
