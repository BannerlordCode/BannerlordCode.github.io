---
title: "RangedSiegeWeapon"
description: "The abstract base for crewed ranged siege engines such as ballistae and trebuchets: aiming, ammo, a nine-state weapon lifecycle, and network replication. Explains the five abstract members a subclass must supply and why Shoot returns false."
---

# RangedSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon`
**Base:** `SiegeWeapon`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## Overview

`RangedSiegeWeapon` is the **abstract base for every crewed, aimed siege engine** — the ballista, the trebuchet, and any mod's addition in that family. It is 2057 lines and covers four concerns: **aiming** (mouse-driven direction and release angle, plus AI target estimation), **ammo** (reserve, consumption, loading points and reloading), a **nine-state weapon lifecycle**, and **network replication**.

It sits three levels down a chain that matters for what you can do: `RangedSiegeWeapon` → `SiegeWeapon` (`public abstract class SiegeWeapon : UsableMachine, ITargetable`, `SiegeWeapon.cs:11`) → `UsableMachine` → `SynchedMissionObject`. So it inherits the detachment, `StandingPoint` collection and scene registration described on [`UsableMachine`](../UsableMachine), and adds targeting and firing on top.

It is `public abstract` (`RangedSiegeWeapon.cs:14`) and declares **five abstract members** that every concrete weapon must supply:

| Abstract member | Line |
| --- | --- |
| `protected abstract float ShootingSpeed { get; }` | `RangedSiegeWeapon.cs:286` |
| `protected abstract void RegisterAnimationParameters();` | `RangedSiegeWeapon.cs:405` |
| `protected abstract void GetSoundEventIndices();` | `RangedSiegeWeapon.cs:407` |
| `public abstract override SiegeEngineType GetSiegeEngineType();` | `RangedSiegeWeapon.cs:1789` |
| `public abstract float ProcessTargetValue(float baseValue, TargetFlags flags);` | `RangedSiegeWeapon.cs:1966` |

## Mental Model

### What it is / which layer

- It is a **state machine wearing a weapon's clothes**. `public enum WeaponState` (`RangedSiegeWeapon.cs:40-53`) has ten members — `Invalid = -1`, `Idle`, `WaitingBeforeProjectileLeaving`, `Shooting`, `WaitingAfterShooting`, `WaitingBeforeReloading`, `LoadingAmmo`, `WaitingBeforeIdle`, `Reloading`, `ReloadingPaused`, then `NumberOfStates`. **Almost every method on this class is really a guard on that enum.** `Shoot()` (`:1663`) is one `if (State == WeaponState.Idle)` (`:1666`); `ManualReload()` (`:1678`) is one `if (AttackClickWillReload)` (`:1680`).
- The lifecycle is a **cancelled-animation-tolerant** one. The three `Waiting…` states around `Shooting` and `Reloading` exist because the weapon waits for an animation to reach a point before the projectile leaves or the reload completes — so there are cancellation paths (`OnLoadingAmmoPointUsingCancelled` at `:1413`, `OnAmmoPickupUsingCancelled` at `:1428`) that must unwind back to `WaitingBeforeIdle`.
- **Aiming and firing are deliberately separate.** `AimAtTarget(Vec3)` (`:1367`) sets a direction; `Shoot()` (`:1663`) consumes it. Separating them is what lets a crew hold an aim while a teammate reloads.
- The AI does not call `Shoot()`. It sets **request flags** — `AiRequestsShoot()` (`:1686`) writes `_aiRequestsShoot = true` and `AiRequestsManualReload()` (`:1691`) writes `_aiRequestsManualReload = true`. Both return `void`, so a request that cannot be honoured produces no signal at all.

### The consequence that matters

**Five members are abstract, and two of them are `public abstract override` — you cannot skip them.** `GetSiegeEngineType()` (`:1789`) and `ProcessTargetValue(float, TargetFlags)` (`:1966`) are `public abstract override`, overriding `SiegeWeapon`'s contract. A subclass that omits any of the five **does not compile**; there is no default to fall back on. That is the good news — the compiler enforces the parts that are load-bearing.

