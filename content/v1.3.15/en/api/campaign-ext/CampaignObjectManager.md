---
title: "CampaignObjectManager"
description: "Campaign object classification lists and exact-type lookup; not a universal MBObjectManager registry."
---
# CampaignObjectManager

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `public class CampaignObjectManager`<br>
**Base:** none<br>
**Source:** `TaleWorlds.CampaignSystem/CampaignObjectManager.cs` (1.3.15)<br>
**Owner:** [`Campaign`](../../campaign/Campaign)

## One-line responsibility

`CampaignObjectManager` maintains the campaign's registered `Hero`, `Clan`, `Kingdom`, and `MobileParty` collections and exposes exact-ID, predicate, and unique-string-ID operations for them. It is not a universal registry for every `MBObjectBase`.

## Mental model: two object paths

Treat this as the campaign-owned object index, not as a service that a mod should freely construct:

1. The private `_objects` array registers exactly four types: `Hero`, `Clan`, `Kingdom`, and `MobileParty`. Public `Find<T>`, `FindFirst<T>`, `FindAll<T>`, and `FindNextUniqueStringId<T>` first match `typeof(T)` exactly, so `Find<MBObjectBase>` does not aggregate these subclasses.
2. `Settlements` is a separate saveable property. During initialization/load, `InitializeOnLoad` obtains it from `MBObjectManager.Instance.GetObjectTypeList<Settlement>()`. `Settlement` is not an `_objects` slot, so `CampaignObjectManager.Find<Settlement>(id)` is the wrong route.
3. `MobileParties` is the full registered party list. Caravan, Patrol, Militia, Garrison, Bandit, Villager, Lord, Custom, and `PartiesWithoutPartyComponent` are classification views maintained around `PartyComponent` and state changes. Internal code removes a party before a component change and adds it to the new category afterward.

Normal mod code reads `Campaign.Current.CampaignObjectManager`; creation, unregistration, and state migration are driven by internal paths called from `Hero`, `Clan`, `Kingdom`, `MobileParty`, campaign behaviors, and actions.

## Public properties

The collection types are `MBReadOnlyList<T>`. Treat them as read-only access points; do not mutate their backing lists.

