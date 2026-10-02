---
title: "MBObjectManager"
description: "The runtime registry for MBObject types: owns type registration, XML loading and merging, and instance register / unregister / lookup by name and GUID. The single facade of TaleWorlds.ObjectSystem and the standard route for getting custom XML data into the game."
---
# MBObjectManager

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public sealed class MBObjectManager`
**Base:** none
**Source:** `TaleWorlds.ObjectSystem/MBObjectManager.cs` (declared at line 18)

## Overview

`MBObjectManager` is the runtime registry of the TaleWorlds object system. Nearly all "statically defined" game data — troop trees, equipment, crafting recipes, skills, traits, items, and every mod's XML — is modelled as a subclass of [MBObjectBase](../MBObjectBase) with its lifecycle managed here. It has four responsibilities: **type registration** (`RegisterType<T>`, deciding how an `MBObjectBase` subclass is deserialised from XML), **XML loading and merging** (`LoadXML`, `MergeTwoXmls`, XSLT transforms, layering mod XML on top of base-game XML), **instance management** (`RegisterObject` / `UnregisterObject` / the `GetObject` family), and **debug export** (`DebugPrint`, `DebugDump`).

It is `sealed` and reached through the static `Instance`. During startup `Game` calls `MBObjectManager.Init()`, the `GameType.OnRegisterTypes` implementations (campaign, campaign ext, story mode) fill in the types, and `LoadXML` then reads the data. A mod adding its own data follows the same route: `RegisterType<T>` from `MBSubModuleBase.RegisterSubModuleTypes()` or `OnRegisterTypes`, then ship XML.

There is also a set of **static XML utilities** (`MergeElementAttributes`, `MergeTwoXmls`, `ApplyXslt`, `GetMergedXmlForManaged`, `GetMergedXmlForNative`) that are the key tools for debugging XML overrides — they tell you what "base XML plus mod XML" actually resolves to.

## Mental Model

Think of `MBObjectManager` as a **two-way table**: the type side (classPrefix to runtime `Type`) and the instance side (StringId or MBGUID to instance). The order a modder should follow:

1. **Register the type, then load XML, then fetch instances.** Any other order yields a null from `CreateObjectFromXmlNode` or a false from `HasType<T>()`. `RegisterType<T>` happens in the `OnRegisterTypes` phase, XML load after it.
2. **Fetch instances with `GetObject<T>(string objectName)`.** That answers 99% of cases. `GetObject<T>(Func<T, bool>)` is for conditional lookup and costs a linear scan — never put it in a per-frame path.
3. **Use `GetObject(string typeName, string objectName)`** when you only know the XML prefix, or `GetObject(MBGUID)` when you have an id.
4. **Dynamic objects use `RegisterPresumedObject<T>`, not `RegisterObject<T>`.** The former registers as temporary and `RemoveTemporaryTypes()` clears them wholesale; the latter is a permanent registration that you are responsible for unregistering. Runtime-synthesised data picked wrong either leaks or is swept away early.
5. **`Destroy()` invalidates `Instance`.** Never cache `MBObjectManager.Instance` in a static across campaigns.

The sneakiest failure mode is **XML merging**. Mod XML is layered over base-game XML, and same-named nodes and attributes are either overridden or merged according to `MergeElementAttributes`. A typo in an attribute name produces no error and no effect. When that happens, dump the merged document with `GetMergedXmlForManaged`.

## When to Use / When Not To

- **Use**: to register a custom `MBObjectBase` subclass so it can be deserialised from XML.
- **Use**: to look up loaded objects by StringId, GUID or predicate.
- **Use**: to create temporary objects at runtime (`CreateObject<T>()` plus `RegisterPresumedObject<T>`).
- **Use**: for XML merging and debugging — `MergeTwoXmls`, `GetMergedXmlForManaged`, `DebugDump`.
- **Don't**: call `RegisterObject` / `UnregisterObject` from save or load paths. The MBObject registry is not save state and is rebuilt by `ReInitialize` after loading.
- **Don't**: use `GetObject<T>(Func<...>)` in per-frame logic; cache the result.
- **Don't**: touch `MBObjectManager.Instance` after `Destroy()`.

## Member Guide

### 1. Lifecycle and singleton

| Member | What it is for, side effects, timing |
| --- | --- |
| `static MBObjectManager Instance { get; private set; }` | The global singleton. Created by `Init()`, invalidated by `Destroy()`. **Never cache it statically.** |
| `static MBObjectManager Init()` | Creates and installs the singleton. Called early in startup; mods rarely call it again. |
| `void Destroy()` | Tears down and clears the whole registry, at campaign switch or game exit. Every later `Instance` access fails. |
| `void ReInitialize()` | Reinitialises the registry while retaining some registration state. Used to recover after a load. |
| `void PreAfterLoad()` / `void AfterLoad()` | The two load-phase callbacks after deserialisation completes; use them to reconnect related objects. |

### 2. Type registration

| Member | What it is for, side effects, timing |
| --- | --- |
| `void RegisterType<T>(string classPrefix, string classListPrefix, uint typeId, bool autoCreateInstance = true, bool isTemporary = false) where T : MBObjectBase` | The core registration. `classPrefix` is the XML element name for one object, `classListPrefix` for a list container, `typeId` is the save-system type number. Types registered with `isTemporary = true` are removed wholesale by `RemoveTemporaryTypes()`. |
| `bool HasType<T>()` / `bool HasType(Type type)` | Whether a type is registered. Most useful early in `OnRegisterTypes`. |
| `string FindRegisteredClassPrefix(Type type)` | Runtime type to XML tag name. Needed when writing custom XML tooling. |
| `Type FindRegisteredType(string classPrefix)` | XML tag name to runtime type. Use it to dispatch on unknown tags. |
| `string GetObjectTypeIds()` | The list of registered type ids (debugging and save diagnostics). |

### 3. Instance registration and removal

| Member | What it is for, side effects, timing |
| --- | --- |
| `T RegisterObject<T>(T obj)` | Permanently registers an instance. You are then responsible for `UnregisterObject`, or it leaks. |
| `T RegisterPresumedObject<T>(T obj)` | Registers as temporary, swept by `RemoveTemporaryTypes()`. The standard route for runtime-generated data. |
| `void UnregisterObject(MBObjectBase obj)` | Unregisters. Any surviving reference to the object becomes a dangling `MBObjectBase`. |
| `void RemoveTemporaryTypes()` | Clears all temporary types and instances. Called on scene switch and campaign rebuild. |
| `void UnregisterNonReadyObjects()` | Removes objects that never reached `IsReady`. Used during startup wrap-up. |
| `void ClearAllObjects()` / `void ClearAllObjectsWithType(Type type)` | Wipe all instances, or all of one type. For tests and hot reload. |
| `T CreateObject<T>(string stringId)` / `T CreateObject<T>()` | Creates an `MBObjectBase` instance. It only enters the registry via `RegisterPresumedObject`. |

### 4. Lookup

| Member | What it is for, side effects, timing |
| --- | --- |
| `T GetObject<T>(string objectName)` | **The one you will use most.** Single object by StringId; null when absent. |
| `T GetObject<T>(Func<T, bool> predicate)` | First match by predicate. Linear scan — cache in hot paths. |
| `MBReadOnlyList<T> GetObjects<T>(Func<T, bool> predicate)` | All matches by predicate. |
| `T GetFirstObject<T>()` | First registered object of a type. |
| `bool ContainsObject<T>(string objectName)` | Existence check. Neither throws nor returns null, so it is the right pre-flight validation. |
| `MBObjectBase GetObject(MBGUID objectId)` | Lookup by runtime GUID; this is the path save references resolve through. |
| `MBObjectBase GetObject(string typeName, string objectName)` | Lookup by XML tag name plus StringId, for cross-module lookups done by string. |
| `MBReadOnlyList<T> GetObjectTypeList<T>()` | All instances of a type. **The return value is a live view** — registering or unregistering during enumeration throws. |
| `IList<MBObjectBase> CreateObjectTypeList(Type objectClassType)` | Builds a list of a given type for external filtering. |
| `MBObjectBase GetMBObject(MBGUID objId)` | Low-level entry point returning the base type. |

### 5. XML loading and merging

| Member | What it is for, side effects, timing |
| --- | --- |
| `void LoadXML(string id, bool isDevelopment, string gameType, bool skipXmlFilterForEditor = false)` | Loads a whole XML set located by `id`. This is the entry point for a mod's `Module.xml` data. |
| `void LoadXml(XmlDocument doc, bool isDevelopment = false)` | Deserialises objects from an already-loaded document. |
| `void LoadOneXmlFromFile(string xmlPath, string xsdPath, bool skipValidation = false)` | Loads one file with XSD validation. **A validation failure throws** — usually the first place a mod's malformed data announces itself. |
| `XmlDocument LoadXMLFromFileSkipValidation(string xmlPath, string xsdPath)` | Loads without XSD validation. Useful while debugging. |
| `CreateObjectFromXmlNode(XmlNode node)` / `CreateObjectFromXmlNode(XmlNode node, string typeName)` / `CreateObjectWithoutDeserialize(XmlNode node)` | Creates an object from a node. For custom loading pipelines. |
| `T ReadObjectReferenceFromXml<T>(string attributeName, XmlNode node)` / `ReadObjectReferenceFromXml(string attributeName, Type objectType, XmlNode node)` | Reads a reference to another MBObject from an XML attribute. **A misspelled attribute name silently yields null**, a frequent cause of "my mod data does nothing". |

### 6. Static XML utilities

| Member | What it is for, side effects, timing |
| --- | --- |
| `static bool MergeElementAttributes(XElement element1, XElement element2)` | Merges `element2`'s attributes into `element1`. Which side wins for a repeated attribute is decided by the implementation. |
| `static void MergeElements(XElement element1, XElement element2, string xsdPath)` | Recursive element merge. |
| `static XmlDocument GetMergedXmlForManaged(string id, bool skipValidation, bool ignoreGameTypeInclusionCheck = true, string gameType = "")` | Returns base-plus-mod merged XML on the managed side. **The first tool for "why isn't my mod data taking effect".** |
| `static XmlDocument GetMergedXmlForNative(string id, out List<string> usedPaths)` | The native-side equivalent; `usedPaths` lists which files participated. |
| `static XmlDocument CreateMergedXmlFile(List<Tuple<string, string>> toBeMerged, List<string> xsltList, bool skipValidation)` | Merges an explicit file list and applies XSLT. |
| `static XmlDocument MergeTwoXmls(XmlDocument xmlDocument1, XmlDocument xmlDocument2, string xsdPath, bool keepDuplicates)` | Merges two documents. `keepDuplicates` decides whether same-named nodes are overridden or both kept. |
| `static XmlDocument ApplyXslt(string xsltPath, XmlDocument baseDocument)` | Applies an XSLT transform. Used by mods that derive data. |
| `static XDocument ToXDocument(XmlDocument)` / `static XmlDocument ToXmlDocument(XDocument)` | Conversion between the two XML DOMs. |

### 7. Debug and extension points

| Member | What it is for, side effects, timing |
| --- | --- |
| `void DebugPrint(PrintOutputDelegate printOutput)` | Walks and prints every registered object through a callback rather than writing to the console. |
| `string DebugDump()` | A full string dump of the registry. |
| `void AddHandler(IObjectManagerHandler handler)` / `void RemoveHandler(IObjectManagerHandler handler)` | Registers observers notified when objects are registered or unregistered. |

## Examples

### Example 1: Register a custom MBObject type and look it up by name

Type registration belongs in `RegisterSubModuleTypes`; instance lookup happens after XML load.

```csharp
using TaleWorlds.ObjectSystem;

