---
title: "MapInfoItemVM"
description: "MapInfoItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar 的 public 类，继承 ViewModel；公开成员 10 个（方法 3、属性 5、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapInfoItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapInfoItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

MapInfoItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapInfoItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 10 个：3 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapInfoItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，继承链 MapInfoItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 5/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapInfoItemVM` | `public MapInfoItemVM(string itemId, Func<List<TooltipProperty>>getTooltip)` | 构造函数 |
| `MapInfoItemVM` | `public MapInfoItemVM(string itemId, TooltipTriggerVM tooltipTrigger)` | 构造函数 |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | 方法 |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | 方法 |
| `SetOverriddenVisualId` | `public void SetOverriddenVisualId(string visualId)` | 方法 |
| `HasWarning` | `public bool HasWarning` | 属性 |
| `IntValue` | `public int IntValue` | 属性 |
| `FloatValue` | `public float FloatValue` | 属性 |
| `VisualId` | `public string VisualId` | 属性 |
| `Value` | `public string Value` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapBarShortcuts](../MapBarShortcuts/)
- [同命名空间 MapBarVM](../MapBarVM/)
- [同命名空间 MapInfoVM](../MapInfoVM/)
- [同命名空间 MapNavigationItemVM](../MapNavigationItemVM/)
