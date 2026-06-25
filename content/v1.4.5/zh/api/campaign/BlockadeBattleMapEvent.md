---
title: "BlockadeBattleMapEvent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BlockadeBattleMapEvent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BlockadeBattleMapEvent

**Namespace:** TaleWorlds.CampaignSystem.MapEvents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BlockadeBattleMapEvent : MapEventComponent`
**Base:** `MapEventComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/BlockadeBattleMapEvent.cs`

## 概述

`BlockadeBattleMapEvent` 位于 `TaleWorlds.CampaignSystem.MapEvents`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.MapEvents` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateBlockadeBattleMapEvent
`public static BlockadeBattleMapEvent CreateBlockadeBattleMapEvent(PartyBase attackerParty, PartyBase besiegerParty, bool isSallyOut)`

**用途 / Purpose:** 创建一个 `blockade battle map event` 实例或对象。

## 使用示例

```csharp
BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, besiegerParty, false);
```

## 参见

- [完整类目录](../catalog)