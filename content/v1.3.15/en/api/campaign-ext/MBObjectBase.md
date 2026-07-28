---
title: "MBObjectBase"
description: "Root type for every registerable game object in ObjectSystem: StringId, MBGUID, registration lifecycle, and save-time reference identity."
---

# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem  
**Module:** TaleWorlds.ObjectSystem  
**Type:** `public class MBObjectBase`  
**Base:** —  
**File:** `TaleWorlds.ObjectSystem/MBObjectBase.cs`  
**Authority source:** 1.4.5 (semantics match 1.3.15)

## Overview

`MBObjectBase` is the root type of Bannerlord's **ObjectSystem**. Almost everything that lands in the `MBObjectManager` dictionary, can be deserialized from XML, and is rebuilt in saves as an **object reference** (not a bare string) inherits it:

- Campaign entities: `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, `ItemObject`, `CharacterObject`, …
- Core definitions: `SkillObject`, `CultureObject`, `Monster`, `CraftingTemplate`, …
- Mod custom types: if you register them in `RegisterSubModuleTypes`, they join the same system

As a modder you rarely `new MBObjectBase()` yourself, but you **will** look objects up by `StringId`, hold `Hero` / `ItemObject` references, and store those references in `SaveableField`s every day. This class is the key to why saves carry object identity instead of raw id strings.

## Mental Model

Think of `MBObjectBase` as a **registry entry with two keys**:

| Key | Type | Role |
|-----|------|------|
| `StringId` | `string` | Human/XML/`GetObject<T>("iron_sword_t2")` stable name |
| `Id` | `MBGUID` | Runtime-unique GUID; `GetHashCode()` is based on it |

Lifecycle (engine-driven; mods mostly observe):

1. **Construct** — `new T()` or XML deserialization creates the instance; it is **not** in the manager yet.
2. **Register** — after `MBObjectManager` records it, `OnRegistered()` runs → `IsRegistered = true` → virtual `AfterRegister()`.
3. **Initialize** — `Initialize()` / `Deserialize` set `IsInitialized`; `AfterInitialized()` sets `IsReady` when already registered.
4. **Save load** — `[LoadInitializationCallback] BeforeLoad` → if `IsRegistered`, `TryRegisterObjectWithoutInitialization` re-attaches to the manager, then `PreAfterLoad` / `AfterLoad`.

**When to use**

- Game data that needs stable identity (items, heroes, settlements, skills, …)
- Saving **references to registered objects** in `SaveableField` (the engine resolves by object identity; you don't hand-rebuild from strings)

**When not to use**

- Temporary UI state, per-frame caches → plain class / ViewModel, keep them out of ObjectSystem
- Cross-session data that is **not** an ObjectSystem object → `CampaignBehaviorBase.SyncData` with primitives or your own Saveable types
- Don't assume "has a `StringId`" means "registered"; unregistered instances in saves or lookups corrupt saves / return null

## Dependencies

| Direction | Type / system | Relationship |
|-----------|---------------|--------------|
| Upstream | [MBObjectManager](../MBObjectManager) | Registry; `Instance.GetObject<T>(stringId)`, type registration |
| Upstream | [Game](../../core-extra/Game) | Session holds `ObjectManager`; loads base XML |
| Upstream | [MBSubModuleBase](../../core/MBSubModuleBase) | `RegisterSubModuleTypes` declares custom `MBObjectBase` derivatives |
| Downstream | [Hero](../../campaign/Hero), ItemObject, Settlement, … | Shared base of all business objects |
| Save | [SaveManager](../../save-system/SaveManager) | `StringId` / `Id` / `IsRegistered` are `[SaveableProperty]`; reference fields collected via the object graph |
| Load hooks | `LoadInitializationCallback` | `BeforeLoad` rebuilds registration after deserialize, before business AfterLoad |

## Risks and crash boundaries

| Risk | Consequence | Mitigation |
|------|-------------|------------|
| Use an unregistered instance as a real object | `GetObject` misses it; save refs dangle | Only use manager-returned instances, or official Creator / XML load paths |
| Change an existing object's `StringId` without updating callers | Lookup failures, bad saves, duplicate ids | Treat StringId as a **primary key**; almost never mutate at runtime |
| Touch the business graph before `OnBeforeLoad` / AfterLoad finish | Other objects not ready yet | Put logic in `AfterLoad` overrides or Campaign events; don't poke `Campaign.Current` in constructors |
| Custom type never `RegisterType`d | XML / save load fails | Register in `RegisterSubModuleTypes`; keep type ids unique vs vanilla |
| Stuff an unregistered temp object into a `SaveableField` | Serialize/deserialize crash or null | Only save **registered** `MBObjectBase` refs, or save `StringId` and resolve later |
| Confuse `Id` (GUID) with `StringId` | Wrong API usage | Display/config → StringId; hash/internal → Id |

## Key members

### Identity

| Member | Purpose and timing |
|--------|--------------------|
| `string StringId { get; set; }` | Stable string id. XML `id=`, config tables, `GetObject<T>(id)` all use it. `[SaveableProperty(1)]`. |
| `MBGUID Id { get; set; }` | Runtime GUID. `GetHashCode()` is based on it. `[SaveableProperty(2)]`. |
| `bool IsInitialized` | Whether `Initialize`/`Deserialize` has run. `[CachedData]`, not a business primary key. |
| `bool IsReady` | True after registration and `AfterInitialized`. |
| `bool IsRegistered` | Whether it sits in ObjectManager; persisted in saves. Internal set. |

### Lifecycle (engine-called; subclasses may override)

| Member | Purpose and timing |
|--------|--------------------|
| `virtual void Initialize()` | Marks `IsInitialized = true`. XML path calls this from `Deserialize`. |
| `virtual void Deserialize(MBObjectManager, XmlNode)` | Reads `id` from XML and `Initialize`s. Override on custom objects for extra attributes. |
| `virtual void AfterRegister()` | After `OnRegistered`; light "just entered the table" hooks. |
| `void AfterInitialized()` | If registered, sets `IsReady = true`. |
| `void OnRegistered()` / `OnUnregistered()` | Manager sets `IsRegistered` on register/unregister. |
| `protected virtual void OnBeforeLoad()` | After load: re-attach registered objects to Manager. |
| `protected virtual void PreAfterLoad()` / `AfterLoad()` | Two-phase business repair after load; engine calls via `*Internal`. |
| `virtual TextObject GetName()` | Default `TextObject` content is `StringId`; display names usually overridden by subclasses. |

### Construction

```csharp
public MBObjectBase()
public MBObjectBase(string stringId)   // sets StringId only; still needs registration
public MBObjectBase(MBObjectBase other) // copies StringId
```

## Real examples

### Example 1: Resolve a registered object by StringId

```csharp
using TaleWorlds.Core;
using TaleWorlds.ObjectSystem;

