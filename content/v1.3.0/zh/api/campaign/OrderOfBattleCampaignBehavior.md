---
title: "OrderOfBattleCampaignBehavior"
description: "OrderOfBattleCampaignBehavior 的自动生成类参考。"
---
# OrderOfBattleCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class OrderOfBattleCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/OrderOfBattleCampaignBehavior.cs`

## 概述

`OrderOfBattleCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleCampaignBehavior 实例
OrderOfBattleCampaignBehavior orderOfBattleCampaignBehavior = ...;
orderOfBattleCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleCampaignBehavior 实例
OrderOfBattleCampaignBehavior orderOfBattleCampaignBehavior = ...;
orderOfBattleCampaignBehavior.SyncData(dataStore);
```

### GetFormationDataAtIndex
`public OrderOfBattleCampaignBehavior.OrderOfBattleFormationData GetFormationDataAtIndex(int formationIndex, bool isSiegeBattle)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 formation data at index 的结果。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleCampaignBehavior 实例
OrderOfBattleCampaignBehavior orderOfBattleCampaignBehavior = ...;
var result = orderOfBattleCampaignBehavior.GetFormationDataAtIndex(0, false);
```

### SetFormationInfos
`public void SetFormationInfos(List<OrderOfBattleCampaignBehavior.OrderOfBattleFormationData> formationInfos, bool isSiegeBattle)`

**用途 / Purpose:** **用途 / Purpose:** 为 formation infos 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleCampaignBehavior 实例
OrderOfBattleCampaignBehavior orderOfBattleCampaignBehavior = ...;
orderOfBattleCampaignBehavior.SetFormationInfos(formationInfos, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderOfBattleCampaignBehavior orderOfBattleCampaignBehavior = ...;
orderOfBattleCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)