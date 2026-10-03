---
title: "AgentAttackType"
description: "The channel label for a resolved hit: Standard / Kick / Bash / Collision / Count. It does not say which weapon was used but how the blow landed, it is bound straight to native via DefineAsEngineStruct, and native is what writes Blow.AttackType."
---

# AgentAttackType

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum AgentAttackType`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentAttackType.cs`

## Overview

`AgentAttackType` answers one very specific question in hit resolution: **by what mechanism did this blow reach the body?** A kick and a sword swing travel the same damage pipeline, but they play different animations, want different sounds, and differ on whether they count as weapon damage at all — and `AgentAttackType` is the carrier of that distinction. It is **not** the weapon classification (that is [WeaponClass](../WeaponClass)), and **not** the damage nature (that is `DamageTypes`). It only labels the channel.

The role it plays is **a side-channel annotation on a resolved hit**. The data flow is: native decides the hit → fills the `AttackType` field of [Blow](../../mission-ext/Blow) → managed code branches on it. It is effectively **write-out-only from native**: managed code almost never assigns the field (the single exception, `Agent.cs:4658`, *copies* a value rather than producing one). There are three consumers — sound selection (`BlowWeaponRecord.cs:109` and `:142`), kill-ownership rewriting (`Agent.cs:4658`), and, through [KillingBlow](../../mission-ext/KillingBlow), mods.

## Mental Model

Treat it as **a "channel tag" on one hit**, not as "a kind of attack". The test for whether your code needs to look at it is one question: **if this hit came from a kick, would my code break?** If yes, check it. If not — because you only care about damage numbers and body part — don't.

**First, remember it crosses the native boundary.** `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:15` carries `[assembly: DefineAsEngineStruct(typeof(AgentAttackType), "Agent_attack_type", false, "aat", null)]`. That assembly attribute says it is a **managed mirror of an engine-defined struct**, with values written by native. The corollary matters: adding an enum member on the managed side means the engine has never heard of it, so you are limited to the four real values.

**Second, look at when it is written**, because that is the genuinely counter-intuitive part. The only source of `AgentAttackType` is native filling `Blow.AttackType`. Then at `Agent.cs:5459` and `:5463` the `Agent` records that channel into its internal `_lastHitInfo` (via `RegisterLastBlow`, `Agent.cs:66`) and resets a five-second timer (`CanOverrideBlow`, `Agent.cs:48-57`: `_lastHitInfoTimer.ElapsedTime <= 5f` with `LastBlowOwnerId >= 0`). When the target actually dies (`Agent.cs:4656-4659`), if that window has not expired and the victim `IsHuman`, the code **overwrites the fatal blow's `OwnerId` and `AttackType` with the last hitter's**. That explains a long-standing player puzzle: **a killing shot from range, or a fatal collision, gets credited to whoever hit the target within the previous five seconds.** The reason this field is rewritable at all is a side effect of that "last-blow bookkeeping" mechanic.

