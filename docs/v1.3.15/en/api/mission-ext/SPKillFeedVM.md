<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPKillFeedVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SPKillFeedVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public SPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalFeed` | `public SPPersonalKillNotificationVM PersonalFeed { get; set; }` |


## Key Methods

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isHeadshot, bool isSuicide, bool isDrowning)
```

### OnPersonalKill

```csharp
public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)
```

### OnPersonalDamage

```csharp
public void OnPersonalDamage(int totalDamage, bool isVictimAgentMount, bool isFriendlyFire, string victimAgentName)
```

### OnPersonalMessage

```csharp
public void OnPersonalMessage(string message)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)