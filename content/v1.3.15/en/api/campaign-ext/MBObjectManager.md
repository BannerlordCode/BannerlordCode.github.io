---
title: "MBObjectManager"
description: "Bannerlord's global registry for every MBObjectBase-derived data object: type registration, object creation/lookup/unregistration, and the load order that wires up XML definitions and save games."
---
# MBObjectManager

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** class MBObjectManager : System.Object
**Source:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## Overview

`MBObjectManager` is the Foundation-layer **global object registry** of Bannerlord. Nearly every data object that carries a `StringId` — `Hero`, `ItemObject`, `Settlement`, `CharacterObject`, `Clan`, `Kingdom`, `MobileParty`, and many more — derives (directly or indirectly) from `MBObjectBase`, and every instance of those types is centrally registered in this manager, bucketed by its concrete type (`ObjectTypeRecord<T>`).

It performs four jobs:

- **Type registration:** during game initialization, `RegisterType<T>` records each `MBObjectBase` derived type and assigns it a `uint` `typeId`. That `typeId` is encoded into every object's `MBGUID`, which is the credential used to cross-reference objects inside a save file.
- **Object creation and registration:** `CreateObject<T>` and `RegisterObject<T>` bring a new object under management (allocating an `MBGUID`, firing the `OnRegistered` callback, and notifying `AfterCreateObject` handlers).
- **Object lookup:** by `StringId` (`GetObject<T>(string)`), by `MBGUID` (`GetObject(MBGUID)`), by predicate (`GetObject<T>(Func)`, `GetObjects<T>`), or by enumerating all of a type (`GetObjectTypeList<T>`).
- **Load and cleanup:** `LoadXML`/`LoadXml` deserialize objects from XML definitions; `PreAfterLoad`/`AfterLoad`/`ReInitialize` let objects patch up cross-references after a save is read; `ClearAllObjects`/`RemoveTemporaryTypes`/`UnregisterObject` unregister them.

It is a **singleton**, accessed through the static `MBObjectManager.Instance` property, and created by `Game.CreateGame` / `Game.LoadSaveGame` during startup via `MBObjectManager.Init()`.

## Mental Model

Think of `MBObjectManager` as a global **"type → objects" index table**:

- Its lifetime is bound to a single game session (new game or loaded save). `Init()` creates it; `Destroy()` clears it and sets `Instance` to `null`. Never `new` one mid-session — the constructor is `private`.
- **A type must be registered before you can create or look up objects of it.** `RegisterType<T>` happens during the `Game` `BeforeRegisterTypes` / `OnRegisterTypes` phase. If you call `GetObject` / `CreateObject` for a type that was never registered, you trigger a `Debug.FailedAssert` and get `null` back (release builds skip the assert and just return `null`) — a classic source of downstream `NullReferenceException`.
- **After a save is loaded, every raw C# reference you held becomes stale.** Loading re-deserializes the entire object graph (new instances, new `MBGUID` mapping); old references point at discarded objects. The correct pattern is to persist only a `StringId` or `MBGUID`, and re-query with `MBObjectManager.Instance.GetObject<T>(stringId)` when you need the object.
- **The `typeId` (third argument to `RegisterType`) must stay stable across versions.** It is written into the `MBGUID` of every object of that type. If your module's `typeId` collides with another module's, or you add/reorder type ids after a save file was written, the type index no longer matches on load, producing a corrupted save or missing objects.
- Do not treat it as a persistent store: aside from `isTemporary: true` types (e.g. `Hero`, `MobileParty`, `Clan`, `Kingdom`, removed wholesale by `RemoveTemporaryTypes`), `GetObjectTypeList<T>()` returns a live `MBReadOnlyList<T>` view, so unregistering objects while iterating it needs care.

## When to Use / When NOT to Use

**Use `MBObjectManager` when:**
- You need to register a custom `MBObjectBase`-derived type for your mod via `RegisterType<T>` inside `OnRegisterTypes`.
- You create game data objects (`CreateObject<T>` / `RegisterObject<T>`) or resolve them (`GetObject<T>`, `GetObjectTypeList<T>`).
- You persist cross-object references in a save and must resolve them by `StringId`/`MBGUID` after load.

