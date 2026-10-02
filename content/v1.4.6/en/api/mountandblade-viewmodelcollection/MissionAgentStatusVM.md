---
title: "MissionAgentStatusVM"
description: "MissionAgentStatusVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 48 exposed members (14 methods, 33 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs."
---
# MissionAgentStatusVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentStatusVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs`

## Overview

MissionAgentStatusVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentStatusVM → ViewModel. It exposes 48 public/protected members: 14 methods, 33 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentStatusVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace matching the module directory; inheritance chain MissionAgentStatusVM → ViewModel. The surface is property-led (properties 33/48, methods 14/48), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInDeployement` | `public bool IsInDeployement` | property |
| `MissionAgentStatusVM` | `public MissionAgentStatusVM(Mission mission, Camera missionCamera, Func<float>getCameraToggleProgress)` | constructor |
| `InitializeMainAgentPropterties` | `public void InitializeMainAgentPropterties()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `OnEquipmentInteractionViewToggled` | `public void OnEquipmentInteractionViewToggled(bool isActive)` | method |
| `OnMainAgentWeaponChange` | `public void OnMainAgentWeaponChange()` | method |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | method |
| `OnAgentDeleted` | `public void OnAgentDeleted(Agent agent)` | method |
| `OnMainAgentHit` | `public void OnMainAgentHit(int damage, float distance)` | method |
| `OnFocusGained` | `public void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)` | method |
| `OnFocusLost` | `public void OnFocusLost(Agent agent, IFocusable focusableObject)` | method |
| `OnSecondaryFocusGained` | `public void OnSecondaryFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)` | method |
| `OnSecondaryFocusLost` | `public void OnSecondaryFocusLost(Agent agent, IFocusable focusableObject)` | method |
| `OnAgentInteraction` | `public void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `TakenDamageController` | `public MissionAgentTakenDamageVM TakenDamageController` | property |
| `InteractionInterface` | `public AgentInteractionInterfaceVM InteractionInterface` | property |
| `AgentHealth` | `public int AgentHealth` | property |
| `AgentHealthMax` | `public int AgentHealthMax` | property |
| `HorseHealth` | `public int HorseHealth` | property |
| `HorseHealthMax` | `public int HorseHealthMax` | property |
| `ShieldHealth` | `public int ShieldHealth` | property |
| `ShieldHealthMax` | `public int ShieldHealthMax` | property |
| `IsPlayerActive` | `public bool IsPlayerActive` | property |
| `IsCombatUIActive` | `public bool IsCombatUIActive` | property |
| `ShowAgentHealthBar` | `public bool ShowAgentHealthBar` | property |
| `ShowMountHealthBar` | `public bool ShowMountHealthBar` | property |
| `ShowShieldHealthBar` | `public bool ShowShieldHealthBar` | property |
| `IsInteractionAvailable` | `public bool IsInteractionAvailable` | property |
| `IsAgentStatusPrioritized` | `public bool IsAgentStatusPrioritized` | property |
| `IsAgentStatusAvailable` | `public bool IsAgentStatusAvailable` | property |
| `CouchLanceState` | `public int CouchLanceState` | property |
| `SpearBraceState` | `public int SpearBraceState` | property |
| `TroopCount` | `public int TroopCount` | property |
| `IsTroopsActive` | `public bool IsTroopsActive` | property |
| `IsGoldActive` | `public bool IsGoldActive` | property |
| `GoldAmount` | `public int GoldAmount` | property |
| `ShowAmmoCount` | `public bool ShowAmmoCount` | property |
| `AmmoCount` | `public int AmmoCount` | property |
| `TroopsAmmoPercentage` | `public float TroopsAmmoPercentage` | property |
| `TroopsAmmoAvailable` | `public bool TroopsAmmoAvailable` | property |
| `IsAmmoCountAlertEnabled` | `public bool IsAmmoCountAlertEnabled` | property |
| `CameraToggleProgress` | `public float CameraToggleProgress` | property |
| `CameraToggleText` | `public string CameraToggleText` | property |
| `OffhandWeapon` | `public ItemImageIdentifierVM OffhandWeapon` | property |
| `PrimaryWeapon` | `public ItemImageIdentifierVM PrimaryWeapon` | property |
| `TakenDamageFeed` | `public MissionAgentDamageFeedVM TakenDamageFeed` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoundaryCrossingVM](../BoundaryCrossingVM)
- [same namespace FullScreenNoticeVM](../FullScreenNoticeVM)
- [same namespace GameVersionVM](../GameVersionVM)
- [same namespace IMissionScreen](../IMissionScreen)