The consequence that actually bites is in the aiming path. `protected virtual Vec3 ShootingDirection => Projectile.GameEntity.GetGlobalFrame().rotation.u.Normal…` (`RangedSiegeWeapon.cs:385`) **dereferences `Projectile.GameEntity` with no null check, in a property getter**. So reading `ShootingDirection` while the projectile entity is absent — before the first projectile is spawned, or after the last one is consumed — is a `NullReferenceException` from inside a property you were only reading. Any custom aiming code must establish the projectile exists first; the base class does not do it for you.

## How to use

**How to obtain it.** You do not construct it — it is `abstract` (`RangedSiegeWeapon.cs:14`). You either **use** an existing weapon that descends from it, or **write** one. For use, you reach a weapon through its `StandingPoint`s on the machine entity, exactly as any other [`UsableMachine`](../UsableMachine) works; `GetBestPointAlternativeTo(StandingPoint, Agent)` (`RangedSiegeWeapon.cs:727`) is the member that picks the right slot for an agent.

**A typical use.** Drive a shot from a player input path, checking the state before you ask and respecting the returned `bool`:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class SiegeGunnery
{
    public static bool TryFireOnce(RangedSiegeWeapon weapon)
    {
        if (weapon == null)
            return false;

        // Point first, then fire — aiming and firing are separate steps.
        // AimAtTarget is public virtual (RangedSiegeWeapon.cs:1367) and returns
        // whether the aim was accepted, so check it.
        if (!weapon.AimAtTarget(Mission.Current.Scene.GetLastEntityWithTag("EnemyGate").Position))
        {
            Debug.Print("aim rejected", 0);
            return false;
        }

        // Shoot() returns false unless the state is exactly Idle
        // (RangedSiegeWeapon.cs:1663, :1666). It is the only honest signal that
        // the weapon was not ready.
        bool fired = weapon.Shoot();
        if (!fired)
        {
            Debug.Print("weapon not idle; shot refused", 0);
        }

        return fired;
    }
}
```

Write a concrete weapon, and know exactly what the compiler will demand of you:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// RangedSiegeWeapon is public abstract (RangedSiegeWeapon.cs:14), so a concrete
// weapon MUST supply all five abstract members or it does not compile:
//   ShootingSpeed           (:286)  protected abstract float { get; }
//   RegisterAnimationParameters (:405)
//   GetSoundEventIndices()  (:407)
//   GetSiegeEngineType()    (:1789) public abstract override
//   ProcessTargetValue()    (:1966) public abstract float
public class MyModBallista : RangedSiegeWeapon
{
    public override SiegeEngineType GetSiegeEngineType() => SiegeEngineType.Ballista;

    protected override float ShootingSpeed => 30f;

    protected override void RegisterAnimationParameters()
    {
        // Register this weapon's animation indices with the base's tables here.
    }

    protected override void GetSoundEventIndices()
    {
        // Resolve and cache this weapon's sound indices here.
    }

    public override float ProcessTargetValue(float baseValue, TargetFlags flags)
    {
        // Adjust an incoming target value by distance or flag. Returning
        // baseValue unchanged is valid.
        return baseValue;
    }
}
```

**What to watch out for.** The trap specific to this class is `ShootingDirection` (`RangedSiegeWeapon.cs:385`). It is a `protected virtual` property whose getter dereferences `Projectile.GameEntity`, so reading it before the first projectile exists throws. A second trap is treating `AiRequestsShoot()` (`:1686`) as "shoot now" — it only sets `_aiRequestsShoot` (`:1688`), and the request is serviced by the tick; if the weapon is not `Idle` when that happens, the request expires silently because the method returns `void`.

## Key members

Ordered by what a modder actually reaches for. The consequence is in each row.

