---
title: "AgentLastHitInfo"
description: "A nested struct inside Agent remembering who landed the last blow and whether that blow may still be overridden — five seconds of grace, and no public accessor."
---

# AgentLastHitInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct AgentLastHitInfo` — nested inside `Agent`
**Base:** value type — no reference base, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs` (declared at line 39, inside the `Agent` class)

## One-line responsibility

It is the "who hit me last, and am I still allowed to change my mind about it" record for a single agent — the state behind animation-swap and reaction overrides.

## Mental model

**This type is declared `public` but is not reachable.** That is the single most important fact on the page, and it is verifiable rather than inferred. `Agent` holds it in `private AgentLastHitInfo _lastHitInfo;` at `Agent.cs:596`, and a whole-tree search for `LastHitInfo` returns exactly three hits: the struct declaration, that private field, and the `default(AgentLastHitInfo)` reset at `Agent.cs:1579`. There is **no public property, no public field, no getter, and no external caller** anywhere in the 1.4.5 tree. You cannot get an instance of it from an `Agent`, and nothing outside `Agent` reads it.

That makes it an honest "read the source, not the API" page: the members below are real and their semantics are clear, but writing mod code against them is not possible. Anything you build on top of this shape has to re-implement it.

What the type does is small and precise. Two auto-properties record the blow — `LastBlowOwnerId` and `LastBlowAttackType` — both `{ get; private set; }`, so they are written only through `RegisterLastBlow`. The interesting member is `CanOverrideBlow`, a computed property with a hard-coded five-second window:

```csharp
public bool CanOverrideBlow
{
    get
    {
        if (LastBlowOwnerId >= 0)
        {
            return _lastBlowTimer.ElapsedTime <= 5f;
        }
        return false;
    }
}
```

Two things to notice. The `-1` sentinel: `LastBlowOwnerId` defaults to `-1` in `Initialize()`, so "nobody has hit me" and "someone with a negative index did" are the same value, and the guard treats both as "no override available". And the `5f` is a magic number inside the getter — there is no constant for it, and no setter to change it. The window opens when `RegisterLastBlow` resets the timer and closes five seconds later.

The timer field is `private BasicMissionTimer _lastBlowTimer` — a **class**, not a struct. That matters for the value-copy question: copying an `AgentLastHitInfo` copies the struct, and the copied struct's `_lastBlowTimer` still points at the *same* timer object. So a copy does not get an independent clock. Meanwhile `RegisterLastBlow` and `Initialize` mutate that shared timer through the copy, which means `Initialize` on a copy resets the original's timer. That is the value-semantics hazard specific to this type, and it is different from the usual "struct copies are independent" rule — because the struct holds a reference.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `LastBlowOwnerId` | `public int LastBlowOwnerId { get; private set; }` | The agent index of whoever landed the last blow, or `-1` for "no blow recorded". `private set` means `RegisterLastBlow` is the only writer. Note it is an **index**, not a reference, so it goes stale when agents are removed — the same class of problem as the proximity-map cursor. |
| `LastBlowAttackType` | `public AgentAttackType LastBlowAttackType { get; private set; }` | How that blow was delivered, from the `AgentAttackType` enum. Also `private set`, also written only by `RegisterLastBlow`, and also defaulted in `Initialize` to `AgentAttackType.Standard`. |
| `CanOverrideBlow` | `public bool CanOverrideBlow { get; }` | The computed decision: true only when a blow was recorded (`LastBlowOwnerId >= 0`) **and** the elapsed time is within `5f`. The window is a hard-coded literal in the getter with no named constant and no configuration surface, so it cannot be tuned from outside `Agent`. |
| `Initialize` | `public void Initialize()` | Resets the record to `LastBlowOwnerId = -1`, `LastBlowAttackType = AgentAttackType.Standard`, and installs a fresh `BasicMissionTimer`. Called on `Agent` during setup and again at `Agent.cs:1579` via a `default(AgentLastHitInfo)` reset. |
| `RegisterLastBlow` | `public void RegisterLastBlow(int ownerId, AgentAttackType attackType)` | Records a hit: resets the timer, sets the owner index, sets the attack type. **Resetting the timer is what opens the five-second override window** — so registering a second blow *shortens* the remaining time for the first, it does not stack. |
| `_lastBlowTimer` | `private BasicMissionTimer _lastBlowTimer` | The clock behind `CanOverrideBlow`, and the reason this struct's copy semantics are unusual: `BasicMissionTimer` is a **class**, so every copy of an `AgentLastHitInfo` shares one timer. |

## Dead members and traps

The inventory reports `_lastBlowTimer` with 0 call sites; it actually has 3 live references. A tool blind spot, not a dead member.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `_lastBlowTimer` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs:41 | 0 | 3 times (3 lines) | MEASURED | Hit timer: recreated at :63, `Reset()` at :68, and tested via `ElapsedTime <= 5f` at :53 for post-hit protection. A bare field read is not call-shaped, so the tool scores it 0. |

## Real example

The pattern this struct implements, rebuilt on public API — because the struct itself is unreachable:

```csharp
public class MyLastHitTracker
{
    private readonly BasicMissionTimer _timer = new BasicMissionTimer();
    private int _ownerId = -1;
    private AgentAttackType _attackType = AgentAttackType.Standard;

