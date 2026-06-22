<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `GameOverState` is a class in the `TaleWorlds.CampaignSystem.GameState` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; set; }` |
| `Handler` | `public IGameOverStateHandler Handler { get; }` |
| `Reason` | `public GameOverState.GameOverReason Reason { get; }` |


## Key Methods

### CreateForVictory

```csharp
public static GameOverState CreateForVictory()
```

### CreateForRetirement

```csharp
public static GameOverState CreateForRetirement()
```

### CreateForClanDestroyed

```csharp
public static GameOverState CreateForClanDestroyed()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)