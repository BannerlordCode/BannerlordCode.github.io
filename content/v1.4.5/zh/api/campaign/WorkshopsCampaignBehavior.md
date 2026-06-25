---
title: "WorkshopsCampaignBehavior"
description: "WorkshopsCampaignBehavior 的自动生成类参考。"
---
# WorkshopsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WorkshopsCampaignBehavior : CampaignBehaviorBase, IWorkshopWarehouseCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/WorkshopsCampaignBehavior.cs`

## 概述

`WorkshopsCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 WorkshopsCampaignBehavior 实例
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
var result = workshopsCampaignBehavior.ToString();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 WorkshopsCampaignBehavior 实例
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 WorkshopsCampaignBehavior 实例
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.SyncData(dataStore);
```

### GetWarehouseItemRosterWeight
`public float GetWarehouseItemRosterWeight(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 warehouse item roster weight 的结果。

```csharp
// 先通过子系统 API 拿到 WorkshopsCampaignBehavior 实例
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
var result = workshopsCampaignBehavior.GetWarehouseItemRosterWeight(settlement);
```

### TransferWarehouseToPlayerParty
`public void TransferWarehouseToPlayerParty(Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransferWarehouseToPlayerParty 对应的操作。

```csharp
// 先通过子系统 API 拿到 WorkshopsCampaignBehavior 实例
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.TransferWarehouseToPlayerParty(settlement);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WorkshopsCampaignBehavior workshopsCampaignBehavior = ...;
workshopsCampaignBehavior.ToString();
```

## 参见

- [本区域目录](../)