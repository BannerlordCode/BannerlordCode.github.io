<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamAISiegeComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TeamAISiegeComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

## Overview

`TeamAISiegeComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<TeamAISiegeComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem { get; protected set; }` |
| `OuterGate` | `public CastleGate OuterGate { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `InnerGate` | `public CastleGate InnerGate { get; }` |
| `Ladders` | `public MBReadOnlyList<SiegeLadder> Ladders { get { return this._ladders; }` |

## Key Methods

### OnMissionFinalize
```csharp
public static void OnMissionFinalize()
```

### CalculateIsChargePastWallsApplicable
```csharp
public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)
```

### SetAreLaddersReady
```csharp
public void SetAreLaddersReady(bool areLaddersReady)
```

### CalculateIsAnyLaneOpenToGetInside
```csharp
public bool CalculateIsAnyLaneOpenToGetInside()
```

### CalculateIsAnyLaneOpenToGoOutside
```csharp
public bool CalculateIsAnyLaneOpenToGoOutside()
```

### IsPrimarySiegeWeaponNavmeshFaceId
```csharp
public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)
```

### IsFormationGroupInsideCastle
```csharp
public static bool IsFormationGroupInsideCastle(MBList<Formation> formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)
```

### IsFormationInsideCastle
```csharp
public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)
```

### IsCastleBreached
```csharp
public bool IsCastleBreached()
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

## Usage Example

```csharp
// Typical usage of TeamAISiegeComponent (Component)
agent.GetComponent<TeamAISiegeComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)