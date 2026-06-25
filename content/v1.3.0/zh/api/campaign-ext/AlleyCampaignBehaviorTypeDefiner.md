---
title: "AlleyCampaignBehaviorTypeDefiner"
description: "AlleyCampaignBehaviorTypeDefiner 的自动生成类参考。"
---
# AlleyCampaignBehaviorTypeDefiner

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class AlleyCampaignBehaviorTypeDefiner : SaveableTypeDefiner`
**Base:** `SaveableTypeDefiner`
**File:** `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`

## 概述

`AlleyCampaignBehaviorTypeDefiner` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 使用示例

```csharp
// 从对应子系统 API 获取实例
AlleyCampaignBehaviorTypeDefiner instance = ...;
```

## 参见

- [本区域目录](../)