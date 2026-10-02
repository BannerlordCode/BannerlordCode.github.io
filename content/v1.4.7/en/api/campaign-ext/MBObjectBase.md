---
title: "MBObjectBase"
description: "The root of every MBObject-derived type: carries StringId, MBGUID and initialised / ready state, and defines the deserialisation and pre/post-load lifecycle hooks. The standard starting point for custom static data types."
---
# MBObjectBase

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public class MBObjectBase`
**Base:** none
**Source:** `TaleWorlds.ObjectSystem/MBObjectBase.cs` (declared at line 11)

## Overview

`MBObjectBase` is the root class for all of the game's "statically defined" data. Troops (`CharacterObject`), items (`ItemObject`), equipment (`Equipment`), skills, traits, crafting recipes, ships — and every mod's custom definitions — ultimately derive from it. [MBObjectManager](../MBObjectManager) registers and instantiates them; the class itself holds no game logic. What it holds is **identity** (`StringId` and `MBGUID Id`), **lifecycle state** (`IsInitialized` / `IsReady`), and a full set of **deserialisation callbacks**.

Those callbacks are the most important thing to understand here. Data is not built by a constructor — [MBObjectManager](../MBObjectManager) reflectively fills fields from XML. Once the fields are filled the engine calls `AfterInitialized()` then `OnRegistered()`; on load, after the object graph is rebuilt, it calls `PreAfterLoadInternal()` and `AfterLoadInternal()`. Almost all work a derived type does — resolving references to other definitions, computing derived attributes, registering into a lookup table — hangs off those hooks rather than off a constructor.

`GetName()` is the uniform way UI asks "what is this definition called". If you want a generic display-name path, call it instead of switching on type yourself.

## Mental Model

Think of it as **an object template filled in by a data loader rather than by `new`**. Three mental points:

1. **The constructor runs once, and does not mean the data is present.** `MBObjectBase(string stringId)` only sets an id. Real field values arrive through `Deserialize(MBObjectManager, XmlNode)`. **Any initialisation that depends on your fields belongs in `AfterInitialized()`, not the constructor** — in the constructor you read defaults.
2. **`IsInitialized` and `IsReady` are different gates.** `IsInitialized` (`internal set`) means deserialisation finished. `IsReady` is a writable "usable" flag that derived types use to mean "my dependencies are resolved". UI behaviour on a definition with `IsReady == false` is undefined, so **check `IsReady` before use**.
3. **Loading a save does not go through `Deserialize`.** Deserialisation happens on XML load only. On load, the save system constructs and populates objects directly, taking the `PreAfterLoad` / `AfterLoad` path instead. **Initialisation written only into `AfterInitialized` is missing after a load** — the most common bug in custom MBObject types.

`AfterLoad` and `PreAfterLoad` are both `protected virtual` and unreachable from outside; the engine calls them through the public `PreAfterLoadInternal()` / `AfterLoadInternal()` wrappers.

## When to Use / When Not To

- **Use**: to define custom XML-loadable data (equipment, items, recipes, troop variants).
- **Use**: to reconnect "reference to another definition" fields in `AfterLoad()`, because by then the whole object graph exists.
- **Use**: to get a uniform display name via `GetName()` rather than a type switch.
- **Don't**: initialise from your own fields in the constructor — the fields are not populated yet.
- **Don't**: do heavy work in `OnRegistered()` — that is a notification that the registry accepted the object, not that the data is complete.
- **Don't**: call `PreAfterLoadInternal()` / `AfterLoadInternal()` by hand. The engine drives them as part of the load pipeline; calling them manually corrupts object-graph consistency.

## Member Guide

### Identity and state

| Member | What it is for, side effects, timing |
| --- | --- |
| `string StringId { get; set; }` | The stable identifier from the XML definition. Saves and cross-mod references both key on it, so **changing it breaks compatibility**. |
| `MBGUID Id { get; set; }` | Runtime unique identity; save reference resolution depends on it. The engine assigns it — never write it yourself. |
| `bool IsInitialized { get; internal set; }` | Whether deserialisation has finished. `internal set` means mods can only read it. |
| `bool IsReady { get; set; }` | Whether the object is usable. Derived types set it once dependencies are resolved. **Check it before handing the definition to UI or logic.** |
| `MBObjectBase()` | Default constructor, used when creating instances at runtime (with `MBObjectManager.CreateObject<T>()`). |
| `MBObjectBase(string stringId)` | Constructor with an explicit StringId. |
| `MBObjectBase(MBObjectBase other)` | Copy constructor, for duplicating a definition. |

### Lifecycle hooks

| Member | What it is for, side effects, timing |
| --- | --- |
| `virtual void Initialize()` | Hook run before deserialisation. |
| `virtual void Deserialize(MBObjectManager objectManager, XmlNode node)` | **The central override point.** Reads fields from the XML node; `objectManager` resolves references to other MBObjects. The default implementation is reflective — override only when the reflective mapping is insufficient. |
| `void AfterInitialized()` | Called after deserialisation and after `Initialize()`. **This object's** fields are populated here, but objects it references may not be finished yet. |
| `virtual void AfterRegister()` | Called once registered into `MBObjectManager`. The right place to insert the object into your type's own static lookup table. |
| `void OnRegistered()` | Notification that the object has entered the registry. |
| `void OnUnregistered()` | Notification that it has left. **Do not rely on the object afterwards.** |
| `protected virtual void OnBeforeLoad()` | Before the load flow reads the object. Use it to clear caches that must be rebuilt. |
| `protected virtual void PreAfterLoad()` | The "pre-load" hook: fields are populated but the object graph is not yet connected. |
| `void PreAfterLoadInternal()` | Public wrapper the engine uses to invoke `PreAfterLoad()`. **Do not call it from mod code.** |
| `protected virtual void AfterLoad()` | The "post-load" hook: **the entire object graph exists**. Reference reconnection and cache rebuilding belong here. |
| `void AfterLoadInternal()` | Public wrapper the engine uses to invoke `AfterLoad()`. **Do not call it from mod code.** |

### Utilities

| Member | What it is for, side effects, timing |
| --- | --- |
| `virtual TextObject GetName()` | The localised display name. **The uniform naming entry point**; UI and logging should prefer it over a type switch. |
| `override int GetHashCode()` | Overrides `object.GetHashCode()` so two instances with the same StringId behave consistently in dictionaries. |

## Examples

### Example 1: A minimal custom MBObject subclass

Note that initialisation lives in `AfterInitialized` / `AfterLoad`, never in the constructor.

```csharp
using System.Xml;
using TaleWorlds.Localization;
using TaleWorlds.ObjectSystem;

