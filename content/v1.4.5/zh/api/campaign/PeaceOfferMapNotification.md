---
title: "PeaceOfferMapNotification"
description: "PeaceOfferMapNotification 的自动生成类参考。"
---
# PeaceOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PeaceOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/PeaceOfferMapNotification.cs`

## 概述

`PeaceOfferMapNotification` 位于 `TaleWorlds.CampaignSystem.MapNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OpponentFaction` | `public IFaction OpponentFaction { get; }` |
| `TributeAmount` | `public int TributeAmount { get; }` |
| `TributeDurationInDays` | `public int TributeDurationInDays { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
PeaceOfferMapNotification instance = ...;
```

## 参见

- [本区域目录](../)