---
title: "DeclareWarAction"
description: "Official faction war exit: FactionManager.DeclareWar, political stagnation penalty, player-side map visual dirty, reason overloads write DeclareWarDetail and OnWarDeclared."
---

# DeclareWarAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class DeclareWarAction`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`  
**Nested enum:** `DeclareWarAction.DeclareWarDetail`

## One-sentence responsibility

Puts two [`IFaction`](../IFaction) parties (kingdoms / clans / …) **formally at war**: writes war stance, may lower kingdom political stagnation, dirties enemy settlement/party icons when the player faction is involved, and broadcasts `OnWarDeclared(…, detail)`.

## Mental Model

```
Decision / rebellion / crime / kingdom founding / player hostility / barter / call-to-war …
        │  pick the ApplyBy* that matches the cause
        ▼
ApplyByKingdomDecision / ApplyByPlayerHostility / ApplyByRebellion / …
        │
        ▼
ApplyInternal(faction1, faction2, DeclareWarDetail)
        │
        ├─ FactionManager.DeclareWar(faction1, faction2)
        ├─ if either side is a kingdom and the other has clearly more fiefs → that kingdom PoliticalStagnation drops
        ├─ if either side == MainHero.MapFaction
        │     → opponent visible Settlement / MobileParty Party.SetVisualAsDirty()
        └─ CampaignEventDispatcher.OnWarDeclared(faction1, faction2, detail)
```

| Question | Answer |
|----------|--------|
| What is this | Campaign-layer **faction war state** Action; static class. |
| When to use | Kingdom decision war, player attacks without formal declaration, rebellion, crime rating blowout, new kingdom vs old master, claim on throne, call-to-war agreements. |
| When not to use | Personal relation only → [ChangeRelationAction](../ChangeRelationAction); pre-war friction → [BeHostileAction](../BeHostileAction); peace → [MakePeaceAction](../MakePeaceAction); read-only `IsAtWarWith`. |
| Vs fields | War truth lives in `FactionManager` / `StanceLink`. Hand-editing stance **drops events, visual dirty, and stagnation side effects**. |
| Vs Behavior | Behavior / decision / Barter **decide why war starts**; this class **executes the war jump**. |
| Vs Mission | Mission firefight ≠ map war. Pre-war hostility may go `BeHostileAction` → threshold met → `ApplyByPlayerHostility`. |

Hard rule:

> **Faction war goes through `DeclareWarAction.ApplyBy*` with the right Detail. Do not hand-roll a half FactionManager path.**

### Apply vs ApplyInternal

| Layer | Role |
|-------|------|
| **`ApplyBy*`** | Fold the cause into `DeclareWarDetail`, then enter Internal. **Mods call only the public layer.** |
| **`ApplyInternal`** | `DeclareWar` + stagnation + visual dirty + `OnWarDeclared`. Private. |

Detail feeds logs, AI, quests, Comment Behaviors. **Wrong Detail = wrong narrative and wrong reactions**, even though war stance usually still forms.

## Dependencies

| Direction | Type / system | Relationship |
|-----------|---------------|--------------|
| **Upstream** | [IFaction](../IFaction) / [Kingdom](../../campaign/Kingdom) / [Clan](../../campaign/Clan) | War parties; `Fiefs`, `IsKingdomFaction` |
| **Upstream** | `FactionManager` | `DeclareWar` actually changes stance |
| **Upstream** | [Hero](../../campaign/Hero).MainHero | Whether to dirty player-side visuals |
| **Downstream** | [Settlement](../../campaign/Settlement) / [PartyBase](../../campaign/PartyBase) / `MobileParty` | `SetVisualAsDirty` on player wars |
| **Downstream events** | [CampaignEvents](../CampaignEvents) | `OnWarDeclared` |
| **Downstream** | Army AI, caravans, quests, CommentOnDeclareWar Behaviors | Subscribe to war start |
| **Chain callers** | [ChangeKingdomAction](../ChangeKingdomAction) (rebellion leave), [BeHostileAction](../BeHostileAction), `KingdomManager` founding, `DeclareWarDecision`, `DeclareWarBarterable` | Stock real entries |
| **Symmetric face** | [MakePeaceAction](../MakePeaceAction) | End war |
| **Save** | War stance enters save graph | Mid-load spam declare → half-baked diplomacy save |
| **Parent** | [Actions family](../actions/) | Shared contract |

