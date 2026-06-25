---
title: "SettlementNameplateVM"
description: "SettlementNameplateVM 的自动生成类参考。"
---
# SettlementNameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplateVM : NameplateVM`
**Base:** `NameplateVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate/SettlementNameplateVM.cs`

## 概述

`SettlementNameplateVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `SettlementTypeEnum` | `public Type SettlementTypeEnum { get; }` |
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
| `PortLevel` | `public int PortLevel { get; set; }` |
| `SettlementType` | `public int SettlementType { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnFinalize();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshValues();
```

### RefreshDynamicProperties
`public override void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** **用途 / Purpose:** 使 dynamic properties 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshDynamicProperties(false);
```

### RefreshRelationStatus
`public override void RefreshRelationStatus()`

**用途 / Purpose:** **用途 / Purpose:** 使 relation status 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshRelationStatus();
```

### RefreshPosition
`public override void RefreshPosition()`

**用途 / Purpose:** **用途 / Purpose:** 使 position 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshPosition();
```

### RefreshTutorialStatus
`public override void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**用途 / Purpose:** **用途 / Purpose:** 使 tutorial status 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshTutorialStatus("example");
```

### OnSiegeEventStartedOnSettlement
`public void OnSiegeEventStartedOnSettlement(SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege event started on settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnSiegeEventStartedOnSettlement(siegeEvent);
```

### OnSiegeEventEndedOnSettlement
`public void OnSiegeEventEndedOnSettlement(SiegeEvent siegeEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 siege event ended on settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnSiegeEventEndedOnSettlement(siegeEvent);
```

### OnMapEventStartedOnSettlement
`public void OnMapEventStartedOnSettlement(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 在 map event started on settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnMapEventStartedOnSettlement(mapEvent);
```

### OnMapEventEndedOnSettlement
`public void OnMapEventEndedOnSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 在 map event ended on settlement 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnMapEventEndedOnSettlement();
```

### OnRebelliousClanFormed
`public void OnRebelliousClanFormed(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 在 rebellious clan formed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnRebelliousClanFormed(clan);
```

### OnRebelliousClanDisbanded
`public void OnRebelliousClanDisbanded(Clan clan)`

**用途 / Purpose:** **用途 / Purpose:** 在 rebellious clan disbanded 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnRebelliousClanDisbanded(clan);
```

### UpdateNameplateMT
`public void UpdateNameplateMT(Vec3 cameraPosition)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 nameplate m t 的最新表示。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.UpdateNameplateMT(cameraPosition);
```

### RefreshBindValues
`public void RefreshBindValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 bind values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.RefreshBindValues();
```

### ExecuteTrack
`public void ExecuteTrack()`

**用途 / Purpose:** **用途 / Purpose:** 执行 track 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.ExecuteTrack();
```

### ExecuteSetCameraPosition
`public void ExecuteSetCameraPosition()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set camera position 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.ExecuteSetCameraPosition();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open encyclopedia 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateVM 实例
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.ExecuteOpenEncyclopedia();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementNameplateVM settlementNameplateVM = ...;
settlementNameplateVM.OnFinalize();
```

## 参见

- [本区域目录](../)