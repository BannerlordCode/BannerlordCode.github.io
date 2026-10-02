---
title: "Kingdom"
description: "Realm aggregate on the campaign map: clans, fiefs, villages, armies, war and alliance sets, policies, decisions, ruling clan and eliminated state."
---

# Kingdom

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Kingdom : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

## Overview

`Kingdom` is the realm-level `IFaction` implementation — the political container above [Clan](../Clan) and below nothing. A kingdom aggregates:

- **Vassals.** `Clans`, `RulingClan`, `Leader`.
- **Land.** `Fiefs`, `Villages`, `Settlements`, `InitialHomeSettlement`, `FactionMidSettlement`.
- **Force.** `Armies`, `WarPartyComponents`, `CurrentTotalStrength`.
- **Politics.** `ActivePolicies`, `UnresolvedDecisions`, `Aggressiveness`, `IsEliminated`.
- **Diplomacy.** `FactionsAtWarWith`, `AlliedKingdoms`, `IsAllyWith`, `IsAtWarWith`, `GetStanceWith`.

Most campaign mod work treats `Clan` and `Kingdom` uniformly through `IFaction`, because vanilla's stance, war and value models are written against that interface. The distinction only matters when you need something only one of them has — clan influence, or kingdom decisions.

## Mental Model

```
Kingdom : IFaction
 ├─ RulingClan ──► Clan ──► Clan.Kingdom (back-reference)
 ├─ Leader ──► Hero (the ruling clan's leader, or a king in election)
 ├─ Clans ──► vassals (including the ruling clan)
 ├─ Fiefs (Town) / Villages / Settlements
 ├─ Armies ──► Army ──► MobileParty[]
 ├─ ActivePolicies (PolicyObject)
 ├─ UnresolvedDecisions (KingdomDecision)
 └─ FactionsAtWarWith / AlliedKingdoms
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Kingdom.All populated; ruling clan and leader resolved
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.RulingClanChanged / OnClanChangedKingdomEvent / HourlyTickEvent
DailyTick
    kingdom.Armies, kingdom.CurrentTotalStrength, ActivePolicies read
    kingdom.CreateArmy(...) / AddPolicy(...) mutate
    RulingClanChanged fires when leadership actually moves
```

Traps that bite in practice:

- **`Leader` is not the same as `RulingClan`.** `RulingClan` is the clan; `Leader` is a hero, and during a succession crisis or an election the leader can be a different person (or temporarily absent). Code that assumes `kingdom.Leader.Clan == kingdom.RulingClan` breaks during elections.
- **`FactionsAtWarWith` is a cache.** `UpdateFactionsAtWarWith()` recomputes it from the stance graph. Reading it straight after a peace deal returns the pre-deal set until something refreshes it.
- **`IsEliminated` kingdoms still exist as objects.** They remain in `Kingdom.All` with empty armies and no fiefs. Filter explicitly; do not assume presence means relevance.
- **Armies are per-kingdom, but parties are per-clan.** `kingdom.Armies` returns `Army` objects whose members are the ruling clan's and vassals' parties. Summing `CurrentTotalStrength` across parties double counts attached parties.
- **`CreateArmy` needs a leader and a target.** Passing a hero with no party, or a null target settlement, produces an army that never resolves. Read the overload's `partiesToCallToArmy` default (null) as "use the kingdom's own parties".
- **`ChangeKingdomName` writes two fields.** `Name` and `InformalName` move together; writing only one leaves the encyclopedia and the map inconsistent.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Store | `MBObjectBase` | Saveable, identified by `Id` / `StringId` |
| Faction contract | `IFaction` | Shared with [Clan](../Clan) for war and stance |
| Vassals | [Clan](../Clan) | `Clans`, `RulingClan` |
| People | [Hero](../Hero) | `Leader`, `AliveLords`, `DeadLords`, `Heroes` |
| Land | [Town](../Town), [Village](../Village), [Settlement](../Settlement) | `Fiefs`, `Villages`, `Settlements` |
| Force | `Army`, [MobileParty](../MobileParty) | `Armies`, `WarPartyComponents`, `AllParties` |
| Managers | [FactionManager](../FactionManager), `KingdomManager` | Stance resolution, elections and decisions |
| Events | [CampaignEvents](../CampaignEvents) | `RulingClanChanged`, `OnClanChangedKingdomEvent` |

## Key members

### Identity

#### `public static MBReadOnlyList<Kingdom> All`

Every kingdom including eliminated ones. Live view.

#### `public static Kingdom CreateKingdom(string stringID)`

Engine factory. The only supported construction path — `new Kingdom()` produces an unregistered object that is not in `All` and is never saved.