**Do NOT use it when:**
- You just want a one-off in-memory object with no `StringId`, no save persistence, and no cross-references — a plain `new` is simpler and avoids registry churn.
- You want per-frame lookup performance on a hot path: cache the resolved instance (keyed by `StringId`) instead of calling `GetObject` every frame. If you hold it across a save load, re-resolve it rather than caching a stale reference.
- You are tempted to keep a raw `Hero`/`Settlement` field across a save boundary. Persist the `StringId`/`MBGUID` and re-query; never store the raw reference in save data.

## Dependencies

- [MBObjectBase](../MBObjectBase/) — the base class of every registered object; defines `StringId`, `MBGUID`, and `IsReady`.
- [Campaign](../../campaign/Campaign/) — where `Hero`/`Settlement`/`Clan`/`MobileParty` types are actually registered in `OnRegisterTypes`, and where `Campaign.Current.ObjectManager` exposes the same singleton.
- [Game](../../core-extra/Game/) — the upstream entry point that calls `MBObjectManager.Init()` and `RegisterTypes` during `CreateGame` / `LoadSaveGame`.
- [Hero](../../campaign/Hero/) — the most common `MBObjectBase` derived type; a `temporary` type cleared on new campaign.
- [ItemObject](../../core/ItemObject/) — the canonical example looked up via `GetObject<ItemObject>(stringId)`.
- [SaveManager](../../save-system/SaveManager/) — drives the save/load flow whose `MBGUID` references are resolved through this manager.

## Risks

- **Lookup/create before the type is registered:** `GetObject` / `CreateObject` / `RegisterObject` call `Debug.FailedAssert` and return `null` when the type is missing from `ObjectTypeRecords` (no assert in release builds). Dereferencing that result is a `NullReferenceException`. Always ensure the type was registered during `OnRegisterTypes`.
- **Stale raw references after a save load:** once a save is loaded the object graph is rebuilt from scratch, so any cached `Hero` / `Settlement` / etc. field dangles. Persist only `StringId` or `MBGUID` and re-fetch with `GetObject<T>(stringId)` / `GetObject(mbGuid)`. An `MBGUID` stays resolvable after `ReInitialize`, making it the more robust save reference.
- **`typeId` collision / reordered registration corrupts saves:** the high bits of an `MBGUID` are the registered `typeId`. `GetObject(MBGUID)` uses `GetTypeIndex()` to reverse-look the type bucket; if a `typeId` was changed, taken by another module, or shifted by a reordered `RegisterType`, saved references land on the wrong type or go missing. Pick a number that does not collide with other modules and never change it between versions.
- **Duplicate `StringId` is silently renamed:** within a type bucket, `RegisterObject` hit with an existing `StringId` that is neither the same instance nor a placeholder auto-appends an incrementing number to the end (`GetIdParts` splits the alphabetic and numeric suffix). No exception is thrown, but the `StringId` no longer matches what you expected — re-querying by the original id fails. Print the actual `StringId` when debugging.
- **A referenced-but-missing object on an `autoCreateInstance: false` type:** XML/save references an object that should exist but whose type was registered with auto-create off; `GetPresumedObject` throws `MBCanNotCreatePresumedObjectException`. If nothing ever completes it, the end-of-load `UnregisterNonReadyObjects` prints `"Null object reference found with ID: ..."` and unregisters it, and downstream cross-references then break.
- **Registering types at the wrong phase:** `RegisterType<T>` may only be called during `BeforeRegisterTypes` / `OnRegisterTypes` (or an equivalent init window). Registering a new type after the game is running leaves the existing object graph unaware of it, and every lookup of it fails.
- **Threading:** `MBObjectManager` and its type buckets are not thread-safe. All create/lookup/unregister operations run on the main (game-logic) thread. Touching it from an async task or worker thread causes data races and unpredictable crashes.

## Members

### Properties

| Property | Type | Notes |
|----------|------|-------|
| `Instance` | `MBObjectManager` (static) | The global singleton. `null` before `Init()` runs or after `Destroy()`. |
| `NumRegisteredTypes` | `int` | Count of registered types (`ObjectTypeRecords.Count`). `0` when uninitialized. |
| `MaxRegisteredTypes` | `int` (const 256) | Hard cap on type count. Exceeding it triggers a `Debug.FailedAssert` (`MBTooManyRegisteredTypesException` text) but still adds the type. |

### Singleton and lifecycle