    public bool CanOverride
    {
        get
        {
            if (this._ownerId >= 0)
            {
                return this._timer.ElapsedTime <= 5f;
            }

            return false;
        }
    }

    public void RegisterLastBlow(int ownerId, AgentAttackType attackType)
    {
        this._timer.Reset();
        this._ownerId = ownerId;
        this._attackType = attackType;
    }
}
```

That is a faithful reimplementation of `AgentLastHitInfo`'s logic in a form you can actually use — same `-1` sentinel, same `5f` window, same timer reset on registration.

Observing the same information from the outside, using only public agent API:

```csharp
public class MyHitObserver : MissionLogic
{
    public override void OnAgentHit(
        Agent affectedAgent,
        Agent affectorAgent,
        in MissionWeapon affectorWeapon,
        in Blow blow,
        in AttackCollisionData attackCollisionData)
    {
        BasicMissionTimer timer = new BasicMissionTimer();
        timer.Reset();

        Debug.Print(
            "agent " + affectedAgent.Index + " hit by " + affectorAgent.Index +
            " as " + blow.AttackType + " for " + attackCollisionData.InflictedDamage,
            0);

        bool withinWindow = timer.ElapsedTime <= 5f;
        Debug.Print("override window still open = " + withinWindow, 0);
    }
}
```

Read `blow.AttackType` and `attackCollisionData.InflictedDamage` here rather than reaching for `AgentLastHitInfo` — the blow itself already carries the information the struct records.

## Risks and boundaries

1. **Declared `public`, entirely unreachable.** `Agent._lastHitInfo` is `private`, and a whole-tree search for `LastHitInfo` yields only the declaration, that field, and one `default(...)` reset. There is no public accessor and no external consumer, so no mod can read or write this state. Reimplement the logic instead, as the first example does.
2. **It is nested inside `Agent`.** The declaration sits at `Agent.cs:39`, inside the `sealed class Agent`. `Agent` itself is `sealed`, so there is no subclass angle either.
3. **Copy semantics are not the usual ones.** The struct holds a `BasicMissionTimer`, which is a **class**. Copying an `AgentLastHitInfo` copies the reference, so a copy and its source share one clock — `Initialize` on the copy resets the original's timer. Do not assume independence.
4. **The five-second window is a literal.** `5f` appears inside the `CanOverrideBlow` getter with no named constant and no configuration surface. Nothing outside `Agent` can widen or narrow it.
5. **`LastBlowOwnerId` is an index, not a reference.** It goes stale when agents are removed from the mission. Treat it as "the index that was hit at the time" rather than a live handle.
6. **`-1` conflates two states.** "No blow recorded" and "a blow from a negative owner index" are indistinguishable, and both make `CanOverrideBlow` return `false`.
7. **Registering a second blow shortens the first one's window.** `RegisterLastBlow` resets a single timer, so the override window is measured from the most recent hit, not accumulated.
8. **`AgentAttackType.Standard` is the default.** `Initialize` sets it, so a fresh record has a meaningful-looking attack type rather than an unset marker — do not read it as evidence a blow occurred; check `LastBlowOwnerId >= 0` for that.

## Dependencies

- **Host:** [`Agent`](../../mission/Agent) is the only owner; the field is private and the class is `sealed`.
- **Enum:** [`AgentAttackType`](../../core-extra/AgentAttackType) supplies the `Standard` default and the value type of `LastBlowAttackType`.
- **Timer:** [`BasicMissionTimer`](../BasicMissionTimer) is the `BasicMissionTimer` class behind the five-second window; being a class is what makes this struct's copy semantics unusual.
- **Blow data:** [`Blow`](../Blow) carries `AttackType`, `OwnerId`, and `InflictedDamage` on the public side — the same information this struct mirrors internally.
- **Collision data:** [`AttackCollisionData`](../AttackCollisionData) supplies the damage figures observed in the same callback.
- **Callback entry:** [`MissionBehavior`](../../mission/MissionBehavior) `OnAgentHit` is the public hook from which blow information can be observed.
- Bucket home: [mission-ext API section](../)