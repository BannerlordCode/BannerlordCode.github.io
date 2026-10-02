---
title: "FactionManager"
description: "Diplomacy state machine for IFaction: stance links, war declaration, neutrality, constant-war and weighted inter-clan relations."
---

# FactionManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/FactionManager.cs`

## Overview

`FactionManager` owns the campaign's diplomacy graph. It is a small class — nine public members — because the real work is delegated: the stance *rules* live in the registered `DiplomacyModel`, and the faction *state* lives on [Clan](../Clan) and [Kingdom](../Kingdom).

What it actually stores is one saveable field:

```
private FactionManagerStancesData _stances;   // [SaveableField(20)]
```

That data holds one `StanceLink` per faction pair that has ever had a non-default diplomatic relationship. Everything else is derived.

The pipeline for any question is always the same:

```
IsAtWarAgainstFaction(a, b)
    ├─ null / same / eliminated?            → false
    ├─ DiplomacyModel.IsAtConstantWar?       → true
    ├─ DiplomacyModel.GetShallowDiplomaticStance?
    │     non-null  → that shallow stance decides (culture, bandit, ...)
    │     null      → fall through to the stored StanceLink
    └─ stored StanceLink.IsAtWar
```

The `shallow` concept is the part mods get wrong most often. A shallow diplomatic stance is one decided by *characteristics* rather than by history — culture match, bandit/outlaw flags — so it short-circuits the stored link entirely, and `DeclareWar` refuses to write a stance where a shallow stance applies.

## Mental Model

`FactionManager` sits under `Campaign` and above every `IFaction`:

```
Campaign.Current.FactionManager
        │
        └── _stances : FactionManagerStancesData   [SaveableField(20)]
                 └── StanceLink(faction1, faction2, StanceType)
                          StanceType: Hostile | Wary | Neutral | Friendly | War
        ▲
        │  consulted by
DiplomacyModel  ──►  GetDefaultDiplomaticStance / GetShallowDiplomaticStance / IsAtConstantWar
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Campaign.Current.FactionManager is live
CampaignBehaviorBase.RegisterEvents()
    (no diplomacy tick event; react to OnClanChangedKingdomEvent / peace and war actions)
Hourly / DailyTick
    FactionManager.IsAtWarAgainstFaction(a, b)  read
    FactionManager.DeclareWar(a, b) / SetNeutral(a, b)  mutate
    SetStance calls faction1.UpdateFactionsAtWarWith() and faction2.UpdateFactionsAtWarWith()
```

Traps that bite in practice:

- **`Instance` throws without a campaign.** The getter is `Campaign.Current.FactionManager` with no null guard, so `FactionManager.Instance` on the main menu throws `NullReferenceException`. Guard `Campaign.Current` first.
- **Stances are symmetric and created lazily.** `GetStanceLinkInternal` creates a default link the first time a pair is queried. A "read-only" `IsAtWarAgainstFaction` call therefore mutates internal state. That is by design, but it means a query inside a load hook can create links for factions that were never meant to interact.
- **`DeclareWar` is silently a no-op for shallow stances.** If `DiplomacyModel.GetShallowDiplomaticStance` returns non-null (bandit vs. civilian, say), the call does nothing and returns `void`. There is no exception and no return value to check. Verify with `IsAtWarAgainstFaction` afterwards.
- **Self-war and eliminated factions return `false`.** Passing the same faction twice, or a faction with `IsEliminated`, always yields a non-war answer. Filter eliminated factions yourself if you need them to matter.
- **`IsNeutralWithFaction` is not "not at war".** Constant-war pairs return `false`, and the bandit-vs-bandit special case means two bandit clans can be "not neutral" without being at war.
- **`GetRelationBetweenClans` is not symmetric.** It weights leaders, spouses and lord pairs asymmetrically (the leader of clan1 vs. the spouse of clan2 gets different weight than the reverse) and returns `-10` when one side is a lord-less bandit clan against a non-bandit clan.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Owner | [Campaign](../Campaign) | `Campaign.Current.FactionManager`; `Instance` forwards to it |
| Factions | [Clan](../Clan), [Kingdom](../Kingdom) | Both implement `IFaction`; the only inputs |
| State | `StanceLink`, `StanceType`, `FactionManagerStancesData` | The one saveable field |
| Model | `DiplomacyModel` | Default stance, shallow stance, constant war |
| Model | `AgeModel` | `HeroComesOfAge` threshold inside `GetRelationBetweenClans` |
| Cache refresh | `IFaction.UpdateFactionsAtWarWith` | Called by `SetStance` when war state changes |

