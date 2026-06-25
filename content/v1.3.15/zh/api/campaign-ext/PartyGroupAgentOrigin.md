---
title: "PartyGroupAgentOrigin"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyGroupAgentOrigin`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `wounded` 的值或状态。

### SetKilled
`public void SetKilled()`

**用途 / Purpose:** 设置 `killed` 的值或状态。

### SetRouted
`public void SetRouted(bool isOrderRetreat)`

**用途 / Purpose:** 设置 `routed` 的值或状态。

### OnAgentRemoved
`public void OnAgentRemoved(float agentHealth)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### SetBanner
`public void SetBanner(Banner banner)`

**用途 / Purpose:** 设置 `banner` 的值或状态。

## 使用示例

```csharp
var value = new PartyGroupAgentOrigin();
value.SetWounded();
```

## 参见

- [完整类目录](../catalog)