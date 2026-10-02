---
title: "MapIncidentOptionVM"
description: "MapIncidentOptionVM：SandBox.ViewModelCollection.Map.Incidents 的 public 类，继承 ViewModel；公开成员 10 个（方法 5、属性 4、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapIncidentOptionVM

**Namespace:** `SandBox.ViewModelCollection.Map.Incidents`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapIncidentOptionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapIncidentOptionVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapIncidentOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 10 个：5 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapIncidentOptionVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Map.Incidents`，继承链 MapIncidentOptionVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 5/10，属性 4/10），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Map/Incidents/MapIncidentOptionVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapIncidentOptionVM` | `public MapIncidentOptionVM(TextObject description, List<TextObject>hints, int index, Action<MapIncidentOptionVM>onSelected, Action<MapIncidentOptionVM>onFocused)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ExecuteSelect` | `public void ExecuteSelect()` | 方法 |
| `ExecuteFocus` | `public void ExecuteFocus()` | 方法 |
| `ExecuteUnfocus` | `public void ExecuteUnfocus()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `IsFocused` | `public bool IsFocused` | 属性 |
| `Description` | `public string Description` | 属性 |
| `Hint` | `public string Hint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapIncidentVM](../MapIncidentVM/)
