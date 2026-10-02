---
title: "MapEventVisualsVM"
description: "MapEventVisualsVM：SandBox.ViewModelCollection.Map 的 public 类，继承 ViewModel；公开成员 6 个（方法 4、属性 1、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapEventVisualsVM

**Namespace:** `SandBox.ViewModelCollection.Map`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapEventVisualsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapEventVisualsVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapEventVisualsVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 6 个：4 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapEventVisualsVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Map`，继承链 MapEventVisualsVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Map/MapEventVisualsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapEventVisualsVM` | `public MapEventVisualsVM(Camera mapCamera)` | 构造函数 |
| `Update` | `public void Update(float dt)` | 方法 |
| `OnMapEventVisibilityChanged` | `public void OnMapEventVisibilityChanged(MapEvent mapEvent)` | 方法 |
| `OnMapEventStarted` | `public void OnMapEventStarted(MapEvent mapEvent)` | 方法 |
| `OnMapEventEnded` | `public void OnMapEventEnded(MapEvent mapEvent)` | 方法 |
| `MBBindingList` | `public MBBindingList<MapEventVisualItemVM>MapEvents` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 MapEventVisualItemVM](../MapEventVisualItemVM/)
