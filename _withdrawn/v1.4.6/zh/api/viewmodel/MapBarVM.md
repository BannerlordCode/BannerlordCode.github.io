---
title: "MapBarVM"
description: "MapBarVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar 的 public 类，继承 ViewModel；公开成员 18 个（方法 7、属性 11、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapBarVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapBarVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MapBarVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapBarVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：7 方法、11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapBarVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，继承链 MapBarVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 11/18，方法 7/18），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapBarVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateInfoVM` | `protected virtual MapInfoVM CreateInfoVM()` | 方法 |
| `Initialize` | `public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts>getMapBarShortcuts, Action openArmyManagement)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnRefresh` | `public void OnRefresh()` | 方法 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `ExecuteArmyManagement` | `public void ExecuteArmyManagement()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `MapInfo` | `public MapInfoVM MapInfo` | 属性 |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl` | 属性 |
| `MapNavigation` | `public MapNavigationVM MapNavigation` | 属性 |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible` | 属性 |
| `IsInInfoMode` | `public bool IsInInfoMode` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `CanGatherArmy` | `public bool CanGatherArmy` | 属性 |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint` | 属性 |
| `IsCameraCentered` | `public bool IsCameraCentered` | 属性 |
| `CurrentScreen` | `public string CurrentScreen` | 属性 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapBarShortcuts](../MapBarShortcuts/)
- [同命名空间 MapInfoItemVM](../MapInfoItemVM/)
- [同命名空间 MapInfoVM](../MapInfoVM/)
- [同命名空间 MapNavigationItemVM](../MapNavigationItemVM/)
