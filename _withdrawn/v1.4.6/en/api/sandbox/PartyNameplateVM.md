---
title: "PartyNameplateVM"
description: "PartyNameplateVM: a public class in SandBox.ViewModelCollection.Nameplate, inheriting NameplateVM; 42 exposed members (10 methods, 18 properties, 13 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PartyNameplateVM : NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PartyNameplateVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs. It is a public class, implementing/inheriting NameplateVM; the inheritance chain is PartyNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 42 public/protected members: 10 methods, 18 properties, 13 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyNameplateVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate`, inheritance chain PartyNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 18/42, methods 10/42), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/PartyNameplateVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Party` | `public MobileParty Party` | property |
| `PartyNameplateVM` | `public PartyNameplateVM()` | constructor |
| `InitializeWith` | `public void InitializeWith(MobileParty party, Camera mapCamera)` | method |
| `Clear` | `public virtual void Clear()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RegisterEvents` | `public void RegisterEvents()` | method |
| `UnregisterEvents` | `public void UnregisterEvents()` | method |
| `RefreshDynamicProperties` | `public override void RefreshDynamicProperties(bool forceUpdate)` | method |
| `RefreshPosition` | `public override void RefreshPosition()` | method |
| `RefreshTutorialStatus` | `public override void RefreshTutorialStatus(string newTutorialHighlightElementID)` | method |
| `DetermineIsVisibleOnMap` | `public void DetermineIsVisibleOnMap()` | method |
| `RefreshBinding` | `public virtual void RefreshBinding()` | method |
| `HeadPosition` | `public Vec2 HeadPosition` | property |
| `Count` | `public string Count` | property |
| `Prisoner` | `public string Prisoner` | property |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |
| `Wounded` | `public string Wounded` | property |
| `ExtraInfoText` | `public string ExtraInfoText` | property |
| `MovementSpeedText` | `public string MovementSpeedText` | property |
| `FullName` | `public string FullName` | property |
| `IsInArmy` | `public bool IsInArmy` | property |
| `IsInSettlement` | `public bool IsInSettlement` | property |
| `IsDisorganized` | `public bool IsDisorganized` | property |
| `IsCurrentlyAtSea` | `public bool IsCurrentlyAtSea` | property |
| `IsArmy` | `public bool IsArmy` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `IsHigh` | `public bool IsHigh` | property |
| `ShouldShowFullName` | `public bool ShouldShowFullName` | property |
| `PartyBanner` | `public BannerImageIdentifierVM PartyBanner` | property |
| `PositiveIndicator` | `public static string PositiveIndicator` | field |
| `PositiveArmyIndicator` | `public static string PositiveArmyIndicator` | field |
| `NegativeIndicator` | `public static string NegativeIndicator` | field |
| `NegativeArmyIndicator` | `public static string NegativeArmyIndicator` | field |
| `NeutralIndicator` | `public static string NeutralIndicator` | field |
| `NeutralArmyIndicator` | `public static string NeutralArmyIndicator` | field |
| `MainPartyIndicator` | `public static string MainPartyIndicator` | field |
| `MainPartyArmyIndicator` | `public static string MainPartyArmyIndicator` | field |
| `AllianceIndicator` | `public static string AllianceIndicator` | field |
| `AllianceArmyIndicator` | `public static string AllianceArmyIndicator` | field |
| `_latestPrisonerAmount` | `protected int _latestPrisonerAmount` | field |
| `_latestWoundedAmount` | `protected int _latestWoundedAmount` | field |
| `_latestTotalCount` | `protected int _latestTotalCount` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NameplateVM](../NameplateVM/)
- [same namespace NameplateVM](../NameplateVM/)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM/)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
- [same namespace SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM/)
