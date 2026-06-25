---
title: "SettlementNameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementNameplateVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateVM.cs`

## 概述

`SettlementNameplateVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `SettlementNotifications` | `public SettlementNameplateNotificationsVM SettlementNotifications { get; set; }` |
| `SettlementParties` | `public SettlementNameplatePartyMarkersVM SettlementParties { get; set; }` |
| `SettlementEvents` | `public SettlementNameplateEventsVM SettlementEvents { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `MapEventVisualType` | `public int MapEventVisualType { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `WPos` | `public float WPos { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsInside` | `public bool IsInside { get; set; }` |
| `IsInRange` | `public bool IsInRange { get; set; }` |
| `HasPort` | `public bool HasPort { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** 刷新 `dynamic properties` 的显示或缓存。

### RefreshRelationStatus
`public override void RefreshRelationStatus()`

**用途 / Purpose:** 刷新 `relation status` 的显示或缓存。

### RefreshPosition
`public override void RefreshPosition()`

**用途 / Purpose:** 刷新 `position` 的显示或缓存。

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**用途 / Purpose:** 刷新 `tutorial status` 的显示或缓存。

### OnSiegeEventStartedOnSettlement
`public void OnSiegeEventStartedOnSettlement(SiegeEvent siegeEvent)`

**用途 / Purpose:** 当 `siege event started on settlement` 事件触发时调用此方法。

### OnSiegeEventEndedOnSettlement
`public void OnSiegeEventEndedOnSettlement(SiegeEvent siegeEvent)`

**用途 / Purpose:** 当 `siege event ended on settlement` 事件触发时调用此方法。

### OnMapEventStartedOnSettlement
`public void OnMapEventStartedOnSettlement(MapEvent mapEvent)`

**用途 / Purpose:** 当 `map event started on settlement` 事件触发时调用此方法。

### OnMapEventEndedOnSettlement
`public void OnMapEventEndedOnSettlement()`

**用途 / Purpose:** 当 `map event ended on settlement` 事件触发时调用此方法。

### OnRebelliousClanFormed
`public void OnRebelliousClanFormed(Clan clan)`

**用途 / Purpose:** 当 `rebellious clan formed` 事件触发时调用此方法。

### OnRebelliousClanDisbanded
`public void OnRebelliousClanDisbanded(Clan clan)`

**用途 / Purpose:** 当 `rebellious clan disbanded` 事件触发时调用此方法。

### UpdateNameplateMT
`public void UpdateNameplateMT(Vec3 cameraPosition)`

**用途 / Purpose:** 更新 `nameplate m t` 的状态或数据。

### RefreshBindValues
`public void RefreshBindValues()`

**用途 / Purpose:** 刷新 `bind values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### ExecuteTrack
`public void ExecuteTrack()`

**用途 / Purpose:** 执行 `track` 操作或流程。

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**用途 / Purpose:** 执行 `set camera position` 操作或流程。

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** 执行 `open encyclopedia` 操作或流程。

## 使用示例

```csharp
var value = new SettlementNameplateVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)