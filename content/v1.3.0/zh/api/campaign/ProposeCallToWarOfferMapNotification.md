---
title: "ProposeCallToWarOfferMapNotification"
description: "ProposeCallToWarOfferMapNotification 的自动生成类参考。"
---
# ProposeCallToWarOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProposeCallToWarOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/ProposeCallToWarOfferMapNotification.cs`

## 概述

`ProposeCallToWarOfferMapNotification` 位于 `TaleWorlds.CampaignSystem.MapNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OfferedKingdom` | `public Kingdom OfferedKingdom { get; }` |
| `KingdomToCallToWarAgainst` | `public Kingdom KingdomToCallToWarAgainst { get; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |

## 主要方法

### IsValid
`public override bool IsValid()`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 ProposeCallToWarOfferMapNotification 实例
ProposeCallToWarOfferMapNotification proposeCallToWarOfferMapNotification = ...;
var result = proposeCallToWarOfferMapNotification.IsValid();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ProposeCallToWarOfferMapNotification proposeCallToWarOfferMapNotification = ...;
proposeCallToWarOfferMapNotification.IsValid();
```

## 参见

- [本区域目录](../)