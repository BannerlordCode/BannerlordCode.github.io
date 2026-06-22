<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Highlight`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Highlight

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `Highlight` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get; }` |
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |


## Key Methods

### RemoveHighlights

```csharp
public static void RemoveHighlights()
```

### GetHighlightTypeWithId

```csharp
public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)
```

### AfterStart

```csharp
public override void AfterStart()
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnScoreHit

```csharp
public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### AddHighlightType

```csharp
public static void AddHighlightType(HighlightsController.HighlightType highlightType)
```

### SaveHighlight

```csharp
public void SaveHighlight(HighlightsController.Highlight highlight)
```

### SaveHighlight

```csharp
public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)
```

### CanSaveHighlight

```csharp
public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)
```

### GetPlayerIsLookingAtPositionScore

```csharp
public float GetPlayerIsLookingAtPositionScore(Vec3 position)
```

### CanSeePosition

```csharp
public bool CanSeePosition(Vec3 position)
```

### ShowSummary

```csharp
public void ShowSummary()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)