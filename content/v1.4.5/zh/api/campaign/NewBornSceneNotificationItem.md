---
title: "NewBornSceneNotificationItem"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NewBornSceneNotificationItem`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NewBornSceneNotificationItem

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NewBornSceneNotificationItem : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/NewBornSceneNotificationItem.cs`

## 概述

`NewBornSceneNotificationItem` 位于 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SceneInformationPopupTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaleHero` | `public Hero MaleHero { get; }` |
| `FemaleHero` | `public Hero FemaleHero { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |

## 主要方法

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**用途 / Purpose:** 获取 `scene notification characters` 的当前值。

## 使用示例

```csharp
var value = new NewBornSceneNotificationItem();
value.GetSceneNotificationCharacters();
```

## 参见

- [完整类目录](../catalog)