---
title: "SettlementNameplatesVM"
description: "SettlementNameplatesVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 13 个（方法 8、属性 4、字段 0）。源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs。"
---
# SettlementNameplatesVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplatesVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs`

## 概述

SettlementNameplatesVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SettlementNameplatesVM → ViewModel。public/protected 成员共 13 个：8 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplatesVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate），继承链 SettlementNameplatesVM → ViewModel。成员构成以方法为主（方法 8/13，属性 4/13），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<SettlementNameplateVM>AllNameplates` | 属性 |
| `SettlementNameplatesVM` | `public SettlementNameplatesVM(Camera mapCamera, Action<CampaignVec2>fastMoveCameraToPosition)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Initialize` | `public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>>settlements)` | 方法 |
| `Update` | `public void Update()` | 方法 |
| `GetNameplateOfSettlement` | `public SettlementNameplateVM GetNameplateOfSettlement(Settlement settlement)` | 方法 |
| `OnRebelliousClanDisbandedAtSettlement` | `public void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)` | 方法 |
| `RefreshRelationsOfNameplates` | `public void RefreshRelationsOfNameplates()` | 方法 |
| `RefreshDynamicPropertiesOfNameplates` | `public void RefreshDynamicPropertiesOfNameplates(bool forceUpdate)` | 方法 |
| `MBBindingList` | `public MBBindingList<SettlementNameplateVM>SmallNameplates` | 属性 |
| `MBBindingList` | `public MBBindingList<SettlementNameplateVM>MediumNameplates` | 属性 |
| `MBBindingList` | `public MBBindingList<SettlementNameplateVM>LargeNameplates` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 NameplateVM](../NameplateVM)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