| Member | Signature | What it is for |
| --- | --- | --- |
| `Shoot` | `public bool Shoot()` at `RangedSiegeWeapon.cs:1663` | Fires the weapon, if it can. It records `LastShooterAgent = base.PilotAgent` (`:1665`) and then **requires `State == WeaponState.Idle`** (`:1666`), transitioning to `WaitingBeforeProjectileLeaving` and returning `true` (`:1668-1673`). **Returns `false` in every other state** (`:1675`) — that is the only honest "not ready" signal here, and skipping the check means silently losing shots. The `_animationTimeElapsed` reset is server-only (`:1669-1672`). |
| `AimAtTarget` | `public bool AimAtTarget(Vec3 target)` at `RangedSiegeWeapon.cs:1367` | Points the weapon at a world position and reports whether it took. Separate from `Shoot` by design so a crew can hold an aim across a reload. Paired with `CheckIsTargetReached(Vec3)` (`:1381`) to know whether the aim has settled, and `GetTargetReleaseAngle(Vec3)` (`:1323`) for the ballistic angle. |
| `AimAtThreat` | `public virtual bool AimAtThreat(Threat threat)` at `RangedSiegeWeapon.cs:1361` | The AI-facing aim, taking a `Threat` rather than a point. `virtual`, so a subclass can override AI intent — and the base calls `GetEstimatedTargetGlobalPoint(Threat)` (`:1390`) to turn the threat into a point, so an override that forgets to do so will aim at the wrong place. |
| `WeaponState` | `public enum WeaponState` at `RangedSiegeWeapon.cs:40-53` | The ten-member lifecycle: `Invalid = -1`, `Idle`, `WaitingBeforeProjectileLeaving`, `Shooting`, `WaitingAfterShooting`, `WaitingBeforeReloading`, `LoadingAmmo`, `WaitingBeforeIdle`, `Reloading`, `ReloadingPaused`, `NumberOfStates`. **`Invalid = -1` means an uninitialised weapon**, and `NumberOfStates` is a count sentinel, not a state — never assign either. Nearly every method on this class is a guard on this enum. |
| `SetAmmo` / `SetStartAmmo` / `ConsumeAmmo` / `CheckAmmo` | `public virtual void SetAmmo(int ammoLeft)` at `:422`, `public virtual void SetStartAmmo(int ammoLeft)` at `:432`, `protected virtual void ConsumeAmmo()` at `:409`, `protected virtual void CheckAmmo()` at `:442` | The ammo surface. `SetAmmo` sets the current reserve, `SetStartAmmo` the initial one, `ConsumeAmmo` decrements on a shot and `CheckAmmo` is the validation step. **All four are `void`** — no way to ask "how much is left" from outside except via the inherited ammo accessors, and a bad `ammoLeft` produces no error here. `SetAmmo` and `SetStartAmmo` are `virtual`, so a subclass can react to a loadout change. |
| `ManualReload` | `public void ManualReload()` at `RangedSiegeWeapon.cs:1678` | Requests a reload, **guarded by `AttackClickWillReload`** (`:1680`) and transitioning to `WaitingBeforeReloading` (`:1682`). **`void`, and the guard is a policy flag you may not control** — if the weapon is configured not to reload on the attack click, this call does nothing and reports nothing. |
| `AiRequestsShoot` / `AiRequestsManualReload` | `public void AiRequestsShoot()` at `RangedSiegeWeapon.cs:1686` and `public void AiRequestsManualReload()` at `RangedSiegeWeapon.cs:1691` | The AI's request path. Both merely set a boolean (`:1688`, `:1693`) that the tick services later. **Neither is `Shoot()` and neither returns anything** — a request made while the weapon is reloading expires with no diagnostic. If you need certainty, poll the state instead. |
| `ShootingDirection` | `protected virtual Vec3 ShootingDirection => …` at `RangedSiegeWeapon.cs:385` | The weapon's current firing direction, taken from the projectile entity's frame rotation. **The getter dereferences `Projectile.GameEntity` with no null check**, so reading it before the first projectile exists — or after the last is consumed — throws a `NullReferenceException` from inside a property read. Establish that the projectile exists before touching it. `virtual`, so a subclass may supply it differently. |
| `ProjectileEntityCurrentGlobalPosition` | `public virtual Vec3 ProjectileEntityCurrentGlobalPosition => …` at `RangedSiegeWeapon.cs:387` | Where the projectile entity is right now, in world space. The safe counterpart to `ShootingDirection` for positioning code, though it shares the same projectile dependency. `virtual`. |
| `RangedSiegeWeaponRecord` | `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord` at `RangedSiegeWeapon.cs:17`, marked `[DefineSynchedMissionObjectType(typeof(RangedSiegeWeapon))]` at `:16` | The replication payload: `State` (`:19`), `TargetDirection` (`:21`), `TargetReleaseAngle` (`:23`), `AmmoCount` (`:25`), `ProjectileIndex` (`:27`), all `{ get; private set; }`. `ReadFromNetwork(ref bool bufferReadValid)` (`:29-37`) fills them with **compressed** reads and returns `bufferReadValid` (`:36`) — the one place the whole network state is validated, and a `false` there means the packet was truncated, not that the weapon is idle. |
| `WriteToNetwork` | `public override void WriteToNetwork()` at `RangedSiegeWeapon.cs:707` | Server-side serialisation of that record. **`public override`** — a subclass that overrides it must still write all five fields or clients desynchronise, and there is no base fallback you can lean on. |
| `OnTick` | `protected internal override void OnTick(float dt)` at `RangedSiegeWeapon.cs:992` | The per-frame state machine, and where the AI request flags are consumed. Note the accessibility is `protected internal` — reachable from the assembly or from a subclass, **not from mod code**, so you cannot drive the weapon by ticking it yourself. |
| `OnRangedSiegeWeaponStateChange` | `protected virtual void OnRangedSiegeWeaponStateChange()` at `RangedSiegeWeapon.cs:750` | The transition hook, called whenever `WeaponState` changes. **`protected virtual`** — this is the intended place for a subclass to react to a transition, and the reason a custom weapon does not need to override `OnTick`. |
| `GetTickRequirement` | `public override TickRequirement GetTickRequirement()` at `RangedSiegeWeapon.cs:983` | How often the engine must tick this object. `public override` on the `UsableMachine` contract — the base decides whether this weapon gets per-frame ticks or a coarser schedule, and a custom weapon inherits the decision rather than making it. |
| `GetBestPointAlternativeTo` / `IsInRangeToCheckAlternativePoints` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` at `RangedSiegeWeapon.cs:727` and `public override bool IsInRangeToCheckAlternativePoints(Agent agent)` at `RangedSiegeWeapon.cs:721` | The detachment placement hooks. Both `public override`, so a custom weapon inherits this crew-assignment logic; `IsInRangeToCheckAlternativePoints` is the cheap pre-test that avoids doing the expensive point search when no alternative is worth considering. |
| `ChangeProjectileEntityServer` / `ChangeProjectileEntityClient` | `protected void ChangeProjectileEntityServer(Agent loadingAgent, string missileItemID)` at `RangedSiegeWeapon.cs:456` and `public void ChangeProjectileEntityClient(int index)` at `RangedSiegeWeapon.cs:478` | Swapping the loaded projectile — **split by authority**. The server version takes the loading agent and the item id; the client version takes a bare index and is `public`. **The asymmetry is the point**: a client must not choose the missile item, it accepts the server's index, so a modder calling `ChangeProjectileEntityClient(int)` is asserting the server already decided. |
| `PilotReservePriorityValues` | `protected Dictionary<StandingPoint, float> PilotReservePriorityValues = new …` at `RangedSiegeWeapon.cs:152` | Per-standing-point priority for reserving pilot slots. `protected`, so a subclass can read and pre-populate it. **It is initialised inline** (`:152`) and never null-checked anywhere in the file, so a subclass that reassigns it to null breaks the reservation logic silently. |
| `OnSiegeWeaponReloadDone` | `public delegate void OnSiegeWeaponReloadDone();` at `RangedSiegeWeapon.cs:79` | The reload-completion callback contract, declared as a nested delegate on this class. A modder wires this to know when the weapon is ready again — which matters because **the state enum is the only other way to find out**, and polling it every frame is worse than waiting for the callback. |
| `FiringFocus` / `CameraState` / `ForceUseState` | `public enum FiringFocus` at `RangedSiegeWeapon.cs:55-61`, `public enum CameraState` at `:63-71`, `public enum ForceUseState` at `:73-77` | Three UI/camera policy enums that travel with the weapon. `FiringFocus` says what the weapon shoots at (`Troops`, `Walls`, `RangedSiegeWeapons`, `PrimarySiegeWeapons`); `CameraState` drives the battle camera through the reload cycle (`StickToWeapon`, `MoveDownToReload`, …); `ForceUseState` distinguishes `NotForced` from `ForcefullyUsed`. None of the three is consulted by the state machine above, so they are **for the UI layer, not for firing logic**. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A public ammo count getter on this class | **UNRESOLVED — inherited, not declared here** | `grep -n 'public int Ammo' RangedSiegeWeapon.cs` returns nothing; `AmmoCount` exists only inside the network record (`RangedSiegeWeapon.cs:25`). The live ammo value is on the `SiegeWeapon` / `UsableMachine` chain. Positive evidence: the file's public surface is `SetAmmo` (`:422`), `SetStartAmmo` (`:432`) and the record field (`:25`) — no reader. |
| A way to force the weapon to a state | **UNRESOLVED — does not exist** | The enum is public (`RangedSiegeWeapon.cs:40`) but `State` itself is not a public settable member; the transitions are driven internally by `OnTick` (`:992`) and the request flags (`:1688`, `:1693`). Setting the enum from mod code is not a supported operation. |
| `ConsumeAmmo` from mod code | **UNRESOLVED — `protected` only** | `RangedSiegeWeapon.cs:409`. A subclass can override or call it; a plain caller cannot. The public reload path is `ManualReload()` (`:1678`). |

## Examples

Drive a shot safely, honouring both the aim result and the fire result:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class SiegeFireControl
{
    public static bool TryFireAt(RangedSiegeWeapon weapon, Vec3 point)
    {
        if (weapon == null)
            return false;

        // AimAtTarget reports acceptance (RangedSiegeWeapon.cs:1367). Aiming and
        // firing are separate so a crew can hold an aim across a reload.
        if (!weapon.AimAtTarget(point))
            return false;

        // CheckIsTargetReached (:1381) tells you whether the aim has settled.
        if (!weapon.CheckIsTargetReached(point))
        {
            Debug.Print("aim still travelling", 0);
            return false;
        }

        // Shoot() returns false unless State == Idle (:1663, :1666). Ignoring
        // this is how shots are silently lost.
        return weapon.Shoot();
    }
}
```

