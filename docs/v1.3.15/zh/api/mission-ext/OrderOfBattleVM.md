<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Initialize
`public void Initialize(Mission mission, Camera missionCamera, Action<int> selectFormationAtIndex, Action<int> deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent> formationIndicesAndSergeants)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnAllFormationsAssignedSergeants
`public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent> preAssignedCaptains)`

**用途 / Purpose:** 当 `all formations assigned sergeants` 事件触发时调用此方法。

### IsAnyClassSelectionEnabled
`public bool IsAnyClassSelectionEnabled()`

**用途 / Purpose:** 处理 `is any class selection enabled` 相关逻辑。

### ExecuteDisableAllClassSelections
`public void ExecuteDisableAllClassSelections()`

**用途 / Purpose:** 执行 `disable all class selections` 操作或流程。

### ExecuteAcceptHeroes
`public void ExecuteAcceptHeroes()`

**用途 / Purpose:** 执行 `accept heroes` 操作或流程。

### ExecuteSelectAllHeroes
`public void ExecuteSelectAllHeroes()`

**用途 / Purpose:** 执行 `select all heroes` 操作或流程。

### ExecuteClearHeroSelection
`public void ExecuteClearHeroSelection()`

**用途 / Purpose:** 执行 `clear hero selection` 操作或流程。

### OnDeploymentFinalized
`public void OnDeploymentFinalized(bool playerDeployed)`

**用途 / Purpose:** 当 `deployment finalized` 事件触发时调用此方法。

### SelectFormationItemAtIndex
`public void SelectFormationItemAtIndex(int index)`

**用途 / Purpose:** 处理 `select formation item at index` 相关逻辑。

### FocusFormationItemAtIndex
`public void FocusFormationItemAtIndex(int index)`

**用途 / Purpose:** 处理 `focus formation item at index` 相关逻辑。

### DeselectAllFormations
`public void DeselectAllFormations()`

**用途 / Purpose:** 处理 `deselect all formations` 相关逻辑。

### OnUnitDeployed
`public void OnUnitDeployed()`

**用途 / Purpose:** 当 `unit deployed` 事件触发时调用此方法。

### OnEscape
`public bool OnEscape()`

**用途 / Purpose:** 当 `escape` 事件触发时调用此方法。

### ExecuteAutoDeploy
`public void ExecuteAutoDeploy()`

**用途 / Purpose:** 执行 `auto deploy` 操作或流程。

### ExecuteBeginMission
`public void ExecuteBeginMission()`

**用途 / Purpose:** 执行 `begin mission` 操作或流程。

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `done input key` 的值或状态。

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**用途 / Purpose:** 设置 `reset input key` 的值或状态。

## 使用示例

```csharp
var value = new OrderOfBattleVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)