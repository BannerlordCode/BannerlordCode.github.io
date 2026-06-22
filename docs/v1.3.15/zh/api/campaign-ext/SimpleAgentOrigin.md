<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SimpleAgentOrigin`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleAgentOrigin

**命名空间:** TaleWorlds.CampaignSystem.AgentOrigins
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SimpleAgentOrigin` 是 `TaleWorlds.CampaignSystem.AgentOrigins` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Troop` | `public BasicCharacterObject Troop { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Rank` | `public int Rank { get; }` |
| `UniqueSeed` | `public int UniqueSeed { get; }` |


## 主要方法

### SetWounded

```csharp
public void SetWounded()
```

### SetKilled

```csharp
public void SetKilled()
```

### SetRouted

```csharp
public void SetRouted(bool isOrderRetreat)
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(float agentHealth)
```

### SetBanner

```csharp
public void SetBanner(Banner banner)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)