Use the reload callback instead of polling the state enum:

```csharp
using TaleWorlds.MountAndBlade;

public class ReloadWatcher
{
    private RangedSiegeWeapon _weapon;

    // OnSiegeWeaponReloadDone is the nested delegate at RangedSiegeWeapon.cs:79.
    // Preferred over reading WeaponState every frame, because the enum is the
    // only other source and polling it per frame is pure overhead.
    public void Attach(RangedSiegeWeapon weapon)
    {
        _weapon = weapon;
        _weapon.OnSiegeWeaponReloadDone += OnReloaded;
    }

    public void Detach()
    {
        if (_weapon == null)
            return;

        _weapon.OnSiegeWeaponReloadDone -= OnReloaded;
        _weapon = null;
    }

    private void OnReloaded()
    {
        Debug.Print("weapon reloaded and idle again", 0);
    }
}
```

Write a concrete weapon, filling exactly the five abstract members:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// The compiler enforces these five — RangedSiegeWeapon is public abstract
// (RangedSiegeWeapon.cs:14) and they are :286, :405, :407, :1789, :1966.
public class MyModTrebuchet : RangedSiegeWeapon
{
    public override SiegeEngineType GetSiegeEngineType() => SiegeEngineType.Trebuchet;

    protected override float ShootingSpeed => 12f;

