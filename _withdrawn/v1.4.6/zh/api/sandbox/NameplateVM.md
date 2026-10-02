---
title: "NameplateVM"
description: "NameplateVM：SandBox.ViewModelCollection.Nameplate 的 public 类，继承 ViewModel；公开成员 15 个（方法 5、属性 9、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Nameplate/NameplateVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class NameplateVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

NameplateVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/NameplateVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 15 个：5 方法、9 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NameplateVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Nameplate`，继承链 NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 9/15，方法 5/15），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/NameplateVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Scale` | `public double Scale` | 属性 |
| `NameplateOrder` | `public int NameplateOrder` | 属性 |
| `OnTutorialNotificationElementChanged` | `protected void OnTutorialNotificationElementChanged(TutorialNotificationElementChangeEvent obj)` | 方法 |
| `RefreshDynamicProperties` | `public virtual void RefreshDynamicProperties(bool forceUpdate)` | 方法 |
| `RefreshPosition` | `public virtual void RefreshPosition()` | 方法 |
| `RefreshRelationStatus` | `public virtual void RefreshRelationStatus()` | 方法 |
| `RefreshTutorialStatus` | `public virtual void RefreshTutorialStatus(string newTutorialHighlightElementID)` | 方法 |
| `FactionColor` | `public string FactionColor` | 属性 |
| `DistanceToCamera` | `public float DistanceToCamera` | 属性 |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | 属性 |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `CanParley` | `public bool CanParley` | 属性 |
| `NameplateSize` | `protected enum NameplateSize` | 属性 |
| `NameplateSize` | `protected enum NameplateSize` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM/)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM/)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
- [同命名空间 SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM/)