#### `public void InitializeKingdom(TextObject name, TextObject informalName, CultureObject culture, Banner banner, uint kingdomColor1, uint kingdomColor2, Settlement initialHomeSettlement, TextObject encyclopediaText, TextObject encyclopediaTitle, TextObject encyclopediaRulerTitle)`

Full one-shot initialisation. Everything here is saveable, so it must be called exactly once, before the kingdom enters any registry.

#### `public void ChangeKingdomName(TextObject name, TextObject informalName)`

Renames both the formal and informal names together.

#### `public void ReactivateKingdom()` / `public bool IsEliminated`

Revives a kingdom that had been eliminated (no ruling clan, no fiefs, no armies).

### Leadership

#### `public Clan RulingClan`

The clan at the top. Null on an eliminated kingdom.

#### `public Hero Leader`

The kingdom's leader hero. Elected in some game modes; during an election this can diverge from the ruling clan's leader.

#### `public bool IsMapFaction`

`true` when the kingdom is an actual political entity on the map. Minor factions and bandit "kingdoms" return false.

### Land and power

#### `public MBReadOnlyList<Town> Fiefs` / `public MBReadOnlyList<Village> Villages` / `public MBReadOnlyList<Settlement> Settlements`

Owned holdings, aggregated across all clans. Cached views.

#### `public Settlement InitialHomeSettlement`

The original capital. Kept for history and for the encyclopedia; changing it does not move the capital's production.

#### `public Settlement FactionMidSettlement` / `public void CalculateMidSettlement()`

The geographic centre the kingdom's AI reasons around. Recompute after territory changes.

#### `public float CurrentTotalStrength` / `public float Aggressiveness`

Aggregate military power and how eagerly the AI acts on it.

### War and diplomacy

#### `public bool IsAtWarWith(IFaction other)` / `IsAtConstantWarWith(IFaction other)` / `IsAllyWith(Kingdom other)` / `HasCalledToWar(Kingdom other)` / `public StanceLink GetStanceWith(IFaction other)`

Diplomacy predicates. `GetStanceWith` is the primitive; the rest are thresholds over it.

#### `public MBReadOnlyList<IFaction> FactionsAtWarWith` / `public void UpdateFactionsAtWarWith()`

Cached war set plus its recompute trigger. Prefer the boolean predicates in hot paths.

#### `public MBReadOnlyList<Kingdom> AlliedKingdoms` / `public void UpdateAlliedKingdoms()`

Alliance cache plus recompute.

#### `public float MainHeroCrimeRating { get; set; }` / `public float DailyCrimeRatingChange` / `public CampaignTime NotAttackableByPlayerUntilTime { get; set; }`

Player-facing reputation and the grace period after an offence.

### Armies and war parties

#### `public MBReadOnlyList<Army> Armies`

Armies raised by this kingdom. Each holds member parties; summing member strength without de-duplication double counts.

#### `public IEnumerable<MobileParty> AllParties`

Every party that belongs to the kingdom or one of its clans.

#### `public MBReadOnlyList<WarPartyComponent> WarPartyComponents`

War party components registered under this kingdom, for code that reasons about war party bookkeeping rather than mobile parties.

#### `public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)`

Raises an army. Passing `null` for `partiesToCallToArmy` uses the kingdom's own parties; pass an explicit list to force a composition.

#### `public int LastArmyCreationDay { get; private set; }`

Throttle for army creation. Do not use it as a "cooldown" you can reset — it is `private set`.

### Policies and decisions

#### `public IList<PolicyObject> ActivePolicies` / `public void AddPolicy(PolicyObject policy)` / `RemovePolicy(PolicyObject)` / `public bool HasPolicy(PolicyObject policy)`

The realm's active policy list. `ActivePolicies` is the mutable list; the add/remove methods are the sanctioned wrappers.

#### `public MBReadOnlyList<KingdomDecision> UnresolvedDecisions` / `public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)` / `RemoveDecision(...)` / `OnKingdomDecisionConcluded()`

Realm decisions in flight. `ignoreInfluenceCost` exists for scripting paths that grant decisions directly.

#### `public CampaignTime LastKingdomDecisionConclusionDate { get; private set; }` / `public CampaignTime LastMercenaryOfferTime { get; set; }`

Decision pacing. The first is read-only.

### Membership bookkeeping

#### `public void OnHeroAdded(Hero hero)` / `OnHeroRemoved(Hero hero)` / `OnHeroChangedState(Hero hero, Hero.CharacterStates oldState)`

Called by the clan/hero lifecycle when membership changes. Calling them by hand desynchronises `Heroes` and `AliveLords`.

#### `public void OnFortificationAdded(Town fortification)` / `OnFortificationRemoved(Town fortification)`

Fief index maintenance. Wired to the settlement owner-change path.

## Real examples

### Example 1: report the strongest kingdom without double counting

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;

