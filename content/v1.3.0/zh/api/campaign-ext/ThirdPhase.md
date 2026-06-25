---
title: "ThirdPhase"
description: "ThirdPhase 的自动生成类参考。"
---
# ThirdPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class ThirdPhase`
**Base:** 无
**File:** `StoryMode/StoryModePhases/ThirdPhase.cs`

## 概述

`ThirdPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `OppositionKingdoms` | `public MBReadOnlyList<Kingdom> OppositionKingdoms { get; }` |
| `AllyKingdoms` | `public MBReadOnlyList<Kingdom> AllyKingdoms { get; }` |

## 主要方法

### AddAllyKingdom
`public void AddAllyKingdom(Kingdom kingdom)`

**用途 / Purpose:** 将 「ally kingdom」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ThirdPhase 实例
ThirdPhase thirdPhase = ...;
thirdPhase.AddAllyKingdom(kingdom);
```

### AddOppositionKingdom
`public void AddOppositionKingdom(Kingdom kingdom)`

**用途 / Purpose:** 将 「opposition kingdom」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ThirdPhase 实例
ThirdPhase thirdPhase = ...;
thirdPhase.AddOppositionKingdom(kingdom);
```

### RemoveOppositionKingdom
`public void RemoveOppositionKingdom(Kingdom kingdom)`

**用途 / Purpose:** 从当前容器或状态中移除 「opposition kingdom」。

```csharp
// 先通过子系统 API 拿到 ThirdPhase 实例
ThirdPhase thirdPhase = ...;
thirdPhase.RemoveOppositionKingdom(kingdom);
```

### CompleteThirdPhase
`public void CompleteThirdPhase(QuestBase.QuestCompleteDetails defeatTheConspiracyQuestCompleteDetail)`

**用途 / Purpose:** 处理与 「complete third phase」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ThirdPhase 实例
ThirdPhase thirdPhase = ...;
thirdPhase.CompleteThirdPhase(defeatTheConspiracyQuestCompleteDetail);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ThirdPhase thirdPhase = ...;
thirdPhase.AddAllyKingdom(kingdom);
```

## 参见

- [本区域目录](../)