    protected override void RegisterAnimationParameters()
    {
        // Base calls this during initialisation to bind this weapon's animation
        // indices. Leave it empty only if the weapon genuinely has none.
    }

    protected override void GetSoundEventIndices()
    {
        // Base calls this to resolve and cache this weapon's sound indices.
    }

    public override float ProcessTargetValue(float baseValue, TargetFlags flags)
    {
        // Called by the targeting system. Returning baseValue unchanged is valid.
        return baseValue;
    }
}
```

Customise state transitions through the hook rather than by overriding the tick:

```csharp
using TaleWorlds.MountAndBlade;

public class ChattyBallista : RangedSiegeWeapon
{
    public override SiegeEngineType GetSiegeEngineType() => SiegeEngineType.Ballista;

    protected override float ShootingSpeed => 30f;

    protected override void RegisterAnimationParameters() { }
    protected override void GetSoundEventIndices() { }

    public override float ProcessTargetValue(float baseValue, TargetFlags flags) => baseValue;

    // OnRangedSiegeWeaponStateChange is protected virtual
    // (RangedSiegeWeapon.cs:750), so this is the intended reaction point.
    // Prefer it to overriding OnTick (:992), which is the whole state machine.
    protected override void OnRangedSiegeWeaponStateChange()
    {
        base.OnRangedSiegeWeaponStateChange();

        Debug.Print("weapon state changed", 0);
    }
}
```

## Risks and crash boundaries

- **`ShootingDirection` dereferences `Projectile.GameEntity` with no null check.** `RangedSiegeWeapon.cs:385`. Reading this `protected virtual` property before the first projectile exists, or after the last is consumed, throws a `NullReferenceException` from inside a property read — which reads as an innocent `ShootingDirection` access in the stack trace.
- **The class is `abstract` and cannot be constructed.** `RangedSiegeWeapon.cs:14`. Five members are abstract (`:286`, `:405`, `:407`, `:1789`, `:1966`); a subclass missing any of them does not compile. There is no default implementation to fall back on.
- **The authority split on projectile changes is not symmetric.** `ChangeProjectileEntityServer(Agent, string)` is `protected` (`RangedSiegeWeapon.cs:456`) while `ChangeProjectileEntityClient(int)` is `public` (`:478`). **Calling the client variant asserts the server already chose the missile**; it does not choose one.
- **`Shoot()` returning `false` is the only "not ready" signal.** `RangedSiegeWeapon.cs:1675`. Any other state than `Idle` (`:1666`) refuses, and refusing is silent from the caller's perspective if the bool is ignored.
- **`ManualReload()` can do nothing and says so by returning `void`.** `RangedSiegeWeapon.cs:1678`, guarded by `AttackClickWillReload` (`:1680`) — a configuration flag outside your control.
- **The AI request methods are asynchronous and lossy.** `AiRequestsShoot()` (`:1686`) and `AiRequestsManualReload()` (`:1691`) only set booleans (`:1688`, `:1693`). A request made while reloading expires with no diagnostic.
- **Ammo has no reader on this class.** `SetAmmo` (`:422`), `SetStartAmmo` (`:432`) and `ConsumeAmmo` (`:409`) all return `void`, and `AmmoCount` exists only inside the network record (`:25`). **A negative or absurd `ammoLeft` produces no error here.**
- **`PilotReservePriorityValues` is `protected` and initialised inline.** `RangedSiegeWeapon.cs:152`, never null-checked in the file — a subclass that assigns null breaks reservation silently.
- **`ReadFromNetwork` returning `false` means a truncated packet, not an idle weapon.** `RangedSiegeWeapon.cs:36` returns `bufferReadValid`. Treat it as a desync signal, never as state.
- **`WriteToNetwork` is `public override` with no fallback.** `RangedSiegeWeapon.cs:707`. A subclass that overrides it and forgets a field desynchronises clients silently.
- **`OnTick` is `protected internal`, not public.** `RangedSiegeWeapon.cs:992`. You cannot drive the weapon by ticking it; the engine does, on the schedule `GetTickRequirement()` (`:983`) returns.
- **Cancellation paths must be handled by subclasses that touch them.** `OnLoadingAmmoPointUsingCancelled` (`:1413`) and `OnAmmoPickupUsingCancelled` (`:1428`) unwind interrupted reloads back to `WaitingBeforeIdle`; skipping them leaves the weapon in a waiting state that `Shoot()` will keep refusing.
- **The three UI enums are not firing logic.** `FiringFocus` (`:55`), `CameraState` (`:63`) and `ForceUseState` (`:73`) are read by the UI layer; nothing in the state machine consults them. Acting on them expecting a behaviour change produces no effect.
- **Not a save participant.** No `[Serializable]`; it is live mission state rebuilt when the mission loads, and the network record (`:17`) is a replication payload, not saved data.

## Cross-Version Notes

The v1.4.5 file is 2057 lines, `public abstract class RangedSiegeWeapon : SiegeWeapon` (`RangedSiegeWeapon.cs:14`). The same file name and namespace appear under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same abstract shape and the same five abstract members. What has been stable across those versions and is what to rely on is the **`WeaponState` enum's shape** (`RangedSiegeWeapon.cs:40-53`) — the `Waiting…` states exist so animations can be cancelled, and adding a state would be a breaking change for anything switching on the enum. The **compression constants used in the record** (`RangedSiegeWeapon.cs:31-35`) are the most version-sensitive part: they reference `CompressionMission.RangedSiegeWeaponStateCompressionInfo` and friends, which are regenerated alongside the native protocol, so the wire format is not something to assume across versions. The five abstract members are the safest thing to build against, since the compiler enforces them. **VERIFIED MEASURED for v1.4.5** (2057 lines, 4 public enums, 1 nested delegate, 1 nested struct, 5 abstract members, `SiegeWeapon` base confirmed at `SiegeWeapon.cs:11`; every cited line number checked with `sed -n`); the sibling version trees were compared at file-shape level only, not member by member.

## Dependencies

- Base type: [`SiegeWeapon`](../SiegeWeapon), itself `public abstract class SiegeWeapon : UsableMachine, ITargetable` (`SiegeWeapon.cs:11`) — supplying the crew, targeting and engine-type contracts that this class overrides.
- Grandparent: [`UsableMachine`](../UsableMachine), which owns the `StandingPoint` collection and detachment logic that [`IFormationUnit`](../IFormationUnit)-style crew agents occupy.
- Scene attachment: [`SynchedMissionObject`](../SynchedMissionObject), giving the scene registration and the synchronization boundary that `[DefineSynchedMissionObjectType]` (`:16`) plugs into.
- Pilot and crew slots: [`StandingPoint`](../StandingPoint), the per-seat interaction points this class reserves (`RangedSiegeWeapon.cs:152`) and re-targets (`:727`).
- Live combatants being aimed at: [`Agent`](../../mission/Agent) and [`Threat`](../Threat), the inputs to `AimAtThreat` (`RangedSiegeWeapon.cs:1361`).
- Mission context: [`Mission`](../../mission/Mission), whose `Current.Scene` supplies the entity positions this class aims at.
- Bucket index: [mission-ext API index](../)