---
title: "PartyThinkParams"
description: "PartyThinkParams 的自动生成类参考。"
---
# PartyThinkParams

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyThinkParams`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PartyThinkParams.cs`

## 概述

`PartyThinkParams` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Reset
`public void Reset(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 PartyThinkParams 实例
PartyThinkParams partyThinkParams = ...;
partyThinkParams.Reset(mobileParty);
```

### Initialization
`public void Initialization()`

**用途 / Purpose:** **用途 / Purpose:** 为 ialization 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PartyThinkParams 实例
PartyThinkParams partyThinkParams = ...;
partyThinkParams.Initialization();
```

### SetArmyMembers
`public void SetArmyMembers(MBList<MobileParty> armyMembers)`

**用途 / Purpose:** **用途 / Purpose:** 为 army members 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyThinkParams 实例
PartyThinkParams partyThinkParams = ...;
partyThinkParams.SetArmyMembers(armyMembers);
```

### TryGetBehaviorScore
`public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)`

**用途 / Purpose:** **用途 / Purpose:** 尝试获取 get behavior score 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 PartyThinkParams 实例
PartyThinkParams partyThinkParams = ...;
var result = partyThinkParams.TryGetBehaviorScore(aiBehaviorData, score);
```

### SetBehaviorScore
`public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)`

**用途 / Purpose:** **用途 / Purpose:** 为 behavior score 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyThinkParams 实例
PartyThinkParams partyThinkParams = ...;
partyThinkParams.SetBehaviorScore(aiBehaviorData, 0);
```

### AddBehaviorScore
`public void AddBehaviorScore(in (AIBehaviorData, float) value)`

**用途 / Purpose:** **用途 / Purpose:** 将 behavior score 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 PartyThinkParams 实例
PartyThinkParams partyThinkParams = ...;
partyThinkParams.AddBehaviorScore((AIBehaviorData, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyThinkParams partyThinkParams = ...;
partyThinkParams.Reset(mobileParty);
```

## 参见

- [本区域目录](../)