## Key members

### Access

#### `public static FactionManager Instance`

Convenience accessor for `Campaign.Current.FactionManager`. **No null guard** — this is the manager's most common crash site outside a campaign.

#### `public FactionManager()`

Public constructor, used by the save system. Not for mods: a hand-built instance is not the campaign's instance, so its stances are invisible to every other system.

### War and peace

#### `public static void DeclareWar(IFaction faction1, IFaction faction2)`

Sets the stance link to `StanceType.War` and refreshes both factions' `FactionsAtWarWith` caches. Silently does nothing when the pair is the same faction or has a shallow diplomatic stance.

#### `public static void SetNeutral(IFaction faction1, IFaction faction2)`

Forces the stance link back to `StanceType.Neutral` and refreshes the caches if the previous stance was `War`. It does not go through the peace action, so war weariness, tribute and peace-agreement effects are skipped.

#### `public static bool IsAtWarAgainstFaction(IFaction faction1, IFaction faction2)`

The main query. Returns `true` for constant war, for shallow war, or for a stored `War` stance. Returns `false` for null, identical or eliminated factions.

#### `public static bool IsAtConstantWarAgainstFaction(IFaction faction1, IFaction faction2)`

`true` only when the diplomacy model declares the pair permanently hostile. This is the right check for "can diplomacy ever change this?".

#### `public static bool IsNeutralWithFaction(IFaction faction1, IFaction faction2)`

`true` when the stored or shallow stance is `Neutral`. Returns `false` for constant war and for identical/eliminated factions, so it is not a logical negation of `IsAtWarAgainstFaction`.

### Relations

#### `public static int GetRelationBetweenClans(Clan clan1, Clan clan2)`

Weighted average of `Hero.GetBaseHeroRelation` across every adult lord pair, with weights for leaders (+0.2), spouses (+0.05) and leader-vs-leader pairs (×20). Returns `-10` when one side is a lord-less bandit clan facing a non-bandit clan.

Two caveats worth internalising: it is **asymmetric** (weights differ by argument order), and it only counts heroes above `Campaign.Current.Models.AgeModel.HeroComesOfAge` — minors contribute nothing.

## Real examples

### Example 1: the safe war query

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

public static string WarReport(IFaction a, IFaction b)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || a == null || b == null || a == b)
    {
        return "no campaign";
    }

    bool atWar = FactionManager.IsAtWarAgainstFaction(a, b);
    bool constantWar = FactionManager.IsAtConstantWarAgainstFaction(a, b);
    return $"{a.MapFaction.Name.Name} vs {b.MapFaction.Name.Name}: " +
           $"atWar={atWar}, constantWar={constantWar}";
}
```

### Example 2: declare war and verify it took

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

public static bool TryDeclareWar(IFaction a, IFaction b)
{
    if (a == null || b == null || a == b || a.IsEliminated || b.IsEliminated)
    {
        return false;
    }

    FactionManager.DeclareWar(a, b);

    // DeclareWar is void and can be a silent no-op for shallow stances, so verify.
    bool atWar = FactionManager.IsAtWarAgainstFaction(a, b);
    InformationManager.DisplayMessage(new InformationMessage(
        $"War declared: {atWar}"));
    return atWar;
}
```

