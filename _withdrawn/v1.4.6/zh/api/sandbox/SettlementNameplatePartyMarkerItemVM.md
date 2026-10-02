---
title: "SettlementNameplatePartyMarkerItemVM"
description: "SettlementNameplatePartyMarkerItemVM：SandBox.ViewModelCollection.Nameplate 的 public 类，继承 ViewModel；公开成员 8 个（方法 0、属性 7、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkerItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplatePartyMarkerItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplatePartyMarkerItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkerItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SettlementNameplatePartyMarkerItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkerItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SettlementNameplatePartyMarkerItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplatePartyMarkerItemVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Nameplate`，继承链 SettlementNameplatePartyMarkerItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/8，方法 0/8），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkerItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Party` | `public MobileParty Party` | 属性 |
| `SortIndex` | `public int SortIndex` | 属性 |
| `SettlementNameplatePartyMarkerItemVM` | `public SettlementNameplatePartyMarkerItemVM(MobileParty mobileParty)` | 构造函数 |
| `Visual` | `public BannerImageIdentifierVM Visual` | 属性 |
| `IsCaravan` | `public bool IsCaravan` | 属性 |
| `IsLord` | `public bool IsLord` | 属性 |
| `IsDefault` | `public bool IsDefault` | 属性 |
| `IsBandit` | `public bool IsBandit` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 NameplateVM](../NameplateVM/)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM/)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM/)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
