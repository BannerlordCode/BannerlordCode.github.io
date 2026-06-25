---
title: "RaftStateChangeAction"
description: "RaftStateChangeAction 的自动生成类参考。"
---
# RaftStateChangeAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RaftStateChangeAction`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Actions/RaftStateChangeAction.cs`

## 概述

`RaftStateChangeAction` 位于 `TaleWorlds.CampaignSystem.Actions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Actions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ActivateRaftStateForParty
`public static void ActivateRaftStateForParty(MobileParty mobileParty)`

**用途 / Purpose:** 激活raft state for party对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
RaftStateChangeAction.ActivateRaftStateForParty(mobileParty);
```

### DeactivateRaftStateForParty
`public static void DeactivateRaftStateForParty(MobileParty mobileParty)`

**用途 / Purpose:** 停用raft state for party对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
RaftStateChangeAction.DeactivateRaftStateForParty(mobileParty);
```

## 使用示例

```csharp
RaftStateChangeAction.ActivateRaftStateForParty(mobileParty);
```

## 参见

- [本区域目录](../)