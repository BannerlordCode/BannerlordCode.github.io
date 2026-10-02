---
title: "OrderOfBattleVM"
description: "OrderOfBattleVM：TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle 的 public 类，继承 ViewModel；公开成员 50 个（方法 25、属性 24、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderOfBattleVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderOfBattleVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 50 个：25 方法、24 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，继承链 OrderOfBattleVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 25/50，属性 24/50），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalFormationCount` | `protected int TotalFormationCount` | 属性 |
| `List` | `public List<MissionOrderVM.FormationConfiguration>CurrentConfiguration` | 属性 |
| `OrderOfBattleVM` | `public OrderOfBattleVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `Initialize` | `public void Initialize(Mission mission, Camera missionCamera, Action<int>selectFormationAtIndex, Action<int>deselectFormationAtIndex, Action clearFormationSelection, Action onAutoDeploy, Action onBeginMission, Dictionary<int, Agent>formationIndicesAndSergeants)` | 方法 |
| `LoadConfiguration` | `protected virtual void LoadConfiguration()` | 方法 |
| `SaveConfiguration` | `protected virtual void SaveConfiguration()` | 方法 |
| `List` | `protected virtual List<TooltipProperty>GetAgentTooltip(Agent agent)` | 方法 |
| `OnAllFormationsAssignedSergeants` | `public void OnAllFormationsAssignedSergeants(Dictionary<int, Agent>preAssignedCaptains)` | 方法 |
| `IsAnyClassSelectionEnabled` | `public bool IsAnyClassSelectionEnabled()` | 方法 |
| `ExecuteDisableAllClassSelections` | `public void ExecuteDisableAllClassSelections()` | 方法 |
| `AssignCaptain` | `protected void AssignCaptain(Agent agent, OrderOfBattleFormationItemVM formationItem)` | 方法 |
| `ExecuteAcceptHeroes` | `public void ExecuteAcceptHeroes()` | 方法 |
| `ExecuteSelectAllHeroes` | `public void ExecuteSelectAllHeroes()` | 方法 |
| `ExecuteClearHeroSelection` | `public void ExecuteClearHeroSelection()` | 方法 |
| `OnDeploymentFinalized` | `public void OnDeploymentFinalized(bool playerDeployed)` | 方法 |
| `SelectFormationItemAtIndex` | `public void SelectFormationItemAtIndex(int index)` | 方法 |
| `FocusFormationItemAtIndex` | `public void FocusFormationItemAtIndex(int index)` | 方法 |
| `DeselectAllFormations` | `public void DeselectAllFormations()` | 方法 |
| `OnUnitDeployed` | `public void OnUnitDeployed()` | 方法 |
| `OnEscape` | `public bool OnEscape()` | 方法 |
| `ClearFormationItem` | `protected void ClearFormationItem(OrderOfBattleFormationItemVM formationItem)` | 方法 |
| `ExecuteAutoDeploy` | `public void ExecuteAutoDeploy()` | 方法 |
| `ExecuteBeginMission` | `public void ExecuteBeginMission()` | 方法 |
| `IsPoolAcceptingHeroTroops` | `public bool IsPoolAcceptingHeroTroops` | 属性 |
| `CanStartMission` | `public bool CanStartMission` | 属性 |
| `BeginMissionText` | `public string BeginMissionText` | 属性 |
| `HasSelectedHeroes` | `public bool HasSelectedHeroes` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationItemVM>FormationsFirstHalf` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled` | 属性 |
| `IsPlayerGeneral` | `public bool IsPlayerGeneral` | 属性 |
| `IsPoolAcceptingCaptain` | `public bool IsPoolAcceptingCaptain` | 属性 |
| `IsPoolAcceptingAny` | `public bool IsPoolAcceptingAny` | 属性 |
| `SelectedHeroCount` | `public int SelectedHeroCount` | 属性 |
| `AreHotkeysEnabled` | `public bool AreHotkeysEnabled` | 属性 |
| `ClearSelectionHint` | `public HintViewModel ClearSelectionHint` | 属性 |
| `AutoDeployText` | `public string AutoDeployText` | 属性 |
| `SelectAllHint` | `public HintViewModel SelectAllHint` | 属性 |
| `MissingFormationsHint` | `public HintViewModel MissingFormationsHint` | 属性 |
| `LastSelectedHeroItem` | `public OrderOfBattleHeroItemVM LastSelectedHeroItem` | 属性 |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationItemVM>FormationsSecondHalf` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderOfBattleHeroItemVM>UnassignedHeroes` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent/)
- [同命名空间 OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/)
- [同命名空间 OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer/)
