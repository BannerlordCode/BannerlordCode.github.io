---
title: "QuestTaskBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestTaskBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestTaskBase

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestTaskBase`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/QuestTaskBase.cs`

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
`public void Finish(QuestTaskBase.FinishStates finishState)`

**用途 / Purpose:** 处理 `finish` 相关逻辑。

### AddTaskDialogs
`public void AddTaskDialogs()`

**用途 / Purpose:** 向当前集合/状态中添加 `task dialogs`。

### SetReferences
`public virtual void SetReferences()`

**用途 / Purpose:** 设置 `references` 的值或状态。

### AddTaskDialogOnGameLoaded
`public void AddTaskDialogOnGameLoaded(DialogFlow dialogFlow)`

**用途 / Purpose:** 向当前集合/状态中添加 `task dialog on game loaded`。

### AddTaskBehaviorsOnGameLoad
`public void AddTaskBehaviorsOnGameLoad(Action onSucceededAction = null, Action onFailedAction = null, Action onCanceledAction = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `task behaviors on game load`。

## 使用示例

```csharp
var value = new QuestTaskBase();
value.Finish(finishState);
```

## 参见

- [完整类目录](../catalog)