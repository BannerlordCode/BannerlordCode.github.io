---
title: "PurchaseItemTutorialQuestTask"
description: "PurchaseItemTutorialQuestTask 的自动生成类参考。"
---
# PurchaseItemTutorialQuestTask

**Namespace:** StoryMode.Quests.QuestTasks
**Module:** StoryMode.Quests
**Type:** `public class PurchaseItemTutorialQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `StoryMode/Quests/QuestTasks/PurchaseItemTutorialQuestTask.cs`

## 概述

`PurchaseItemTutorialQuestTask` 位于 `StoryMode.Quests.QuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.QuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### InitializeTaskOnLoad
`public void InitializeTaskOnLoad(int targetItemAmount, ItemObject item)`

**用途 / Purpose:** 为 「task on load」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PurchaseItemTutorialQuestTask 实例
PurchaseItemTutorialQuestTask purchaseItemTutorialQuestTask = ...;
purchaseItemTutorialQuestTask.InitializeTaskOnLoad(0, item);
```

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** 为 「references」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PurchaseItemTutorialQuestTask 实例
PurchaseItemTutorialQuestTask purchaseItemTutorialQuestTask = ...;
purchaseItemTutorialQuestTask.SetReferences();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PurchaseItemTutorialQuestTask purchaseItemTutorialQuestTask = ...;
purchaseItemTutorialQuestTask.InitializeTaskOnLoad(0, item);
```

## 参见

- [本区域目录](../)