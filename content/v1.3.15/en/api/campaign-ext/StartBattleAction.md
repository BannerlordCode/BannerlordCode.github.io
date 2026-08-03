---
title: "StartBattleAction"
description: "Official exit to create or join a map MapEvent: open field/raid/sally/wall assault via EncounterModel by type, OnStartBattle; never hand-new MapEvent."
---

# StartBattleAction

**Namespace:** `TaleWorlds.CampaignSystem.Actions`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class StartBattleAction`
**Base:** —
**File:** `TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs`

## One-sentence responsibility

Puts two [`PartyBase`](../../campaign/PartyBase) sides (mobile parties or settlement parties) **into or onto** a map [`MapEvent`](../../campaign/MapEvent): `EncounterModel.CreateMapEventComponentForEncounter` picks `MapEvent.BattleTypes`, may interrupt the player encounter, and broadcasts `OnStartBattle` → `CampaignEvents.BattleStarted`.

## Mental Model

```
Intent: "open a fight" or "join a fight already on the map"
        │
        ├─ dedicated entries (clear semantics, prefer for scripts)
        │    ApplyStartBattle(attMP, defMP)           → FieldBattle, subject=null
        │    ApplyStartRaid(attMP, settlement)        → Raid, subject=settlement
        │    ApplyStartSallyOut(settlement, defMP)    → SallyOut, attacker=GarrisonParty
        │    ApplyStartAssaultAgainstWalls(attMP, s)  → Siege, subject=settlement
        │
        └─ generic Apply(attackerParty, defenderParty)   ← EncounterManager main path
             · defender has no MapEvent yet → infer BattleTypes from garrison/town/siege/village
             · already has MapEvent → inherit type, attach attacker to opposite MapEventSide
             · subject usually the related Settlement
                    │
                    ▼
ApplyInternal(attacker, defender, subject, battleType)
  1) defender.MapEvent == null
       → EncounterModel.CreateMapEventComponentForEncounter(att, def, type)
       → if MapEvent still null → return (create failed, silent)
  2) else
       → attacker.MapEventSide = opposite of defender.Side
  3) player MapEvent, not SallyOut, main party in settlement, PlayerEncounter exists
       → PlayerEncounter.Current.InterruptEncounter("encounter_interrupted")
  4) showNotification-style flag: both sides (army → leader) as "main combatants" heuristics
       → OnStartBattle(attacker, defender, subject, flag)
