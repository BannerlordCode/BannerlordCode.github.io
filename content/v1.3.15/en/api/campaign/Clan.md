---
title: "Clan"
description: "Clan/family: owner of heroes, parties, and settlements; mid-layer IFaction. Join/leave kingdom, renown, and fief changes go through Actions."
---
# Clan

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class Clan : MBObjectBase, IFaction`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/Clan.cs`

## One-line job

Campaign-world root for **one family/clan**: binds a set of `Hero`es, war parties, and zero or more `Settlement`s, and participates in war and diplomacy as `IFaction`. The player family is `Clan.PlayerClan`.

## Mental Model

```
Hero (person) ──belongs──► Clan (family firm) ──joins──► Kingdom (political alliance)
                               │
               ┌───────────────┼───────────────┐
               ▼               ▼               ▼
          Settlements     WarParties      Influence/Renown
          (fief assets)   (lord parties)  (political capital)
```

Treat `Clan` as a **family company with an asset sheet and a personnel sheet**:

| Dimension | Meaning |
|-----------|---------|
| Who creates | XML / campaign init; runtime `Clan.CreateClan`, `CreateCompanionToLordClan`, `CreateSettlementRebelClan` |
| Who holds | `Campaign` global list; reverse refs from `Hero.Clan`, `Settlement.OwnerClan`, `MobileParty.ActualClan` |
| Layer | Campaign politics (not Mission, not UI) |
| Lifetime | Can be wiped by `DestroyClanAction` (`IsEliminated`); restored with the `MBObjectBase` graph on load |
| Faction identity | Implements `IFaction`: without a kingdom the clan can be the map faction; with a kingdom, `Kingdom` is the diplomacy subject |

Common checks:

```csharp
bool isPlayerSide = someHero.Clan == Clan.PlayerClan;
Clan owner = settlement.OwnerClan;
bool war = owner != null && owner.IsAtWarWith(Clan.PlayerClan);
```

### When to use

- Ask "is this the player clan / some lord's clan": `hero.Clan`, `Clan.PlayerClan`.
- Walk clan assets: `clan.Heroes`, `clan.Settlements`, `clan.Fiefs`, `clan.WarPartyComponents`.
- Read renown / influence / gold: `Renown`, `Influence`, `Gold` (mutate via Actions, below).
- Create companion fief clans, rebel clans, or mod custom clans (factory methods, then Actions to wire them).
- Branch on type: `IsMinorFaction`, `IsBanditFaction`, `IsRebelClan`, `IsUnderMercenaryService`, and similar flags.

### When not to use / do not write fields directly

| Don't | Why | Do instead |
|-------|-----|------------|
| `clan.Kingdom = x` or only patch `_kingdom` | `Kingdom.Clans`, war tables, notifications, save consistency stay out of sync | `ChangeKingdomAction.ApplyByJoinToKingdom` / `ApplyByLeaveKingdom` (and related) |
| Only `settlement.OwnerClan = clan` | Garrison, notices, kingdom membership, quest state incomplete | `ChangeOwnerOfSettlementAction.ApplyBy*` |
| `Renown += n` as a formal reward | May skip notices and model bounds | `GainRenownAction.Apply(hero, value)` or `clan.AddRenown` if you accept the side effects |
| `Influence += n` | Kingdom political ledger and UI diverge | `ChangeClanInfluenceAction.Apply(clan, amount)` |
| `new Clan()` as a playable family | Not registered with ObjectManager; no Leader / culture / banner | `Clan.CreateClan(stringId)` + set Leader/Culture/Banner, then join-kingdom Action |
| Touch `All` / war tables when `Campaign.Current == null` | NRE | Campaign context only (Behavior / menu / map event) |
| Treat bandits / minor factions like noble fief logic | `IsBanditFaction` / `IsMinorFaction` rules differ | Check type flags before economy / fief code |

## Dependencies

### Upstream

| Type | Relation |
|------|----------|
| [`Campaign`](../Campaign) | Holds the global clan list; `Clan.All` comes from campaign data |
| `MBObjectManager` | `StringId` registration and `Find` |
| [`Hero`](../Hero) | `Leader` and members; gold often lives on `Leader.Gold` and surfaces as `clan.Gold` |
| `CultureObject` | Culture template, default troops and look |
| `Banner` | Clan banner and colors |

### Downstream

| Type | Relation |
|------|----------|
| [`Kingdom`](../Kingdom) | Optional parent; `clan.Kingdom` / `kingdom.Clans` |
| [`Settlement`](../Settlement) | `OwnerClan`; `clan.Settlements` / `Fiefs` / `Villages` |
| [`MobileParty`](../MobileParty) | Attached via `WarPartyComponent` and similar |
| [`Army`](../../campaign-ext/Army) | Armies form under kingdom/lord; member parties still belong to their clans |

### Events / Actions / Models / Save

| Channel | Relation |
|---------|----------|
| Actions | `ChangeKingdomAction`, `ChangeClanLeaderAction`, `ChangeClanInfluenceAction`, `GainRenownAction`, `DestroyClanAction`, `StartMercenaryServiceAction`, `ChangeOwnerOfSettlementAction` |
| Events | Join/leave kingdom, leader change, clan destruction, and related `CampaignEvents` (Behavior subscriptions) |
| Models | Tier / CompanionLimit / CommanderLimit, crime daily change, and similar via Campaign Models |
| Save | Many `[SaveableField]` entries (`_kingdom`, `_leader`, `_banner`, `Name`, `Culture`, timestamps, …). **Reference changes must go through Actions that update both list sides.** |

## Risks and crash boundaries

| Risk | Result | Mitigation |
|------|--------|------------|
| Patch only one side of Kingdom/Clan refs | List desync, broken diplomacy, bad saves | Always `ChangeKingdomAction` |
| Hold old refs after clan destruction | Access to `Leader` / `Settlements` blows up | Check `IsEliminated`; clear caches on events |
| Custom clan with no `Leader` | UI / AI / gold paths NRE | `SetLeader` with both-side `Hero.Clan` consistency |
| `CreateClan` without registered `StringId` | Object lost on save | Unique id + ObjectManager path |
| Mutate clan graph mid-load | Lists not fully rebuilt | Change after `OnSessionLaunched` / daily tick |
| Confuse `IsAtWarWith(Clan)` with kingdom war | Same-kingdom clans can have local hostility; big diplomacy is Kingdom | Cross-faction war: prefer `MapFaction` / Kingdom |

## Key members (purpose + timing)

### Lookup and iteration

| Member | Purpose | Timing |
|--------|---------|--------|
| `PlayerClan` | Player family singleton | Campaign started |
| `All` | Every clan | Walk / stats |
| `NonBanditFactions` / `BanditFactions` | Filter bandits | AI, quest spawn |
| `FindFirst` / `FindAll` | Predicate query | Known condition |
| `CreateClan(string stringID)` | Factory: empty clan shell | First step for mod clans |
| `CreateCompanionToLordClan(hero, settlement, name, iconId)` | Companion becomes lord + new clan | Fief reward |
| `CreateSettlementRebelClan(settlement, owner, iconMeshId)` | Rebel clan | Rebellion events |

```csharp
Clan player = Clan.PlayerClan;
Clan enemy = Clan.FindFirst(c =>
    !c.IsEliminated && c != player && c.IsAtWarWith(player));
foreach (Clan c in Clan.NonBanditFactions)
{
    if (c.Tier >= 4 && c.Settlements.Count > 0)
    {
        // mid/large landed clan
    }
}
```

### Identity and type

| Member | Purpose |
|--------|---------|
| `Name` / `InformalName` / `ChangeClanName` | Display names; rename via method, not half a field write |
| `Culture` | Culture |
| `Leader` / `SetLeader` | Clan head; formal succession prefers `ChangeClanLeaderAction` |
| `Kingdom` | Parent kingdom (may be null) |
| `IsNoble` / `IsMinorFaction` / `IsOutlaw` / `IsBanditFaction` / `IsRebelClan` / `IsNomad` / `IsMafia` / `IsSect` / `IsClanTypeMercenary` / `IsUnderMercenaryService` | Type branches |
| `IsEliminated` | Already destroyed |
| `IsMapFaction` | Whether this clan is the map faction when it has no parent |
| `IsAtWarWith(IFaction)` | War check |
| `GetRelationWithClan(Clan)` | Clan-to-clan relation |

### Assets and political capital

