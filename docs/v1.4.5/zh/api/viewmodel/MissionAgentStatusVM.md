<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentStatusVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentStatusVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/MissionAgentStatusVM.cs`

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

**用途 / Purpose:** 初始化 `main agent propterties` 的状态、资源或绑定。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnEquipmentInteractionViewToggled
`public void OnEquipmentInteractionViewToggled(bool isActive)`

**用途 / Purpose:** 当 `equipment interaction view toggled` 事件触发时调用此方法。

### OnMainAgentWeaponChange
`public void OnMainAgentWeaponChange()`

**用途 / Purpose:** 当 `main agent weapon change` 事件触发时调用此方法。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentDeleted
`public void OnAgentDeleted(Agent agent)`

**用途 / Purpose:** 当 `agent deleted` 事件触发时调用此方法。

### OnMainAgentHit
`public void OnMainAgentHit(int damage, float distance)`

**用途 / Purpose:** 当 `main agent hit` 事件触发时调用此方法。

### OnFocusGained
`public void OnFocusGained(Agent mainAgent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 当 `focus gained` 事件触发时调用此方法。

### OnFocusLost
`public void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 当 `focus lost` 事件触发时调用此方法。

### OnSecondaryFocusGained
`public void OnSecondaryFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 当 `secondary focus gained` 事件触发时调用此方法。

### OnSecondaryFocusLost
`public void OnSecondaryFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 当 `secondary focus lost` 事件触发时调用此方法。

### OnAgentInteraction
`public void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `agent interaction` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionAgentStatusVM();
value.InitializeMainAgentPropterties();
```

## 参见

- [完整类目录](../catalog)