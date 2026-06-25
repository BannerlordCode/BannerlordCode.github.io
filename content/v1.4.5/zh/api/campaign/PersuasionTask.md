---
title: "PersuasionTask"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionTask`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionTask

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionTask`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Persuasion/PersuasionTask.cs`

## 概述

`PersuasionTask` 位于 `TaleWorlds.CampaignSystem.Conversation.Persuasion`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation.Persuasion` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddOptionToTask
`public void AddOptionToTask(PersuasionOptionArgs option)`

**用途 / Purpose:** 向当前集合/状态中添加 `option to task`。

### BlockAllOptions
`public void BlockAllOptions()`

**用途 / Purpose:** 处理 `block all options` 相关逻辑。

### UnblockAllOptions
`public void UnblockAllOptions()`

**用途 / Purpose:** 处理 `unblock all options` 相关逻辑。

### ApplyEffects
`public void ApplyEffects(float moveToNextStageChance, float blockRandomOptionChance)`

**用途 / Purpose:** 将 `effects` 应用到当前对象。

## 使用示例

```csharp
var value = new PersuasionTask();
value.AddOptionToTask(option);
```

## 参见

- [完整类目录](../catalog)