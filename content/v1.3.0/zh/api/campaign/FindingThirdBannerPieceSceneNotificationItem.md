---
title: "FindingThirdBannerPieceSceneNotificationItem"
description: "FindingThirdBannerPieceSceneNotificationItem 的自动生成类参考。"
---
# FindingThirdBannerPieceSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FindingThirdBannerPieceSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingThirdBannerPieceSceneNotificationItem.cs`

## 概述

`FindingThirdBannerPieceSceneNotificationItem` 位于 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public override string SceneID { get; }` |
| `IsAffirmativeOptionShown` | `public override bool IsAffirmativeOptionShown { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText { get; }` |
| `AffirmativeText` | `public override TextObject AffirmativeText { get; }` |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText { get; }` |

## 主要方法

### GetBanners
`public override Banner GetBanners()`

**用途 / Purpose:** 读取并返回当前对象中 「banners」 的结果。

```csharp
// 先通过子系统 API 拿到 FindingThirdBannerPieceSceneNotificationItem 实例
FindingThirdBannerPieceSceneNotificationItem findingThirdBannerPieceSceneNotificationItem = ...;
var result = findingThirdBannerPieceSceneNotificationItem.GetBanners();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FindingThirdBannerPieceSceneNotificationItem findingThirdBannerPieceSceneNotificationItem = ...;
findingThirdBannerPieceSceneNotificationItem.GetBanners();
```

## 参见

- [本区域目录](../)