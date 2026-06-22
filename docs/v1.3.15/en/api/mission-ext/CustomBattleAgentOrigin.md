<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAgentOrigin`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAgentOrigin

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CustomBattleAgentOrigin` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CustomBattleCombatant` | `public CustomBattleCombatant CustomBattleCombatant { get; }` |
| `Troop` | `public BasicCharacterObject Troop { get; }` |
| `Rank` | `public int Rank { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand { get; }` |
| `FactionColor` | `public uint FactionColor { get; }` |
| `FactionColor2` | `public uint FactionColor2 { get; }` |
| `Seed` | `public int Seed { get; }` |
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
- [Area catalog](../catalog-mountandblade)