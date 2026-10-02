---
title: "MapIncidentVM"
description: "MapIncidentVM：SandBox.ViewModelCollection.Map.Incidents 的 public 类，继承 ViewModel；公开成员 18 个（方法 4、属性 13、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapIncidentVM

**Namespace:** `SandBox.ViewModelCollection.Map.Incidents`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapIncidentVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapIncidentVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapIncidentVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 18 个：4 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapIncidentVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Map.Incidents`，继承链 MapIncidentVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 13/18，方法 4/18），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Map/Incidents/MapIncidentVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapIncidentVM` | `public MapIncidentVM(Incident incident, Action onClose)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | 方法 |
| `CanConfirm` | `public bool CanConfirm` | 属性 |
| `HasFocusedOption` | `public bool HasFocusedOption` | 属性 |
| `HasSelectedOption` | `public bool HasSelectedOption` | 属性 |
| `Title` | `public string Title` | 属性 |
| `Description` | `public string Description` | 属性 |
| `ConfirmText` | `public string ConfirmText` | 属性 |
| `IncidentType` | `public string IncidentType` | 属性 |
| `ActiveHint` | `public string ActiveHint` | 属性 |
| `ConfirmHint` | `public HintViewModel ConfirmHint` | 属性 |
| `FocusedOption` | `public MapIncidentOptionVM FocusedOption` | 属性 |
| `SelectedOption` | `public MapIncidentOptionVM SelectedOption` | 属性 |
| `MBBindingList` | `public MBBindingList<MapIncidentOptionVM>Options` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapIncidentOptionVM](../MapIncidentOptionVM/)
