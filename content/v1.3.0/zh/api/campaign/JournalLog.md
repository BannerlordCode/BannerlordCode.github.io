---
title: "JournalLog"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JournalLog`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# JournalLog

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class JournalLog`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/JournalLog.cs`

## 概述

`JournalLog` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentProgress` | `public int CurrentProgress { get; }` |

## 主要方法

### UpdateCurrentProgress
`public void UpdateCurrentProgress(int progress)`

**用途 / Purpose:** 更新 `current progress` 的状态或数据。

### HasBeenCompleted
`public bool HasBeenCompleted()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `been completed`。

### GetTimeText
`public TextObject GetTimeText()`

**用途 / Purpose:** 获取 `time text` 的当前值。

## 使用示例

```csharp
var value = new JournalLog();
value.UpdateCurrentProgress(0);
```

## 参见

- [完整类目录](../catalog)