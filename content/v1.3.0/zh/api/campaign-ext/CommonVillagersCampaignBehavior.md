---
title: "CommonVillagersCampaignBehavior"
description: "CommonVillagersCampaignBehavior 的自动生成类参考。"
---
# CommonVillagersCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonVillagersCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/CommonVillagersCampaignBehavior.cs`

## 概述

`CommonVillagersCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CommonVillagersCampaignBehavior 实例
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CommonVillagersCampaignBehavior 实例
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** 在 session launched 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonVillagersCampaignBehavior 实例
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** 在 settlement owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonVillagersCampaignBehavior 实例
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### conversation_town_or_village_escort_complete_on_condition
`public bool conversation_town_or_village_escort_complete_on_condition()`

**用途 / Purpose:** 调用 conversation_town_or_village_escort_complete_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 CommonVillagersCampaignBehavior 实例
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
var result = commonVillagersCampaignBehavior.conversation_town_or_village_escort_complete_on_condition();
```

### conversation_town_or_village_escort_complete_on_consequence
`public void conversation_town_or_village_escort_complete_on_consequence()`

**用途 / Purpose:** 调用 conversation_town_or_village_escort_complete_on_consequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 CommonVillagersCampaignBehavior 实例
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.conversation_town_or_village_escort_complete_on_consequence();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)