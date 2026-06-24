<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LogEntry`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class LogEntry`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/LogEntries/LogEntry.cs`

## 概述

`LogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public long Id { get; }` |
| `GameTime` | `public CampaignTime GameTime { get; }` |
| `KeepInHistoryTime` | `public virtual CampaignTime KeepInHistoryTime { get; }` |
| `NotificationType` | `public virtual ChatNotificationType NotificationType { get; }` |

## 主要方法

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry)`

**用途 / Purpose:** 向当前集合/状态中添加 `log entry`。

### AddLogEntry
`public static void AddLogEntry(LogEntry logEntry, CampaignTime gameTime)`

**用途 / Purpose:** 向当前集合/状态中添加 `log entry`。

### GetImportanceForClan
`public virtual ImportanceEnum GetImportanceForClan(Clan clan)`

**用途 / Purpose:** 获取 `importance for clan` 的当前值。

### GetConversationScoreAndComment
`public virtual void GetConversationScoreAndComment(Hero talkTroop, bool findString, out string comment, out ImportanceEnum score)`

**用途 / Purpose:** 获取 `conversation score and comment` 的当前值。

### GetAsRumor
`public virtual int GetAsRumor(Settlement settlement, out TextObject comment)`

**用途 / Purpose:** 获取 `as rumor` 的当前值。

### GetHistoricComment
`public virtual TextObject GetHistoricComment(Hero talkTroop)`

**用途 / Purpose:** 获取 `historic comment` 的当前值。

### AsReasonForEnmity
`public virtual int AsReasonForEnmity(Hero referenceHero1, Hero referenceHero2)`

**用途 / Purpose:** 处理 `as reason for enmity` 相关逻辑。

### GetValueAsPoliticsAbuseOfPower
`public virtual int GetValueAsPoliticsAbuseOfPower(Hero referenceTroop, Hero liege)`

**用途 / Purpose:** 获取 `value as politics abuse of power` 的当前值。

### GetValueAsPoliticsSlightedClan
`public virtual int GetValueAsPoliticsSlightedClan(Hero referenceTroop, Hero liege)`

**用途 / Purpose:** 获取 `value as politics slighted clan` 的当前值。

### GetValueAsPoliticsShowedWeakness
`public virtual int GetValueAsPoliticsShowedWeakness(Hero referenceTroop, Hero liege)`

**用途 / Purpose:** 获取 `value as politics showed weakness` 的当前值。

### IsValid
`public virtual bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomLogEntry();
```

## 参见

- [完整类目录](../catalog)