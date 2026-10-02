---
title: "DestructableComponent"
description: "DestructableComponent：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject、IFocusable；公开成员 43 个（方法 23、属性 6、字段 8）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/DestructableComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DestructableComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DestructableComponent : SynchedMissionObject, IFocusable`
**File:** `TaleWorlds.MountAndBlade/DestructableComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DestructableComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DestructableComponent.cs。它是一个 public 类，实现/继承 SynchedMissionObject、IFocusable，继承链为 DestructableComponent → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 43 个：23 方法、6 属性、8 字段、3 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DestructableComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 DestructableComponent → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 23/43，属性 6/43），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DestructableComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnNextDestructionState;` | `public event Action OnNextDestructionState;` | 事件 |
| `OnDestroyed;` | `public event DestructableComponent.OnHitTakenAndDestroyedDelegate OnDestroyed;` | 事件 |
| `OnHitTaken;` | `public event DestructableComponent.OnHitTakenAndDestroyedDelegate OnHitTaken;` | 事件 |
| `HitPoint` | `public float HitPoint` | 属性 |
| `FocusableObjectType` | `public FocusableObjectType FocusableObjectType` | 属性 |
| `IsFocusable` | `public virtual bool IsFocusable` | 属性 |
| `IsDestroyed` | `public bool IsDestroyed` | 属性 |
| `CurrentState` | `public GameEntity CurrentState` | 属性 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `DestructableComponent` | `protected DestructableComponent()` | 构造函数 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetOriginalState` | `public WeakGameEntity GetOriginalState(WeakGameEntity parent)` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | 方法 |
| `OnMissionReset` | `protected internal override void OnMissionReset()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `TriggerOnHit` | `public void TriggerOnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior)` | 方法 |
| `OnHit` | `protected internal override bool OnHit(Agent attackerAgent, int inflictedDamage, Vec3 impactPosition, Vec3 impactDirection, in MissionWeapon weapon, int affectorWeaponSlotOrMissileIndex, ScriptComponentBehavior attackerScriptComponentBehavior, out bool reportDamage, out float modifiedDamage, out float fireDamage, out float modifiedFireDamage)` | 方法 |
| `BurstHeavyHitParticles` | `public void BurstHeavyHitParticles()` | 方法 |
| `SetDestructionLevel` | `public void SetDestructionLevel(int state, int forcedId, float blowMagnitude, Vec3 blowPosition, Vec3 blowDirection, bool noEffects = false)` | 方法 |
| `MovesEntity` | `protected internal override bool MovesEntity()` | 方法 |
| `PreDestroy` | `public void PreDestroy()` | 方法 |
| `WriteToNetwork` | `public override void WriteToNetwork()` | 方法 |
| `AddStuckMissile` | `public override void AddStuckMissile(GameEntity missileEntity)` | 方法 |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | 方法 |
| `OnFocusGain` | `public void OnFocusGain(Agent userAgent)` | 方法 |
| `OnFocusLose` | `public void OnFocusLose(Agent userAgent)` | 方法 |
| `GetInfoTextForBeingNotInteractable` | `public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `GetDescriptionText` | `public TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `CleanStateTag` | `public const string CleanStateTag` | 字段 |
| `MaxBlowMagnitude` | `public static float MaxBlowMagnitude` | 字段 |
| `CanBeDestroyedInitially` | `public bool CanBeDestroyedInitially` | 字段 |
| `MaxHitPoint` | `public float MaxHitPoint` | 字段 |
| `HeavyHitParticlesThreshold` | `public float HeavyHitParticlesThreshold` | 字段 |
| `ParticleEffectOnDestroy` | `public string ParticleEffectOnDestroy` | 字段 |
| `SoundEffectOnDestroy` | `public string SoundEffectOnDestroy` | 字段 |
| `BattleSide` | `public BattleSideEnum BattleSide` | 字段 |
| `ISynchedMissionObjectReadableRecord` | `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord` | 属性 |
| `OnHitTakenAndDestroyedDelegate` | `public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage);` | 方法 |
| `ISynchedMissionObjectReadableRecord` | `public struct DestructableComponentRecord : ISynchedMissionObjectReadableRecord` | 嵌套类型 |
| `OnHitTakenAndDestroyedDelegate` | `public delegate void OnHitTakenAndDestroyedDelegate(DestructableComponent target, Agent attackerAgent, in MissionWeapon weapon, ScriptComponentBehavior attackerScriptComponentBehavior, int inflictedDamage)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject/)
- [基类/接口 IFocusable](../IFocusable/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
