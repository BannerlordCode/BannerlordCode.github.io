---
title: "IFaction"
description: "The read-only contract for a faction: Clan, Kingdom and the smaller faction components all implement it, exposing leader, banner, settlement and lord collections, war relations and crime rating behind one uniform view. The only abstraction to write 'works with any faction' logic against."
---
# IFaction

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `[SaveableInterface(22001)] public interface IFaction`
**Base:** none (interface)
**Source:** `TaleWorlds.CampaignSystem/IFaction.cs` (declared at lines 13–14)

## Overview

`IFaction` is the campaign layer's abstraction over the concept of a faction. It collapses `Clan`, `Kingdom` and the various smaller faction components into one read-only view, so diplomacy, relationships, settlement ownership and party registration can be written once. The interface carries `[SaveableInterface(22001)]` — the ID the save system assigns to it — which means **types implementing `IFaction` are resolved by interface ID during save and load**, so changing the set of implementors directly affects old-save compatibility.

Its members fall into four groups: identity and presentation (`Name`, `StringId`, `Id`, `Banner`, `Color`, `Culture`); geography and membership (`Settlements`, `Fiefs`, `AliveLords`, `Heroes`, `WarPartyComponents`); classification (`IsClan`, `IsKingdomFaction`, `IsBanditFaction`, `IsMinorFaction`, `IsRebelClan`, `IsOutlaw`, `IsMapFaction`); and war relations plus standing (`IsAtWarWith`, `GetStanceWith`, `FactionsAtWarWith`, `TributeWallet`, `MainHeroCrimeRating`). When you write mod logic that should hold "for any faction", the parameter type belongs here rather than `Clan`.

## Mental Model

**When does a modder reach for `IFaction`?** Three typical cases: a diplomacy UI that must present kingdoms and clans side by side; settlement and village ownership changes that need to be announced to every party involved; and standing or crime values that have to be read and written across factions. What these share is "I don't know whether the other party is a Clan or a Kingdom, and I don't want to". Declaring the parameter as `IFaction` is enough; the caller still holds the concrete `Clan` / `Kingdom` and can narrow back with `is Clan c`.

The correct order of operations:

1. **Classify before you read members.** The `IsClan` / `IsKingdomFaction` / `IsBanditFaction` / `IsMinorFaction` family decides what you should expect next. `Kingdom` has `AliveLords` and `Fiefs`; a `Clan` is mainly about `Heroes`. Asking a `BanditPartyComponent` for `Fiefs` returns an empty collection, not an exception.
2. **The collections are live views, not snapshots.** `Settlements`, `Heroes`, `AliveLords`, `Fiefs` and `WarPartyComponents` return `MBReadOnlyList<T>`, and diplomacy plus death logic keep mutating the underlying data. **Do not change world state while iterating them** — killing a hero or changing an allegiance mid-enumeration throws.
3. **There are two ways to query war relations.** `IsAtWarWith(IFaction)` is an immediate, side-effect-free boolean. `FactionsAtWarWith` is a cached list that has to be refreshed with `UpdateFactionsAtWarWith()` after relations change — and that method has side effects, so call it only when you are sure you want to rebuild the cache.
4. **The writable members are few and semantically odd.** `TributeWallet`, `MainHeroCrimeRating` and `NotAttackableByPlayerUntilTime` have setters, but none of them is a generic field. `TributeWallet` is mostly meaningful for kingdoms; `MainHeroCrimeRating` and `DailyCrimeRatingChange` are player-perspective crime statistics against factions the player can interact with; `NotAttackableByPlayerUntilTime` is a cooldown preventing the player from attacking that faction immediately.

## When to Use / When Not To

- **Use**: when writing logic that must work for any faction (shared diplomacy rules, settlement-ownership notifications, standing displays).
- **Use**: when you need to sort or filter a mixed list of `Clan` and `Kingdom` together (sort by `Name`, not `StringId`).
- **Use**: when checking "is at war with the player" — normalise through `MapFaction` before comparing, so you never compare a faction component against a real faction by mistake.
- **Don't**: treat `IFaction` as if it were `Clan`. `Leader` is null for some implementors and `AliveLords` is empty for clans.
- **Don't**: call `UpdateFactionsAtWarWith()` from an event callback. It is a cache rebuild, not a notification; the engine maintains the cache after diplomacy actions, and manual calls produce "we just declared war but the list doesn't show them".
- **Don't**: implement `IFaction`. It is an internal save contract requiring a matching `[SaveableInterface]` ID and the full member set. Custom factions should go through the official extension points such as `MinorFaction`.

## Member Guide

### Identity and presentation

