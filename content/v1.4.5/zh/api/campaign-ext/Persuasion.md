---
title: "Persuasion"
description: "Persuasion 的自动生成类参考。"
---
# Persuasion

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Persuasion
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Persuasion`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs`

## 概述

`Persuasion` 位于 `TaleWorlds.CampaignSystem.Conversation.Persuasion`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation.Persuasion` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DifficultyMultiplier` | `public float DifficultyMultiplier { get; }` |
| `Progress` | `public float Progress { get; }` |

## 主要方法

### CommitProgress
`public void CommitProgress(PersuasionOptionArgs persuasionOptionArgs)`

**用途 / Purpose:** 调用 CommitProgress 对应的操作。

```csharp
// 先通过子系统 API 拿到 Persuasion 实例
Persuasion persuasion = ...;
persuasion.CommitProgress(persuasionOptionArgs);
```

### GetChosenOptions
`public IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>> GetChosenOptions()`

**用途 / Purpose:** 读取并返回当前对象中 chosen options 的结果。

```csharp
// 先通过子系统 API 拿到 Persuasion 实例
Persuasion persuasion = ...;
var result = persuasion.GetChosenOptions();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Persuasion persuasion = ...;
persuasion.CommitProgress(persuasionOptionArgs);
```

## 参见

- [本区域目录](../)