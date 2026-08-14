---
title: "SPKillFeedVM"
description: "SPKillFeedVM 的自动生成类参考。"
---
# SPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPKillFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/SPKillFeedVM.cs`

## 概述

`SPKillFeedVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed { get; set; }` |

## 主要方法

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPKillFeedVM 实例
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

### OnPersonalKill
`public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)`

**用途 / Purpose:** 在 personal kill 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPKillFeedVM 实例
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnPersonalKill(0, false, false, false, "example", false);
```

### OnPersonalDamage
`public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)`

**用途 / Purpose:** 在 personal damage 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPKillFeedVM 实例
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnPersonalDamage(0, false, false, "example");
```

### OnPersonalMessage
`public void OnPersonalMessage(string message)`

**用途 / Purpose:** 在 personal message 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SPKillFeedVM 实例
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnPersonalMessage("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPKillFeedVM sPKillFeedVM = ...;
sPKillFeedVM.OnAgentRemoved(affectedAgent, affectorAgent, false, false, false);
```

## 参见

- [本区域目录](../)