<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SallyOutMissionController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SallyOutMissionController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class SallyOutMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutMissionController.cs`

## Overview

`SallyOutMissionController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `BesiegerSiegeEngines` | `public MBReadOnlyList<SiegeWeapon> BesiegerSiegeEngines { get { return this._besiegerSiegeEngines; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnDeploymentFinished
```csharp
public override void OnDeploymentFinished()
```

### GetBesiegerSiegeEngines
```csharp
public static MBReadOnlyList<SiegeWeapon> GetBesiegerSiegeEngines()
```

### DisableSiegeEngines
```csharp
public static void DisableSiegeEngines()
```

## Usage Example

```csharp
// Typical usage of SallyOutMissionController (Controller)
Mission.Current.GetMissionBehavior<SallyOutMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)