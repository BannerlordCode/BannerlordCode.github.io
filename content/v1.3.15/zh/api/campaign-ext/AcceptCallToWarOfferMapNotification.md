---
title: "AcceptCallToWarOfferMapNotification"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AcceptCallToWarOfferMapNotification`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AcceptCallToWarOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AcceptCallToWarOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/AcceptCallToWarOfferMapNotification.cs`

## 概述

`AcceptCallToWarOfferMapNotification` 位于 `TaleWorlds.CampaignSystem.MapNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OfferingKingdom` | `public Kingdom OfferingKingdom { get; }` |
| `KingdomToCallToWarAgainst` | `public Kingdom KingdomToCallToWarAgainst { get; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |

## 主要方法

### IsValid
`public override bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

## 使用示例

```csharp
var value = new AcceptCallToWarOfferMapNotification();
value.IsValid();
```

## 参见

- [完整类目录](../catalog)