---
title: "MissionAgentStatusVM"
description: "MissionAgentStatusVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 48 个（方法 14、属性 33、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs。"
---
# MissionAgentStatusVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentStatusVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs`

## 概述

MissionAgentStatusVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MissionAgentStatusVM → ViewModel。public/protected 成员共 48 个：14 方法、33 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionAgentStatusVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 MissionAgentStatusVM → ViewModel。成员构成以属性为主（属性 33/48，方法 14/48），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInDeployement` | `public bool IsInDeployement` | 属性 |
| `MissionAgentStatusVM` | `public MissionAgentStatusVM(Mission mission, Camera missionCamera, Func<float>getCameraToggleProgress)` | 构造函数 |
| `InitializeMainAgentPropterties` | `public void InitializeMainAgentPropterties()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `OnEquipmentInteractionViewToggled` | `public void OnEquipmentInteractionViewToggled(bool isActive)` | 方法 |
| `OnMainAgentWeaponChange` | `public void OnMainAgentWeaponChange()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `OnAgentDeleted` | `public void OnAgentDeleted(Agent agent)` | 方法 |
| `OnMainAgentHit` | `public void OnMainAgentHit(int damage, float distance)` | 方法 |
| `OnFocusGained` | `public void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)` | 方法 |
| `OnFocusLost` | `public void OnFocusLost(Agent agent, IFocusable focusableObject)` | 方法 |
| `OnSecondaryFocusGained` | `public void OnSecondaryFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)` | 方法 |
| `OnSecondaryFocusLost` | `public void OnSecondaryFocusLost(Agent agent, IFocusable focusableObject)` | 方法 |
| `OnAgentInteraction` | `public void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | 方法 |
| `TakenDamageController` | `public MissionAgentTakenDamageVM TakenDamageController` | 属性 |
| `InteractionInterface` | `public AgentInteractionInterfaceVM InteractionInterface` | 属性 |
| `AgentHealth` | `public int AgentHealth` | 属性 |
| `AgentHealthMax` | `public int AgentHealthMax` | 属性 |
| `HorseHealth` | `public int HorseHealth` | 属性 |
| `HorseHealthMax` | `public int HorseHealthMax` | 属性 |
| `ShieldHealth` | `public int ShieldHealth` | 属性 |
| `ShieldHealthMax` | `public int ShieldHealthMax` | 属性 |
| `IsPlayerActive` | `public bool IsPlayerActive` | 属性 |
| `IsCombatUIActive` | `public bool IsCombatUIActive` | 属性 |
| `ShowAgentHealthBar` | `public bool ShowAgentHealthBar` | 属性 |
| `ShowMountHealthBar` | `public bool ShowMountHealthBar` | 属性 |
| `ShowShieldHealthBar` | `public bool ShowShieldHealthBar` | 属性 |
| `IsInteractionAvailable` | `public bool IsInteractionAvailable` | 属性 |
| `IsAgentStatusPrioritized` | `public bool IsAgentStatusPrioritized` | 属性 |
| `IsAgentStatusAvailable` | `public bool IsAgentStatusAvailable` | 属性 |
| `CouchLanceState` | `public int CouchLanceState` | 属性 |
| `SpearBraceState` | `public int SpearBraceState` | 属性 |
| `TroopCount` | `public int TroopCount` | 属性 |
| `IsTroopsActive` | `public bool IsTroopsActive` | 属性 |
| `IsGoldActive` | `public bool IsGoldActive` | 属性 |
| `GoldAmount` | `public int GoldAmount` | 属性 |
| `ShowAmmoCount` | `public bool ShowAmmoCount` | 属性 |
| `AmmoCount` | `public int AmmoCount` | 属性 |
| `TroopsAmmoPercentage` | `public float TroopsAmmoPercentage` | 属性 |
| `TroopsAmmoAvailable` | `public bool TroopsAmmoAvailable` | 属性 |
| `IsAmmoCountAlertEnabled` | `public bool IsAmmoCountAlertEnabled` | 属性 |
| `CameraToggleProgress` | `public float CameraToggleProgress` | 属性 |
| `CameraToggleText` | `public string CameraToggleText` | 属性 |
| `OffhandWeapon` | `public ItemImageIdentifierVM OffhandWeapon` | 属性 |
| `PrimaryWeapon` | `public ItemImageIdentifierVM PrimaryWeapon` | 属性 |
| `TakenDamageFeed` | `public MissionAgentDamageFeedVM TakenDamageFeed` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoundaryCrossingVM](../BoundaryCrossingVM)
- [同命名空间 FullScreenNoticeVM](../FullScreenNoticeVM)
- [同命名空间 GameVersionVM](../GameVersionVM)
- [同命名空间 IMissionScreen](../IMissionScreen)
