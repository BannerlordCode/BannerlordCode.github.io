---
title: "MapEventVisualItemVM"
description: "MapEventVisualItemVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 9 个（方法 4、属性 4、字段 0）。源文件 SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs。"
---
# MapEventVisualItemVM

**Namespace:** `SandBox.ViewModelCollection.Map`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class MapEventVisualItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs`

## 概述

MapEventVisualItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 MapEventVisualItemVM → ViewModel。public/protected 成员共 9 个：4 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapEventVisualItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Map），继承链 MapEventVisualItemVM → ViewModel。成员构成以方法为主（方法 4/9，属性 4/9），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapEvent` | `public MapEvent MapEvent` | 属性 |
| `MapEventVisualItemVM` | `public MapEventVisualItemVM(Camera mapCamera, MapEvent mapEvent)` | 构造函数 |
| `UpdateProperties` | `public void UpdateProperties()` | 方法 |
| `ParallelUpdatePosition` | `public void ParallelUpdatePosition()` | 方法 |
| `DetermineIsVisibleOnMap` | `public void DetermineIsVisibleOnMap()` | 方法 |
| `UpdateBindingProperties` | `public void UpdateBindingProperties()` | 方法 |
| `Position` | `public Vec2 Position` | 属性 |
| `EventType` | `public int EventType` | 属性 |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MapEventVisualsVM](../MapEventVisualsVM)
