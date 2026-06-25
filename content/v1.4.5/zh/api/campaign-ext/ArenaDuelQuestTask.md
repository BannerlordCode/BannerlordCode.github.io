---
title: "ArenaDuelQuestTask"
description: "ArenaDuelQuestTask 的自动生成类参考。"
---
# ArenaDuelQuestTask

**Namespace:** SandBox.Issues.IssueQuestTasks
**Module:** SandBox.Issues
**Type:** `public class ArenaDuelQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `Modules.SandBox/SandBox/SandBox.Issues.IssueQuestTasks/ArenaDuelQuestTask.cs`

## 概述

`ArenaDuelQuestTask` 位于 `SandBox.Issues.IssueQuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Issues.IssueQuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AfterStart
`public void AfterStart(IMission mission)`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 ArenaDuelQuestTask 实例
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.AfterStart(mission);
```

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** **用途 / Purpose:** 为 references 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArenaDuelQuestTask 实例
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.SetReferences();
```

### OnGameMenuOpened
`public void OnGameMenuOpened(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 在 game menu opened 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArenaDuelQuestTask 实例
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.OnGameMenuOpened(args);
```

### MissionTick
`public void MissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MissionTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 ArenaDuelQuestTask 实例
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.MissionTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArenaDuelQuestTask arenaDuelQuestTask = ...;
arenaDuelQuestTask.AfterStart(mission);
```

## 参见

- [本区域目录](../)