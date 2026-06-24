<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JoinKingdomSceneNotificationItem`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JoinKingdomSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JoinKingdomSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/JoinKingdomSceneNotificationItem.cs`

## 概述

`JoinKingdomSceneNotificationItem` 位于 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NewMemberClan` | `public Clan NewMemberClan { get; }` |
| `KingdomToUse` | `public Kingdom KingdomToUse { get; }` |
| `SceneID` | `public override string SceneID { get; }` |
| `RelevantContext` | `public override SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## 主要方法

### GetBanners
`public override Banner GetBanners()`

**用途 / Purpose:** 获取 `banners` 的当前值。

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**用途 / Purpose:** 获取 `scene notification characters` 的当前值。

## 使用示例

```csharp
var value = new JoinKingdomSceneNotificationItem();
value.GetBanners();
```

## 参见

- [完整类目录](../catalog)