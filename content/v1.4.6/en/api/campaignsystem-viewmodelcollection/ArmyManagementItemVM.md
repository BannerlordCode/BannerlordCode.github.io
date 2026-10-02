---
title: "ArmyManagementItemVM"
description: "ArmyManagementItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 33 exposed members (10 methods, 22 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs."
---
# ArmyManagementItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs`

## Overview

ArmyManagementItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyManagementItemVM → ViewModel. It exposes 33 public/protected members: 10 methods, 22 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyManagementItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement) the module directory; inheritance chain ArmyManagementItemVM → ViewModel. The surface is property-led (properties 22/33, methods 10/33), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DistInTime` | `public float DistInTime` | property |
| `_distance` | `public float _distance` | property |
| `Clan` | `public Clan Clan` | property |
| `ArmyManagementItemVM` | `public ArmyManagementItemVM(Action<ArmyManagementItemVM>onAddToCart, Action<ArmyManagementItemVM>onRemove, Action<ArmyManagementItemVM>onFocus, MobileParty mobileParty)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `ExecuteSetFocused` | `public void ExecuteSetFocused()` | method |
| `ExecuteSetUnfocused` | `public void ExecuteSetUnfocused()` | method |
| `UpdateEligibility` | `public void UpdateEligibility()` | method |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteBeginClanHint` | `public void ExecuteBeginClanHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `ExecuteOpenClanEncyclopedia` | `public void ExecuteOpenClanEncyclopedia()` | method |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | property |
| `IsEligible` | `public bool IsEligible` | property |
| `IsInCart` | `public bool IsInCart` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `Strength` | `public int Strength` | property |
| `ShipCount` | `public int ShipCount` | property |
| `HasShip` | `public bool HasShip` | property |
| `DistanceText` | `public string DistanceText` | property |
| `InArmyText` | `public string InArmyText` | property |
| `Cost` | `public int Cost` | property |
| `IsCostRelevant` | `public bool IsCostRelevant` | property |
| `Relation` | `public int Relation` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `LordFace` | `public CharacterImageIdentifierVM LordFace` | property |
| `NameText` | `public string NameText` | property |
| `IsAlreadyWithPlayer` | `public bool IsAlreadyWithPlayer` | property |
| `IsTransferDisabled` | `public bool IsTransferDisabled` | property |
| `LeaderNameText` | `public string LeaderNameText` | property |
| `IsFocused` | `public bool IsFocused` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [same namespace ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)
- [same namespace ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)
- [same namespace ArmyManagementVM](../ArmyManagementVM)
