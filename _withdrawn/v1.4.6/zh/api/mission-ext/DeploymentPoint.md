---
title: "DeploymentPoint"
description: "DeploymentPoint：TaleWorlds.MountAndBlade 的 public 类，继承 SynchedMissionObject；公开成员 34 个（方法 17、属性 9、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/DeploymentPoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeploymentPoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DeploymentPoint : SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DeploymentPoint.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

DeploymentPoint 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DeploymentPoint.cs。它是一个 public 类，实现/继承 SynchedMissionObject，继承链为 DeploymentPoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 34 个：17 方法、9 属性、3 字段、3 事件、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DeploymentPoint 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 DeploymentPoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 17/34，属性 9/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DeploymentPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SynchedMissionObject>OnDeploymentStateChanged;` | `public event Action<DeploymentPoint, SynchedMissionObject>OnDeploymentStateChanged;` | 事件 |
| `Action` | `public event Action<DeploymentPoint>OnDeploymentPointTypeDetermined;` | 事件 |
| `Action` | `public event Action<DeploymentPoint>OnDeployOrDisband;` | 事件 |
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition` | 属性 |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment` | 属性 |
| `IEnumerable` | `public IEnumerable<SynchedMissionObject>DeployableWeapons` | 属性 |
| `IsDeployed` | `public bool IsDeployed` | 属性 |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon` | 属性 |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon` | 属性 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `GetDeploymentOrigin` | `public Vec3 GetDeploymentOrigin()` | 方法 |
| `GetDeploymentPointState` | `public DeploymentPoint.DeploymentPointState GetDeploymentPointState()` | 方法 |
| `GetDeploymentPointType` | `public DeploymentPoint.DeploymentPointType GetDeploymentPointType()` | 方法 |
| `List` | `public List<SiegeLadder>GetAssociatedSiegeLadders()` | 方法 |
| `MBList` | `public MBList<SynchedMissionObject>GetWeaponsUnder()` | 方法 |
| `IEnumerable` | `public IEnumerable<SpawnerBase>GetSpawnersForEditor()` | 方法 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `Deploy` | `public void Deploy(Type t)` | 方法 |
| `Deploy` | `public void Deploy(SiegeWeapon s)` | 方法 |
| `Disband` | `public ScriptComponentBehavior Disband()` | 方法 |
| `IEnumerable` | `public IEnumerable<Type>DeployableWeaponTypes` | 属性 |
| `Hide` | `public void Hide()` | 方法 |
| `Show` | `public void Show()` | 方法 |
| `ToggleWeaponVisibility` | `public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)` | 方法 |
| `HideAllWeapons` | `public void HideAllWeapons()` | 方法 |
| `Side` | `public BattleSideEnum Side` | 字段 |
| `Radius` | `public float Radius` | 字段 |
| `SiegeWeaponTag` | `public string SiegeWeaponTag` | 字段 |
| `DeploymentPointType` | `public enum DeploymentPointType` | 属性 |
| `DeploymentPointState` | `public enum DeploymentPointState` | 属性 |
| `DeploymentPointType` | `public enum DeploymentPointType` | 嵌套类型 |
| `DeploymentPointState` | `public enum DeploymentPointState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SynchedMissionObject](../SynchedMissionObject/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