// 1) register the type: classPrefix is the XML tag, typeId is the save type number
Game.Current.ObjectManager.RegisterType<MyItemDef>("MyItemDef", "MyItemDefs", 9001u);

// 2) after XML load, fetch by StringId (null when absent)
MyItemDef def = Game.Current.ObjectManager.GetObject<MyItemDef>("my_item_def_01");
if (def != null)
{
    // def derives from MBObjectBase: GetName() / Id / StringId are available
}

// 3) pre-flight check with ContainsObject, which neither throws nor returns null
bool exists = Game.Current.ObjectManager.ContainsObject<MyItemDef>("my_item_def_01");
```

### Example 2: Creating temporary objects at runtime

Runtime-generated data goes through `RegisterPresumedObject`; using the wrong one either leaks or gets swept early.

```csharp
using TaleWorlds.ObjectSystem;

MBObjectManager mgr = MBObjectManager.Instance;

// Create and register as a temporary instance
var custom = mgr.CreateObject<MyTempDef>("runtime_generated_01");
mgr.RegisterPresumedObject<MyTempDef>(custom);

// Check before a full-list query, so you never handle null
if (mgr.ContainsObject<MyTempDef>("runtime_generated_01"))
{
    // the engine calls RemoveTemporaryTypes() on scene switch, taking it with it
}
```

### Example 3: Debugging an XML merge

When mod data "does nothing", look at what the merge actually produced.

```csharp
using System.Collections.Generic;
using System.Xml;
using TaleWorlds.ObjectSystem;

