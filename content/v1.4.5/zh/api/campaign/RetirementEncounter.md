---
title: "RetirementEncounter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RetirementEncounter`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RetirementEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RetirementEncounter : LocationEncounter`
**Base:** `LocationEncounter`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encounters/RetirementEncounter.cs`

## 概述

`RetirementEncounter` 位于 `TaleWorlds.CampaignSystem.Encounters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Encounters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAndOpenMissionController
`public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**用途 / Purpose:** 创建一个 `and open mission controller` 实例或对象。

## 使用示例

```csharp
var value = new RetirementEncounter();
value.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## 参见

- [完整类目录](../catalog)