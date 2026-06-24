<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JournalLogEntry`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JournalLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLogEntry : LogEntry`
**Base:** `LogEntry`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/JournalLogEntry.cs`

## 概述

`JournalLogEntry` 位于 `TaleWorlds.CampaignSystem.LogEntries`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.LogEntries` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime { get; }` |

## 主要方法

### IsRelatedTo
`public bool IsRelatedTo(MBObjectBase obj)`

**用途 / Purpose:** 处理 `is related to` 相关逻辑。

### GetEntries
`public IEnumerable<JournalLog> GetEntries()`

**用途 / Purpose:** 获取 `entries` 的当前值。

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, IssueBase.IssueUpdateDetails issueStatus = IssueBase.IssueUpdateDetails.None)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### Update
`public void Update(MBReadOnlyList<JournalLog> entries, QuestBase.QuestCompleteDetails questCompletionDetail)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### IsEndedUnsuccessfully
`public bool IsEndedUnsuccessfully()`

**用途 / Purpose:** 处理 `is ended unsuccessfully` 相关逻辑。

### IsEnded
`public bool IsEnded()`

**用途 / Purpose:** 处理 `is ended` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

## 使用示例

```csharp
var value = new JournalLogEntry();
value.IsRelatedTo(obj);
```

## 参见

- [完整类目录](../catalog)