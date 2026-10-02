---
title: "DestructableComponent"
description: "DestructableComponent: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject, IFocusable; 43 exposed members (23 methods, 6 properties, 8 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DestructableComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DestructableComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DestructableComponent : SynchedMissionObject, IFocusable`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DestructableComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DestructableComponent.cs. It is a public class, implementing/inheriting SynchedMissionObject, IFocusable; the inheritance chain is DestructableComponent → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 43 public/protected members: 23 methods, 6 properties, 8 fields, 3 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DestructableComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DestructableComponent → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 23/43, properties 6/43), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DestructableComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnNextDestructionState;` | `public event Action OnNextDestructionState;` | event |
| `OnDestroyed;` | `public event DestructableComponent.OnHitTakenAndDestroyedDelegate OnDestroyed;` | event |
| `OnHitTaken;` | `public event DestructableComponent.OnHitTakenAndDestroyedDelegate OnHitTaken;` | event |
| `HitPoint` | `public float HitPoint` | property |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType` | property |
| `IsFocusable` | `public virtual bool IsFocusable` | property |
| `IsDestroyed` | `public bool IsDestroyed` | property |
| `CurrentState` | `public GameEntity CurrentState` | property |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `DestructableComponent` | `protected DestructableComponent()` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetOriginalState` | `public WeakGameEntity GetOriginalState(WeakGameEntity parent)` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | method |
| `Reset` | `public void Reset()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `TriggerOnHit` | `public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)` | method |
| `OnHit` | `protected internal override bool OnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior, out bool reportDamage, out float modifiedDamage, out float fireDamage, out float modifiedFireDamage)` | method |
| `BurstHeavyHitParticles` | `public void BurstHeavyHitParticles()` | method |
| `SetDestructionLevel` | `public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)` | method |
| `MovesEntity` | `protected internal override bool MovesEntity()` | method |
| `PreDestroy` | `public void PreDestroy()` | method |
| `WriteToNetwork` | `public override void WriteToNetwork()` | method |
| `AddStuckMissile` | `public override void AddStuckMissile(GameEntity missileEntity)` | method |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | method |
| `OnFocusGain` | `public void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `public void OnFocusLose(Agent userAgent)` | method |
| `GetInfoTextForBeingNotInteractable` | `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `GetDescriptionText` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CleanStateTag` | `public const string CleanStateTag` | field |
| `MaxBlowMagnitude` | `public static float MaxBlowMagnitude` | field |
| `CanBeDestroyedInitially` | `public bool CanBeDestroyedInitially` | field |
| `MaxHitPoint` | `public float MaxHitPoint` | field |
| `HeavyHitParticlesThreshold` | `public float HeavyHitParticlesThreshold` | field |
| `ParticleEffectOnDestroy` | `public string ParticleEffectOnDestroy` | field |
| `SoundEffectOnDestroy` | `public string SoundEffectOnDestroy` | field |
| `BattleSide` | `public BattleSideEnum BattleSide` | field |
| `ISynchedMissionObjectReadableRecord` | `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord` | property |
| `OnHitTakenAndDestroyedDelegate` | `public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage);` | method |
| `ISynchedMissionObjectReadableRecord` | `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord` | nested type |
| `OnHitTakenAndDestroyedDelegate` | `public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SynchedMissionObject](../SynchedMissionObject/)
- [base / interface IFocusable](../IFocusable/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
