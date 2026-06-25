---
title: "DefeatPartyQuestTask"
description: "DefeatPartyQuestTask 的自动生成类参考。"
---
# DefeatPartyQuestTask

**Namespace:** TaleWorlds.CampaignSystem.Issues.IssueQuestTasks
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefeatPartyQuestTask : QuestTaskBase`
**Base:** `QuestTaskBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues.IssueQuestTasks/DefeatPartyQuestTask.cs`

## 概述

`DefeatPartyQuestTask` 位于 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Issues.IssueQuestTasks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### PartyConditionDelegateType
`public delegate bool PartyConditionDelegateType(PartyBase defeatedParty)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefeatPartyQuestTask 实例
DefeatPartyQuestTask defeatPartyQuestTask = ...;
var result = defeatPartyQuestTask.PartyConditionDelegateType(defeatedParty);
```

### OnPartyDefeatedDelegateType
`public delegate void OnPartyDefeatedDelegateType(PartyBase party)`

**用途 / Purpose:** 在 「party defeated delegate type」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefeatPartyQuestTask 实例
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.OnPartyDefeatedDelegateType(party);
```

### OnMapEventEnded
`public void OnMapEventEnded(MapEvent mapEvent)`

**用途 / Purpose:** 在 「map event ended」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DefeatPartyQuestTask 实例
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.OnMapEventEnded(mapEvent);
```

### SetReferences
`public override void SetReferences()`

**用途 / Purpose:** 为 「references」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 DefeatPartyQuestTask 实例
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.SetReferences();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DefeatPartyQuestTask defeatPartyQuestTask = ...;
defeatPartyQuestTask.PartyConditionDelegateType(defeatedParty);
```

## 参见

- [本区域目录](../)