// In-session: Game.Current.ObjectManager and MBObjectManager.Instance share the same registry
ItemObject ironSword = MBObjectManager.Instance.GetObject<ItemObject>("iron_sword_t2");
if (ironSword == null)
{
    // Wrong id, module not loaded, or type not registered
    return;
}

// StringId is the primary key; Id is the runtime GUID
string key = ironSword.StringId; // "iron_sword_t2"
```

### Example 2: Persist an object reference in a CampaignBehavior (preferred)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.SaveSystem;

public class MyTrackedHeroBehavior : CampaignBehaviorBase
{
    // Saves a Hero reference; the engine resolves by MBObjectBase identity.
    // Don't replace this with a bare string and hand-rebuild.
    [SaveableField(1)]
    private Hero _patron;

    public override void RegisterEvents()
    {
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, OnSessionLaunched);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("patron", ref _patron);
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        if (_patron == null)
            _patron = Hero.MainHero; // already-registered campaign object
    }
}
```

### Example 3: Register a custom type (SubModule)

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.ObjectSystem;

public class MyModSubModule : MBSubModuleBase
{
    protected override void RegisterSubModuleTypes()
    {
        base.RegisterSubModuleTypes();
        // typeId must be globally unique; collisions fail registration
        MBObjectManager.Instance.RegisterType<MyCustomObject>(
            "MyCustomObject", "MyCustomObjects", 9100u, true, false);
    }
}

// Custom object: override Deserialize at least, to read XML fields
public class MyCustomObject : MBObjectBase
{
    public int Power { get; private set; }

    public override void Deserialize(MBObjectManager objectManager, System.Xml.XmlNode node)
    {
        base.Deserialize(objectManager, node); // sets StringId + Initialize
        if (node.Attributes["power"] != null)
            Power = int.Parse(node.Attributes["power"].Value);
    }
}
```

## Cross-version notes

- **1.3.0 / 1.3.15 / 1.4.5:** `StringId` + `Id` + register/load-hook model is stable.
- **1.4.5:** source is decompiled; `SaveableProperty` numbers and `AutoGenerated*` collectors follow the same idea as 1.3.15. When modding, stick to "register, then reference"; don't depend on private field layout.

## ↑ Parent Navigation

- [campaign-ext index](./) — module for this page
- [SDK overview](../../../architecture/sdk-overview) — layering and ObjectSystem placement
- [Save system](../../../architecture/save-system) — how references enter saves

## ↔ Sibling Navigation

| Page | Relationship |
|------|--------------|
| [MBObjectManager](../MBObjectManager) | Register and lookup entry point |
| [CampaignBehaviorBase](../CampaignBehaviorBase) | Common host; `SyncData` saves object refs |
| [Hero](../../campaign/Hero) | Typical `MBObjectBase` derivative (campaign character) |
| [Campaign](../../campaign/Campaign) | Campaign root; owns large object graphs |
| [Game](../../core-extra/Game) | Session and `ObjectManager` |
| [SaveManager](../../save-system/SaveManager) | Serialization coordinator |
| [MBSubModuleBase](../../core/MBSubModuleBase) | When to register custom types |

## See also

- [Module system](../../../architecture/module-system) — SubModule lifecycle and registration order
- [Doc contract](../../../architecture/doc-contract) — handwritten deep-page standard