```

| Question | Answer |
|----------|--------|
| What is this | Campaign-layer **map battle (MapEvent) open/join** official exit. |
| When to use | Two armies meet, start a village raid, garrison sally, wall assault; scripted forced encounter. |
| When not to use | Agent-vs-agent inside Mission (already on the battlefield); diplomacy only → [`DeclareWarAction`](../DeclareWarAction); enter town only → [`EnterSettlementAction`](../EnterSettlementAction). |
| Vs MapEvent | **Do not** `new MapEvent` or only set `MapEventSide`; component creation must go through EncounterModel. |
| Generic vs dedicated | Clear gameplay meaning → `ApplyStart*`; complex type inference / join existing fight → `Apply` (`EncounterManager`). |
| Vs aftermath | Casualties/captives/destroy party → [`KillCharacterAction`](../KillCharacterAction) / [`TakePrisonerAction`](../TakePrisonerAction) / [`DestroyPartyAction`](../DestroyPartyAction); take town → [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction). |

Hard rule:

> **Map fights go through `StartBattleAction`. Mission owns Agents; post-battle write-back uses other Actions.**

### Public layer overview

| API | Fixed / inferred type | subject | Attacker / defender shape |
|-----|----------------------|---------|---------------------------|
| `ApplyStartBattle` | FieldBattle | null | `MobileParty` vs `MobileParty` |
| `ApplyStartRaid` | Raid | settlement | attacker MP vs `settlement.Party` |
| `ApplyStartSallyOut` | SallyOut | settlement | **garrison Party** vs outside MP |
| `ApplyStartAssaultAgainstWalls` | Siege | settlement | attacker MP vs `settlement.Party` |
| `Apply` | inferred or inherit existing MapEvent type | usually settlement | any `PartyBase` |

`ApplyInternal` is private.

### How generic `Apply` infers type (defender has no MapEvent yet)

Source order highlights (1.4.5):

1. Attacker is **Garrison** → `SallyOut` or `BlockadeSallyOutBattle` (`IsTargetingPort`).
2. Else take `CurrentSettlement` / `BesiegedSettlement` as settlement clues.
3. Siege-related and defender is not settlement Party → `SiegeOutside`.
4. No settlement clue → `FieldBattle`.
5. Settlement present and type still None: town → `Siege` (port blockade may become `BlockadeBattle`); hideout → `Hideout`; village → `FieldBattle`.

When defender **already has** a MapEvent: inherit from `IsFieldBattle` / `IsRaid` / `IsSiegeAssault` / `IsSallyOut` / `IsSiegeOutside` / `IsBlockade` / `IsBlockadeSallyOut` and similar. Special case: naval Raid where settlement side has no healthy troops may strip defender MapEventSide and flip to FieldBattle.

## Dependencies

| Direction | Type / system | Relationship |
|-----------|---------------|--------------|
| **Upstream entities** | [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) / [`Settlement`](../../campaign/Settlement) | Sides and siege subject |
| **Upstream Model** | `Campaign.Current.Models.EncounterModel` | `CreateMapEventComponentForEncounter` |
| **Downstream** | [`MapEvent`](../../campaign/MapEvent) / `MapEvent.BattleTypes` | FieldBattle, Raid, Siege, SallyOut, SiegeOutside, Hideout, Blockade* (1.4.x) |
| **Downstream** | `PlayerEncounter` | In-town player may get `InterruptEncounter` |
| **Downstream events** | [`CampaignEvents`](../CampaignEvents)`.BattleStarted` | dispatcher `OnStartBattle`; also watch `MapEventStarted` etc. |
| **Stock call sites** | `EncounterManager`: `Apply` (contact), `ApplyStartRaid`, `ApplyStartAssaultAgainstWalls` | Map encounter main path |
| **Aftermath chain** | [`TakePrisonerAction`](../TakePrisonerAction), [`DestroyPartyAction`](../DestroyPartyAction), [`KillCharacterAction`](../KillCharacterAction), [`ChangeOwnerOfSettlementAction`](../ChangeOwnerOfSettlementAction) | Settlement and ownership |
| **Parent** | [Actions family](../actions-index) | |

## Risks / crash-save boundaries

| Risk | Symptom | Correct approach |
|------|---------|------------------|
| **Hand-built MapEvent / only set MapEventSide** | Missing components, AI/UI ignore, weird saves | Only this class + EncounterModel |
| **Create fails** | `MapEvent` still null, **silent return**, no throw | After Apply, check both sides' `MapEvent`; verify hostility, distance, siege and model conditions |
| **Not at war / cannot engage** | Model refuses create or gameplay breaks | Fix diplomacy ([`DeclareWarAction`](../DeclareWarAction) etc.) and position state first |
| **SallyOut without Garrison** | `settlement.Town.GarrisonParty` **NRE** | Ensure garrison exists before sally |
| **Join existing fight side** | Source takes opposite of defender's current Side | Trust `Apply`; do not hand-set Side |
| **Player in-town interrupt** | `InterruptEncounter("encounter_interrupted")` | Expected; mod UI must handle interrupt |
| **Mission confusion** | Battle already open and you StartBattle again | Separate MapEvent lifecycle from Mission |
| **1.4 naval types** | Blockade / BlockadeSallyOut | Prefer `Apply` inference or read existing MapEvent; land mods rarely hardcode |
| **Both already in different MapEvents** | Undefined / dirty state | Before open, check `MapEvent == null` or explicitly take the "join" path |

## Key members

### `ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)`

- **Purpose:** Two mobile parties field fight (`FieldBattle`).
- **Timing:** Most common open-field scripted fight; skips complex `Apply` inference.
- **Note:** Parameters are `MobileParty`; internal takes `.Party`.

### `ApplyStartRaid(MobileParty attackerParty, Settlement settlement)`

- **Purpose:** Attacker vs `settlement.Party`, type Raid, subject=settlement.
- **Timing:** Start raid; one of `EncounterManager`'s stock entries.

### `ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)`

- **Purpose:** **Garrison is attacker**, sallies against outside `defenderParty`.
- **Timing:** Under siege sally menu.
- **Prerequisite:** `Town.GarrisonParty` non-null.

### `ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)`

- **Purpose:** Siege-type map fight against walls/fort.
- **Timing:** Assault; stock `EncounterManager` entry.

### `Apply(PartyBase attackerParty, PartyBase defenderParty)`

- **Purpose:** Generic: infer or inherit BattleTypes, **create or join** MapEvent.
- **Timing:** `EncounterManager` contact, reinforce an existing fight.
- **Note:** Inference depends on real `CurrentSettlement` / `BesiegedSettlement` / garrison flags; fails silently.

## Real examples

### Example 1: Two-party field battle

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

namespace MyMod
{
    public static class FieldFight
    {
        public static bool StartFieldBattle(MobileParty attacker, MobileParty defender)
        {
            if (attacker == null || defender == null)
                return false;
            if (attacker.MapEvent != null || defender.MapEvent != null)
                return false; // joining an existing fight: use Apply(PartyBase, PartyBase)

            StartBattleAction.ApplyStartBattle(attacker, defender);
            return attacker.MapEvent != null || defender.MapEvent != null;
        }
    }
}
```