### Example 3: compare two clans with a symmetric view of the weighted relation

```csharp
using TaleWorlds.CampaignSystem;

public static string ClanRelation(Clan a, Clan b)
{
    if (a == null || b == null || a == b)
    {
        return "n/a";
    }

    int forward = FactionManager.GetRelationBetweenClans(a, b);
    int reverse = FactionManager.GetRelationBetweenClans(b, a);
    return $"{a.Name.Name}→{b.Name.Name} {forward} (reverse {reverse})";
}
```

### Example 4: refresh a faction's cached war list after a scripted change

```csharp
using TaleWorlds.CampaignSystem;

public static void ForceNeutralAndRefresh(IFaction a, IFaction b)
{
    if (a == null || b == null || a == b)
    {
        return;
    }

    FactionManager.SetNeutral(a, b);

    // SetNeutral already refreshes both sides; this is the belt-and-braces version
    // to run after any direct stance manipulation.
    a.UpdateFactionsAtWarWith();
    b.UpdateFactionsAtWarWith();
}
```

## Risks and crash boundaries

1. **`Instance` is unguarded.** `FactionManager.Instance` dereferences `Campaign.Current` with no null check. Any call from `OnGameStart`, `OnSubModuleLoad`, a static constructor or the main menu throws.
2. **Querying mutates.** `IsAtWarAgainstFaction` and `IsNeutralWithFaction` both call `GetStanceLinkInternal`, which *creates and stores* a default `StanceLink` on first contact. A read-only loop over every faction pair permanently adds links to the save.
3. **`DeclareWar` fails silently.** Same faction, or a pair with a shallow diplomatic stance (culture match, bandit/outlaw flags), is a no-op with no return value. Always verify with `IsAtWarAgainstFaction`.
4. **`SetNeutral` is not the peace action.** It bypasses peace agreements, war weariness, tribute transfers and the `MakePeace` log entries. Use the barter/peace flow for anything the player sees.
5. **Save coupling.** `_stances` is `[SaveableField(20)]` — a single serialized field holding the entire diplomacy graph. Any change to `FactionManagerStancesData` or `StanceLink` layout invalidates diplomacy in existing saves. See [save-system](../../../architecture/save-system).
6. **Version-gated repair.** `AfterLoad` prunes stances for pre-v1.3.0 saves using `DiplomacyModel.GetShallowDiplomaticStance`, drops stances involving eliminated factions, and back-fills war state for pre-v1.2.9 saves. Shipping a mod that changes the shallow-stance rules can make those repairs behave differently on old saves.
7. **Eliminated factions silently stop mattering.** Once `IsEliminated` is set, every query returns the negative answer and `RemoveFactionsFromCampaignWars` drops the faction's links. Restoring a kingdom without re-establishing stances leaves it diplomatically isolated.
8. **`GetRelationBetweenClans` asymmetry and age gate.** Results depend on argument order, and heroes below `AgeModel.HeroComesOfAge` are excluded entirely. Use it for weighting heuristics, not as a stable stored value.

## Cross-version notes

- The nine public members, the `DiplomacyModel` consultation order and the `[SaveableField(20)]` stance store are identical in 1.3.x and 1.4.x.
- `AfterLoad`'s version gates target pre-v1.3.0 and pre-v1.2.9 saves. Newer saves skip both branches, so any behaviour you add here does not retroactively apply to old files — write the migration yourself if you need it.

## See Also

- [Clan](../Clan) — one of the two `IFaction` implementations
- [Kingdom](../Kingdom) — the other `IFaction` implementation
- [Campaign](../Campaign) — owns the live `FactionManager` instance
- [Hero](../Hero) — the lords whose relations feed `GetRelationBetweenClans`
- [Settlement](../Settlement) — ownership changes that alter the faction graph
- [Save system](../../../architecture/save-system) — saveable field discipline
- [SDK overview](../../../architecture/sdk-overview) — module lifecycle ordering
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough