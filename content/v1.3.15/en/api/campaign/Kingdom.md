---
title: "Kingdom"
description: "Kingdom: top political entity of multiple clans; entry for war, policy, armies, and decisions. Diplomacy changes must go through Actions."
---
# Kingdom

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Kingdom : MBObjectBase, IFaction`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

## One-line job

Top-level map faction made of multiple `Clan`s: aggregates holdings and strength, holds war/ally stances, policy lists, open `KingdomDecision`s, and strategic entry points such as `CreateArmy`.

## Mental Model

```
Kingdom (political alliance / map faction)
   │
   ├── Clans[] ── RulingClan / Leader(Ruler)
   ├── Settlements / Fiefs / Villages   ← rolled up from member clans
   ├── Armies[]                        ← temporary strategic groups
   ├── Policies / UnresolvedDecisions
   └── Stance (vs other IFaction)      ← war / peace / tribute
```

Treat `Kingdom` as a **political alliance of clans under one contract**:

| Dimension | Meaning |
|-----------|---------|
| Who creates | `Kingdom.CreateKingdom` + `InitializeKingdom`; player founding uses `ChangeKingdomAction.ApplyByCreateKingdom` |
| Who holds | `Campaign` global; reverse link `Clan.Kingdom` |
| Layer | Campaign politics; does not run Mission combat |
| Lifetime | Can be destroyed by `DestroyKingdomAction` (`IsEliminated`) |
| vs Clan | Diplomacy / declare-war subject is usually Kingdom; clanless or kingdom-less clans can still act as `IFaction` |

Individuals do not "declare war alone": a hero enters the `IsAtWarWith` graph through `Clan` → `Kingdom` (or the clan itself as map faction).

### When to use

- Two blocs at war: `kingdomA.IsAtWarWith(kingdomB)` or `faction.IsAtWarWith(Hero.MainHero.MapFaction)`.
- Walk a kingdom's clans / fiefs: `kingdom.Clans`, `kingdom.Settlements`, `kingdom.Fiefs`.
- Create an army: `kingdom.CreateArmy(leader, target, ArmyTypes, parties)`.
- Policy and decisions: `AddPolicy` / `HasPolicy` / `AddDecision`.
- Read ruler: `Leader`, `RulingClan`.

### When not to use / do not write fields directly

| Don't | Why | Do instead |
|-------|-----|------------|
| Hand-write stance fields or a fake "SetStance" | War graph, notices, quest hooks incomplete | `DeclareWarAction` / `MakePeaceAction` |
| Only assign `clan.Kingdom = newKingdom` | Both-side lists and timestamps desync | `ChangeKingdomAction.ApplyBy*` |
| Force an army with no war and expect normal AI | Cohesion / target / gather logic depends on campaign state | `CreateArmy` + `GatherArmyAction` / official gather flow |
| Use Kingdom APIs to change a single settlement owner | Ownership lives on Clan / Settlement | `ChangeOwnerOfSettlementAction` |
| `new Kingdom()` without `InitializeKingdom` | Name / culture / banner / colors not ready | `CreateKingdom` → `InitializeKingdom` → Action to bind ruling clan |
| Assume `IsAllyWith` equals "same culture" | Alliance is an explicit stance | Read `AlliedKingdoms` / `IsAllyWith` |

## Dependencies

### Upstream

| Type | Relation |
|------|----------|
| [`Campaign`](../Campaign) | Kingdom list and daily tick |
| [`Clan`](../Clan) | Building block; `RulingClan` |
| `CultureObject` / `Banner` | `InitializeKingdom` parameters |
| [`Settlement`](../Settlement) | `initialHomeSettlement` and rolled-up holdings |

### Downstream

| Type | Relation |
|------|----------|
| [`Army`](../../campaign-ext/Army) | `kingdom.Armies`; `CreateArmy` output |
| [`MobileParty`](../MobileParty) | `AllParties` / `WarPartyComponents` |
| [`Hero`](../Hero) | `Heroes` / `AliveLords`; ruler |
| Policy / decision types | `PolicyObject`, `KingdomDecision` subclasses |

### Events / Actions / Models / Save

| Channel | Relation |
|---------|----------|
| Actions | `DeclareWarAction`, `MakePeaceAction`, `ChangeKingdomAction`, `DestroyKingdomAction`, `ChangeRulingClanAction`, `GainKingdomInfluenceAction`, `DisbandArmyAction` |
| Events | Declare war / make peace, decision finished, clan join/leave, and related `CampaignEvents` |
| Models | Influence, war score, policy effects via GameModels |
| Save | Name, culture, banner, wallets, stagnation, policy and decision lists, and more; **stance graph saves with FactionManager** |

## Risks and crash boundaries

| Risk | Result | Mitigation |
|------|--------|------------|
| Fake diplomacy (local bool only) | AI still fights under old war state | Only DeclareWar / MakePeace Actions |
| Cache old refs after kingdom destruction | NRE / wrong UI | `IsEliminated`; clear Behavior caches |
| `CreateArmy` with leader without a party or wrong kingdom | Broken army or instant disband | Check `armyLeader.PartyBelongedTo` and `Clan.Kingdom` |
| `AddDecision` mid-load | Decision queue corruption | After session launch |
| Treat `MercenaryWallet` / `KingdomBudgetWallet` as player purse | Those are kingdom public books | Player money: `Hero` / `GiveGoldAction` |
| Assume player is in a kingdom when `PlayerClan.Kingdom == null` | NRE in wanderer / mercenary phase | Null-check first |

## Key members (purpose + timing)

### Lookup and init

| Member | Purpose | Timing |
|--------|---------|--------|
| `All` | Every kingdom | In campaign |
| `CreateKingdom(string stringID)` | Empty shell | Mod / scenario |
| `InitializeKingdom(name, informalName, culture, banner, color1, color2, home, encyclopedia…)` | Fill display and culture | Right after Create |
| `ChangeKingdomName` | Rename at runtime | Runtime |
| `ReactivateKingdom` | Revival logic | Special events |

```csharp
Kingdom k = Kingdom.CreateKingdom("mod_kingdom_north");
k.InitializeKingdom(
    new TextObject("{=mod_k}North Realm"),
    new TextObject("{=mod_k_inf}Northmen"),
    CultureObject.GetCulture("sturgia"),
    Banner.CreateRandomClanBanner(seed: 42),
    0xFF1A3A5C,
    0xFFE8E0D0,
    Settlement.Find("town_S1"),
    new TextObject("{=mod_k_enc}A realm of the north."),
    new TextObject("{=mod_k_title}Realm of the North"),
    new TextObject("{=mod_k_ruler}High King"));
// Bind ruling clan: ChangeKingdomAction.ApplyByCreateKingdom(rulingClan, k);
```

### Composition and assets

| Member | Purpose |
|--------|---------|
| `Clans` / `RulingClan` / `Leader` | Political structure |
| `Settlements` / `Fiefs` / `Villages` | Holdings rollup |
| `Heroes` / `AliveLords` / `DeadLords` | People rollup |
| `WarPartyComponents` / `AllParties` | Military force |
| `Armies` / `LastArmyCreationDay` | Armies |
| `CurrentTotalStrength` | Strength estimate |
| `Culture` / `Banner` / color fields | Display and map tint |
| `MercenaryWallet` / `KingdomBudgetWallet` / `TributeWallet` / `CallToWarWallet` | Kingdom books |

### Diplomacy and policy

| Member | Purpose |
|--------|---------|
| `IsAtWarWith` / `IsAtConstantWarWith` | War |
| `IsAllyWith` / `AlliedKingdoms` / `HasCalledToWar` | Allies and call-to-war |
| `FactionsAtWarWith` | Hostile list |
| `UpdateFactionsAtWarWith` / `UpdateAlliedKingdoms` | Internal refresh (usually Action-triggered) |
| `AddPolicy` / `RemovePolicy` / `HasPolicy` | Policies |
| `AddDecision` / `RemoveDecision` / `UnresolvedDecisions` / `OnKingdomDecisionConcluded` | Decision queue |

### Armies

```csharp
// Official entry: kingdom creates army (leader must be a suitable lord)
Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && Hero.MainHero.PartyBelongedTo != null)
{
    Settlement target = Settlement.FindFirst(s =>
        s.IsFortification && s.MapFaction != null &&
        s.MapFaction.IsAtWarWith(playerKingdom));
    if (target != null)
    {
        playerKingdom.CreateArmy(
            Hero.MainHero,
            target,
            Army.ArmyTypes.Besieger,
            partiesToCallToArmy: null);
    }
}
```

## Real examples

### Example 1: Force peace between two kingdoms

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using System.Linq;

public void ForcePeace(string kingdomIdA, string kingdomIdB)
{
    Kingdom a = Kingdom.All.FirstOrDefault(k => k.StringId == kingdomIdA);
    Kingdom b = Kingdom.All.FirstOrDefault(k => k.StringId == kingdomIdB);
    if (a == null || b == null || a.IsEliminated || b.IsEliminated)
    {
        return;
    }
    if (a.IsAtWarWith(b))
    {
        MakePeaceAction.Apply(a, b);
    }
}
```

