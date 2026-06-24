<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TakePrisonerLogEntry`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TakePrisonerLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TakePrisonerLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/TakePrisonerLogEntry.cs`

## 概述

`TakePrisonerLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NotificationType` | `public override ChatNotificationType NotificationType { get; }` |

## 主要方法

### IsRelatedToWar
`public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)`

**用途 / Purpose:** 处理 `is related to war` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetNotificationText
`public TextObject GetNotificationText()`

**用途 / Purpose:** 获取 `notification text` 的当前值。

### GetEncyclopediaText
`public TextObject GetEncyclopediaText()`

**用途 / Purpose:** 获取 `encyclopedia text` 的当前值。

### IsValid
`public override bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

## 使用示例

```csharp
var value = new TakePrisonerLogEntry();
value.IsRelatedToWar(stance, effector, effected);
```

## 参见

- [完整类目录](../catalog)