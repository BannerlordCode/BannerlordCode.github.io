---
title: "SecondPhase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SecondPhase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SecondPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class SecondPhase`
**Base:** 无
**File:** `StoryMode/StoryModePhases/SecondPhase.cs`

## 概述

`SecondPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static SecondPhase Instance { get; }` |
| `LastConspiracyQuestCreationTime` | `public CampaignTime LastConspiracyQuestCreationTime { get; }` |
| `ConspiracyStrength` | `public float ConspiracyStrength { get; }` |

## 主要方法

### OnSessionLaunched
`public void OnSessionLaunched()`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### TriggerConspiracy
`public void TriggerConspiracy()`

**用途 / Purpose:** 处理 `trigger conspiracy` 相关逻辑。

### IncreaseConspiracyStrength
`public void IncreaseConspiracyStrength()`

**用途 / Purpose:** 处理 `increase conspiracy strength` 相关逻辑。

### DecreaseConspiracyStrength
`public void DecreaseConspiracyStrength(float amount)`

**用途 / Purpose:** 处理 `decrease conspiracy strength` 相关逻辑。

### ActivateConspiracy
`public void ActivateConspiracy()`

**用途 / Purpose:** 处理 `activate conspiracy` 相关逻辑。

### CreateNextConspiracyQuest
`public void CreateNextConspiracyQuest()`

**用途 / Purpose:** 创建一个 `next conspiracy quest` 实例或对象。

## 使用示例

```csharp
var value = new SecondPhase();
value.OnSessionLaunched();
```

## 参见

- [完整类目录](../catalog)