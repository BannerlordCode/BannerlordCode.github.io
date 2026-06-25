---
title: "VillagerCampaignBehavior"
description: "VillagerCampaignBehavior 的自动生成类参考。"
---
# VillagerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/VillagerCampaignBehavior.cs`

## 概述

`VillagerCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.SyncData(dataStore);
```

### DailyTick
`public void DailyTick()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.DailyTick();
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**用途 / Purpose:** **用途 / Purpose:** 在 session launched 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### taking_food_from_villagers_wait_on_condition
`public bool taking_food_from_villagers_wait_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 taking_food_from_villagers_wait_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
var result = villagerCampaignBehavior.taking_food_from_villagers_wait_on_condition(args);
```

### press_into_service_confirm_on_condition
`public bool press_into_service_confirm_on_condition(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 press_into_service_confirm_on_condition 对应的操作。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
var result = villagerCampaignBehavior.press_into_service_confirm_on_condition(args);
```

### taking_food_from_villagers_wait_on_tick
`public void taking_food_from_villagers_wait_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)`

**用途 / Purpose:** **用途 / Purpose:** 调用 taking_food_from_villagers_wait_on_tick 对应的操作。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.taking_food_from_villagers_wait_on_tick(args, campaignTime);
```

### press_into_service_confirm_on_tick
`public void press_into_service_confirm_on_tick(MenuCallbackArgs args, CampaignTime campaignTime)`

**用途 / Purpose:** **用途 / Purpose:** 调用 press_into_service_confirm_on_tick 对应的操作。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.press_into_service_confirm_on_tick(args, campaignTime);
```

### taking_food_from_villagers_wait_on_consequence
`public void taking_food_from_villagers_wait_on_consequence(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 taking_food_from_villagers_wait_on_consequence 对应的操作。

```csharp
// 先通过子系统 API 拿到 VillagerCampaignBehavior 实例
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.taking_food_from_villagers_wait_on_consequence(args);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VillagerCampaignBehavior villagerCampaignBehavior = ...;
villagerCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)