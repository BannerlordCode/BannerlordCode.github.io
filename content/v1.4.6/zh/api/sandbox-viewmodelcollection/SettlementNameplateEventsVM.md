---
title: "SettlementNameplateEventsVM"
description: "SettlementNameplateEventsVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 3、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs。"
---
# SettlementNameplateEventsVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateEventsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs`

## 概述

SettlementNameplateEventsVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SettlementNameplateEventsVM → ViewModel。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplateEventsVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate），继承链 SettlementNameplateEventsVM → ViewModel。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEventsRegistered` | `public bool IsEventsRegistered` | 属性 |
| `SettlementNameplateEventsVM` | `public SettlementNameplateEventsVM(Settlement settlement)` | 构造函数 |
| `Tick` | `public void Tick()` | 方法 |
| `RegisterEvents` | `public void RegisterEvents()` | 方法 |
| `UnloadEvents` | `public void UnloadEvents()` | 方法 |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>TrackQuests` | 属性 |
| `MBBindingList` | `public MBBindingList<SettlementNameplateEventItemVM>EventsList` | 属性 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 NameplateVM](../NameplateVM)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
