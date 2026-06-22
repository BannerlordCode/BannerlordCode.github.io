<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentStatusVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionAgentStatusVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionAgentStatusVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)