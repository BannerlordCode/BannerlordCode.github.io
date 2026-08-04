---
title: "CampaignObjectBase"
description: "Shared Campaign-entity base: carries MBObjectBase identity, registration, initialization, and save lifecycle into Hero, MobileParty, and other objects."
---
# CampaignObjectBase

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignObjectBase : MBObjectBase`  
**Base:** [MBObjectBase](../MBObjectBase)  
**Source:** `TaleWorlds.CampaignSystem/CampaignObjectBase.cs`  
**Authority:** 1.3.15; the object-lifecycle boundary is the same in 1.4.5

## One-line responsibility

It gives Campaign entities the object-system identity, registration, and save lifecycle; it does not define Campaign behavior and is not a base object that a mod should instantiate directly.

## Mental model

`CampaignObjectBase` is intentionally thin: the source only carries `MBObjectBase` into `TaleWorlds.CampaignSystem` and lets the generated save collector recognize the type. Business state and behavior belong to derived types such as [Hero](../../campaign/Hero), [MobileParty](../../campaign/MobileParty), `Clan`, `Kingdom`, and `Settlement`.

```text
MBObjectManager / CampaignObjectManager
        | register, find by StringId, and run load phases
        v
CampaignObjectBase : MBObjectBase
        | inherits StringId / Id / IsInitialized / IsReady / GetName
        v
Hero, MobileParty, Clan, Kingdom, Settlement, and other Campaign entities
```

It sits between ObjectSystem and Campaign entities. A mod normally obtains a derived object through `Campaign.Current`, `Hero.MainHero`, or [CampaignObjectManager](../CampaignObjectManager), then reads the inherited identity/readiness contract. It should not be treated as a DTO that can exist independently of the object manager.

## When to use, and when not to

**Use it when:**

- A generic helper only needs to check whether a Campaign object is initialized/ready or read its `StringId`.
- An API accepts several Campaign entity types and `CampaignObjectBase` is the correct common parameter type.
- You need to understand why `CampaignObjectManager`, `MBObjectManager`, and the save system treat Campaign entities as registered objects.

**Do not use it when:**

- You want to `new CampaignObjectBase()` as a Hero, Party, or Settlement. It has none of those business components or save contracts.
- You want to assign `Id`, `IsInitialized`, or `IsRegistered` to fake a completed load. Registration and load phases belong to the object manager.
- You want to use `MBGUID Id` as a cross-save business key. Persist a stable `StringId` or a save-system object reference instead.
- A derived object's `IsReady` state has not been reached. Do not read properties that require other registered objects before the concrete type's lifecycle allows it.

## Inherited contract and dependencies

| Direction | Type / system | Relationship |
|---|---|---|
| Registration | [CampaignObjectManager](../CampaignObjectManager), `MBObjectManager` | Own type lists, `StringId` lookup, registration, and load phases |
| Base contract | [MBObjectBase](../MBObjectBase) | Provides `StringId`, `MBGUID Id`, and initialization/registration/load callbacks |
| Derived entities | [Hero](../../campaign/Hero), [MobileParty](../../campaign/MobileParty) | Add Campaign identity, location, party, and relationship state |
| Save registration | [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) | Includes the type in Campaign save collection definitions |
| Mod host | [CampaignBehaviorBase](../CampaignBehaviorBase) | Common lifecycle host for reading entities safely |
| Business consumers | [Campaign](../../campaign/Campaign), `*Action`, and `*Model` types | Consume object identity and mutate the world through domain boundaries |

## Lifecycle and visible members

This class adds no public properties or methods; its mod-visible contract comes from `MBObjectBase`:

| Member | Purpose and timing | Side effect / boundary |
|---|---|---|
| `StringId` | Logical identity used by object-manager lookup and many `Find<T>(string)` paths | Must stay stable after registration; collision handling can alter the actual ID |
| `Id` | Session-local `MBGUID` | Not a persistent cross-load key; do not assign or export it as an external identity |
| `IsInitialized` | Cached state after `Initialize`/XML deserialization | Does not mean every referenced object has loaded |
| `IsReady` | State in which registration and `AfterInitialized` allow use | Check before reading derived state; do not set it to bypass the manager |
| `GetName()` | Returns the default `TextObject` name; derived entities can override it | `StringId` may be an internal ID, so concrete entities usually expose a better business name |
| `Initialize` / `Deserialize` | Object creation and XML initialization phases | Cross-object references may not exist yet |
| `AfterRegister` / `PreAfterLoad` / `AfterLoad` | Post-registration and save-load phases | Bind other objects only in the phase where they are guaranteed to exist |

## Real examples

### Example 1: Read the stable identity of the current Hero through the base contract

`Hero.MainHero` is a real Campaign acquisition path. Treating it as the base type keeps only the object-system contract without inventing a new entity:

```csharp
using TaleWorlds.CampaignSystem;