#### `public static MBObjectManager Init()`
Creates a fresh `MBObjectManager` and writes it to `Instance` (overwriting the old value without carrying over old state). Called by `Game.CreateGame` and `Game.LoadSaveGame` at their respective startups. After `Init()` you must complete `RegisterType<T>` before any `GetObject`/`CreateObject`, and before `ReInitialize()` in the load path.

```csharp
// Engine-internal flow (TaleWorlds.Core.Game.CreateGame):
MBObjectManager objectManager = MBObjectManager.Init();
RegisterTypes(gameType, objectManager, gameManager); // calls each Game's OnRegisterTypes
```

#### `public void Destroy()`
Calls `ClearAllObjects()` to unregister everything, then sets `Instance` to `null`. The engine calls this at session end — do not call it manually while objects are still referenced.

#### `public static bool MergeElementAttributes(XElement element1, XElement element2)`
Merges `element2`'s attributes into `element1`, clearing-then-overwriting on `_replaceWhileMerging="true"`. Part of the XML merge pipeline; mod authors rarely call it directly.

### Type registration

#### `public void RegisterType<T>(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false) where T : MBObjectBase`
Registers type `T`, internally creating an `ObjectTypeRecord<T>`. `classPrefix` is the XML element name (e.g. `"Hero"`, `"Settlement"`); `classListPrefix` is the container element name (e.g. `"Heroes"`, `"Settlements"`). `typeId` becomes the high type-index bits of every object's `MBGUID` of this type — **it must be save-compatible and globally unique**. `autoCreateInstance` controls whether an unknown `id` during XML deserialization auto-creates a placeholder object; `isTemporary: true` types are removed wholesale by `RemoveTemporaryTypes` during campaign cleanup.

```csharp
// Real fragment registered at campaign init (TaleWorlds.CampaignSystem.Campaign.OnRegisterTypes):
objectManager.RegisterType<Settlement>("Settlement", "Settlements", 25u);
objectManager.RegisterType<Hero>("Hero", "Heroes", 32u, autoCreateInstance: true, isTemporary: true);
objectManager.RegisterType<MobileParty>("MobileParty", "MobileParties", 14u, autoCreateInstance: true, isTemporary: true);
```

#### `public bool HasType<T>() / public bool HasType(Type type)`
Reports whether a type is registered. When `T` is sealed it compares `ObjectClass` exactly; otherwise it matches derived classes via `IsAssignableFrom`.

#### `public string FindRegisteredClassPrefix(Type type)`
Returns the `classPrefix` (XML element name) a type was registered with; asserts and returns `null` if unregistered.

#### `public Type FindRegisteredType(string classPrefix)`
Reverse lookup: XML element name → the corresponding `MBObjectBase`-derived `Type`; asserts and returns `null` if not found.

### Creating and registering objects

#### `public T CreateObject<T>(string stringId) where T : MBObjectBase, new()`
Constructs a `T`, assigns its `StringId`, calls `RegisterObject<T>` to bring it under management, then notifies every `IObjectManagerHandler.AfterCreateObject`. Returns the **registered** instance (which may differ slightly from the `stringId` you passed — see duplicate-id handling above).

```csharp
// Campaign start creates the player party (TaleWorlds.CampaignSystem.Campaign.OnNewCampaignStart):
MainParty = MBObjectManager.Instance.CreateObject<MobileParty>("player_party");
```

#### `public T CreateObject<T>() where T : MBObjectBase, new()`
Parameterless overload; internally uses `typeof(T).Name + "_1"` as the `StringId`.

#### `public T RegisterObject<T>(T obj) where T : MBObjectBase`
Registers an **already-constructed** `T` instance (allocates the `MBGUID`, sets `IsReady = true`, fires `OnRegistered`). Unlike `CreateObject`, it does not `new` — you build the object first, then hand it over. Returns the registered instance.

#### `public T RegisterPresumedObject<T>(T obj) where T : MBObjectBase`
Registers in "presumed" (placeholder) mode: `IsReady` stays `false`, meaning the reference exists but the content is not yet filled in. Heavily used during the XML cross-reference phase; objects never completed are later cleared by `UnregisterNonReadyObjects`.

#### `public void UnregisterObject(MBObjectBase obj)`
Unregisters an object: fires `OnUnregistered`, removes it from the two dictionaries and the list, and notifies each handler's `AfterUnregisterObject`. Returns immediately if `obj` is `null`; asserts if the type is unregistered.

