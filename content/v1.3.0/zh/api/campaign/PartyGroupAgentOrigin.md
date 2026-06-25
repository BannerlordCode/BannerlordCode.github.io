---
title: "PartyGroupAgentOrigin"
description: "PartyGroupAgentOrigin 的自动生成类参考。"
---
# PartyGroupAgentOrigin

**Namespace:** TaleWorlds.CampaignSystem.AgentOrigins
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyGroupAgentOrigin : IAgentOriginBase`
**Base:** `IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/PartyGroupAgentOrigin.cs`

## 概述

`PartyGroupAgentOrigin` 位于 `TaleWorlds.CampaignSystem.AgentOrigins`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.AgentOrigins` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Party` | `public PartyBase Party { get; }` |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |
| `Troop` | `public CharacterObject Troop { get; }` |
| `TroopDesc` | `public UniqueTroopDescriptor TroopDesc { get; }` |
| `Rank` | `public int Rank { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |

## 主要方法

### SetWounded
`public void SetWounded()`

**用途 / Purpose:** 为 wounded 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyGroupAgentOrigin 实例
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetWounded();
```

### SetKilled
`public void SetKilled()`

**用途 / Purpose:** 为 killed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyGroupAgentOrigin 实例
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetKilled();
```

### SetRouted
`public void SetRouted()`

**用途 / Purpose:** 为 routed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyGroupAgentOrigin 实例
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetRouted();
```

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyGroupAgentOrigin 实例
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.OnAgentRemoved(0);
```

### SetBanner
`public void SetBanner(Banner banner)`

**用途 / Purpose:** 为 banner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 PartyGroupAgentOrigin 实例
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetBanner(banner);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyGroupAgentOrigin partyGroupAgentOrigin = ...;
partyGroupAgentOrigin.SetWounded();
```

## 参见

- [本区域目录](../)