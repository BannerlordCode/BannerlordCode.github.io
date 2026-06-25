---
title: "GarrisonTroopsCampaignBehavior"
description: "GarrisonTroopsCampaignBehavior 的自动生成类参考。"
---
# GarrisonTroopsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonTroopsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/GarrisonTroopsCampaignBehavior.cs`

## 概述

`GarrisonTroopsCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetNumberOfTroopsToLeaveForParty
`public int GetNumberOfTroopsToLeaveForParty()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops to leave for party」 的结果。

```csharp
// 先通过子系统 API 拿到 GarrisonTroopsCampaignBehavior 实例
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
var result = garrisonTroopsCampaignBehavior.GetNumberOfTroopsToLeaveForParty();
```

### GetNumberOfTroopsToTakeForParty
`public int GetNumberOfTroopsToTakeForParty()`

**用途 / Purpose:** 读取并返回当前对象中 「number of troops to take for party」 的结果。

```csharp
// 先通过子系统 API 拿到 GarrisonTroopsCampaignBehavior 实例
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
var result = garrisonTroopsCampaignBehavior.GetNumberOfTroopsToTakeForParty();
```

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GarrisonTroopsCampaignBehavior 实例
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
garrisonTroopsCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 GarrisonTroopsCampaignBehavior 实例
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
garrisonTroopsCampaignBehavior.SyncData(dataStore);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GarrisonTroopsCampaignBehavior garrisonTroopsCampaignBehavior = ...;
garrisonTroopsCampaignBehavior.GetNumberOfTroopsToLeaveForParty();
```

## 参见

- [本区域目录](../)