## Risks / crash-save boundaries

| Risk | Symptom | Correct approach |
|------|---------|------------------|
| **Direct `FactionManager.DeclareWar` or stance edit** | No `OnWarDeclared`, no icon dirty, no stagnation penalty | Use this Action |
| **null / destroyed faction** | NRE or illegal war | Both sides non-null and still in campaign before Apply |
| **Already allies / already at war** | Depends on `FactionManager`; may fire redundant events | Check `IsAtWarWith` first; re-declare has no gameplay value |
| **Wrong ApplyBy\*** | Logs say "rebellion" when it was a decision; AI/quest conditions wrong | Match overload to semantics (table below) |
| **Player MapFaction null** | NRE reading `MainHero.MapFaction` (very early) | Declare only after session started and player has a faction |
| **Declare mid-Mission** | Diplomacy flips while battle/siege AI runs | Apply on map / post-battle / decision execution |
| **Event handler re-declares or destroys kingdoms** | Re-entry, double stance write | Listeners bookkeep only; destruction chains stay with stock Actions |
| **Political stagnation side effect** | Weaker kingdom vs much stronger foe gets stagnation crushed — **by design** | Do not "patch stagnation back" after Apply unless you know the balance cost |

`PoliticalStagnation` rule (source): if `faction1` is a kingdom and `faction2.Fiefs.Count > 1 + faction1.Fiefs.Count * 0.2`, faction1 stagnation becomes `* 0.85 - 3` (floor 0); both sides checked symmetrically.

## Key members — pick overload by cause

All are `public static void ApplyBy*(IFaction faction1, IFaction faction2)`, no notification switch (subscribers own notifications).

| Public method | Detail | When to pick |
|---------------|--------|--------------|
| **`ApplyByDefault`** | `Default` | Generic scripted war, default Barter war (`DeclareWarBarterable`), inherit wars after leave — no finer label |
| **`ApplyByKingdomDecision`** | `CausedByKingdomDecision` | Policy/election passed a war vote (`DeclareWarDecision` execution) |
| **`ApplyByPlayerHostility`** | `CausedByPlayerHostility` | Player struck first and hit the war threshold (`BeHostileAction` player path) |
| **`ApplyByRebellion`** | `CausedByRebellion` | Clan leaves and wars old kingdom (`ChangeKingdomAction` rebellion branch) |
| **`ApplyByCrimeRatingChange`** | `CausedByCrimeRatingChange` | Crime rating forces war |
| **`ApplyByKingdomCreation`** | `CausedByKingdomCreation` | New kingdom wars old enemies (`KingdomManager` founding loop) |
| **`ApplyByClaimOnThrone`** | `CausedByClaimOnThrone` | Claim-on-throne war |
| **`ApplyByCallToWarAgreement`** | `CausedByCallToWarAgreement` | Ally/call-to-war pact pulls a faction in |

### Nested enum list

`Default`, `CausedByPlayerHostility`, `CausedByKingdomDecision`, `CausedByRebellion`, `CausedByCrimeRatingChange`, `CausedByKingdomCreation`, `CausedByClaimOnThrone`, `CausedByCallToWarAgreement` — labels only, not an API.

### Private

#### `ApplyInternal(IFaction, IFaction, DeclareWarDetail)`

Only path that mutates the world. Mods **must not** reflect-call it.

## Real examples

### Example 1: Mod script has player kingdom declare war (decision semantics)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