public static string StrongestKingdom()
{
    Campaign campaign = Campaign.Current;
    if (campaign == null)
    {
        return "no campaign";
    }

    Kingdom best = campaign.Kingdoms
        .Where(k => !k.IsEliminated)
        .OrderByDescending(k => k.CurrentTotalStrength)
        .FirstOrDefault();

    return best == null ? "no kingdoms" : $"{best.Name.Name}: {best.CurrentTotalStrength:0}";
}
```

### Example 2: raise an army for the player's kingdom

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static void RaiseArmy(Settlement target)
{
    Campaign campaign = Campaign.Current;
    if (campaign == null || target == null)
    {
        return;
    }

    Kingdom kingdom = campaign.MainParty?.ActualClan?.Kingdom;
    if (kingdom == null || kingdom.IsEliminated)
    {
        return;
    }

    Hero leader = kingdom.Leader;
    if (leader == null)
    {
        return;
    }

    kingdom.CreateArmy(leader, target, Army.ArmyTypes.Siege);
    InformationManager.DisplayMessage(new InformationMessage($"{kingdom.Name.Name} is mobilizing"));
}
```

### Example 3: follow a decision from proposal to conclusion

```csharp
using TaleWorlds.CampaignSystem;

public sealed class KingdomDecisionBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.RulingClanChanged.AddNonSerializedListener(this, OnRulingClanChanged);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    // IMbEvent<Kingdom, Clan>
    private void OnRulingClanChanged(Kingdom kingdom, Clan newRulingClan)
    {
        if (kingdom == null || newRulingClan == null)
        {
            return;
        }

        InformationManager.DisplayMessage(new InformationMessage(
            $"{kingdom.Name.Name} is now ruled by {newRulingClan.Name.Name} " +
            $"({kingdom.UnresolvedDecisions.Count} open decisions)"));
    }
}
```

### Example 4: apply and test a realm policy

```csharp
using TaleWorlds.CampaignSystem;

public static void GrantPolicy(Kingdom kingdom, PolicyObject policy)
{
    if (kingdom == null || policy == null || kingdom.HasPolicy(policy))
    {
        return;
    }

    kingdom.AddPolicy(policy);
    _ = kingdom.ActivePolicies.Count;
    InformationManager.DisplayMessage(
        new InformationMessage($"{kingdom.Name.Name} adopted {policy.Name}"));
}
```

## Risks and crash boundaries

1. **`RulingClan` and `Leader` are null on eliminated kingdoms.** Every member that dereferences them must guard. `IsEliminated` is the cheapest check.
2. **Unregistered kingdoms vanish.** `new Kingdom()` is not in `All` and never saved. Use `Kingdom.CreateKingdom` plus `InitializeKingdom`.
3. **Cached diplomacy sets lag.** `FactionsAtWarWith` and `AlliedKingdoms` are refreshed by their `Update*` methods. Prefer `IsAtWarWith` / `IsAllyWith` in hot paths instead of iterating the caches.
4. **`Aggressiveness` is uncapped.** `MainHeroCrimeRating` is a settable float; a mod that writes it directly skips the daily crime change calculation and the notification.
5. **Save coupling.** `Name`, `InformalName`, `Culture`, `InitialHomeSettlement`, `LastArmyCreationDay`, `Color`, `Banner`, `MainHeroCrimeRating` and the mercenary wallet are `[SaveableProperty]`. Renumbering breaks existing saves — see [save-system](../../../architecture/save-system).
6. **Double counting armies.** `Armies` and `AllParties` overlap for attached parties. Summing both inflates strength and skews the AI.
7. **Bookkeeping hooks are not idempotent.** Calling `OnHeroAdded` or `OnFortificationAdded` directly duplicates entries in `Heroes`, `AliveLords` and `Fiefs`.
8. **Decision influence.** `AddDecision(..., ignoreInfluenceCost: true)` grants a decision with no influence check; using it in player-facing flow makes realms feel unconstrained.

## Cross-version notes

- `CreateKingdom`, `InitializeKingdom`, `RulingClan`, `CreateArmy` and the `Is*` diplomacy predicates keep the same shape in 1.3.x and 1.4.x.
- Later builds add more kingdom-decision fields and extra `PolicyObject` members. Because the policy list is enum/instance driven, consumer code that iterates `ActivePolicies` keeps working.

## See Also

- [Clan](../Clan) — the vassals inside the kingdom
- [FactionManager](../FactionManager) — war and stance resolution
- [Hero](../Hero) — lords and the leader
- [MobileParty](../MobileParty) — the parties that make up armies
- [Settlement](../Settlement) — the land the kingdom holds
- [Town](../Town) — the fiefs counted in `Fiefs`
- [Campaign](../Campaign) — kingdom registry and the daily tick
- [Save system](../../../architecture/save-system) — saveable property discipline
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough