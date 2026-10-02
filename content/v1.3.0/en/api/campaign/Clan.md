---
title: "Clan"
description: "Faction and family aggregate on the campaign map: lords, fiefs, influence, gold, wars, kingdom membership and mercenary service."
---

# Clan

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Clan : MBObjectBase, IFaction`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Clan.cs`

## Overview

`Clan` is the campaign's political aggregate. One clan is a family line plus the fiefs, notables, wars, wallet and social capital attached to it — and it is also one of the two implementations of `IFaction` (the other is [Kingdom](../Kingdom)).

A clan owns or claims three distinct things at once:

- **People.** `Heroes`, `AliveLords`, `DeadLords`, `Companions`, `SupporterNotables` are `Hero` objects whose `Clan` field points back.
- **Land.** `Fiefs` (towns and castles), `Villages` and the flattened `Settlements` list. Ownership lives on the [Settlement](../Settlement) / [Town](../Town) side; the clan list is a cached index.
- **Politics.** `Influence`, `Renown`, `Tier`, `Aggressiveness`, `IsAtWarWith` / `FactionsAtWarWith`, `Kingdom` membership and mercenary service state.

Some clans exist only as "minor factions" — bandit, mercenary, rebel, mafia, sect templates — with no members and no fiefs. That is why `Clan.All` is far larger than `Campaign.Current.Kingdoms`-backed nobility.

## Mental Model

`Clan` sits one level below `Campaign`, alongside `Hero`, and one level above the settlements it owns. Both `Hero` and `Settlement` hold a back-reference to the owning `Clan`, so ownership is bidirectional in data but asymmetric in practice: **you change ownership through the settlement's owner-change action, and the clan list updates afterwards.**

```
Clan
 ├─ Heroes / AliveLords / Companions      (Hero.Clan → back-reference)
 ├─ Fiefs (Town) / Villages (Village)     (Settlement.Owner → back-reference)
 ├─ Influence / Renown / Gold / Banner
 ├─ Kingdom (null when independent or a minor faction)
 └─ IFaction: FactionsAtWarWith, IsAtWarWith, GetStanceWith
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    Clan.PlayerClan is live
    CampaignBehaviorBase.RegisterEvents -> CampaignEvents.ClanTierIncrease
DailyTick
    clan.Influence / clan.Renown read
    clan.ChangeClanName(...) or clan.AddRenown(...) mutate
    CampaignEvents.ClanTierIncrease fires only when Tier actually moves
```

Traps that bite in practice:

- **`Gold` is read-only and leader-backed.** The getter forwards to `Leader.Gold` and returns `0` when `Leader` is null. To pay a clan you must change the leader's gold (`Hero.ChangeHeroGold`), not the clan.
- **`Influence` setter has a side effect.** Assigning a *lower* value calls `SkillLevelingManager.OnInfluenceSpent(this.Leader, delta)`. Writing influence from a behavior with a null `Leader` silently skips the skill path but still writes the field, which desynchronises skill progression from influence spend.
- **`Fiefs`/`Villages`/`Settlements` are cached views.** They refresh when the object manager notifies, not instantly after you assign `Settlement.OwnerClan`. Never treat them as the authority.
- **Tier is derived.** `Tier` and `RenownRequirementForNextTier` come from the campaign configuration. Do not cache them; they change with progression rules.
- **`FindFirst` / `FindAll` scan every clan.** Both are `O(n)` over the full clan list and are called in tight loops in vanilla. Cache your own list if you scan per tick.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Store | `MBObjectBase` | Identified by `Id` / `StringId`, saveable |
| Faction contract | `IFaction` | Shared diplomacy surface with [Kingdom](../Kingdom) |
| People | [Hero](../Hero) | `Heroes`, `AliveLords`, `Companions`; `Hero.Clan` |
| Land | [Town](../Town), [Village](../Village), [Settlement](../Settlement) | `Fiefs`, `Villages`, `Settlements` |
| Realm | [Kingdom](../Kingdom) | `Kingdom` property, `ClanLeaveKingdom` |
| Managers | [FactionManager](../FactionManager) | War and stance resolution for `IFaction` |
| Events | [CampaignEvents](../CampaignEvents), [MbEvent](../MbEvent) | `ClanTierIncrease`, `OnClanCreatedEvent`, `OnClanChangedKingdomEvent` |

## Key members

### Identity and classification

#### `public static MBReadOnlyList<Clan> All`

Every clan, including minor-faction templates and the player's clan. Large — hundreds of entries.

#### `public static Clan PlayerClan`

The player's own clan. `null` in campaigns where the player has not been placed (editor, some story-mode states).

#### `public static Clan CreateClan(string stringID)`

