---
title: "OrderOfBattleVM"
description: "OrderOfBattleVM 的自动生成类参考。"
---
# OrderOfBattleVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs`

## 概述

`OrderOfBattleVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentConfiguration` | `public List<MissionOrderVM.FormationConfiguration> CurrentConfiguration { get; }` |
| `IsPoolAcceptingHeroTroops` | `public bool IsPoolAcceptingHeroTroops { get; set; }` |
| `CanStartMission` | `public bool CanStartMission { get; set; }` |
| `BeginMissionText` | `public string BeginMissionText { get; set; }` |
| `HasSelectedHeroes` | `public bool HasSelectedHeroes { get; set; }` |
| `FormationsFirstHalf` | `public MBBindingList<OrderOfBattleFormationItemVM> FormationsFirstHalf { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled { get; set; }` |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral { get; set; }` |
| `IsPoolAcceptingCaptain` | `public bool IsPoolAcceptingCaptain { get; set; }` |
| `IsPoolAcceptingAny` | `public bool IsPoolAcceptingAny { get; set; }` |
| `SelectedHeroCount` | `public int SelectedHeroCount { get; set; }` |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled { get; set; }` |
| `ClearSelectionHint` | `public HintViewModel ClearSelectionHint { get; set; }` |
| `AutoDeployText` | `public string AutoDeployText { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `MissingFormationsHint` | `public HintViewModel MissingFormationsHint { get; set; }` |
| `LastSelectedHeroItem` | `public OrderOfBattleHeroItemVM LastSelectedHeroItem { get; set; }` |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `FormationsSecondHalf` | `public MBBindingList<OrderOfBattleFormationItemVM> FormationsSecondHalf { get; set; }` |
| `UnassignedHeroes` | `public MBBindingList<OrderOfBattleHeroItemVM> UnassignedHeroes { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnFinalize();
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.Tick();
```

### Initialize
`public void Initialize(Mission mission, Camera missionCamera, Action<int> selectFormationAtIndex, Action<int> deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent> formationIndicesAndSergeants)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.Initialize(mission, missionCamera, selectFormationAtIndex, deselectFormationAtIndex, clearFormationSelection, onAutoDeploy, onBeginMission, dictionary<int, formationIndicesAndSergeants);
```

### OnAllFormationsAssignedSergeants
`public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent> preAssignedCaptains)`

**用途 / Purpose:** 在 all formations assigned sergeants 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnAllFormationsAssignedSergeants(dictionary<int, preAssignedCaptains);
```

### IsAnyClassSelectionEnabled
`public bool IsAnyClassSelectionEnabled()`

**用途 / Purpose:** 判断当前对象是否处于 any class selection enabled 状态或条件。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
var result = orderOfBattleVM.IsAnyClassSelectionEnabled();
```

### ExecuteDisableAllClassSelections
`public void ExecuteDisableAllClassSelections()`

**用途 / Purpose:** 执行 disable all class selections 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteDisableAllClassSelections();
```

### ExecuteAcceptHeroes
`public void ExecuteAcceptHeroes()`

**用途 / Purpose:** 执行 accept heroes 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteAcceptHeroes();
```

### ExecuteSelectAllHeroes
`public void ExecuteSelectAllHeroes()`

**用途 / Purpose:** 执行 select all heroes 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteSelectAllHeroes();
```

### ExecuteClearHeroSelection
`public void ExecuteClearHeroSelection()`

**用途 / Purpose:** 执行 clear hero selection 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteClearHeroSelection();
```

### OnDeploymentFinalized
`public void OnDeploymentFinalized(bool playerDeployed)`

**用途 / Purpose:** 在 deployment finalized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnDeploymentFinalized(false);
```

### SelectFormationItemAtIndex
`public void SelectFormationItemAtIndex(int index)`

**用途 / Purpose:** 调用 SelectFormationItemAtIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.SelectFormationItemAtIndex(0);
```

### FocusFormationItemAtIndex
`public void FocusFormationItemAtIndex(int index)`

**用途 / Purpose:** 调用 FocusFormationItemAtIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.FocusFormationItemAtIndex(0);
```

### DeselectAllFormations
`public void DeselectAllFormations()`

**用途 / Purpose:** 调用 DeselectAllFormations 对应的操作。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.DeselectAllFormations();
```

### OnUnitDeployed
`public void OnUnitDeployed()`

**用途 / Purpose:** 在 unit deployed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.OnUnitDeployed();
```

### OnEscape
`public bool OnEscape()`

**用途 / Purpose:** 在 escape 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
var result = orderOfBattleVM.OnEscape();
```

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**用途 / Purpose:** 执行 auto deploy 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteAutoDeploy();
```

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**用途 / Purpose:** 执行 begin mission 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.ExecuteBeginMission();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.SetDoneInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 为 reset input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleVM 实例
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.SetResetInputKey(hotkey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderOfBattleVM orderOfBattleVM = ...;
orderOfBattleVM.RefreshValues();
```

## 参见

- [本区域目录](../)