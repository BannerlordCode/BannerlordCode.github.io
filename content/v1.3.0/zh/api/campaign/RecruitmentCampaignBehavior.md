---
title: "RecruitmentCampaignBehavior"
description: "RecruitmentCampaignBehavior 的自动生成类参考。"
---
# RecruitmentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/RecruitmentCampaignBehavior.cs`

## 概述

`RecruitmentCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.SyncData(dataStore);
```

### GetMercenaryData
`public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「mercenary data」 的结果。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
var result = recruitmentCampaignBehavior.GetMercenaryData(town);
```

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**用途 / Purpose:** 处理与 「hourly tick party」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.HourlyTickParty(mobileParty);
```

### OnBeforeSettlementEntered
`public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**用途 / Purpose:** 在 「before settlement entered」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.OnBeforeSettlementEntered(mobileParty, settlement, hero);
```

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**用途 / Purpose:** 处理与 「change mercenary type」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.ChangeMercenaryType(troopType, 0);
```

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**用途 / Purpose:** 处理与 「change mercenary count」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.ChangeMercenaryCount(0);
```

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**用途 / Purpose:** 判断当前对象是否已经持有 「available mercenary」。

```csharp
// 先通过子系统 API 拿到 RecruitmentCampaignBehavior 实例
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
var result = recruitmentCampaignBehavior.HasAvailableMercenary(occupation.NotAssigned);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)