Engine factory. Returns a registered clan and is the only supported way to add one; a manually `new Clan()` is never added to `All` and will be lost on save.

#### `public bool IsNoble { get; set; }` / `public bool IsMinorFaction` / `public bool IsOutlaw` / `public bool IsBanditFaction` / `public bool IsRebelClan` / `public bool IsClan`

Classification flags. `IsMinorFaction` has a private setter; `IsNoble`, `IsRebelClan`, `IsOutlaw` are saveable and settable.

#### `public bool IsMapFaction`

`true` when this clan appears on the campaign map as an independent political entity (players can own it, it can be at war). Bandit and minor factions return `false`.

### People

#### `public MBReadOnlyList<Hero> Heroes` / `AliveLords` / `DeadLords` / `Companions`

Cached member views. `Heroes` includes everyone alive and dead; `AliveLords` filters to active, alive, non-companion members.

#### `public Hero Leader`

The clan leader. `null` for player-less minor factions, which is why `Clan.Gold` returns `0` there.

#### `public void SetLeader(Hero leader)`

Writes the leader. Vanilla does this through the change-clan-leader action, which also moves influence, fires log entries and updates the kingdom.

#### `public static Clan FindFirst(Predicate<Clan> predicate)` / `public static IEnumerable<Clan> FindAll(Predicate<Clan> predicate)`

Linear scans over `Clan.All`. `FindFirst` short-circuits; `FindAll` always walks everything.

### Land and value

#### `public MBReadOnlyList<Town> Fiefs` / `public MBReadOnlyList<Village> Villages` / `public MBReadOnlyList<Settlement> Settlements`

Indexed ownership views. `Settlements` is the union of `Fiefs` and `Villages`.

#### `public float CalculateTotalSettlementValueForFaction(Kingdom kingdom)`

Values the clan's holdings **as seen by that kingdom**, including the kingdom's own settlement value model. Pass the owning kingdom, not `null`, when you want consistent numbers.

#### `public float CalculateTotalSettlementBaseValue()`

Raw sum without a faction perspective. Cheaper, and the right choice when you only need a relative weight.

#### `public Settlement HomeSettlement` / `public void ConsiderAndUpdateHomeSettlement()` / `public void SetInitialHomeSettlement(Settlement initialHomeSettlement)`

The clan's seat. Changing it affects where the leader lives, where the party goes, and map politics.

### Money, influence, renown

#### `public float Influence { get; set; }`

Social capital. Assigning a lower value triggers `SkillLevelingManager.OnInfluenceSpent` for the leader — see the trap above.

#### `public void AddRenown(float value, bool shouldNotify = true)`

Adds renown and, by default, notifies the player. Pass `false` for bulk or silent changes.

#### `public int RenownRequirementForNextTier`

Configuration-derived. Read it instead of hard-coding tier thresholds.

#### `public int Tier`

Current rank, derived from renown and the tier rules. Not saveable on its own.

#### `public int Gold`

Read-only, forwarding to `Leader.Gold`. Returns `0` for leader-less clans.

#### `public int TributeWallet` / `public int DebtToKingdom`

Kingdom-level ledger attached to the clan when it is a vassal.

### Diplomacy

#### `public bool IsAtWarWith(IFaction other)`

Convenience over `FactionManager.IsAtWarAgainstFaction`.

#### `public MBReadOnlyList<IFaction> FactionsAtWarWith`

Cached war set. Refreshed by `UpdateFactionsAtWarWith()`.

#### `public StanceLink GetStanceWith(IFaction other)`

The low-level stance value (hostile, wary, neutral, friendly). This is the primitive behind the `Is*` helpers.

#### `public void UpdateFactionsAtWarWith()` / `public void UpdateCurrentStrength()`

Recompute the cached war set and cached `CurrentTotalStrength`. Vanilla calls these after ownership or roster changes.

### Kingdom membership

#### `public Kingdom Kingdom`

Owning kingdom, or `null` when independent or a minor faction.

#### `public void ClanLeaveKingdom(bool giveBackFiefs = false)`

Severs kingdom membership. With `giveBackFiefs: true` the settlements are released — this is irreversible from the clan's side.

#### `public void StartMercenaryService()` / `public void EndMercenaryService(bool isByLeavingKingdom)`

Toggles mercenary state. Ending by leaving the kingdom is a different code path with different consequences.

#### `public void ResetPlayerHomeAndFactionMidSettlement()`

Player-clan special case used after story-mode setup.

### Lifecycle

#### `protected override void AfterLoad()` / `protected override void PreAfterLoad()`

Save-repair hooks. They fix broken cross-references after deserialization, which is why hand-editing clan's serialized fields produces "impossible" states only visible later.

## Real examples

### Example 1: a daily influence + renown ledger behavior

