---
title: "SecondPhase"
description: "SecondPhase 的自动生成类参考。"
---
# SecondPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class SecondPhase`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/SecondPhase.cs`

## 概述

`SecondPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LastConspiracyQuestCreationTime` | `public CampaignTime LastConspiracyQuestCreationTime { get; }` |
| `ConspiracyStrength` | `public float ConspiracyStrength { get; }` |

## 主要方法

### OnSessionLaunched
`public void OnSessionLaunched()`

**用途 / Purpose:** 在 「session launched」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SecondPhase 实例
SecondPhase secondPhase = ...;
secondPhase.OnSessionLaunched();
```

### TriggerConspiracy
`public void TriggerConspiracy()`

**用途 / Purpose:** 触发「conspiracy」对应的逻辑或事件。

```csharp
// 先通过子系统 API 拿到 SecondPhase 实例
SecondPhase secondPhase = ...;
secondPhase.TriggerConspiracy();
```

### IncreaseConspiracyStrength
`public void IncreaseConspiracyStrength()`

**用途 / Purpose:** 处理与 「increase conspiracy strength」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SecondPhase 实例
SecondPhase secondPhase = ...;
secondPhase.IncreaseConspiracyStrength();
```

### DecreaseConspiracyStrength
`public void DecreaseConspiracyStrength(float amount)`

**用途 / Purpose:** 处理与 「decrease conspiracy strength」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SecondPhase 实例
SecondPhase secondPhase = ...;
secondPhase.DecreaseConspiracyStrength(0);
```

### ActivateConspiracy
`public void ActivateConspiracy()`

**用途 / Purpose:** 激活「conspiracy」对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 SecondPhase 实例
SecondPhase secondPhase = ...;
secondPhase.ActivateConspiracy();
```

### CreateNextConspiracyQuest
`public void CreateNextConspiracyQuest()`

**用途 / Purpose:** 构建一个新的 「next conspiracy quest」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 SecondPhase 实例
SecondPhase secondPhase = ...;
secondPhase.CreateNextConspiracyQuest();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SecondPhase secondPhase = ...;
secondPhase.OnSessionLaunched();
```

## 参见

- [本区域目录](../)