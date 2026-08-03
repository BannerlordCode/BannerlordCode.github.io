---
title: "MBObjectManager: game-object registry and XML assembler"
description: "The v1.4.5 per-Game registry of MBObjectBase types, StringId/MBGUID indexes, and XML object assembly. Covers Game initialization, registration/presumption/lookup, load callbacks, teardown, and crash or save-corruption boundaries around timing, duplicate IDs, and stale references."
---

# MBObjectManager: game-object registry and XML assembler

**Namespace:** `TaleWorlds.ObjectSystem`  
**Module:** `TaleWorlds.ObjectSystem`  
**Type:** `public sealed class MBObjectManager`  
**Base:** none  
**Source:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectManager.cs`

## One-line responsibility

Turns declared `MBObjectBase` subclasses into a registry that lives with a `Game` session, can be addressed by XML tag, `StringId`, or `MBGUID`, and coordinates XML/save assembly and session teardown.

## Mental model: not a general DI container

`MBObjectManager` is a **registry of game-definition objects**, not a container for arbitrary mod services. Each registered type owns an internal `ObjectTypeRecord<T>` holding its singular XML element name (for example, `Item`), list-root name (for example, `Items`), stable type number, `StringId -> T` dictionary, `MBGUID -> T` dictionary, and ordered list.

Both `Game.CreateGame` and `Game.LoadSaveGame` call `MBObjectManager.Init()` before `Game.RegisterTypes`, `GameType.BeforeRegisterTypes`, `GameType.OnRegisterTypes`, and the game manager declare the usable types. `Game.Current.ObjectManager` then owns that instance; `MBObjectManager.Instance` is the static shortcut to the same object. `Campaign.OnRegisterTypes`, for example, declares `MobileParty`, `Hero`, and `Settlement`; the base game declares `ItemObject`, `SkillObject`, and others.

The normal data flow is:

```text
Game.CreateGame / Game.LoadSaveGame
  -> Init + RegisterTypes
  -> GameType.OnRegisterTypes: RegisterType<T>(XML tag, list tag, type number)
  -> LoadXML: merge module XML, obtain or create presumed objects
  -> MBObjectBase.Deserialize -> AfterInitialized
  -> gameplay looks up objects by StringId / MBGUID
  -> Game.Destroy -> ClearAllObjects -> Instance = null
```

### When to use it

- In an established game session, obtain a real definition object by `StringId`, or enumerate one registered object type.
- During game-type registration, declare a real `MBObjectBase` subclass that participates in that game type's XML, reference parsing, or saves.
- In an engine-style data-loading path, use `LoadXML` / `ReadObjectReferenceFromXml` to parse module XML; ordinary gameplay normally only performs lookups.

### When not to use it

- Do not access `Instance` in an `MBSubModuleBase` constructor, module-discovery phase, or after `Game` teardown. It can be `null`, and unguarded access produces a `NullReferenceException`.
- Do not treat it as a Campaign world-state mutation API. Giving a hero gold, moving a party, or changing ownership still belongs to the relevant [Action](../) and domain API; the registry answers “which object is this?”, not “is this world change valid?”.
- Do not casually call `Init()`, `Destroy()`, or re-register engine types from ordinary mod initialization. Those operations replace or clear the global registry at the `Game` session boundary.

## Dependencies and boundaries

```text
[Game](../../core/Game)
  owns -> MBObjectManager
  creates/loads -> [MBObjectBase](../MBObjectBase) records
  exposes -> StringId and [MBGUID](../MBGUID) lookup
  loads -> XML definitions and object references
  is extended by -> [Campaign](../../campaign/Campaign) type registration
  is consumed by -> [MobileParty](../../campaign/MobileParty) and [CharacterObject](../../campaign/CharacterObject)