| Member | Contract | Typical use |
| --- | --- | --- |
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; private set; }` | All settlements, sourced from the `Settlement` list in `MBObjectManager` |
| `MobileParties` | `public MBReadOnlyList<MobileParty> MobileParties { get; }` | All registered mobile parties |
| `CaravanParties` | `public MBReadOnlyList<MobileParty> CaravanParties { get; }` | Caravan classification |
| `PatrolParties` | `public MBReadOnlyList<MobileParty> PatrolParties { get; }` | Patrol classification |
| `MilitiaParties` | `public MBReadOnlyList<MobileParty> MilitiaParties { get; }` | Militia classification |
| `GarrisonParties` | `public MBReadOnlyList<MobileParty> GarrisonParties { get; }` | Garrison classification |
| `BanditParties` | `public MBReadOnlyList<MobileParty> BanditParties { get; }` | Bandit classification |
| `VillagerParties` | `public MBReadOnlyList<MobileParty> VillagerParties { get; }` | Villager classification |
| `LordParties` | `public MBReadOnlyList<MobileParty> LordParties { get; }` | Lord-party classification |
| `CustomParties` | `public MBReadOnlyList<MobileParty> CustomParties { get; }` | Custom `PartyComponent` classification |
| `PartiesWithoutPartyComponent` | `public MBReadOnlyList<MobileParty> PartiesWithoutPartyComponent { get; }` | Parties with no party component |
| `AliveHeroes` | `public MBReadOnlyList<Hero> AliveHeroes { get; }` | Active/alive heroes |
| `DeadOrDisabledHeroes` | `public MBReadOnlyList<Hero> DeadOrDisabledHeroes { get; }` | Dead or disabled heroes |
| `Clans` | `public MBReadOnlyList<Clan> Clans { get; }` | Registered clans |
| `Kingdoms` | `public MBReadOnlyList<Kingdom> Kingdoms { get; }` | Registered kingdoms |
| `Factions` | `public MBReadOnlyList<IFaction> Factions { get; }` | Factions maintained by clan/kingdom registration paths |

`MaxCreatedPostfixIndex`, `PreAfterLoad()`, `AfterLoad()`, `GetMaxObjectSubId()`, `OnItemAdded()`, and `UnregisterItem()` belong to the private nested `CampaignObjectType<T>` implementation, not to the top-level mod-facing API. A decompiler may show those nested members beside the manager and make them look public; documenting them as `CampaignObjectManager` methods produces invalid examples.

## Dependencies

| Direction | Type / system | Relationship |
|---|---|---|
| Owner | [`Campaign`](../../campaign/Campaign) | Creates, owns, initializes, and reloads the manager |
| Base registry | [`MBObjectManager`](../MBObjectManager) | Supplies the settlement list and lower-level object registration tables |
| Entity base | [`MBObjectBase`](../MBObjectBase) | Provides `StringId`, `MBGUID`, readiness, and common load lifecycle |
| Consumers | [`Hero`](../../campaign/Hero), [`MobileParty`](../../campaign/MobileParty) | Expose the business state represented by the manager's collections |
| Mutation boundary | `*Action.Apply` | Changes world facts before internal paths update the lists |

## Public method contracts

### `Find<T>(string id)`

```csharp
public T Find<T>(string id) where T : MBObjectBase;
```

Performs an exact `StringId` lookup in one of the four registered types. A miss returns `default(T)`, which is `null` for these reference types; it does not throw a not-found exception. Call it after the campaign object manager has been initialized.

### `FindFirst<T>(Predicate<T> predicate)`

```csharp
public T FindFirst<T>(Predicate<T> predicate) where T : MBObjectBase;
```

Scans the registered collection whose type is exactly `T` and returns the first match, or `default(T)` when there is none. The implementation invokes the predicate directly; do not pass `null`. Use `FindAll<T>(null)` for an unfiltered result.

### `FindAll<T>(Predicate<T> predicate)`

```csharp
public MBReadOnlyList<T> FindAll<T>(Predicate<T> predicate) where T : MBObjectBase;
```

Returns a new `MBList<T>` result. A `null` predicate means all objects in the exact registered type. This method does not search `Settlement`, `Town`, or `Village` objects.

### `FindNextUniqueStringId<T>(string id)`

```csharp
public string FindNextUniqueStringId<T>(string id) where T : MBObjectBase;
```

Checks the internal registration lists for `T`. If the ID is unused it returns it unchanged; otherwise it parses the trailing number and produces a new suffix. This is an ID helper used by object creation paths, not a way to register an arbitrary object. `Hero`, `Clan`, `Kingdom`, and `MobileParty` creation code calls it before the corresponding internal `Add*` path.

## Registration, classification, and lifecycle boundaries

### Who registers what

- `AddHero`, `AddClan`, `AddKingdom`, and `AddMobileParty` are `internal`. They allocate the relevant `MBGUID`, add the object to the base collection, and update readiness/classification state.
- `HeroStateChanged` moves a hero between `AliveHeroes` and `DeadOrDisabledHeroes` when the state changes.
- `BeforePartyComponentChanged` and `AfterPartyComponentChanged` are `internal`; they maintain the party classification lists around a component change.
- `RemoveClan`, `RemoveMobileParty`, and `UnregisterDeadHero` are internal paths used by actions or campaign behaviors. A mod should not call them through reflection or remove items from the read-only lists.

### The save graph is not the lookup graph

The 1.3.15 save members are:

| Attribute | Member | Meaning |
| --- | --- | --- |
| `[SaveableField(20)]` | `_deadOrDisabledHeroes` | Base list of dead/disabled heroes |
| `[SaveableField(30)]` | `_aliveHeroes` | Base list of alive heroes |
| `[SaveableField(40)]` | `_clans` | Base clan list |
| `[SaveableField(50)]` | `_kingdoms` | Base kingdom list |
| `[SaveableField(71)]` | `_mobileParties` | Base mobile-party list |
| `[SaveableProperty(80)]` | `Settlements` | Settlement list obtained from `MBObjectManager` and saved with the manager |

The other party classification lists and `Factions` are runtime indexes rather than separately saved fields. After load, the manager reconstructs object-type slots and faction/party classification. [`Campaign`](../../campaign/Campaign) owns this save graph; it is not the storage bucket used by a mod behavior's `SyncData`.

## Real consumers

The source call direction is:

| Consumer | Call | Purpose |
| --- | --- | --- |
| `Campaign` | Constructs `new CampaignObjectManager()` and runs internal initialization/load steps | Creates and owns the campaign-level manager |
| `HeroCreator`, `Hero` | `Find<Hero>`, `FindNextUniqueStringId<Hero>` | Avoids duplicate heroes and allocates IDs |
| `Clan`, `Kingdom`, `MobileParty` | `FindNextUniqueStringId<T>` plus internal `Add*` | Creates and registers objects in base/classification lists |
| `ConversationCharacterData` | `FindFirst<MobileParty>` | Resolves a party by party index for conversation data |
| Encyclopedia pages | `Find<Hero>`, `Find<Clan>`, `Find<Kingdom>` | Resolves encyclopedia objects from string IDs |
| Campaign behaviors/actions | Internal removal and state-transition methods | Keeps indexes correct after daily behavior, death, destruction, or component changes |

### Settlement, Town, and Village

`Settlement` derives from `MBObjectBase`, but it is not in `CampaignObjectManager._objects`. Look up a settlement with `Settlement.Find(id)`, `MBObjectManager.Instance.GetObject<Settlement>(id)`, or `Campaign.Current.Settlements`. `Town` and `Village` are domain components/data exposed through a `Settlement`; they are not independent object-manager registration types.

### Behavior, Action, UI, and Model dependencies

- **Behavior:** Reads these lists from daily ticks, load initialization, or event callbacks, then delegates state changes to the relevant `*Action.Apply` or entity API.
- **Action:** Clan destruction, hero lifecycle, and party-component transitions maintain the manager through internal calls. An action is a mutation boundary, not a replacement for the public read lists.
- **UI/Encyclopedia:** Can use `Find<T>` by ID or read-only classification lists to render objects. UI should not retain object references across a save/load boundary.
- **Model:** Models under `Campaign.Current.Models` calculate militia, economy, and other values. They may consume settlement/town/village state, but this manager performs no such calculation and is not a model registry.

## When to use / when not to use

**Use it when:**

- You have a known `Hero`, `Clan`, `Kingdom`, or `MobileParty` ID and need to resolve it during a running campaign.
- You need to enumerate all mobile parties, alive heroes, or a party category after campaign initialization.
- You need the settlement collection, while still using `Settlements`, `Settlement.Find`, or the `MBObjectManager` route for settlement lookup.

**Do not use it when:**

- You expect `Find<MBObjectBase>` to return every subclass, or `Find<Settlement>` to resolve a settlement.
- You plan to construct a second `CampaignObjectManager` instead of using the instance owned by `Campaign.Current`; a fresh instance is not the current campaign and has no valid registration/save state.
- You want to mutate the returned lists, set `IsReady`, or insert an object into a category manually; those actions bypass IDs, save state, and action lifecycle.
- The campaign is still starting or load-time object relinking has not completed; lookup results should not yet be treated as stable cross-save references.

## Runnable lookup example

This example uses the real campaign entry point and 1.3.15 types. The settlement lookup intentionally uses `Settlement.Find`, not the manager's generic lookup.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

CampaignObjectManager objects = Campaign.Current.CampaignObjectManager;

Hero derthert = objects.Find<Hero>("lord_derthert");
if (derthert != null && derthert.IsAlive)
{
    Clan clan = derthert.Clan;
    Kingdom kingdom = clan?.Kingdom;
}

MBReadOnlyList<MobileParty> parties = objects.FindAll<MobileParty>(null);
foreach (MobileParty party in parties)
{
    if (party.IsLordParty && party.CurrentSettlement != null)
    {
        Settlement location = party.CurrentSettlement;
        Town town = location.Town;
        Village village = location.Village;
    }
}

Settlement praven = Settlement.Find("town_praven");
```