| Member | Purpose |
|--------|---------|
| `Heroes` / `AliveLords` / `DeadLords` / `Companions` | Personnel |
| `Settlements` / `Fiefs` / `Villages` | Holdings |
| `WarPartyComponents` | Lord war-party components |
| `Renown` / `AddRenown` / `ResetClanRenown` / `Tier` / `RenownRequirementForNextTier` | Renown and tier |
| `Influence` | Influence (mutate via Action) |
| `Gold` | Clan treasury view |
| `CompanionLimit` / `CommanderLimit` | Companion / commander caps (often Model-driven) |
| `HomeSettlement` / `InitialHomeSettlement` / `FactionMidSettlement` | Home and midpoint |
| `StartMercenaryService` / `EndMercenaryService` / `ClanLeaveKingdom` | Mercenary and leave-kingdom (prefer matching Actions) |

### Create and wire

```csharp
// Shell first, fill playable fields, then join a kingdom
Clan modClan = Clan.CreateClan("mod_house_example");
modClan.ChangeClanName(
    new TextObject("{=mod_clan_name}House Example"),
    new TextObject("{=mod_clan_inf}Example"));
modClan.Culture = Hero.MainHero.Culture;
modClan.SetLeader(someHero);
// Keep someHero.Clan consistent with official create paths; formal join:
// ChangeKingdomAction.ApplyByJoinToKingdom(modClan, targetKingdom);
```

## Real examples

### Example 1: Award renown to the player clan (via Action)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void RewardPlayerClanRenown(float amount)
{
    if (Campaign.Current == null || Clan.PlayerClan == null)
    {
        return;
    }
    // Renown sits on the clan; GainRenown takes a hero entry point and fires notices
    GainRenownAction.Apply(Hero.MainHero, amount, doNotNotify: false);
}
```

### Example 2: List living free lords of clans at war with the player

```csharp
using TaleWorlds.CampaignSystem;

public void ListEnemyLords()
{
    Clan player = Clan.PlayerClan;
    foreach (Clan clan in Clan.All)
    {
        if (clan.IsEliminated || clan.IsBanditFaction)
        {
            continue;
        }
        if (!clan.IsAtWarWith(player))
        {
            continue;
        }
        foreach (Hero lord in clan.AliveLords)
        {
            if (lord.IsAlive && !lord.IsPrisoner)
            {
                InformationManager.DisplayMessage(
                    new InformationMessage($"{clan.Name}: {lord.Name}"));
            }
        }
    }
}
```

### Example 3: Promote a companion with a fief (factory + ownership Action)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Localization;

public Clan PromoteCompanionWithFief(Hero companion, Settlement fief)
{
    if (companion == null || fief == null || !companion.IsAlive)
    {
        return null;
    }
    TextObject name = new TextObject("{=mod_new_house}New House");
    Clan newClan = Clan.CreateCompanionToLordClan(companion, fief, name, newClanIconId: 1);
    // Factory does most wiring; use official Action if you need ownership notices aligned
    ChangeOwnerOfSettlementAction.ApplyByDefault(companion, fief);
    return newClan;
}
```

### Example 4: Change influence

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void GrantInfluence(Clan clan, float delta)
{
    if (clan == null || clan.IsEliminated)
    {
        return;
    }
    ChangeClanInfluenceAction.Apply(clan, delta);
}
```

## Cross-version notes

- **v1.3.0 / v1.3.15:** `Clan` as mid-layer `IFaction` is stable; `CreateCompanionToLordClan` / `CreateSettlementRebelClan` are available.
- **v1.4.5:** Minor-faction flags (`IsMafia`, `IsSect`, `IsNomad`, …) are richer; naval `HasNavalNavigationCapability` appears on clan/kingdom sides. For compatible mods, gate on `IsMinorFaction` / `IsBanditFaction` first, treat finer flags as optional.
- Across versions, **prefer Actions for membership changes**; do not rely on field-setter visibility differences.

## ↑ Parent Navigation

- [campaign section](./)
- [API section](../)
- [SDK overview](../../../architecture/sdk-overview)
- [Campaign system guide](../../../guide/campaign-system)

## Sibling Navigation

| Page | Relation |
|------|----------|
| [Hero](../Hero) | Clan members and leader |
| [Kingdom](../Kingdom) | Optional parent of a clan |
| [Settlement](../Settlement) | Fief assets |
| [MobileParty](../MobileParty) | Clan parties |
| [Campaign](../Campaign) | World root and lists |
| [Army](../../campaign-ext/Army) | Temporary multi-clan party groups |

## See also

- [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction): join / leave kingdom
- [DestroyClanAction](../../campaign-ext/DestroyClanAction): eliminate clan
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase): subscribe to clan-related events
- [Crash boundaries](../../../architecture/crash-boundaries): object refs and load order
