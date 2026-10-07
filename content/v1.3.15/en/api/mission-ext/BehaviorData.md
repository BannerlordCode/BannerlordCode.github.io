---
title: "BehaviorData"
description: "Auto-generated class reference for BehaviorData."
---
# BehaviorData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FormationAI.cs`

## Overview

`BehaviorData` is a nested public class inside `FormationAI` (`FormationAI.cs:400`) — a bare record with
four public fields and nothing else: no constructor, no properties, no methods. `FormationAI` keeps a
private `List<BehaviorData> _specialBehaviorData` (`FormationAI.cs:385`) of them, and that list is how a
formation AI runs "special" behaviors that compete with its ordinary weighted behavior set.

The five fields are:

| field | default | role |
|---|---|---|
| `Behavior` | `null` | the `BehaviorComponent` this entry stands for |
| `Preference` | `1f` | multiplier applied to the component's own AI weight |
| `Weight` | `0f` | cached result of `GetAIWeight() * Preference` for this tick |
| `IsPreprocessed` | `false` | one-entry-per-tick latch, see below |
| `IsRemovedOnCancel` | `false` | declared, never read in 1.3.15 |

You normally never construct one yourself. `FormationAI.AddSpecialBehavior(BehaviorComponent, bool)`
appends an entry with **only** `Behavior` assigned (`FormationAI.cs:161`,
`FormationAI.cs:167`) and returns `void`, so `Preference` always ends up at its `1f` default. The two
stock callers are in `TacticSallyOutDefense`, both with `purgePreviousSpecialBehaviors: true` so a re-run of
the tactic replaces the previous registration (`TacticSallyOutDefense.cs:134`).

## Mental Model

Read it as the AI's *scoreboard row*, not as a behavior you can steer. The boundaries:

- **`Preference` is unreachable from outside.** Because `AddSpecialBehavior` returns void and sets only
  `Behavior`, and because `_specialBehaviorData` is private, there is no supported way to register a
  special behavior with a preference other than `1f`. The field exists and is multiplied into the weight
  (`FormationAI.cs:230`), but only code inside `FormationAI` can ever write it.
- **Exactly one entry is re-scored per tick, round-robin.** `PreprocessBehaviors` takes
  `FirstOrDefault(sd => !sd.IsPreprocessed)` (`FormationAI.cs:221`), ticks that component, writes
  `Weight = GetAIWeight() * Preference` and sets `IsPreprocessed = true` — and then the caller
  *immediately resets every entry back to false* in the next statement
  (`FormationAI.cs:269`). So `Weight` for any given entry is a snapshot from the last tick on which that
  entry was the selected one, not a current value.
- **`Weight` only changes behaviour in one narrow case.** It is consulted only when the winning ordinary
  behavior is a `BehaviorStop` and at least one special has `Weight > 0`; the highest-weighted special then
  replaces the stop (`FormationAI.cs:273`). A special behavior with `Weight == 0` never overrides anything.
- **Re-weighting is skipped entirely when there is no enemy.** `PreprocessBehaviors` is guarded by
  `HasAnyEnemyFormationsThatIsNotEmpty()` (`FormationAI.cs:219`), so an idle formation leaves every
  `Weight` frozen at `0`.
- **`IsRemovedOnCancel` is dead in this version.** It is declared at `FormationAI.cs:412` and read nowhere
  in the 1.3.15 tree — nothing removes a special behavior when an order is cancelled.

## How to use

**Getting one.** Do not instantiate it. Register the *behavior component* with the formation's
`FormationAI` and let `AddSpecialBehavior` create the entry; reach the component back with
`GetBehavior<T>` if you need to configure it.

**Typical use** — the stock pattern: weight the component, configure it, then register it as special.

```csharp
public class MyFlankTactic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Formation cavalry = Mission.Current.Teams[BattleSideEnum.Defender].Formation;
        if (cavalry == null || !cavalry.IsAIControlled) { return; }

        // Formation.cs:281 - each Formation owns exactly one FormationAI.
        BehaviorProtectFlank flank = cavalry.AI.SetBehaviorWeight<BehaviorProtectFlank>(1f);
        flank.FlankSide = FormationAI.BehaviorSide.Left;   // enum at FormationAI.cs:419

        // true == purge any previously registered special behavior, then append a fresh
        // BehaviorData whose Preference stays at its 1f default (FormationAI.cs:161).
        cavalry.AI.AddSpecialBehavior(flank, true);
    }
}
```

**The mistake that bites.** Reading `Weight` to decide whether your special behavior is currently worth
running. It is not a live score: it is written at most once per AI tick, only for the single entry the
round-robin selected that tick, and it is not recomputed while the formation has no visible enemy
(`FormationAI.cs:219`). A behavior that has just been registered has `Weight == 0`, and a behavior whose
turn has not come round reads as zero even while it is doing its job — so gating on it looks like the
behavior never activates at all.



## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
BehaviorData entry = ...;
```

## See Also

- [Area Index](../)
- [BattleEndLogic](../BattleEndLogic)
- [CommonAIComponent](../CommonAIComponent)
- [AgentHumanAILogic](../AgentHumanAILogic)
- [中文页面](../../../../zh/api/mission-ext/BehaviorData)