Run this from a registered campaign behavior or another campaign callback after campaign startup. `lord_derthert` and `town_praven` are real 1.3.15 game IDs used as examples; production code must handle `null` because the object may be absent, destroyed, or not yet loaded.

## Version and risk notes

- The 1.4.5 comparison source is `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignObjectManager.cs`. Its outer properties, four exact `_objects` types, and four generic lookup contracts remain aligned with 1.3.15; the file-scoped namespace and formatting changes do not change this boundary.
- `FindFirst` does not null-check the predicate. Guard nullable `Party`, `Clan`, `Town`, and similar relationships inside the predicate.
- `FindAll` returns a new result list, but its elements are still current campaign objects. Do not save those references yourself across a load; persist stable IDs through a behavior's [`SyncData`](../CampaignBehaviorBase) and resolve them again after load.
- Classification depends on party components, hero state, and action lifecycle. Direct field mutation can leave UI, AI, economy models, and the save graph observing inconsistent state.
- This type indexes objects; it does not write daily militia or economy state. For those questions, follow the relevant model and behavior call chain rather than inferring persistence from this manager.

## Navigation

- Up: [campaign-ext API](./)
- Siblings: [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignBehaviorManager](../CampaignBehaviorManager) · [MBObjectManager](../MBObjectManager)
- Related objects: [Campaign](../../campaign/Campaign) · [Hero](../../campaign/Hero) · [Clan](../../campaign/Clan) · [Kingdom](../../campaign/Kingdom) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement)
- Return path: [CampaignBehaviorDataStore](../../campaign/CampaignBehaviorDataStore) documents the separate behavior-private state route