| Member | What it is for, side effects, timing |
| --- | --- |
| `TextObject Name` | Localised name. UI must use it; never display `StringId`. |
| `string StringId` | Stable ID from the XML definition, used for lookups, comparisons and saves. |
| `MBGUID Id` | Runtime identity; save references depend on it. Never construct or reuse it yourself. |
| `TextObject InformalName` | Colloquial name, for dialogue and rumour contexts. |
| `string EncyclopediaLink` | Encyclopedia entry key; hand it to the encyclopedia system. |
| `TextObject EncyclopediaLinkWithName` | Encyclopedia link text including the display name; drop it straight into a UI button. |
| `TextObject EncyclopediaText` | Encyclopedia body text. |
| `CultureObject Culture` | Culture, which drives dress, names and topics. |
| `Settlement InitialHomeSettlement` | The original home settlement; use it to answer "where is this faction from". |
| `uint Color` / `uint Color2` | Primary and secondary banner colours. `Color` doubles as the faction theme colour in UI. |
| `CharacterObject BasicTroop` | The faction's basic troop, used as a reference when estimating raw strength. |
| `Hero Leader` | The leader — a monarch for a `Kingdom`. Returns `null` for implementors without one, so null-check before use. |
| `Banner Banner` | The banner instance, rendered directly by UI. |

### Geography, membership and parties

| Member | What it is for, side effects, timing |
| --- | --- |
| `MBReadOnlyList<Settlement> Settlements` | Every settlement owned by the faction. Note that ownership changes happen mid-diplomacy, so brief inconsistency is possible. |
| `MBReadOnlyList<Town> Fiefs` | The fief subset — non-empty only when the faction holds sovereign towns. |
| `MBReadOnlyList<Hero> AliveLords` | Living lords (vassals of a kingdom). Only meaningful for `Kingdom`. |
| `MBReadOnlyList<Hero> DeadLords` | Deceased lords, used for succession chains. |
| `MBReadOnlyList<Hero> Heroes` | All heroes in the faction, living or dead. |
| `MBReadOnlyList<WarPartyComponent> WarPartyComponents` | War parties registered under this faction; used for inspection and peace status. |

### Classification

| Member | What it is for, side effects, timing |
| --- | --- |
| `IsBanditFaction` | Bandit factions (forest / mountain / lake / desert pirates). One of the most-used branching flags in mod logic. |
| `IsMinorFaction` | Minor factions — neutral powers that typically hold a fixed location. |
| `IsKingdomFaction` | Kingdom. |
| `IsRebelClan` | Rebel clan. |
| `IsClan` | Ordinary clan. |
| `IsOutlaw` | Outlaw. |
| `IsMapFaction` | Whether the faction exists on the map; use it to filter data-only entries. |
| `HasNavalNavigationCapability` | Whether the faction can navigate at sea — decides whether its parties can take water routes and whether the AI will send fleets. |
| `IFaction MapFaction` | The corresponding map faction; use it to normalise between a component and the real faction. |
| `bool IsEliminated` | Whether the faction has been eliminated (kingdom destroyed, clan disbanded). Eliminated factions should drop out of logic. |

### Diplomacy, standing and statistics

| Member | What it is for, side effects, timing |
| --- | --- |
| `bool IsAtWarWith(IFaction other)` | Immediate query for the war state. Safe and side-effect-free. |
| `StanceLink GetStanceWith(IFaction other)` | The diplomatic stance between two factions. **Returns `null` when there is no diplomatic record** — always null-check. |
| `MBReadOnlyList<IFaction> FactionsAtWarWith` | Cached list of factions at war. |
| `void UpdateFactionsAtWarWith()` | Rebuilds that cache. Side-effecting; call only deliberately and **never from an event callback or inside an enumeration**. |
| `int TributeWallet { get; set; }` | Tribute balance, adjusted by diplomatic actions. |
| `float MainHeroCrimeRating { get; set; }` | The player protagonist's crime rating with this faction. Setting it to 0 "washes" the relationship — a common entry point for reputation mods. |
| `float DailyCrimeRatingChange` | The daily drift of that rating (normally negative). |
| `ExplainedNumber DailyCrimeRatingChangeExplained` | The same figure with a per-source breakdown; prefer it in UI so players can see why the number is falling. |
| `float CurrentTotalStrength` | Current total strength, used for AI evaluation and peace/war decisions. |
| `Settlement FactionMidSettlement` | The faction's "middle" settlement, a reference point for navigation and map labels. |
| `float DistanceToClosestNonAllyFortification` | Distance to the nearest non-ally fortification, for pathfinding avoidance. **Each read scans enemy fortifications — it is an expensive query.** |
| `CampaignTime NotAttackableByPlayerUntilTime { get; set; }` | Until this moment the player cannot attack the faction. Diplomacy (peace offers, rejection conditions) sets a cooldown through it. |

## Examples

### Example 1: Logic that works for any faction

Declare the parameter as `IFaction`, branch on the `Is*` classification flags, and null-check the members that can legitimately be null.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.ObjectSystem;