namespace MyMod
{
    public static class MyDiplomacy
    {
        /// <summary>
        /// Mirrors DeclareWarDecision: after a vote passes, use KingdomDecision Detail.
        /// </summary>
        public static void PlayerKingdomDeclareWarOn(Kingdom target)
        {
            if (Campaign.Current == null || Hero.MainHero == null || target == null)
                return;

            IFaction playerFaction = Hero.MainHero.MapFaction;
            if (playerFaction == null || playerFaction == target)
                return;
            if (playerFaction.IsAtWarWith(target))
                return;

            // Kingdom council path → Decision; pure cheat/script can use Default
            DeclareWarAction.ApplyByKingdomDecision(playerFaction, target);
        }
    }
}
```

### Example 2: Subscribe war start + player hostility path (mirrors BeHostileAction)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

namespace MyMod
{
    public class WarWatchBehavior : CampaignBehaviorBase
    {
        private int _warsInvolvingPlayer;

        public override void RegisterEvents()
        {
            CampaignEvents.WarDeclared.AddNonSerializedListener(this, OnWarDeclared);
        }

        public override void SyncData(IDataStore dataStore)
        {
            dataStore.SyncData("MyMod_WarsInvolvingPlayer", ref _warsInvolvingPlayer);
        }

        /// <summary>
        /// After enough player hostility, stock does:
        /// ChangeRelationAction.ApplyPlayerRelation(leader, -10);
        /// DeclareWarAction.ApplyByPlayerHostility(attacker.MapFaction, defender.MapFaction);
        /// Mods that invent "strike first → war" should use the same Detail.
        /// </summary>
        public void ForcePlayerHostilityWar(PartyBase attacker, PartyBase defender)
        {
            if (attacker?.MapFaction == null || defender?.MapFaction == null)
                return;
            if (attacker.MapFaction.IsAtWarWith(defender.MapFaction))
                return;

            DeclareWarAction.ApplyByPlayerHostility(attacker.MapFaction, defender.MapFaction);
        }

        private void OnWarDeclared(
            IFaction faction1,
            IFaction faction2,
            DeclareWarAction.DeclareWarDetail detail)
        {
            IFaction player = Hero.MainHero?.MapFaction;
            if (player != null && (faction1 == player || faction2 == player))
                _warsInvolvingPlayer++;

            // Count only. Do not DeclareWar / ChangeKingdom here.
        }
    }
}
```

### Example 3: Wrong — hand-rolled war

```csharp
// Wrong: may change stance, but no OnWarDeclared, no map icon dirty, no stagnation rule
FactionManager.DeclareWar(kingdomA, kingdomB);

// Right
DeclareWarAction.ApplyByDefault(kingdomA, kingdomB);
```

## Cross-version notes

- **1.3.x / 1.4.5:** Apply matrix and `DeclareWarDetail` members follow target source; 1.4.5 includes the full set with `CausedByCallToWarAgreement`.  
- Stagnation formula and visual dirty conditions: treat 1.4.5 decompile as authoritative.  
- URL: `campaign-ext/DeclareWarAction`.

## ↑ Parent Navigation

- [Actions — campaign world-change family](../actions/) — **parent of this page**  
- [campaign-ext area](./)  
- [API index](../)  
- [Crash and save boundaries §2](../../../architecture/crash-boundaries)  
- [Doc contract](../../../architecture/doc-contract)

## ↔ Sibling Navigation

| Page | Relationship |
|------|--------------|
| [MakePeaceAction](../MakePeaceAction) | Peace symmetric face |
| [ChangeKingdomAction](../ChangeKingdomAction) | Rebellion leave chains `ApplyByRebellion` |
| [BeHostileAction](../BeHostileAction) | Player hostility can reach `ApplyByPlayerHostility` |
| [ChangeRelationAction](../ChangeRelationAction) | Personal relation, not faction war |
| [GiveGoldAction](../GiveGoldAction) | Unrelated; war reparations go through peace tribute |
| [KillCharacterAction](../KillCharacterAction) | Death may destroy kingdoms; does not declare war directly |
| [CampaignEvents](../CampaignEvents) | `WarDeclared` |
| [IFaction](../IFaction) · [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) | War entities |

## See also

- [Campaign system guide](../../../guide/campaign-system)  
- [Developer task roadmap](../../../architecture/developer-roadmap)  
- [Common patterns](../../../guide/common-patterns)