```csharp
using TaleWorlds.CampaignSystem;

public sealed class ClanLedgerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickClanEvent.AddNonSerializedListener(this, OnDailyTickClan);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnDailyTickClan(Clan clan)
    {
        Campaign campaign = Campaign.Current;
        if (campaign == null)
        {
            return;
        }

        if (!clan.IsNoble)
        {
            return;
        }

        // Gold is leader-backed and read-only; influence is the writable score.
        int clanGold = clan.Gold;
        float influence = clan.Influence;
        _ = clanGold;
        _ = influence;
    }
}
```

### Example 2: pay the player clan (gold lives on the leader)

```csharp
using TaleWorlds.CampaignSystem;

public static void PayPlayerClan(int amount)
{
    Clan clan = Clan.PlayerClan;
    if (clan == null || amount <= 0)
    {
        return;
    }

    Hero leader = clan.Leader;
    if (leader == null)
    {
        return;
    }

    leader.ChangeHeroGold(amount);
    InformationManager.DisplayMessage(
        new InformationMessage($"{clan.Name.Name} now holds {leader.Gold} gold"));
}
```

### Example 3: rank a minor faction's total land value per kingdom

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;

public static string RichestVassalReport(Kingdom kingdom)
{
    Clan best = null;
    float bestValue = -1f;

    foreach (Clan clan in kingdom.Clans)
    {
        float value = clan.CalculateTotalSettlementValueForFaction(kingdom);
        if (value > bestValue)
        {
            bestValue = value;
            best = clan;
        }
    }

    return best == null
        ? "no vassals"
        : $"{best.Name.Name}: {bestValue:0}";
}
```

### Example 4: leaving a kingdom with its fiefs

```csharp
using TaleWorlds.CampaignSystem;

public static void GrantIndependence(Clan clan)
{
    if (clan.Kingdom == null)
    {
        return;
    }

    // giveBackFiefs: true releases every fief — irreversible without a settlement-owner action.
    clan.ClanLeaveKingdom(true);
    clan.UpdateFactionsAtWarWith();
    InformationManager.DisplayMessage(
        new InformationMessage($"{clan.Name.Name} is independent again"));
}
```

## Risks and crash boundaries

1. **`Gold` is not writable.** `Clan.Gold` forwards to `Leader.Gold`; if you reach for `clan.Gold = n` it will not compile, and if you work around it by mutating a roster you break the wage system. Use `Hero.ChangeHeroGold`.
2. **`Leader` can be null.** Every member that dereferences `Leader` (`Gold`, influence-spend skill path, clan banner) must guard. Minor-faction clans always have a null leader.
3. **`CreateClan` is the only safe constructor.** `new Clan()` produces an object that is not registered, does not appear in `All`, and is never serialized.
4. **Influence writes have skill side effects.** Lowering `Influence` outside a leader context skips `OnInfluenceSpent`, leaving leader skills inconsistent with influence spend across saves.
5. **Save stability.** `Name`, `Culture`, `Tier`-driving `Renown`, `IsNoble`, `IsOutlaw`, `Color` and `InitialHomeSettlement` are `[SaveableProperty]` values. Renumbering them invalidates existing saves — see [save-system](../../../architecture/save-system).
6. **Cross-domain dependency on settlements.** `Fiefs` is maintained by the settlement owner-change path. Writing `Settlement.OwnerClan` directly desynchronises the clan index until the next owner-change event.
7. **Ownership transfer is not symmetric.** `Clan.CalculateTotalSettlementValueForFaction` reads live settlement state; calling it mid-transfer can observe a half-updated ownership set.
8. **Hot-loop cost.** Scanning `Clan.All` per daily tick across many behaviors is a real frame cost. Subscribe to `CampaignEvents.DailyTickClanEvent` instead of rescanning, and cache if you need a filtered set.

## Cross-version notes

- The 1.3.0 surface above matches 1.3.x. Later builds keep `Influence`, `Renown`, `Tier`, `CalculateTotalSettlementValueForFaction` and `ClanLeaveKingdom` stable.
- `IsBanditFaction` is a saveable private-set flag here; some 1.4.x builds add more minor-faction flags (`IsCult`) without changing the setters used by mods.

## See Also

- [Kingdom](../Kingdom) — the realm above the clan
- [Hero](../Hero) — the people inside the clan
- [FactionManager](../FactionManager) — war and stance resolution
- [Settlement](../Settlement) — the land the clan owns
- [Town](../Town) — fiefs a noble clan can hold
- [Campaign](../Campaign) — where `Clan.All` is exposed
- [Campaign basics](../../../guide/campaign-basics) — task-first walkthrough
- [SDK overview](../../../architecture/sdk-overview) — module lifecycle ordering