CampaignObjectBase currentObject = Hero.MainHero;

if (currentObject != null && currentObject.IsInitialized && currentObject.IsReady)
{
    string stableId = currentObject.StringId;
    // Use Hero for Hero-specific state; do not infer that state from the base.
    Hero hero = (Hero)currentObject;
}
```

### Example 2: Find a derived object by its stable ID

The manager's generic lookup returns a concrete derived type. The base contract is useful for a readiness check, not as a replacement for that type:

```csharp
using TaleWorlds.CampaignSystem;

Hero mainHero = Hero.MainHero;
if (Campaign.Current != null && mainHero != null)
{
    Hero sameHero = Campaign.Current.CampaignObjectManager.Find<Hero>(mainHero.StringId);

    if (sameHero != null && sameHero.IsReady)
    {
        string idForLogging = sameHero.StringId;
        // For relations, gold, or ownership, call the matching Action instead.
    }
}
```

## Risks and crash/save boundaries

- **Direct construction creates a shell.** `CampaignObjectBase` has no Hero, MobileParty, or Settlement components; passing it to an API that expects a concrete entity can create invalid state or a bad cast.
- **Registration order matters.** `IsInitialized`, `IsReady`, and `IsRegistered` describe different phases. Before registration, `AfterRegister`, or `AfterLoad`, derived cross-references may be null.
- **Do not edit identity fields.** `StringId` participates in lookup and save references, while `Id` is manager-assigned. Manual changes can make an object disappear from type tables, create duplicate references, or prevent an old save from finding it.
- **Do not cache instances across campaigns.** After `CampaignObjectManager` clears or reloads, an old object no longer belongs to the current table. Reacquire it from `Campaign.Current` inside the current lifecycle.
- **Do not resolve references too early.** The base save collector only guarantees that the base object participates in collection; it does not guarantee that every Hero, Party, or Settlement has been restored. Defer dependent work to the concrete type's `AfterLoad` boundary or a later Campaign event.
- **The base contract does not bypass Actions.** A ready identity only means the object can be read. Ownership, relations, war, and party state still require the matching `*Action.Apply` so events, caches, and saves remain consistent.

## Cross-version notes

Both 1.3.15 and 1.4.5 use `CampaignObjectBase : MBObjectBase` for the object-system contract shared by Campaign entities. Derived types and module sets vary by version, so check the target version's concrete type, `CampaignObjectManager` result, and save definition instead of assuming the same `StringId` exists everywhere.

## ↑ Parent navigation

- [CampaignSystem API](../)
- [Campaign](../../campaign/Campaign) — campaign instance and lifecycle
- [MBObjectBase](../MBObjectBase) — registration, initialization, and load contract

## ↔ Sibling navigation

| Page | Relationship |
|---|---|
| [CampaignObjectManager](../CampaignObjectManager) | Owns and finds Campaign objects |
| [Hero](../../campaign/Hero) | Typical Campaign entity derived from this base |
| [MobileParty](../../campaign/MobileParty) | Derived type with map and Party components |
| [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) | Save type definitions for Campaign objects |
| [CampaignBehaviorBase](../CampaignBehaviorBase) | Obtains objects inside the event lifecycle |

## See also

- [Developer roadmap](../../../architecture/developer-roadmap)
- [Crash and save boundaries](../../../architecture/crash-boundaries)
- [Object-system API](../)