```

- **Upstream:** [Game](../../core/Game) creates, owns, and destroys the manager. An [MBSubModuleBase](../../core/MBSubModuleBase) game-session hook is the proper mod timing for receiving a `Game`.
- **Object contract:** [MBObjectBase](../MBObjectBase) holds `StringId`, `MBGUID`, initialization, and ready state. Registration invokes its `OnRegistered()` / `AfterRegister()`; unregistration invokes `OnUnregistered()`.
- **Loading:** `MBObjectManagerExtensions.LoadXML` reads development mode and the game-type string from `Game.Current.GameType`, then calls `LoadXML`. That method merges module XML and finds a type record by list-root tag.
- **Campaign and saves:** [Campaign](../../campaign/Campaign) assigns type numbers to Campaign objects in `OnRegisterTypes`. A save load registers types first, initializes saved objects, calls `ReInitialize()` to restore each record's next sub-ID, then completes load callbacks. [SaveManager](../../save-system/SaveManager) owns the persistence side of that save pipeline.

## Two keys: `StringId` and `MBGUID`

`StringId` is the name key most often used by XML and gameplay code. `MBGUID` is made from a record's `typeId` and an incrementing sub-ID: high bits identify the object type and the lower 26 bits identify the instance within that type. A successful new registration assigns the GUID and inserts the same object into both dictionaries.

Use `GetObject<T>(stringId)` when consuming a configured or saved object name. Use `GetObject(MBGUID)` when a saved object already holds its GUID. Do not invent a type number yourself or retain a GUID from a previous game session.

## Lifecycle and loading

### Create, register, destroy

| Stage | What actually happens | Mod boundary |
|---|---|---|
| `Init()` | Unconditionally creates a new static instance. `Game` calls it for a new game and save load. | Let `Game` call it; it is not a mod-startup API. |
| `RegisterType<T>` | Adds a type record with singular/list XML tags, `typeId`, whether presumed instances may be auto-created, and whether the type is temporary. | Use only in game-type registration; check `HasType<T>()` before extension registration and do not register twice. |
| `RegisterObject` | Puts a new object into its record, assigns a GUID, and makes it ready. | Use only for an already declared exact type with a controlled lifecycle. |
| `LoadXML` | Obtains or creates a presumed object by `id`, runs `Deserialize`, then `AfterInitialized`. | Use the game loading flow; never reload definition XML from a gameplay tick. |
| `Destroy()` | Clears every object in reverse record order, notifies unregistration handlers, then sets `Instance = null`. | Remove owned handlers and cached state before game end; do not use old object references afterwards. |

### Presumed objects resolve forward references

An XML reference may precede its object body. The internal `GetPresumedObject` first looks up a type-tag/ID pair. If missing and that type record permits `autoCreateInstance`, it constructs an object with a known `StringId` but `IsInitialized = false` and `IsReady = false`, then registers it as presumed. When its actual XML node arrives, the same registered object is deserialized and `AfterInitialized()` makes the registered object ready.

`RegisterPresumedObject<T>` exposes matching semantics: if the ID already exists, presumed registration returns the existing object and does not replace it with the supplied instance. If a referenced XML type does not allow auto-creation, the internal loading path throws `MBCanNotCreatePresumedObjectException`. XML references therefore need a registered type prefix and real ID.

## Key entry points: purpose, timing, and effects

### Type records

| Entry point | Purpose and timing | Effect / failure boundary |
|---|---|---|
| `RegisterType<T>(classPrefix, classListPrefix, typeId, autoCreateInstance, isTemporary)` | In `GameType.OnRegisterTypes`, declares `T`'s XML tags and GUID type number. `Campaign` uses this stage for `Hero`, `MobileParty`, and more. | Adds a record only; it does not load XML. Too many types reach the `MBTooManyRegisteredTypesException` assertion path. Conflicting type numbers, tags, or duplicate registration make references and save semantics unreliable. |
| `HasType<T>()` / `HasType(Type)` | Checks whether a type record already exists before extension registration. A sealed type is exact; a base-class request accepts assignable registered subclasses. | Query only. `false` does not authorize registration at an arbitrary point; registration still belongs to game-type setup. |
| `FindRegisteredClassPrefix(Type)` | Maps a CLR type back to its singular XML element name. | An unregistered type follows a failed-assert path and returns `null`; do not use the result as free-form input validation. |
| `FindRegisteredType(classPrefix)` | Maps a singular XML element name to its CLR type for loaders or diagnostics. | An unknown tag likewise follows a failed-assert path and returns `null`. This takes a singular tag, not a list-root tag. |

### Object registration and lookup

| Entry point | Purpose and timing | Effect / failure boundary |
|---|---|---|
| `RegisterObject<T>(obj)` | Adds a formal object of an already registered `T`. The engine uses this family when creating controlled temporary Campaign objects. | Assigns a new GUID, writes both indexes, appends the list, marks ready, and calls `OnRegistered()`. A duplicate `StringId` does not throw: the new object's ID is renamed by incrementing its numeric tail until unique. XML/save references using the original ID can then resolve to the wrong object. |
| `RegisterPresumedObject<T>(obj)` | Only for assembly logic that reserves an object before deserialization. | With an existing ID it returns the old object and discards the supplied one; a new object remains not-ready. Using it for ordinary entity creation creates half-initialized objects. |
| `GetObject<T>(string)` | The normal gameplay lookup, called through `Game.Current.ObjectManager` or a `Game` supplied to a hook. | Returns `null` when absent. A sealed `T` searches only its exact record; a non-sealed base type scans assignable records. Check for `null` before dereferencing. |
| `GetObject(MBGUID)` | Resolves an object from a saved or already held GUID, selecting a record from the GUID type number first. | An unknown type number follows a failed-assert path; an unknown object returns `null`. A GUID is meaningful only in the registered current session. |
| `GetObject(typeName, objectName)` | XML-style lookup by singular type tag and ID. | An unregistered tag follows a failed-assert path; a missing object returns `null`. |
| `GetObjectTypeList<T>()` / `CreateObjectTypeList(Type)` | Enumerates registered objects after loading. The first returns a read-only list for a sealed type; a base-class request aggregates assignable subclasses. | An unregistered sealed type follows a failed-assert path. Do not treat presumed/not-ready objects as complete definitions while XML is still assembling. |
| `UnregisterObject(obj)` | Removes an object during controlled unload, temporary-type cleanup, or game end. | Removes the runtime **exact type** from both indexes and the list, then invokes `OnUnregistered()` and handlers. An unregistered type follows a failed-assert path; old references do not automatically become `null`. |

### Loading, saves, and handlers

| Entry point | Actual use | Timing and effect |
|---|---|---|
| `LoadXML(id, isDevelopment, gameType, ...)` | Merges module XML, finds the record matching its list-root tag, and for each non-comment node obtains a presumed object by `id`, calls `Deserialize(this, node)`, then `AfterInitialized()`. | Used during game data assembly. The core extension `LoadXML(id)` gets mode information from the current `Game`; missing `id`, malformed references, or wrong tags fail in the deserialization path. |
| `ReadObjectReferenceFromXml<T>` | Reads an attribute in `TypePrefix.StringId` form and obtains a presumed object, allowing forward references. | A missing attribute returns `null`; no dot, empty prefix, or empty ID throws `MBInvalidReferenceException`. A value cast to the wrong `T` becomes `null`, so validate the type. |
| `PreAfterLoad()` / `AfterLoad()` | `MBObjectManager` iterates `ObjectTypeRecords` in forward order; each `ObjectTypeRecord<T>` then iterates `RegisteredObjectsList` in reverse order and forwards to `MBObjectBase.PreAfterLoadInternal()` / `AfterLoadInternal()`. | Save-load workflow, not general initialization callbacks. Do not interleave manual calls to “repair” an object. |
| `AddHandler` / `RemoveHandler` | Adds or removes an [IObjectManagerHandler](../IObjectManagerHandler). | `AfterCreateObject` fires **only** after formal registration through `CreateObject<T>`; it is not replayed for existing objects and does not fire on the XML `RegisterObject` path. `AfterUnregisterObject` fires for explicit unregistration, object clearing, and `Destroy()`. Remove a handler before its own game-lifetime state ends; calling `RemoveHandler` before any handler was added fails because the internal list is `null`. |

`CreateObject<T>(stringId)` is the convenience path that combines `RegisterObject` with the handler notification. `Campaign.OnNewCampaignStart` uses it to create `"player_party"`. Its parameterless overload uses the type name plus `_1`, which is not a stable source for XML or save IDs.

## Real lookup example

When loading, engine siege weapons commonly resolve the current loading `Agent` equipment item's `Item.StringId` as `missileItemID` through the registry; that same string also matches a scene-entity tag. The lookup belongs after a `Game` exists, the type is registered, and XML has loaded:

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

public static ItemObject ResolveMissile(string missileItemId)
{
    ItemObject missile = Game.Current.ObjectManager.GetObject<ItemObject>(missileItemId);
    if (missile == null)
    {
        return null;
    }

    return missile;
}
```

