---
title: "RetirementEncounter"
description: "RetirementEncounter 的自动生成类参考。"
---
# RetirementEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetirementEncounter : LocationEncounter`
**Base:** `LocationEncounter`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/RetirementEncounter.cs`

## 概述

`RetirementEncounter` 位于 `TaleWorlds.CampaignSystem.Encounters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encounters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAndOpenMissionController
`public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 and open mission controller 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 RetirementEncounter 实例
RetirementEncounter retirementEncounter = ...;
var result = retirementEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RetirementEncounter retirementEncounter = ...;
retirementEncounter.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## 参见

- [本区域目录](../)