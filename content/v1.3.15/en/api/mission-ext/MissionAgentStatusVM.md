---
title: "MissionAgentStatusVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentStatusVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentStatusVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs`

## Overview

`MissionAgentStatusVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
| `IsTroopsActive` | `public bool IsTroopsActive { get; set; }` |
| `IsGoldActive` | `public bool IsGoldActive { get; set; }` |
| `GoldAmount` | `public int GoldAmount { get; set; }` |
| `ShowAmmoCount` | `public bool ShowAmmoCount { get; set; }` |
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `TroopsAmmoPercentage` | `public float TroopsAmmoPercentage { get; set; }` |
| `TroopsAmmoAvailable` | `public bool TroopsAmmoAvailable { get; set; }` |
| `IsAmmoCountAlertEnabled` | `public bool IsAmmoCountAlertEnabled { get; set; }` |
| `CameraToggleProgress` | `public float CameraToggleProgress { get; set; }` |
| `CameraToggleText` | `public string CameraToggleText { get; set; }` |
| `OffhandWeapon` | `public ItemImageIdentifierVM OffhandWeapon { get; set; }` |
| `PrimaryWeapon` | `public ItemImageIdentifierVM PrimaryWeapon { get; set; }` |
| `TakenDamageFeed` | `public MissionAgentDamageFeedVM TakenDamageFeed { get; set; }` |

## Key Methods

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**Purpose:** Initializes the state, resources, or bindings for `main agent propterties`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### OnEquipmentInteractionViewToggled
`public void OnEquipmentInteractionViewToggled(bool isActive)`

**Purpose:** Called when the `equipment interaction view toggled` event is raised.

### OnMainAgentWeaponChange
`public void OnMainAgentWeaponChange()`

**Purpose:** Called when the `main agent weapon change` event is raised.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentDeleted
`public void OnAgentDeleted(Agent agent)`

**Purpose:** Called when the `agent deleted` event is raised.

### OnMainAgentHit
`public void OnMainAgentHit(int damage, float distance)`

**Purpose:** Called when the `main agent hit` event is raised.

### OnFocusGained
`public void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Called when the `focus gained` event is raised.

### OnFocusLost
`public void OnFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Called when the `focus lost` event is raised.

### OnSecondaryFocusGained
`public void OnSecondaryFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**Purpose:** Called when the `secondary focus gained` event is raised.

### OnSecondaryFocusLost
`public void OnSecondaryFocusLost(Agent agent, IFocusable focusableObject)`

**Purpose:** Called when the `secondary focus lost` event is raised.

### OnAgentInteraction
`public void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

## Usage Example

```csharp
var value = new MissionAgentStatusVM();
value.InitializeMainAgentPropterties();
```

## See Also

- [Complete Class Catalog](../catalog)