---
title: "PersuasionAttempt"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionAttempt`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionAttempt

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PersuasionAttempt`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Persuasion/PersuasionAttempt.cs`

## 概述

`PersuasionAttempt` 位于 `TaleWorlds.CampaignSystem.Conversation.Persuasion`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation.Persuasion` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsSuccesful
`public bool IsSuccesful()`

**用途 / Purpose:** 处理 `is succesful` 相关逻辑。

### Matches
`public bool Matches(Hero targetHero, int reservationType)`

**用途 / Purpose:** 处理 `matches` 相关逻辑。

## 使用示例

```csharp
var value = new PersuasionAttempt();
value.IsSuccesful();
```

## 参见

- [完整类目录](../catalog)