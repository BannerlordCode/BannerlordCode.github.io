---
title: "DeploymentPoint"
description: "DeploymentPoint: a public class in TaleWorlds.MountAndBlade, inheriting SynchedMissionObject; 34 exposed members (17 methods, 9 properties, 3 fields). Source: TaleWorlds.MountAndBlade/DeploymentPoint.cs."
---
# DeploymentPoint

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DeploymentPoint : SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/DeploymentPoint.cs`

## Overview

DeploymentPoint lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DeploymentPoint.cs. It is a public class, implementing/inheriting SynchedMissionObject; the inheritance chain is DeploymentPoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 34 public/protected members: 17 methods, 9 properties, 3 fields, 3 events, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentPoint is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DeploymentPoint → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 17/34, properties 9/34), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DeploymentPoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SynchedMissionObject>OnDeploymentStateChanged;` | `public event Action<DeploymentPoint, SynchedMissionObject>OnDeploymentStateChanged;` | event |
| `Action` | `public event Action<DeploymentPoint>OnDeploymentPointTypeDetermined;` | event |
| `Action` | `public event Action<DeploymentPoint>OnDeployOrDisband;` | event |
| `DeploymentTargetPosition` | `public Vec3 DeploymentTargetPosition` | property |
| `AssociatedWallSegment` | `public WallSegment AssociatedWallSegment` | property |
| `IEnumerable` | `public IEnumerable<SynchedMissionObject>DeployableWeapons` | property |
| `IsDeployed` | `public bool IsDeployed` | property |
| `DeployedWeapon` | `public SynchedMissionObject DeployedWeapon` | property |
| `DisbandedWeapon` | `public SynchedMissionObject DisbandedWeapon` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `GetDeploymentOrigin` | `public Vec3 GetDeploymentOrigin()` | method |
| `GetDeploymentPointState` | `public DeploymentPoint.DeploymentPointState GetDeploymentPointState()` | method |
| `GetDeploymentPointType` | `public DeploymentPoint.DeploymentPointType GetDeploymentPointType()` | method |
| `List` | `public List<SiegeLadder>GetAssociatedSiegeLadders()` | method |
| `MBList` | `public MBList<SynchedMissionObject>GetWeaponsUnder()` | method |
| `IEnumerable` | `public IEnumerable<SpawnerBase>GetSpawnersForEditor()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `Deploy` | `public void Deploy(Type t)` | method |
| `Deploy` | `public void Deploy(SiegeWeapon s)` | method |
| `Disband` | `public ScriptComponentBehavior Disband()` | method |
| `IEnumerable` | `public IEnumerable<Type>DeployableWeaponTypes` | property |
| `Hide` | `public void Hide()` | method |
| `Show` | `public void Show()` | method |
| `ToggleWeaponVisibility` | `public void ToggleWeaponVisibility(bool visible, SynchedMissionObject weapon)` | method |
| `HideAllWeapons` | `public void HideAllWeapons()` | method |
| `Side` | `public BattleSideEnum Side` | field |
| `Radius` | `public float Radius` | field |
| `SiegeWeaponTag` | `public string SiegeWeaponTag` | field |
| `DeploymentPointType` | `public enum DeploymentPointType` | property |
| `DeploymentPointState` | `public enum DeploymentPointState` | property |
| `DeploymentPointType` | `public enum DeploymentPointType` | nested type |
| `DeploymentPointState` | `public enum DeploymentPointState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SynchedMissionObject](../SynchedMissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
