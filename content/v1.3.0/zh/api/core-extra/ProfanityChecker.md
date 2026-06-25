---
title: "ProfanityChecker"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ProfanityChecker`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ProfanityChecker

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ProfanityChecker`
**Base:** 无
**File:** `TaleWorlds.Library/ProfanityChecker.cs`

## 概述

`ProfanityChecker` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsProfane
`public bool IsProfane(string word)`

**用途 / Purpose:** 处理 `is profane` 相关逻辑。

### ContainsProfanity
`public bool ContainsProfanity(string text, ProfanityChecker.ProfanityChechkerType checkType)`

**用途 / Purpose:** 处理 `contains profanity` 相关逻辑。

### CensorText
`public string CensorText(string text)`

**用途 / Purpose:** 处理 `censor text` 相关逻辑。

## 使用示例

```csharp
var value = new ProfanityChecker();
value.IsProfane("example");
```

## 参见

- [完整类目录](../catalog)