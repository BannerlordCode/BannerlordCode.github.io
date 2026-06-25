---
title: "MissionAgentStatusVM"
description: "MissionAgentStatusVM 的自动生成类参考。"
---
# MissionAgentStatusVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs`

## 概述

`MissionAgentStatusVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

## 主要方法

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**用途 / Purpose:** 为 「main agent propterties」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.InitializeMainAgentPropterties();
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.Tick(0);
```

### OnEquipmentInteractionViewToggled
`public void OnEquipmentInteractionViewToggled(bool isActive)`

**用途 / Purpose:** 在 「equipment interaction view toggled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnEquipmentInteractionViewToggled(false);
```

### OnMainAgentWeaponChange
`public void OnMainAgentWeaponChange()`

**用途 / Purpose:** 在 「main agent weapon change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnMainAgentWeaponChange();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnAgentRemoved(agent);
```

### OnAgentDeleted
`public void OnAgentDeleted(Agent agent)`

**用途 / Purpose:** 在 「agent deleted」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnAgentDeleted(agent);
```

### OnMainAgentHit
`public void OnMainAgentHit(int damage, float distance)`

**用途 / Purpose:** 在 「main agent hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnMainAgentHit(0, 0);
```

### OnFocusGained
`public void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 在 「focus gained」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnFocusGained(mainAgent, focusableObject, false);
```

### OnFocusLost
`public void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 在 「focus lost」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnFocusLost(agent, focusableObject);
```

### OnSecondaryFocusGained
`public void OnSecondaryFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 在 「secondary focus gained」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnSecondaryFocusGained(agent, focusableObject, false);
```

### OnSecondaryFocusLost
`public void OnSecondaryFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 在 「secondary focus lost」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnSecondaryFocusLost(agent, focusableObject);
```

### OnAgentInteraction
`public void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「agent interaction」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentStatusVM 实例
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.OnAgentInteraction(userAgent, agent, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionAgentStatusVM missionAgentStatusVM = ...;
missionAgentStatusVM.InitializeMainAgentPropterties();
```

## 参见

- [本区域目录](../)