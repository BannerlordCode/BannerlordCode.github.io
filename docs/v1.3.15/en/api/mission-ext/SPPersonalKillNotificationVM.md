<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPPersonalKillNotificationVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPPersonalKillNotificationVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SPPersonalKillNotificationVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NotificationList` | `public MBBindingList<SPPersonalKillNotificationItemVM> NotificationList { get; set; }` |


## Key Methods

### OnPersonalKill

```csharp
public void OnPersonalKill(int damageAmount, bool isMountDamage, bool isFriendlyFire, bool isHeadshot, string killedAgentName, bool isUnconscious)
```

### OnPersonalHit

```csharp
public void OnPersonalHit(int damageAmount, bool isMountDamage, bool isFriendlyFire, string killedAgentName)
```

### OnPersonalMessage

```csharp
public void OnPersonalMessage(string message)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)