`missileItemId` should come from the current loading `Agent` equipment item's `Item.StringId`, not an invented ID; a scene entity with the same tag is what matches that ammunition. Its caller must choose whether a missing object skips a feature, reports a load error, or aborts that content; it must not construct a `MissionWeapon` or read properties through `null`.

## Real creation path: how the engine registers a Campaign object

The following is the actual pattern in `Campaign.OnNewCampaignStart`: `MobileParty` has already been declared by `Campaign.OnRegisterTypes`, then the engine creates and registers the main party through the singleton. It documents order, not a mandate to create a second main party from an arbitrary mod callback.

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.ObjectSystem;

MobileParty mainParty = MBObjectManager.Instance.CreateObject<MobileParty>("player_party");
```

Before adding a persistent Campaign entity, establish which game type registers it, who initializes it, and which Action/Behavior maintains its relations and save state. The fact that `CreateObject` is callable does not make it a substitute for that domain lifecycle.

## Crash, save-corruption, and reference risks

- **Access before initialization:** `Instance` is valid only after `Game.CreateGame` / `LoadSaveGame`. Reading it during SubModule loading or after session end commonly becomes a null-reference crash.
- **Duplicate `StringId`:** formal registration silently renames the new object; presumed registration silently keeps the old one. Either can make an XML, network, or save ID resolve to the wrong definition. Use stable, module-namespaced IDs for cross-save objects and check conflicts before registration.
- **Unregistered or mismatched types:** `RegisterObject<T>` finds a record by generic `T`; `UnregisterObject` finds one by exact runtime type. Missing records follow failed-assert paths; a wrong XML prefix or wrong base-type read returns `null` or crashes later on dereference.
- **Consuming a presumed object early:** a placeholder is not ready until `Deserialize` and `AfterInitialized`. Using it for equipment, faction, or Campaign relations can expose null fields and crash during load.
- **Keeping references after teardown:** `Destroy()` clears records and nulls the singleton but cannot turn your C# references into `null`. Reusing an old object or GUID in the next game brings state into the wrong session, producing null lookups, wrong resolutions, or save pollution.
- **Manual XML reloads:** parsing reuses presumed objects rather than performing a general hot replacement and can swallow internal load exceptions. Do not reload registered definition tables from a running Campaign tick.

## Navigation

**↑ Parent**

- [Campaign extension API index](../)
- [v1.4.5 version home](../../../)

**↔ Siblings**

- [MBObjectBase](../MBObjectBase)
- [MBGUID](../MBGUID)
- [IObjectManagerHandler](../IObjectManagerHandler)

**Related**

- [Game](../../core/Game)
- [MBSubModuleBase](../../core/MBSubModuleBase)
- [Campaign](../../campaign/Campaign)
- [MobileParty](../../campaign/MobileParty)
- [CharacterObject](../../campaign/CharacterObject)
- [SaveManager](../../save-system/SaveManager)
- [Doc contract](../../../architecture/doc-contract)