public class MyItemDef : MBObjectBase
{
    public int Price = 0;
    public string BaseId = "";

    public MyItemDef(string stringId) : base(stringId) { }

    // Override Deserialize only when the reflective mapping is insufficient
    public override void Deserialize(MBObjectManager objectManager, XmlNode node)
    {
        base.Deserialize(objectManager, node);
        BaseId = node.Attributes["base_id"]?.Value ?? "";
    }

    // After deserialisation: this object's own fields are populated here
    public override void Initialize() { }

    // After a save load: the whole object graph exists, so reconnect references here
    protected override void AfterLoad()
    {
        base.AfterLoad();
    }

    public override TextObject GetName()
    {
        return new TextObject("{=MyMod.MyItemDefName}" + StringId);
    }
}
```

### Example 2: Registering and using a custom definition

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.ObjectSystem;

public class MySubModule : MBSubModuleBase
{
    protected override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
        // Submodules register through RegisterSubModuleTypes; the manager comes from the singleton
        MBObjectManager.Instance.RegisterType<MyItemDef>("MyItemDef", "MyItemDefs", 9101u, true);
    }

    protected override void OnGameInitializationFinished(Game game)
    {
        base.OnGameInitializationFinished(game);

        // Check readiness before using the definition
        MyItemDef def = MBObjectManager.Instance.GetObject<MyItemDef>("my_item_def_01");
        if (def != null && def.IsReady)
        {
            TextObject display = def.GetName();
        }
    }
}
```

### Example 3: Reconnecting references after a load

Resolving cross-object references in `AfterLoad` is the canonical MBObject pattern.

```csharp
using TaleWorlds.ObjectSystem;

public class MyItemSetDef : MBObjectBase
{
    // A reference to another definition, connected in AfterLoad
    public MBObjectBase ReferencedDef;

    public MyItemSetDef(string stringId) : base(stringId) { }

    protected override void AfterLoad()
    {
        base.AfterLoad();

        // The object graph exists now, so resolving by StringId is safe
        ReferencedDef = MBObjectManager.Instance.GetObject<MyItemDef>(StringId + "_base");
    }
}
```

## Risks and Boundaries

- **The constructor is not initialisation.** Fields arrive through `Deserialize`; reading them in the constructor returns defaults (`0`, `null`, `false`). This is the single most common mistake in custom MBObject types.
- **Objects you reference may not be ready in `AfterInitialized`.** XML deserialisation is ordered, parents finishing before children. Cross-type dependencies belong in `AfterLoad`.
- **`IsReady` is the derived type's responsibility.** The base class only offers a writable flag. If your type has external dependencies, set `IsReady = true` explicitly once they resolve, or UI may consume partially-built data.
- **References after `OnUnregistered` are dangling.** `UnregisterObject`, `RemoveTemporaryTypes` and `Destroy` all invalidate surviving references; reading their properties throws or returns garbage.
- **Never call `PreAfterLoadInternal` / `AfterLoadInternal` by hand.** They assume the save system has already built the object graph; calling them manually runs `AfterLoad` at the wrong moment.
- **Changing `StringId` breaks saves and mod compatibility.** It is simultaneously the XML identity, the save reference key and a cross-mod contract. Renaming it is renaming the type.
- **Single-thread, load-time constraints:** `Deserialize`, `AfterInitialized` and `AfterLoad` all run on the main thread during loading, while the game world does not yet exist. Touching `Campaign.Current` or `Mission.Current` there is guaranteed to fail.
- **`MBGUID Id` is engine-assigned.** Writing it yourself causes id collisions, and the symptom is save references resolving to the wrong object.

## Dependencies

- Upstream / providers:
  - [MBObjectManager](../MBObjectManager) registers, instantiates and drives this class's whole lifecycle; `Game` creates the manager at startup. `Game` has no English page — the Chinese [zh `Game`](../../../../zh/api/core-extra/Game) is the only one on disk.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnRegisterTypes` is when subclasses get registered.
- Peers / downstream:
  - `Game.ObjectManager` exposes the manager that owns these instances.
  - [Campaign](../../campaign/Campaign)'s `OnRegisterTypes` registers every campaign-layer MBObject-derived type.
  - `LoadContext` and `SaveContext` write and resolve MBObject references. The save-system bucket has no English pages; both are Chinese-only: [zh `LoadContext`](../../../../zh/api/save-system/LoadContext) · [zh `SaveContext`](../../../../zh/api/save-system/SaveContext).

## See Also

- ↑ Parent: this bucket has no index page. It holds two pages: this one and [MBObjectManager](../MBObjectManager).
- ↔ Related: [MBObjectManager](../MBObjectManager) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign) · zh [Game](../../../../zh/api/core-extra/Game) (no English page; see [the gap list](../../../../GAPS))