// Pull down "base + mods" merged XML and inspect it
XmlDocument merged = MBObjectManager.GetMergedXmlForManaged("Items", true);
if (merged == null)
{
    // the id is misspelled, or no such file exists
    return;
}

// the native side reports which files actually took part
List<string> usedPaths;
XmlDocument nativeSide = MBObjectManager.GetMergedXmlForNative("Items", out usedPaths);
foreach (string p in usedPaths)
{
    // p is one contributing mod data file
}

// walk the children and see whether your node was overridden by a same-named one
foreach (XmlNode node in merged.DocumentElement.ChildNodes)
{
    MBObjectManager.Instance.DebugPrint(line => { });
}
```

## Risks and Boundaries

- **`Instance`'s lifetime.** `Destroy()` invalidates the singleton. A static field holding `MBObjectManager.Instance` points at a destroyed object on the second game — the same class of bug as caching `Campaign.Current`.
- **`GetObjectTypeList<T>()` returns a live view.** Registering or unregistering while enumerating throws.
- **Predicate lookups are O(n).** `GetObject<T>(Func<...>)` and `GetObjects<T>(Func<...>)` are expensive over large type sets such as troops and equipment. Cache the result.
- **XSD validation throws.** `LoadOneXmlFromFile` validates by default, so structurally wrong data fails at load rather than silently — good, but it means **one bad mod XML file can stop the whole game from loading**.
- **XML overrides are silent.** Same-named nodes and attributes being overridden produces no log. Debug with `GetMergedXmlForManaged`.
- **`ReadObjectReferenceFromXml` returns null on a misspelled attribute**, without erroring. When cross-object references fail, check the attribute name first.
- **`typeId` collisions.** Two types sharing a `typeId` corrupt save resolution, and it only shows up on load. Pick a high number that does not clash with base game.
- **The registry is not save state.** MBObject registration and instantiation happen at load time; stuffing runtime state into it does nothing.
- **Single-thread plus native interop.** `LoadXML` and the native-side loaders touch the underlying resource system and may only be called on the main thread during startup; `GetMergedXmlForNative` crosses a native bridge and has real cost on some platforms.

## Dependencies

- Upstream / providers:
  - `Game` calls `Init()` during startup, holds `ObjectManager`, and routes save loading through `LoadSaveGame`. It has no English page — the Chinese [zh `Game`](../../../../zh/api/core-extra/Game) is the only one on disk.
  - [MBObjectBase](../MBObjectBase) is the base of every type this manager owns; it receives the `Deserialize` callback from here.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `RegisterSubModuleTypes()` is the standard place for a submodule to register types.
- Peers / downstream:
  - [Campaign](../../campaign/Campaign) feeds campaign-layer types in through `OnRegisterTypes(MBObjectManager)` and `BeforeRegisterTypes`.
  - The save system, `SaveManager` with `SaveContext` and `LoadContext`, resolves MBObject references. That bucket has no English pages; all three are Chinese-only: [zh `SaveManager`](../../../../zh/api/save-system/SaveManager) · [zh `SaveContext`](../../../../zh/api/save-system/SaveContext) · [zh `LoadContext`](../../../../zh/api/save-system/LoadContext).
  - UI and diagnostics reach it through `MBDebug`, which has no English page ([zh `MBDebug`](../../../../zh/api/engine/MBDebug)).

## See Also

- ↑ Parent: this bucket has no index page. It holds two pages: [MBObjectBase](../MBObjectBase) and this one.
- ↔ Related: [MBObjectBase](../MBObjectBase) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign) · zh [Game](../../../../zh/api/core-extra/Game) · zh [MBDebug](../../../../zh/api/engine/MBDebug) (the two `zh` entries have no English pages; see [the gap list](../../../../GAPS))