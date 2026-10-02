---
title: "PartyPlayerNameplateVM"
description: "PartyPlayerNameplateVM：SandBox.ViewModelCollection.Nameplate 的 public 类，继承 PartyNameplateVM；公开成员 10 个（方法 6、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyPlayerNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

PartyPlayerNameplateVM 位于 SandBox.ViewModelCollection 模块，源文件 SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs。它是一个 public 类，实现/继承 PartyNameplateVM，继承链为 PartyPlayerNameplateVM → PartyNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 10 个：6 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyPlayerNameplateVM 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.ViewModelCollection.Nameplate`，继承链 PartyPlayerNameplateVM → PartyNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/10，属性 3/10），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyPlayerNameplateVM` | `public PartyPlayerNameplateVM()` | 构造函数 |
| `InitializePlayerNameplate` | `public void InitializePlayerNameplate(Action resetCamera)` | 方法 |
| `Clear` | `public override void Clear()` | 方法 |
| `RefreshDynamicProperties` | `public override void RefreshDynamicProperties(bool forceUpdate)` | 方法 |
| `RefreshBinding` | `public override void RefreshBinding()` | 方法 |
| `RefreshPosition` | `public override void RefreshPosition()` | 方法 |
| `ExecuteSetCameraPosition` | `public void ExecuteSetCameraPosition()` | 方法 |
| `IsMainParty` | `public bool IsMainParty` | 属性 |
| `IsPrisoner` | `public bool IsPrisoner` | 属性 |
| `MainHeroVisual` | `public CharacterImageIdentifierVM MainHeroVisual` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PartyNameplateVM](../PartyNameplateVM/)
- [同命名空间 NameplateVM](../NameplateVM/)
- [同命名空间 PartyNameplatesVM](../PartyNameplatesVM/)
- [同命名空间 PartyNameplateVM](../PartyNameplateVM/)
- [同命名空间 SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM/)
