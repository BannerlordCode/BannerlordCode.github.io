<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentStatusVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentStatusVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionAgentStatusVM` is a class in the `TaleWorlds.MountAndBlade.ViewModelCollection` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsInDeployement` | `public bool IsInDeployement { get; set; }` |
| `TakenDamageController` | `public MissionAgentTakenDamageVM TakenDamageController { get; set; }` |
| `InteractionInterface` | `public AgentInteractionInterfaceVM InteractionInterface { get; set; }` |
| `AgentHealth` | `public int AgentHealth { get; set; }` |
| `AgentHealthMax` | `public int AgentHealthMax { get; set; }` |
| `HorseHealth` | `public int HorseHealth { get; set; }` |
| `HorseHealthMax` | `public int HorseHealthMax { get; set; }` |
| `ShieldHealth` | `public int ShieldHealth { get; set; }` |
| `ShieldHealthMax` | `public int ShieldHealthMax { get; set; }` |
| `IsPlayerActive` | `public bool IsPlayerActive { get; set; }` |
| `IsCombatUIActive` | `public bool IsCombatUIActive { get; set; }` |
| `ShowAgentHealthBar` | `public bool ShowAgentHealthBar { get; set; }` |
| `ShowMountHealthBar` | `public bool ShowMountHealthBar { get; set; }` |
| `ShowShieldHealthBar` | `public bool ShowShieldHealthBar { get; set; }` |
| `IsInteractionAvailable` | `public bool IsInteractionAvailable { get; set; }` |
| `IsAgentStatusPrioritized` | `public bool IsAgentStatusPrioritized { get; set; }` |
| `IsAgentStatusAvailable` | `public bool IsAgentStatusAvailable { get; set; }` |
| `CouchLanceState` | `public int CouchLanceState { get; set; }` |
| `SpearBraceState` | `public int SpearBraceState { get; set; }` |
| `TroopCount` | `public int TroopCount { get; set; }` |


## Key Methods

### InitializeMainAgentPropterties

```csharp
public void InitializeMainAgentPropterties()
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Tick

```csharp
public void Tick(float dt)
```

### OnEquipmentInteractionViewToggled

```csharp
public void OnEquipmentInteractionViewToggled(bool isActive)
```

### OnMainAgentWeaponChange

```csharp
public void OnMainAgentWeaponChange()
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent agent)
```

### OnAgentDeleted

```csharp
public void OnAgentDeleted(Agent agent)
```

### OnMainAgentHit

```csharp
public void OnMainAgentHit(int damage, float distance)
```

### OnFocusGained

```csharp
public void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)
```

### OnFocusLost

```csharp
public void OnFocusLost(Agent agent, IFocusable focusableObject)
```

### OnSecondaryFocusGained

```csharp
public void OnSecondaryFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)
```

### OnSecondaryFocusLost

```csharp
public void OnSecondaryFocusLost(Agent agent, IFocusable focusableObject)
```

### OnAgentInteraction

```csharp
public void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)