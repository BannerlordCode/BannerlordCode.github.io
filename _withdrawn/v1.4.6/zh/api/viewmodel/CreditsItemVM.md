---
title: "CreditsItemVM"
description: "CreditsItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.Credits 的 public 类，继承 ViewModel；公开成员 4 个（方法 0、属性 3、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CreditsItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Credits`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CreditsItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

CreditsItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CreditsItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 4 个：3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CreditsItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Credits`，继承链 CreditsItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 3/4，方法 0/4），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Text` | `public string Text` | 属性 |
| `Type` | `public string Type` | 属性 |
| `MBBindingList` | `public MBBindingList<CreditsItemVM>Items` | 属性 |
| `CreditsItemVM` | `public CreditsItemVM()` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CreditsVM](../CreditsVM/)