// Holds for any faction: produce its most prominent label
static string DescribeFaction(IFaction faction)
{
    if (faction == null) return "";

    if (faction.IsKingdomFaction)
        return faction.Name.ToString();

    if (faction.IsClan || faction.IsRebelClan)
        return faction.Name.ToString();

    if (faction.IsBanditFaction)
        return "Bandit";

    return faction.Name.ToString();
}

// The caller still holds the concrete type and can narrow back
Clan playerClan = Hero.MainHero.Clan;
string label = DescribeFaction(playerClan);
```

### Example 2: Diplomacy queries and crime rating

`GetStanceWith` returns null when there is no diplomatic record, so check before reading the stance value.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.ObjectSystem;

IFaction playerFaction = Hero.MainHero.Clan;

// FactionManager has no convenience lookup by StringId; faction implementations are
// MBObjectBase, so go through MBObjectManager, or iterate Clan.All / Kingdom.All.
IFaction target = MBObjectManager.Instance.GetObject<Clan>("empire");

if (playerFaction != null && target != null)
{
    // Side-effect-free immediate query
    bool atWar = playerFaction.IsAtWarWith(target);

    // May be null: GetStanceWith returns null with no diplomatic record
    StanceLink stance = playerFaction.GetStanceWith(target);
    if (stance != null && stance.StanceType == StanceType.War)
    {
        // Read the explained figure rather than the raw drift
        ExplainedNumber explained = target.DailyCrimeRatingChangeExplained;
    }

    // Writable member: clear the crime rating (launder the relationship)
    target.MainHeroCrimeRating = 0f;
}
```

### Example 3: Iterating members without mutating the world

`Heroes` and `Settlements` are live views. Copy before you need to change the world mid-loop.

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

List<string> names = new List<string>();
foreach (Settlement settlement in playerFaction.Settlements)
{
    // Read only, no world changes
    names.Add(settlement.Name.ToString());
}

// When you must trigger world changes while iterating, copy first
List<Hero> snapshot = new List<Hero>(kingdom.AliveLords);
foreach (Hero lord in snapshot)
{
    ApplyYourEffectTo(lord);
}
```

## Risks and Boundaries

- **Collections mutate in place.** `Settlements`, `Heroes`, `AliveLords`, `Fiefs` and `WarPartyComponents` are live views. Killing a hero, transferring a town or disbanding a party during enumeration throws `InvalidOperationException`. Copy to your own `List<T>` first when you need to change the world.
- **`Leader` can be null.** `BanditPartyComponent` and some `MinorFaction` implementors have no `Hero` leader. `faction.Leader.HeroAge` is an NRE.
- **`GetStanceWith` can return null.** Two factions with no diplomatic record yield no `StanceLink`. This is the most frequently overlooked null source on this interface.
- **`UpdateFactionsAtWarWith()` has side effects.** Calling it from an event callback or during iteration detaches the cache from the view you are using, producing the classic "we just declared war but the enemy is not in the list" bug.
- **Save contract.** `[SaveableInterface(22001)]` means the interface ID participates in save resolution. Removing an implementor or changing its ID makes old saves resolve that object to null.
- **`MainHeroCrimeRating` is player-centric.** The interface exposes it for every faction, but it is a "protagonist vs this faction" statistic. Writing it repeatedly on hostile factions perturbs diplomatic AI scoring rather than implementing any real crime system.
- **Single-thread assumption.** Every implementation is updated on the main game thread. Hop to the main thread before reading these lists from a multiplayer sync callback.
- **`DistanceToClosestNonAllyFortification` is expensive.** Every read scans enemy fortifications. Do not put it in a per-frame draw path.

## Dependencies

- Upstream / implementors:
  - [Campaign](../Campaign) holds every `IFaction` implementation through `FactionManager`.
  - `Clan` and `Kingdom` are the two primary implementors; `BanditPartyComponent` and the various `MinorFaction` types are secondary.
- Peers / downstream:
  - [CampaignEvents](../CampaignEvents) broadcasts the faction-facing changes (`OnClanCreatedEvent`, `KingdomCreatedEvent`, `OnClanChangedKingdomEvent`, `OnClanDefectedEvent`, `KingdomDestroyedEvent`, `WarDeclared`, `OnAllianceStartedEvent`) — the correct entry point for reacting to state transitions.
  - Diplomacy Behaviors derived from [CampaignBehaviorBase](../CampaignBehaviorBase) program against `IFaction` internally.
  - `Mission` handles in-battle hostility; map factions connect to battle sides through `MobileParty.MapFaction`. It has no English page — the Chinese [zh `Mission`](../../../../zh/api/mission/Mission) is the only one on disk.

## See Also

- ↑ Parent: [Campaign API index](../)
- ↔ Related: [Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · zh [Mission](../../../../zh/api/mission/Mission) (no English page; see [the gap list](../../../../GAPS))