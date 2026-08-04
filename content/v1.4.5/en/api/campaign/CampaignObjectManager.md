---
title: "CampaignObjectManager"
description: "CampaignObjectManager is the active campaign's registration and query center for heroes, factions, settlements, and parties, including save-load reconstruction."
---
# CampaignObjectManager

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CampaignObjectManager`  
**Base:** no explicit base class  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## One-sentence responsibility

It organizes registered `Hero`, `Clan`, `Kingdom`, `Settlement`, and `MobileParty` objects into readable category views and provides lookup by string ID or predicate; it is not a factory for objects that a mod can create ad hoc.

## Mental Model

**The campaign-owned registry**

`Campaign` constructs this manager and exposes it through `Campaign.Current.CampaignObjectManager`. The manager maintains alive and dead-or-disabled heroes, clans, kingdoms, settlements, and party lists split by component category. Its public properties return `MBReadOnlyList<T>`, so the API is a read-only view over campaign registration rather than a writable `List<T>` owned by the caller.

The categories are live lifecycle views, not permanent labels. Adding or removing a `MobileParty`, replacing its `PartyComponent`, or moving a hero between active and dead/disabled states causes the manager to update its corresponding lists. The campaign save collector persists the core registries (alive/dead heroes, clans, kingdoms, mobile parties, and settlements); `Factions` and the party lists derived from `PartyComponent` categories are rebuilt by `InitializeOnLoad` after loading.

Although its constructor is public, `CampaignObjectManager` belongs to the `Campaign` initialization boundary. A mod should not `new CampaignObjectManager()` and substitute it for the active manager: that instance is not registered with the campaign and does not establish the complete save and lifecycle relationship.

**Lookup versus creation**

Use `Find<T>(string id)` when a stable string ID is known, and use `FindFirst<T>` or `FindAll<T>` for runtime predicates. A missing object produces `null` or an empty read-only result, so callers must handle absence. These methods do not bypass the game's creation lifecycle and do not manufacture a missing object or identity.

Creation and destruction belong to the relevant factory, lifecycle API, or Action so that registration, entity relationships, party components, and events stay synchronized. Writing to a read-only view, inventing object IDs, or querying without a live `Campaign.Current` breaks assumptions owned by the manager.

## When to use and when not to use

- **Use it:** to obtain an existing object from the active campaign, or to read a current category such as the player's clan, active parties, or alive heroes.
- **Do not use it:** as a create or delete API. `FindAll` only returns objects that are already registered.
- **Do not use it:** to write `AliveHeroes`, `MobileParties`, or another exposed collection, or to bypass `MobileParty.CreateParty`, object factories, and Actions.
- **Mind the phase:** module loading, the main menu, and campaign teardown may not have a valid `Campaign.Current`. Query from a registered campaign behavior, map callback, or a post-load phase.

## Dependencies

- **Owner and upstream:** [Campaign](../Campaign) creates and owns the manager; [CampaignEvents](../CampaignEvents) and [CampaignBehaviorBase](../CampaignBehaviorBase) are the appropriate downstream observation points for lifecycle changes.
- **Registered objects:** the manager indexes [Hero](../Hero), [Clan](../Clan), [Kingdom](../Kingdom), [Settlement](../Settlement), and [MobileParty](../MobileParty). Party categories are affected by [PartyComponent](../PartyComponent) implementations.
- **After lookup:** use [PartyBase](../PartyBase), [MobileParty](../MobileParty), or the appropriate Action to mutate a returned object rather than changing manager collections.

## Public query surface

| Member | Purpose and boundary |
| --- | --- |
| `AliveHeroes` / `DeadOrDisabledHeroes` | Read hero state categories; hero lifecycle changes update these lists. |
| `Clans` / `Kingdoms` / `Factions` / `Settlements` | Read currently registered factions and settlements. The returned views are not writable storage. |
| `MobileParties` and party category lists | Read parties grouped by their party components; replacement of a component causes reclassification. |
| `Find<T>` | Look up a registered object by string ID and return `null` when it is absent. |
| `FindFirst<T>` / `FindAll<T>` | Apply a `Predicate<T>` to the registered objects of one type; results are a current snapshot. Passing a `null` predicate to `FindAll<T>` returns all currently registered objects of that type. |
| `FindNextUniqueStringId<T>` | Supply the next available string ID to a creation path; it does not replace the concrete object factory. |

## Real example

The following acquisition path matches the campaign source's `player_faction` lookup. The result can still be `null` if the object is not registered yet, has been removed, or no campaign is active.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

Campaign campaign = Campaign.Current;
if (campaign != null)
{
    Clan playerClan = campaign.CampaignObjectManager.Find<Clan>("player_faction");
    if (playerClan != null)
    {
        MBReadOnlyList<MobileParty> ownedParties = campaign.CampaignObjectManager.FindAll<MobileParty>(
            party => party.ActualClan == playerClan);
    }
}
```

When a category view is enough, read the manager's alive-hero or party lists directly and do not remove items while enumerating. To change world state, pass the object to its supported Action or lifecycle entry point.

## Risks and save boundaries

- **No active campaign:** `Campaign.Current` can be `null`; manager queries belong after campaign startup and before teardown.
- **Read-only does not mean disposable:** the exposed views reflect internal registration that also supports IDs, type indexes, and save collection. Direct mutation of an underlying object or collection can desynchronize lookup, encyclopedia, relations, and saves.
- **State transitions:** hero death/disable, party-component replacement, and party destruction must use the existing lifecycle. Removing an item from one conceptual category does not update every index or event.
- **Load order:** `PreAfterLoad`, `AfterLoad`, and entity callbacks have an order. Do not cache a lookup before objects are restored; reacquire it in `OnGameLoaded` or a later callback.

## Version note

This page follows the v1.4.5 `TaleWorlds.CampaignSystem` source. For another version, recheck party categories, string IDs, and load callbacks instead of assuming that an old list has the same registration timing.

## Navigation

- ↑ Parent: [Campaign API](../)
- ↔ Siblings: [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- Related objects: [Hero](../Hero) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [PartyComponent](../PartyComponent)