Four practical conclusions follow. First, **there is no `[Flags]` attribute**, so `Standard | Kick` is meaningless here — the values are 0 and 1, the OR is still 1, and `== Kick` will wrongly report true. Second, **`Count` is a sentinel (value 4), not an attack type.** Its only job is to give native and `Enum.GetValues` a boundary for the member count; the `DefineAsEngineStruct` flag argument is `false` (not a flag set). `foreach (AgentAttackType t in Enum.GetValues(typeof(AgentAttackType)))` will hand you `Count` as well, so an exhaustive `switch` in your own code must skip it explicitly. Third, **`Collision` and `Kick` are not symmetric**: only `Kick` and `Bash` get dedicated managed branches (`BlowWeaponRecord.cs:109` for the kick sound, `:142` for Bash), and `Collision` always falls through to the default punch/impact sound selection. Fourth, **the most reliable mod-facing entry point is [KillingBlow](../../mission-ext/KillingBlow)**: its constructor copies `b.AttackType` into its own public field (`KillingBlow.cs:20`), and `Mission.OnBeforeAgentRemoved` (`Mission.cs:1535`) is a public event you can simply `+=` to. If you want the attack type at the instant of death, that is the sanctioned path — far steadier than reaching for the `Blow` struct.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `Standard` | `Standard = 0` | The default channel: ordinary weapon damage. `Agent._lastHitInfo.Initialize()` (`Agent.cs:62`) initialises `LastBlowAttackType` to it, so **any agent that has never been hit reads back `Standard`**. Do not treat `Standard` as "unknown" — it is simultaneously "normal". |
| `Kick` | `Kick = 1` | Kick attacks. Of the three special values it is the only one with a dedicated managed branch: inside weaponless hits, `BlowWeaponRecord.cs:109` returns `CombatSoundContainer.SoundCodeMissionCombatKick` ahead of every punch/impact branch. Check this one for custom kick sounds or kick damage multipliers. |
| `Bash` | `Bash = 2` | Weapon bash / blocked impact. It has its own branch at `BlowWeaponRecord.cs:142`. The distinction from `Kick` is that a bash still involves a weapon, whereas a kick is bare-handed. |
| `Collision` | `Collision = 3` | Collision-class damage — two horses clashing, a rockfall, a siege engine impact — i.e. **damage nobody actively chose to deliver**. No managed code anywhere compares against it with `==`; it always lands in the default branch. Use it as the "this was not an attack by anyone" marker. |
| `Count` | `Count = 4` | **A sentinel, not an attack type.** It encodes the member count for native and for `Enum.GetValues` boundaries. It never appears on a real hit. Any exhaustive `switch` / `foreach` you write must filter it out explicitly, or "has no type yet" gets treated as a type. |
| (assembly attribute) `DefineAsEngineStruct` | `[assembly: DefineAsEngineStruct(typeof(AgentAttackType), "Agent_attack_type", false, "aat", null)]`, at `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:15` | Binds this enum to the native `Agent_attack_type` struct; the `false` says it is not a flag set, and `"aat"` is its debugger abbreviation. **This is the fastest way to answer "who writes this value?"** — an enum carrying that attribute can only be read on the managed side, never manufactured. |

## Real Example

The sanctioned observation point is `Mission.OnBeforeAgentRemoved`, which hands you attacker, victim, and `KillingBlow` in one call (delegate signature at `Mission.cs:676`):

```csharp
public class MyDeathWatcher : MissionBehavior
{
    public override void OnAfterMissionCreated()
    {
        base.OnAfterMissionCreated();
        // No polling and no battle-start event needed: OnBeforeAgentRemoved is a
        // plain C# event on Mission, so one subscription at creation is enough.
        Mission.Current.OnBeforeAgentRemoved += OnAgentRemoved;
    }
}

private void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
{
    AgentAttackType attackType = killingBlow.AttackType;

    switch (attackType)
    {
        case AgentAttackType.Standard:
            Debug.Print("killed by weapon, owner = " + killingBlow.OwnerId, 0);
            break;
        case AgentAttackType.Kick:
            Debug.Print("killed by a kick", 0);
            break;
        case AgentAttackType.Bash:
            Debug.Print("killed by a bash", 0);
            break;
        case AgentAttackType.Collision:
            Debug.Print("killed by collision, no attacker involved", 0);
            break;
        default:
            // Count never reaches here, but a switch over an enum with no default
            // would silently do nothing for a value added by a future version.
            Debug.Print("unhandled attack type = " + attackType, 0);
            break;
    }
}
```

When you write your own classification helper, exclude `Count` — it is the one member that is not a channel:

```csharp
public static class BlowClassifier
{
    // Returns false for Count: it is a sentinel, not an attack type.
    public static bool IsChannel(AgentAttackType attackType)
    {
        return attackType == AgentAttackType.Kick
            || attackType == AgentAttackType.Bash
            || attackType == AgentAttackType.Collision;
    }

    public static bool IsValid(AgentAttackType attackType)
    {
        return attackType >= AgentAttackType.Standard && attackType < AgentAttackType.Count;
    }
}
```

Compare the three parallel fields on `KillingBlow` (`KillingBlow.cs:19-24`) to see what `AttackType`, `DamageType`, and `WeaponClass` each own:

```csharp
private void ReportKill(Agent victim, Agent killer, AgentState state, KillingBlow killingBlow)
{
    Debug.Print("attack type  = " + killingBlow.AttackType, 0);
    Debug.Print("damage type  = " + killingBlow.DamageType, 0);
    Debug.Print("weapon class = " + killingBlow.WeaponClass, 0);
    Debug.Print("body part    = " + killingBlow.VictimBodyPart, 0);

    // A kick or a bash is a closed-channel hit: it goes through the weapon-record
    // sound path in BlowWeaponRecord.cs:109 / :142, which picks a dedicated
    // combat sound instead of running the generic punch fall-through.
    bool usesDedicatedChannel = killingBlow.AttackType == AgentAttackType.Kick
        || killingBlow.AttackType == AgentAttackType.Bash;

    if (usesDedicatedChannel && killer != null)
    {
        Debug.Print("dedicated impact channel from agent " + killer.Index, 0);
    }
}
```