#### `internal void TryRegisterObjectWithoutInitialization(MBObjectBase obj)`
Called by `MBObjectBase.OnBeforeLoad` during save load to re-register an object that already has an `id`, without re-initializing it (rebuilding the `MBGUID` → instance mapping). This is the key step that re-locates save references by `MBGUID`.

### Querying and traversal

#### `public T GetObject<T>(string objectName) where T : MBObjectBase`
Exact lookup by `StringId` within that type's bucket; returns `null` when not found (1.3.x returned `default(T)`, which is also `null` for reference types). For a non-sealed `T` it walks every derived-type bucket trying each.

```csharp
// Look up an item by StringId (TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Effects.RandomEquipmentEffect):
ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>(xmlAttribute.Value);
if (item != null) { /* equip the item */ }
```

#### `public MBObjectBase GetObject(MBGUID objectId)`
Lookup by `MBGUID`: locate the bucket via `objectId.GetTypeIndex()`, then look up the `MBGUID` dictionary. This is what ultimately restores saved object references. Asserts and returns `null` if the type index is not found in `ObjectTypeRecords`.

#### `public T GetObject<T>(Func<T, bool> predicate) where T : MBObjectBase`
Returns the first object in the bucket satisfying the predicate, or `null`.

#### `public MBReadOnlyList<T> GetObjects<T>(Func<T, bool> predicate) where T : MBObjectBase`
Returns **all** objects in the bucket satisfying the predicate (a fresh `MBList<T>`, not a live view).

#### `public MBReadOnlyList<T> GetObjectTypeList<T>() where T : MBObjectBase`
Returns the live read-only list of **all** objects in the bucket (for sealed types it is the same `RegisteredObjectsList` reference; for non-sealed types it is a freshly merged `MBList`). The standard entry point for "iterate every object of a type".

```csharp
// Iterate all items (TaleWorlds.MountAndBlade.Multiplayer.LobbyState):
foreach (ItemObject item in (List<ItemObject>)(object)MBObjectManager.Instance.GetObjectTypeList<ItemObject>())
{
    // item.StringId / item.Name, etc.
}
```

#### `public T GetFirstObject<T>() where T : MBObjectBase`
Returns the first object in the bucket (usually `RegisteredObjectsList[0]`).

#### `public bool ContainsObject<T>(string objectName) where T : MBObjectBase`
Reports whether a `StringId` is registered in the bucket.

#### `public MBObjectBase GetObject(string typeName, string objectName)`
Lookup by XML element name (`classPrefix`) + `StringId`; equivalent to `FindRegisteredType` then an id lookup.

### Loading and serialization

#### `public void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)`
Merges and loads an XML definition set (located by `id`, e.g. `"Items"`, `"Settlements"`). Internally calls `GetMergedXmlForManaged` to merge the matching XML and XSLT of all enabled modules, then hands the result to `LoadXml`. Load exceptions are swallowed.

#### `public void LoadXml(XmlDocument doc, bool isDevelopment = false)`
Core deserialization entry: scans the document root, matches registered types by `classListPrefix`, takes the `id` attribute of each child node, obtains/creates a placeholder via `GetPresumedObject`, then `Deserialize` + `AfterInitialized`.

#### `public MBObjectBase CreateObjectFromXmlNode(XmlNode node)` / `CreateObjectFromXmlNode(XmlNode node, string typeName)`
Back-fills and deserializes an object from a single XML node (the `typeName` overload locates the type by node name or explicit element name).

#### `public MBObjectBase CreateObjectWithoutDeserialize(XmlNode node)`
Only `Initialize` + `AfterInitialized`, skipping `Deserialize` — for when you need a placeholder but not filled fields.

#### `public T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node) where T : MBObjectBase`
Parses a cross-object reference like `"Culture.empire"`: splits on `.` into type-prefix + object-id, then fetches the object via `GetPresumedObject` (creating a placeholder if the type allows auto-create). Returns `null` if the attribute is missing; throws `MBInvalidReferenceException` if the format is wrong (no `.`). The non-generic overload `(string attributeName, Type objectType, XmlNode node)` behaves the same.

#### `public void PreAfterLoad()` / `public void AfterLoad()`
Called in order by the engine after a save load: walks every bucket and fires `PreAfterLoadInternal` / `AfterLoadInternal` on each object so it can complete cross-references once all references are in place (e.g. `Settlement` links its `Town`/`Village` components, `Clan` associates its `Kingdom`).