### Example 2: Raid + wall assault (mirrors EncounterManager) + subscribe battle start

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

namespace MyMod
{
    public class BattleStartBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            // StartBattleAction → OnStartBattle → CampaignEvents.BattleStarted
            CampaignEvents.BattleStarted.AddNonSerializedListener(this, OnBattleStarted);
        }

        public override void SyncData(IDataStore dataStore) { }

        /// <summary>Mirrors EncounterManager.StartRaid…</summary>
        public void RaidVillage(MobileParty raiders, Settlement village)
        {
            if (raiders == null || village == null || !village.IsVillage)
                return;
            StartBattleAction.ApplyStartRaid(raiders, village);
        }

        /// <summary>Mirrors EncounterManager wall assault.</summary>
        public void AssaultWalls(MobileParty besiegers, Settlement fort)
        {
            if (besiegers == null || fort == null || !fort.IsFortification)
                return;
            StartBattleAction.ApplyStartAssaultAgainstWalls(besiegers, fort);
        }

        private void OnBattleStarted(
            PartyBase attacker,
            PartyBase defender,
            object subject,
            bool showNotification)
        {
            // Stats; subject is often Settlement (raid/siege)
            // Aftermath captives/destroy/ownership: TakePrisoner / DestroyParty / ChangeOwnerOfSettlement
            // Do not StartBattle the same pair again here
        }
    }
}
```

### Example 3: Sally out (needs garrison)

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

namespace MyMod
{
    public static class SallyHelper
    {
        public static void TrySallyOut(Settlement fort, MobileParty enemyOutside)
        {
            if (fort?.Town?.GarrisonParty == null || enemyOutside == null)
                return;

            StartBattleAction.ApplyStartSallyOut(fort, enemyOutside);
        }
    }
}
```

### Example 4: Wrong vs right

```csharp
// Wrong: bypass EncounterModel — do not assign MapEventSide by hand
// or construct MapEvent directly.

// Right: field fight
StartBattleAction.ApplyStartBattle(attacker, defender);

// Right: complex contact / join existing fight
StartBattleAction.Apply(attacker.Party, defender.Party);
```

## Cross-version notes

- Four dedicated entries + generic `Apply` stay stable across 1.3.x/1.4.5; 1.4.5 inference includes naval `BattleTypes` such as Blockade.
- Public event: `CampaignEvents.BattleStarted` (dispatcher `OnStartBattle`).
- URL: `campaign-ext/StartBattleAction`.

## ↑ Parent Navigation

- [Actions — campaign world-change family](../actions-index) — **parent of this page**
- [campaign-ext area](../)
- [API index](../)
- [Crash and save boundaries §2](../../../architecture/crash-boundaries)
- [Doc contract](../../../architecture/doc-contract)

## ↔ Sibling Navigation

| Page | Relationship |
|------|--------------|
| [MapEvent](../../campaign/MapEvent) | Map battle entity |
| [TakePrisonerAction](../TakePrisonerAction) | Post-battle captives |
| [DestroyPartyAction](../DestroyPartyAction) | Post-battle wipe cleanup |
| [KillCharacterAction](../KillCharacterAction) | Post-battle death |
| [DeclareWarAction](../DeclareWarAction) | Diplomatic war ≠ MapEvent |
| [EnterSettlementAction](../EnterSettlementAction) | In-town / enter-exit and encounter interrupt |
| [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction) | Ownership after capture |
| [PartyBase](../../campaign/PartyBase) · [MobileParty](../../campaign/MobileParty) · [Settlement](../../campaign/Settlement) | Combatants |
| [CampaignEvents](../CampaignEvents) | `BattleStarted` |

## See also

- [Campaign system guide](../../../guide/campaign-system)
- [Mission system](../../../guide/mission-system) — Agent layer after you enter the battlefield
- [Developer task roadmap](../../../architecture/developer-roadmap)
