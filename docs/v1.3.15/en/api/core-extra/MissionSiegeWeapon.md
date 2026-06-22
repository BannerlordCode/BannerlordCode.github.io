<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionSiegeWeapon`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeWeapon

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `MissionSiegeWeapon` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Index` | `public int Index { get; }` |
| `Type` | `public SiegeEngineType Type { get; }` |
| `Health` | `public float Health { get; }` |
| `InitialHealth` | `public float InitialHealth { get; }` |
| `MaxHealth` | `public float MaxHealth { get; }` |


## Key Methods

### CreateDefaultWeapon

```csharp
public static MissionSiegeWeapon CreateDefaultWeapon(SiegeEngineType type)
```

### CreateCampaignWeapon

```csharp
public static MissionSiegeWeapon CreateCampaignWeapon(SiegeEngineType type, int index, float health, float maxHealth)
```

### SetHealth

```csharp
public void SetHealth(float health)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)