#### `public void ReInitialize()`
Called by the load flow (`Game.LoadSaveGame`) after `loadResult.InitializeObjects()`: recomputes each bucket's internal `_objCount` (based on the max `SubId` among existing objects) so subsequent `CreateObject` calls never reuse an existing `MBGUID`.

#### `public void UnregisterNonReadyObjects()`
Cleans up all `IsReady == false` placeholder objects and logs `"Null object reference found with ID: " + StringId`. This is the typical source of the "object referenced but never actually defined" corrupted-save error.

### Cleanup

#### `public void ClearAllObjects()`
Walks every bucket, `UnregisterMBObject` + notifies handlers, returning to an empty state. `Destroy()` calls it first.

#### `public void ClearAllObjectsWithType(Type type)`
Clears only one type bucket (e.g. clearing all temporary types at campaign end).

#### `public void RemoveTemporaryTypes()`
Walks `ObjectTypeRecords` in reverse, removing every `isTemporary: true` bucket wholesale (unregistering each object in the bucket, then deleting the type record). Campaign objects (`Hero`, `MobileParty`, `Clan`, `Kingdom`) are all temporary types — they are cleared and rebuilt at new campaign start.

### Diagnostics and extension

#### `public void AddHandler(IObjectManagerHandler handler)` / `RemoveHandler(...)`
Adds/removes an `IObjectManagerHandler` that receives callbacks when objects are created (`AfterCreateObject`) and unregistered (`AfterUnregisterObject`). The engine uses this internally to keep caches in sync.

#### `public string DebugDump()`
Writes every bucket's object list to `mbobjectmanagerdump.txt` and returns the text; `DebugPrint(PrintOutputDelegate)` prints each bucket's count to the given output (debugging only).

#### `public string GetObjectTypeIds()`
Returns a line-per-record `"<typeNo> - <record full type name>"` listing, useful for diagnosing `typeId` allocation (handy when cross-module collisions are suspected).

## Example

### Example 1: Look up a registered object by StringId (most common)

```csharp
// Get the Imperial culture object; returns null when missing — always null-check.
BasicCultureObject empire = MBObjectManager.Instance.GetObject<BasicCultureObject>("empire");
if (empire != null)
{
    // use it for troop composition, checks, etc.
}
```

### Example 2: Iterate every object of a type

```csharp
// Tally / batch-process all items
MBReadOnlyList<ItemObject> allItems = MBObjectManager.Instance.GetObjectTypeList<ItemObject>();
foreach (ItemObject item in allItems)
{
    if (item.Value > 1000)
    {
        // do something with high-value items
    }
}
```

### Example 3: Register your own MBObjectBase-derived type in OnRegisterTypes

```csharp
// Override in your Game subclass (the typeId must be stable and not collide with other modules):
protected override void OnRegisterTypes(MBObjectManager objectManager)
{
    base.OnRegisterTypes(objectManager);
    objectManager.RegisterType<MyCustomObject>("MyCustom", "MyCustoms", 200u);
}

// Then create and look it up:
MyCustomObject obj = MBObjectManager.Instance.CreateObject<MyCustomObject>("my_custom_1");
MyCustomObject same = MBObjectManager.Instance.GetObject<MyCustomObject>("my_custom_1");
```

> Note: the `typeId` above (here `200u`) is written into the object's `MBGUID`. If you assign a number that collides with another module, or change an existing type's number, old published saves will mis-index types on load — corrupted save or missing objects.

## See Also

- [↑ Parent (campaign-ext index)](../)
- [↔ MBObjectBase](../MBObjectBase/) — base class of every registered object, details `StringId` / `MBGUID` / `IsReady`.
- [Campaign](../../campaign/Campaign/) — where `Hero`/`Settlement`/`Clan` types are actually registered.
- [Hero](../../campaign/Hero/) — one of the most common `MBObjectBase` derived types.
- [ItemObject](../../core/ItemObject/) — the canonical `GetObject<ItemObject>(stringId)` example.
- [Game](../../core-extra/Game/) — upstream entry that calls `MBObjectManager.Init()` and `RegisterTypes`.
- [SaveManager](../../save-system/SaveManager/) — the save/load flow whose `MBGUID` references resolve through this manager.