The `Blow.WeaponRecord` field deserves its own note: in 1.4.5 managed code that `BlowWeaponRecord` appears in exactly **two** places — the field declaration at `Blow.cs:11`, and `MissionNetworkComponent.cs:1698` assigning it `default(BlowWeaponRecord)`. In other words **there is no managed accessor of any kind**, such as a `GetBlowWeaponRecord`; the struct is populated entirely by native. The only thing you can actually get hold of is the already-copied `WeaponClass` int on [KillingBlow](../../mission-ext/KillingBlow).

## Risks and Boundaries

- **Not a flag set.** There is no `[Flags]` in the source, and the third `DefineAsEngineStruct` argument is `false`. `AgentAttackType.Standard | AgentAttackType.Kick` evaluates to `Kick` (because `Standard == 0`), so any combined test built on it is wrong.
- **`Count` poisons exhaustive loops.** `Enum.GetValues(typeof(AgentAttackType))` returns five values, one of which is the sentinel. Any `foreach` + `switch` mapping you write needs an upper bound such as `x < AgentAttackType.Count`, or an explicit `default`.
- **Managed code does not produce this value.** An enum bound by `DefineAsEngineStruct` can only be filled by native. You cannot invent a "custom attack type", nor force a hit onto the Kick channel from managed code — you can only change how the value is **consumed**.
- **By the time of death the value may already have been rewritten.** `Agent.cs:4656-4659` overwrites `b.AttackType` with `_lastHitInfo.LastBlowAttackType` whenever `CanOverrideBlow` holds, with a five-second window. Statistics over "the attack type of the fatal blow" and over "the attack type of the last hit" can legitimately disagree.
- **The rewrite only happens when `IsHuman`.** The `&& IsHuman` condition on the same line means horses and animals dying do not take part in the ownership rewrite, and their `AttackType` keeps its original value.
- **`Collision` has no dedicated managed branch.** It exists mainly for native and the animation layer. Managed code cannot read any special meaning from it beyond "this was not a deliberate attack".
- **Do not confuse it with `DamageTypes` or `WeaponClass`.** The three describe different dimensions of the same hit, and they sit side by side on `KillingBlow`: `AttackType`, `DamageType`, `WeaponClass`.
- **Do not confuse it with `Agent.UnderAttackType`.** The latter (`Agent.cs:423`) describes "which under-attack state an agent is currently in", consumed by `Formation.GetUnderAttackTypeOfUnits`; it has nothing to do with a single blow's channel.

## Cross-Version Notes

`AgentAttackType.cs` is 10 lines and 5 members in 1.4.5, in that version's original-source form (file-scoped namespace, no `// Token:` comments). The 1.3.x / 1.4.6 counterparts are decompiled output and are visibly longer while carrying the same member set. **The thing to actually watch across versions is the native side**: the names bound by `DefineAsEngineStruct` — `"Agent_attack_type"` and the abbreviation `"aat"` — are the contract between managed and native. If a future version adds a member (some new projectile impact, say), the value of `Count` moves with it. A range test written as `attackType < AgentAttackType.Count` therefore stays correct across versions, whereas hard-coding `attackType <= 3` breaks silently on the next release.

## Dependencies

- Data source: native, bound through `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:15`'s `DefineAsEngineStruct`, which fills the hit result
- Landing field: `AttackType` on [Blow](../../mission-ext/Blow) is where the value first appears for a single hit
- Ownership rewrite: `_lastHitInfo` in `TaleWorlds.MountAndBlade/Agent.cs:40-72` maintains the five-second window via `RegisterLastBlow` / `CanOverrideBlow`
- Consumer 1 (audio): `BlowWeaponRecord.GetHitSound` opens dedicated branches for `Kick` and `Bash`
- Consumer 2 (events): [KillingBlow](../../mission-ext/KillingBlow) copies the value in its constructor; `Mission.OnBeforeAgentRemoved` passes it to subscribers
- Easily-confused types: [WeaponClass](../WeaponClass) describes weapon form, `DamageTypes` describes damage nature, `Agent.UnderAttackType` describes the under-attack state
- Bucket index: [core-extra API section](../)