---
title: "BarberCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BarberCampaignBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BarberCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs`

## 概述

`BarberCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetHaircutIndices
`public int GetHaircutIndices(BasicCharacterObject character)`

**用途 / Purpose:** 获取 `haircut indices` 的当前值。

### GetFacialHairIndices
`public int GetFacialHairIndices(BasicCharacterObject character)`

**用途 / Purpose:** 获取 `facial hair indices` 的当前值。

### GetAvailableStages
`public FaceGeneratorStage GetAvailableStages()`

**用途 / Purpose:** 获取 `available stages` 的当前值。

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 处理 `register events` 相关逻辑。

### SyncData
`public override void SyncData(IDataStore store)`

**用途 / Purpose:** 处理 `sync data` 相关逻辑。

### GetFaceGenFilter
`public IFaceGeneratorCustomFilter GetFaceGenFilter()`

**用途 / Purpose:** 获取 `face gen filter` 的当前值。

## 使用示例

```csharp
var value = new BarberCampaignBehavior();
value.GetHaircutIndices(character);
```

## 参见

- [完整类目录](../catalog)