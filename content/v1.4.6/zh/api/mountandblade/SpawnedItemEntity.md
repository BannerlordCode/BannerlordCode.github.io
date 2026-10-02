---
title: "SpawnedItemEntity"
description: "SpawnedItemEntity：TaleWorlds.MountAndBlade 的 public 类，继承 UsableMissionObject；公开成员 33 个（方法 25、属性 6、字段 1）。源文件 TaleWorlds.MountAndBlade/SpawnedItemEntity.cs。"
---
# SpawnedItemEntity

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnedItemEntity : UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`

## 概述

SpawnedItemEntity 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SpawnedItemEntity.cs。它是一个 public 类，实现/继承 UsableMissionObject，继承链为 SpawnedItemEntity → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 33 个：25 方法、6 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpawnedItemEntity 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 SpawnedItemEntity → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 25/33，属性 6/33），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SpawnedItemEntity.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeaponCopy` | `public MissionWeapon WeaponCopy` | 属性 |
| `HasLifeTime` | `public bool HasLifeTime` | 属性 |
| `IsRemoved` | `public bool IsRemoved` | 属性 |
| `SpawnedOnACorpse` | `public bool SpawnedOnACorpse` | 属性 |
| `GetActionMessage` | `public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)` | 方法 |
| `GetDescriptionMessage` | `public TextObject GetDescriptionMessage(bool fillUp)` | 方法 |
| `LockUserFrames` | `public override bool LockUserFrames` | 属性 |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags` | 属性 |
| `Initialize` | `public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity, bool spawnedOnACorpse = false)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected internal override void OnTick(float dt)` | 方法 |
| `OnTickParallel2` | `protected internal override void OnTickParallel2(float dt)` | 方法 |
| `OnTickOccasionally` | `protected internal override void OnTickOccasionally(float currentFrameDeltaTime)` | 方法 |
| `OnPreInit` | `protected internal override void OnPreInit()` | 方法 |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | 方法 |
| `AttachWeaponToWeapon` | `public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)` | 方法 |
| `IsReadyToBeDeleted` | `public bool IsReadyToBeDeleted()` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | 方法 |
| `OnPhysicsCollision` | `protected internal override void OnPhysicsCollision(ref PhysicsContact contact, WeakGameEntity entity0, WeakGameEntity entity1)` | 方法 |
| `IsStuckMissile` | `public bool IsStuckMissile()` | 方法 |
| `IsQuiverAndNotEmpty` | `public bool IsQuiverAndNotEmpty()` | 方法 |
| `IsBanner` | `public bool IsBanner()` | 方法 |
| `GetInfoTextForBeingNotInteractable` | `public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | 方法 |
| `StopPhysicsAndSetFrameForClient` | `public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)` | 方法 |
| `ConsumeWeaponAmount` | `public void ConsumeWeaponAmount(short consumedAmount)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `RequestDeletionOnNextTick` | `public void RequestDeletionOnNextTick()` | 方法 |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | 方法 |
| `SpawnedItemEntity` | `public SpawnedItemEntity() : base(false)` | 构造函数 |
| `WeaponName` | `public string WeaponName` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsableMissionObject](../UsableMissionObject)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
