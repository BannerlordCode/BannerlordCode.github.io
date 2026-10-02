---
title: "SettlementNameplateVM"
description: "SettlementNameplateVM: a public class in SandBox.ViewModelCollection, inheriting NameplateVM; 43 exposed members (17 methods, 21 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs."
---
# SettlementNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateVM : NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs`

## Overview

SettlementNameplateVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs. It is a public class, implementing/inheriting NameplateVM; the inheritance chain is SettlementNameplateVM → NameplateVM → ViewModel. It exposes 43 public/protected members: 17 methods, 21 properties, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate) the module directory; inheritance chain SettlementNameplateVM → NameplateVM → ViewModel. The surface is property-led (properties 21/43, methods 17/43), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement` | property |
| `SettlementTypeEnum` | `public SettlementNameplateVM.Type SettlementTypeEnum` | property |
| `SettlementNameplateVM` | `public SettlementNameplateVM(Settlement settlement, GameEntity entity, Camera mapCamera, Action<CampaignVec2>fastMoveCameraToPosition)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshDynamicProperties` | `public override void RefreshDynamicProperties(bool forceUpdate)` | method |
| `RefreshRelationStatus` | `public override void RefreshRelationStatus()` | method |
| `RefreshPosition` | `public override void RefreshPosition()` | method |
| `RefreshTutorialStatus` | `public override void RefreshTutorialStatus(string newTutorialHighlightElementID)` | method |
| `OnSiegeEventStartedOnSettlement` | `public void OnSiegeEventStartedOnSettlement(SiegeEvent siegeEvent)` | method |
| `OnSiegeEventEndedOnSettlement` | `public void OnSiegeEventEndedOnSettlement(SiegeEvent siegeEvent)` | method |
| `OnMapEventStartedOnSettlement` | `public void OnMapEventStartedOnSettlement(MapEvent mapEvent)` | method |
| `OnMapEventEndedOnSettlement` | `public void OnMapEventEndedOnSettlement()` | method |
| `OnRebelliousClanFormed` | `public void OnRebelliousClanFormed(Clan clan)` | method |
| `OnRebelliousClanDisbanded` | `public void OnRebelliousClanDisbanded(Clan clan)` | method |
| `UpdateNameplateMT` | `public void UpdateNameplateMT(Vec3 cameraPosition)` | method |
| `RefreshBindValues` | `public void RefreshBindValues()` | method |
| `ExecuteTrack` | `public void ExecuteTrack()` | method |
| `ExecuteSetCameraPosition` | `public void ExecuteSetCameraPosition()` | method |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | method |
| `SettlementNotifications` | `public SettlementNameplateNotificationsVM SettlementNotifications` | property |
| `SettlementParties` | `public SettlementNameplatePartyMarkersVM SettlementParties` | property |
| `SettlementEvents` | `public SettlementNameplateEventsVM SettlementEvents` | property |
| `Relation` | `public int Relation` | property |
| `MapEventVisualType` | `public int MapEventVisualType` | property |
| `WSign` | `public int WSign` | property |
| `WPos` | `public float WPos` | property |
| `Banner` | `public BannerImageIdentifierVM Banner` | property |
| `Name` | `public string Name` | property |
| `IsTracked` | `public bool IsTracked` | property |
| `IsInside` | `public bool IsInside` | property |
| `IsInRange` | `public bool IsInRange` | property |
| `HasPort` | `public bool HasPort` | property |
| `PortLevel` | `public int PortLevel` | property |
| `SettlementType` | `public int SettlementType` | property |
| `Type` | `public enum Type` | property |
| `RelationType` | `public enum RelationType` | property |
| `IssueTypes` | `public enum IssueTypes` | property |
| `MainQuestTypes` | `public enum MainQuestTypes` | property |
| `Type` | `public enum Type` | nested type |
| `RelationType` | `public enum RelationType` | nested type |
| `IssueTypes` | `public enum IssueTypes` | nested type |
| `MainQuestTypes` | `public enum MainQuestTypes` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface NameplateVM](../NameplateVM)
- [same namespace NameplateVM](../NameplateVM)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM)
- [same namespace PartyNameplateVM](../PartyNameplateVM)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