### Example 2: Declare war on another kingdom (default path)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void DeclareWarOn(Kingdom enemy)
{
    Kingdom mine = Clan.PlayerClan.Kingdom;
    if (mine == null || enemy == null || mine == enemy)
    {
        return;
    }
    if (!mine.IsAtWarWith(enemy))
    {
        DeclareWarAction.ApplyByDefault(mine, enemy);
    }
}
```

### Example 3: Pay gold to every vassal clan leader

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public void PayVassals(int goldEach)
{
    Kingdom k = Clan.PlayerClan.Kingdom;
    if (k == null)
    {
        return;
    }
    foreach (Clan clan in k.Clans)
    {
        if (clan.IsEliminated || clan.Leader == null || !clan.Leader.IsAlive)
        {
            continue;
        }
        GiveGoldAction.ApplyBetweenCharacters(null, clan.Leader, goldEach);
    }
}
```

### Example 4: Is this fortification enemy territory?

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public bool IsEnemyFortification(Settlement s)
{
    if (s == null || !s.IsFortification || s.MapFaction == null)
    {
        return false;
    }
    IFaction playerFaction = Hero.MainHero.MapFaction;
    return playerFaction != null && s.MapFaction.IsAtWarWith(playerFaction);
}
```

## Cross-version notes

- **1.3.x:** `CreateKingdom` / `InitializeKingdom` / `CreateArmy` / policy and decision main paths are stable.
- **1.4.5:** More diplomacy AI and `KingdomDecision` subclasses; wallets such as `CallToWarWallet` and naval capability are more visible. Cross-version mods should declare war / make peace via Actions, not private AI fields.
- Prefer `StringId` or `Kingdom.All` predicates when looking up kingdoms; avoid hard-coded list indices.

## ↑ Parent Navigation

- [campaign section](./)
- [API section](../)
- [SDK overview](../../../architecture/sdk-overview)
- [Campaign system guide](../../../guide/campaign-system)

## Sibling Navigation

| Page | Relation |
|------|----------|
| [Clan](../Clan) | Building block of a kingdom |
| [Hero](../Hero) | Ruler and lords |
| [Settlement](../Settlement) | Kingdom holdings |
| [MobileParty](../MobileParty) | Kingdom parties |
| [Army](../../campaign-ext/Army) | Temporary armies |
| [Campaign](../Campaign) | World root |

## See also

- [DeclareWarAction](../../campaign-ext/DeclareWarAction) / [MakePeaceAction](../../campaign-ext/MakePeaceAction)
- [ChangeKingdomAction](../../campaign-ext/ChangeKingdomAction)
- [PolicyObject](../../campaign-ext/PolicyObject) / [KingdomDecision](../../campaign-ext/KingdomDecision)
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase)
