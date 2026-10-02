---
title: "SettlementNameplateVM"
description: "SettlementNameplateVM：SandBox.ViewModelCollection.Nameplate 的 public 类，继承 NameplateVM；公开成员 43 个（方法 17、属性 21、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateVM : NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SettlementNameplateVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs。它是一个 public 类，实现/继承 NameplateVM，继承链为 SettlementNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 43 个：17 方法、21 属性、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplateVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Nameplate`，继承链 SettlementNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 21/43，方法 17/43），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Settlement` | `public Settlement Settlement` | 属性 |
| `SettlementTypeEnum` | `public SettlementNameplateVM.Type SettlementTypeEnum` | 属性 |
| `SettlementNameplateVM` | `public SettlementNameplateVM(Settlement settlement, GameEntity entity, Camera mapCamera, Action<CampaignVec2>fastMoveCameraToPosition)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `RefreshDynamicProperties` | `public override void RefreshDynamicProperties(bool forceUpdate)` | 方法 |
| `RefreshRelationStatus` | `public override void RefreshRelationStatus()` | 方法 |
| `RefreshPosition` | `public override void RefreshPosition()` | 方法 |
| `RefreshTutorialStatus` | `public override void RefreshTutorialStatus(string newTutorialHighlightElementID)` | 方法 |
| `OnSiegeEventStartedOnSettlement` | `public void OnSiegeEventStartedOnSettlement(SiegeEvent siegeEvent)` | 方法 |
| `OnSiegeEventEndedOnSettlement` | `public void OnSiegeEventEndedOnSettlement(SiegeEvent siegeEvent)` | 方法 |
| `OnMapEventStartedOnSettlement` | `public void OnMapEventStartedOnSettlement(MapEvent mapEvent)` | 方法 |
| `OnMapEventEndedOnSettlement` | `public void OnMapEventEndedOnSettlement()` | 方法 |
| `OnRebelliousClanFormed` | `public void OnRebelliousClanFormed(Clan clan)` | 方法 |
| `OnRebelliousClanDisbanded` | `public void OnRebelliousClanDisbanded(Clan clan)` | 方法 |
| `UpdateNameplateMT` | `public void UpdateNameplateMT(Vec3 cameraPosition)` | 方法 |
| `RefreshBindValues` | `public void RefreshBindValues()` | 方法 |
| `ExecuteTrack` | `public void ExecuteTrack()` | 方法 |
| `ExecuteSetCameraPosition` | `public void ExecuteSetCameraPosition()` | 方法 |
| `ExecuteOpenEncyclopedia` | `public void ExecuteOpenEncyclopedia()` | 方法 |
| `SettlementNotifications` | `public SettlementNameplateNotificationsVM SettlementNotifications` | 属性 |
| `SettlementParties` | `public SettlementNameplatePartyMarkersVM SettlementParties` | 属性 |
| `SettlementEvents` | `public SettlementNameplateEventsVM SettlementEvents` | 属性 |
| `Relation` | `public int Relation` | 属性 |
| `MapEventVisualType` | `public int MapEventVisualType` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `WPos` | `public float WPos` | 属性 |
| `Banner` | `public BannerImageIdentifierVM Banner` | 属性 |
| `Name` | `public string Name` | 属性 |
| `IsTracked` | `public bool IsTracked` | 属性 |
| `IsInside` | `public bool IsInside` | 属性 |
| `IsInRange` | `public bool IsInRange` | 属性 |
| `HasPort` | `public bool HasPort` | 属性 |
| `PortLevel` | `public int PortLevel` | 属性 |
| `SettlementType` | `public int SettlementType` | 属性 |
| `Type` | `public enum Type` | 属性 |
| `RelationType` | `public enum RelationType` | 属性 |
| `IssueTypes` | `public enum IssueTypes` | 属性 |
| `MainQuestTypes` | `public enum MainQuestTypes` | 属性 |
| `Type` | `public enum Type` | 嵌套类型 |
| `RelationType` | `public enum RelationType` | 嵌套类型 |
| `IssueTypes` | `public enum IssueTypes` | 嵌套类型 |
| `MainQuestTypes` | `public enum MainQuestTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 NameplateVM](../NameplateVM/)
- [同命名空间 NameplateVM](../NameplateVM/)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM/)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM/)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
