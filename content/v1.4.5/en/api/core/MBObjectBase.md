---
title: "MBObjectBase"
description: "The root base class of every MB object in TaleWorlds.ObjectSystem: it carries StringId / MBGUID identity, the register-and-initialize lifecycle, and the deserialize / save hooks. Understand it to fetch and manage game objects safely through MBObjectManager."
---

# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** none (root base class)
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBObjectBase.cs`

## One-line responsibility

It is the common root of every game object that is *registered, name-lookupable, and saveable* — the items, characters, heroes, settlements, clans and kingdoms you touch are all its subclasses.

## Mental Model

- **Lifecycle**: you almost never `new` an `MBObjectBase` directly. Module XML (items / characters / spcultures …) is read and registered by `MBObjectManager` at game start; runtime objects (Hero, MobileParty, …) are created and registered by `Campaign.Current.CampaignObjectManager` when a campaign starts or loads. After registration `IsRegistered = true`, after initialization `IsInitialized = true`, and after `AfterInitialized` `IsReady = true`.
- **Who creates / who holds**: module-level objects are held by the global singleton `MBObjectManager.Instance`; campaign-level objects are held by `Campaign.Current.CampaignObjectManager`. Once registered, the object is indexed per type (TypeRecord) by the owning manager. Note that `CampaignObjectManager` is **not** a subclass of `MBObjectManager` — it is a separate campaign object manager.
- **Layer**: this is the *data / identity layer* of the object system, sitting between module loading and saving. It does not own rule logic — that belongs to Behavior / Model / Campaign.
- **When to use**: read it when you hold an object's `StringId` or reference and need its identity (`Id`), display name (`GetName`), or readiness (`IsReady`); resolve an object by name via the manager's `GetObject<T>(stringId)`.
- **When NOT to use / correct alternative**: do not write `new ItemObject("xxx")` to spin up an MB object on the fly — it is never registered, cannot be looked up, and never enters a save. New objects come from module XML registration, or are created by the proper manager (e.g. `MBObjectManager.RegisterObject<T>`, or the campaign system). Do not mutate `StringId` or unregister an already-registered object during `Deserialize` / `OnBeforeLoad` / `AfterLoad`.

## Dependencies

**Upstream (who creates / manages it)**

- [MBObjectManager](../../campaign-ext/MBObjectManager) —— registration and name lookup of module objects (`GetObject<T>(string)`, `GetObjectTypeList<T>()`)
- `MBGUID` —— the identity structure behind `Id` (TypeId + SubId), used to restore cross-save references
- SaveSystem / `SaveableProperty` —— field persistence (`[SaveableProperty(1/2/3)]`)
- `TaleWorlds.Localization.TextObject` —— the return type of `GetName()`
- `System.Xml.XmlNode` —— the node passed into `Deserialize`

**Downstream (its subclasses)**

- [ItemObject](../../core-extra/ItemObject) —— items (module level)
- [Game](../../core-extra/Game) —— the top-level game object
- [Hero](../../campaign/Hero) —— heroes (campaign level, managed by `CampaignObjectManager`)
- `CharacterObject` —— character templates (module level)

**Lifecycle hooks / events**

- `OnRegistered` → virtual `AfterRegister()` (after registration completes)
- `OnBeforeLoad` → virtual `OnBeforeLoad()` (`[LoadInitializationCallback]`, before load)
- `PreAfterLoad` / `AfterLoad` (virtual, post-load hooks)
- `AfterInitialized` → sets `IsReady`
- `Deserialize(MBObjectManager, XmlNode)` (virtual, reads `StringId` from XML)

**Behaviors / Actions / Models**: no direct dependency. `MBObjectBase` is a data carrier; they consume its subclasses (e.g. `ItemRoster` holds `ItemObject` references, campaign logic reads `Hero`).

**Save**

- `SaveableProperty(1) = StringId`, `(2) = Id`, `(3) = IsRegistered`
- Saving is driven by `MBObjectManager`; the object must be registered and its identity (`Id`) stable, otherwise cross-save references cannot be restored.

## Risks

1. **Unregistered objects**: an `MBObjectBase` subclass created with `new` is never added to any manager's TypeRecord, so `GetObject<T>(id)` always returns `null` and it never reaches a save. Always go through `MBObjectManager.RegisterObject<T>` or module XML registration.
2. **StringId collisions**: within one type (one TypeRecord) `StringId` must be unique; a duplicate registration overwrites the previous one and triggers a `Debug.FailedAssert`. When hand-writing module XML `id`s, avoid clashing with native or other-module ids.
3. **Save-identity drift**: `Id` is an `MBGUID` (TypeId + SubId) and cross-save references rely on it. After registration do not change `StringId`, and do not `Unregister` an object still referenced by others — otherwise references break after load.
4. **Mutation during load**: changing the state of a registered object inside `OnBeforeLoad` / `Deserialize` / `AfterLoad` can corrupt load order or leave `IsInitialized` / `IsReady` inconsistent. Do supplementary data fixes inside `AfterLoad`, and confirm `IsReady`.
5. **IsRegistered caching semantics**: `OnRegistered` sets `IsRegistered = true` and then calls the virtual `AfterRegister`; subclasses overriding `AfterRegister` must respect dependency order — referenced objects may not yet be ready at that point.

## Member notes

**Identity fields**

- `StringId` (`string`, `[SaveableProperty(1)]`): the `id` from module XML, the key for name lookup. Keep it stable after registration; don't rewrite it at runtime.
- `Id` (`MBGUID`, `[SaveableProperty(2)]`): globally unique identity (TypeId + SubId). `GetHashCode()` is computed from `Id`, so `MBGUID` works as an equality / dictionary key.
- `IsInitialized` (`[CachedData]`, `internal set`), `IsReady` (`[CachedData]`), `IsRegistered` (`[CachedData]`, `internal`/`private set`, `[SaveableProperty(3)]`): lifecycle flags read by managers and the load flow; do not assign them externally.

**Lifecycle methods**

- `Initialize()` (virtual): sets `IsInitialized = true`; normally called by `Deserialize`.
- `Deserialize(MBObjectManager, XmlNode)` (virtual): calls `Initialize()` and reads `StringId` from the node attribute `"id"`; subclasses override to fill their own fields.
- `OnRegistered()`: called after the manager registers the object; sets `IsRegistered = true` then calls `AfterRegister()`.
- `OnUnregistered()`: on unregister, sets `IsRegistered = false`.
- `AfterRegister()` (virtual): post-registration hook to wire up own references once they are available.
- `AfterInitialized()`: if already registered, sets `IsReady = true`.
- `OnBeforeLoad()` / `PreAfterLoad()` / `AfterLoad()` (virtual): load-lifecycle hooks; `BeforeLoad` is fired by `[LoadInitializationCallback]` and, if already registered, re-registers without initialization and sets `IsInitialized`.

**Read access**

- `GetName()` (virtual): defaults to `new TextObject(StringId)`; subclasses (e.g. `Hero`) override it to return the localized display name.
- `GetHashCode()`: returns `Id.GetHashCode()`, which makes it safe to use objects as keys in `MBGUID`-keyed collections.

## Real Example

Resolving a module item object by `StringId` (real acquisition path, verified against `MBObjectManager.GetObject<T>(string)` source):

```csharp
// At runtime (e.g. inside a SubModule's OnGameInitializationFinished, or a CampaignBehavior)
// fetch the item object by StringId through the global MBObjectManager
ItemObject sword = MBObjectManager.Instance.GetObject<ItemObject>("item_sword_1");

if (sword != null && sword.IsReady)
{
    // what you get back is a real, registered, initialized object — safe to read
    TextObject displayName = sword.GetName();
    MBGUID identity = sword.Id;
    // hand it off to ItemRoster / equipment logic, etc.
}

// Crucial: "item_sword_1" must come from a loaded module's XML (with that id),
// otherwise GetObject returns null. Never substitute new ItemObject("item_sword_1").
```

## Navigation

- ↑ Parent: [Core module index](./)
- ↔ Sibling: [MBSubModuleBase](../MBSubModuleBase), [Game](../../core-extra/Game)
- Downstream / related: [ItemObject](../../core-extra/ItemObject), [Hero](../../campaign/Hero)
- Upstream hub: [MBObjectManager](../../campaign-ext/MBObjectManager)
- Architecture: [Doc contract](../../../architecture/doc-contract), [Architecture home](../../../architecture/)

## See Also

- Upstream hub: [MBObjectManager](../../campaign-ext/MBObjectManager) —— object registration and name lookup
- Downstream / related: [ItemObject](../../core-extra/ItemObject), [Hero](../../campaign/Hero)
- Architecture constraints: [Doc contract](../../../architecture/doc-contract), [Architecture home](../../../architecture/)
