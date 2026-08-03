---
title: "MBObjectManager"
description: "The central ObjectSystem registry: register types, create and query objects, and drive XML loading and cleanup."
---
# MBObjectManager

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public sealed class MBObjectManager`  
**Base:** `System.Object`  
**Source:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## Overview

`MBObjectManager` is the central registry for `MBObjectBase` instances. A game type first declares an XML element and C# type with `RegisterType<T>`; XML loading and mod code then use `RegisterObject`, `CreateObject`, `GetObject`, and typed lists to work with those instances.

This class answers “how does an object enter the world and remain findable?” It is not a campaign Action and not a general service locator. To change Hero, Settlement, or Kingdom business state, use the relevant Action or Model after obtaining the correct object.

## Mental Model

Think of three synchronized tables:

- Type table: `RegisterType<T>(classPrefix, classListPrefix, typeId, ...)` binds XML names, the list name, a type number, and creation policy.
- Identity tables: every registered object is indexed by both `StringId` and `MBGUID`.
- Typed lists: `GetObjectTypeList<T>()` exposes registered objects for traversal, validation, and diagnostics.

XML loading normally obtains a presumed object, calls `Deserialize`, then calls `AfterInitialized`. Once object records are restored, the manager broadcasts `PreAfterLoad` and `AfterLoad` by type. “Present in the table” therefore does not mean that every cross-object reference is ready.

## How to access it

The active manager normally comes from `MBObjectManager.Instance`; game initialization creates it through `MBObjectManager.Init()`. A mod should not maintain a replacement instance.

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

String lookup is the clearest normal path. Predicate lookup is useful for the first match, while `GetObjects<T>(predicate)` returns a filtered collection. A missing object returns `null`; never assume that another module's XML contains a requested ID.

## Key API

| API | Responsibility | Use it when |
| --- | --- | --- |
| `Init()` / `Destroy()` | create or destroy the manager instance | controlled by the game lifecycle |
| `RegisterType<T>(...)` | register a derived type and its XML names | the game's `OnRegisterTypes` stage |
| `CreateObject<T>(string)` | construct, assign `StringId`, and register | creating a runtime object after type registration |
| `RegisterObject<T>(T)` | register an already constructed object | a custom construction path requires it |
| `RegisterPresumedObject<T>(T)` | register a temporary load object | only inside code that understands presumed lifecycle |
| `GetObject<T>(string)` | query by logical ID | you know the stable `StringId` |
| `GetObject<T>(Func<T,bool>)` | find the first matching object | you have a predicate rather than an ID |
| `GetObjectTypeList<T>()` | obtain the registered type list | traversal, validation, and indexes |
| `LoadXML` / `LoadXml` | merge XML and create objects | game loading; not repeated ad hoc at runtime |
| `PreAfterLoad()` / `AfterLoad()` | broadcast post-save-load phases | called by the load pipeline |
| `ClearAllObjects()` | clear the current object registry | session teardown; old references become invalid |

## Real example: register and create a custom type

This registration shape matches the `Game.OnRegisterTypes` implementations in the source. `typeId` belongs to the global ObjectSystem type-number space and must not collide with another type.

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

`CreateObject` constructs, registers, calls `OnRegistered`, and notifies registered object-manager handlers. Do not construct the same object and use it as if it were registered; use `RegisterObject` for a manual path and check the returned object.

## XML and save-load boundaries

`LoadXml` finds a registered type from the list element, obtains a presumed object by the XML `id`, then calls its `Deserialize` and `AfterInitialized`. `CreateObjectFromXmlNode` is the single-node variant. Resolving other objects in `AfterLoad` is important because the manager dispatches `PreAfterLoad` and `AfterLoad` only after all type records have been restored.

`UnregisterNonReadyObjects` logs and removes presumed objects that never become ready. `ClearAllObjects` removes the current session's entire registry. Both operations invalidate earlier C# object references.

## Risks and crash boundaries

- **Late or duplicate type registration.** An unregistered XML type cannot be created; duplicate or incorrect `typeId` values can corrupt the type table or trigger an engine assertion. Register once in the game's type-registration phase and reserve a stable mod number.
- **`StringId` collisions rewrite IDs.** The type record appends a number until the key is free. Use a mod prefix and read the object's actual `StringId` after creation.
- **Incorrect presumed registration.** `RegisterPresumedObject` is an intermediate load state. If `Deserialize`/`AfterInitialized` never completes, cleanup removes the object and later references become null.
- **Treating a miss as success.** String lookup, predicate lookup, and XML references can all return `null`. Check optional module dependencies explicitly and choose a fallback or report instead of dereferencing blindly.
- **Changing business state at the wrong layer.** The manager owns identity and lifecycle. Use the proper Action or Model for Hero gold, Settlement ownership, and similar state so events and derived caches are updated.
- **Old references after cleanup.** After `Destroy` or `ClearAllObjects`, query the new `Instance` again. Cached instances and permanent `MBGUID` assumptions produce load-time misreferences.

## Cross-version notes

Both 1.3.15 and 1.4.5 expose `RegisterType`, `CreateObject`, string/predicate lookup, XML loading, and `PreAfterLoad`/`AfterLoad`. The concrete module registry and XML content can differ, so a cross-version mod must not assume that an ID exists merely because it exists in one version.

## Dependencies

- Root contract: [MBObjectBase](../MBObjectBase/) defines identity and object lifecycle.
- XML/game host: [Game](../../core-extra/Game/) and its `OnRegisterTypes` phase provide the type-registration entry point.
- Campaign entry: [Campaign](../../campaign/Campaign/) owns campaign objects; [CampaignBehaviorBase](../CampaignBehaviorBase/) is a common business caller.
- Persistence: [SaveManager](../../save-system/SaveManager/) and [SaveableTypeDefiner](../../save-system/SaveableTypeDefiner/) define the saved object graph; the manager does not define member formats.

## Navigation

- Parent: [campaign-ext API](./)
- Siblings: [MBObjectBase](../MBObjectBase/) · [IDataStore](../IDataStore/)
- Related: [Campaign](../../campaign/Campaign/) · [SaveManager](../../save-system/SaveManager/)
