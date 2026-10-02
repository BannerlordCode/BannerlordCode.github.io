---
title: "SettlementNameplateEventItemVM"
description: "SettlementNameplateEventItemVM：SandBox.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 6 个（方法 0、属性 3、字段 0）。源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs。"
---
# SettlementNameplateEventItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateEventItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs`

## 概述

SettlementNameplateEventItemVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SettlementNameplateEventItemVM → ViewModel。public/protected 成员共 6 个：3 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SettlementNameplateEventItemVM 是 SandBox.ViewModelCollection 的顶层类型，命名空间与模块目录不同（SandBox.ViewModelCollection.Nameplate），继承链 SettlementNameplateEventItemVM → ViewModel。成员构成以属性为主（属性 3/6，方法 0/6），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementNameplateEventItemVM` | `public SettlementNameplateEventItemVM(SettlementNameplateEventItemVM.SettlementEventType eventType)` | 构造函数 |
| `SettlementNameplateEventItemVM` | `public SettlementNameplateEventItemVM(string productionIconId = "")` | 构造函数 |
| `Type` | `public int Type` | 属性 |
| `AdditionalParameters` | `public string AdditionalParameters` | 属性 |
| `SettlementEventType` | `public enum SettlementEventType` | 属性 |
| `SettlementEventType` | `public enum SettlementEventType` | 嵌套类型 |

## 参见

- [↑ sandbox-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 NameplateVM](../NameplateVM)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM)
- [同命名空间 PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
