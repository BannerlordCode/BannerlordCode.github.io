<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SimpleAgentOrigin`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SimpleAgentOrigin

**Namespace:** TaleWorlds.CampaignSystem.AgentOrigins
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `SimpleAgentOrigin` is a class in the `TaleWorlds.CampaignSystem.AgentOrigins` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)