---
title: "SettlementNameplatePartyMarkersVM"
description: "SettlementNameplatePartyMarkersVM：SandBox.ViewModelCollection.Nameplate 的 public 类，继承 ViewModel；公开成员 6 个（方法 2、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplatePartyMarkersVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplatePartyMarkersVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SettlementNameplatePartyMarkersVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SettlementNameplatePartyMarkersVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 6 个：2 方法、2 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplatePartyMarkersVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Nameplate`，继承链 SettlementNameplatePartyMarkersVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 2/6，属性 2/6），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementNameplatePartyMarkersVM` | `public SettlementNameplatePartyMarkersVM(Settlement settlement)` | 构造函数 |
| `RegisterEvents` | `public void RegisterEvents()` | 方法 |
| `UnloadEvents` | `public void UnloadEvents()` | 方法 |
| `MBBindingList` | `public MBBindingList<SettlementNameplatePartyMarkerItemVM>PartiesInSettlement` | 属性 |
| `IComparer` | `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>` | 属性 |
| `IComparer` | `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 NameplateVM](../NameplateVM/)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM/)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM/)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
