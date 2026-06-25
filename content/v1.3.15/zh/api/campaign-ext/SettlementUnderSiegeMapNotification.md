---
title: "SettlementUnderSiegeMapNotification"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementUnderSiegeMapNotification`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementUnderSiegeMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementUnderSiegeMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/SettlementUnderSiegeMapNotification.cs`

## 概述

`SettlementUnderSiegeMapNotification` 位于 `TaleWorlds.CampaignSystem.MapNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |
| `BesiegerParty` | `public MobileParty BesiegerParty { get; }` |
| `BesiegedSettlement` | `public Settlement BesiegedSettlement { get; }` |

## 使用示例

```csharp
var value = new SettlementUnderSiegeMapNotification();
```

## 参见

- [完整类目录](../catalog)