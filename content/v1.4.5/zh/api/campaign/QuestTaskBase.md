---
title: "QuestTaskBase"
description: "QuestTaskBase 的自动生成类参考。"
---
# QuestTaskBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestTaskBase`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/QuestTaskBase.cs`

## 概述

`QuestTaskBase` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsLogged` | `public bool IsLogged { get; }` |
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### Finish
`public void Finish(FinishStates finishState)`

**用途 / Purpose:** 结束当前对象的流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 QuestTaskBase 实例
QuestTaskBase questTaskBase = ...;
questTaskBase.Finish(finishState);
```

### AddTaskDialogs
`public void AddTaskDialogs()`

**用途 / Purpose:** 将 task dialogs 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestTaskBase 实例
QuestTaskBase questTaskBase = ...;
questTaskBase.AddTaskDialogs();
```

### SetReferences
`public virtual void SetReferences()`

**用途 / Purpose:** 为 references 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 QuestTaskBase 实例
QuestTaskBase questTaskBase = ...;
questTaskBase.SetReferences();
```

### AddTaskDialogOnGameLoaded
`public void AddTaskDialogOnGameLoaded(DialogFlow dialogFlow)`

**用途 / Purpose:** 将 task dialog on game loaded 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestTaskBase 实例
QuestTaskBase questTaskBase = ...;
questTaskBase.AddTaskDialogOnGameLoaded(dialogFlow);
```

### AddTaskBehaviorsOnGameLoad
`public void AddTaskBehaviorsOnGameLoad(Action onSucceededAction = null, Action onFailedAction = null, Action onCanceledAction = null)`

**用途 / Purpose:** 将 task behaviors on game load 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 QuestTaskBase 实例
QuestTaskBase questTaskBase = ...;
questTaskBase.AddTaskBehaviorsOnGameLoad(null, null, null);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
QuestTaskBase questTaskBase = ...;
questTaskBase.Finish(finishState);
```

## 参见

- [本区域目录](../)