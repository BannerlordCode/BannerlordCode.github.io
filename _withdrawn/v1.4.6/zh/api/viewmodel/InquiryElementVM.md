---
title: "InquiryElementVM"
description: "InquiryElementVM：TaleWorlds.Core.ViewModelCollection.Information 的 public 类，继承 ViewModel；公开成员 8 个（方法 0、属性 7、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InquiryElementVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class InquiryElementVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## 概述

InquiryElementVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 InquiryElementVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 8 个：7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InquiryElementVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.Core.ViewModelCollection`），命名空间 `TaleWorlds.Core.ViewModelCollection.Information`，继承链 InquiryElementVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/8，方法 0/8），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/InquiryElementVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InquiryElementVM` | `public InquiryElementVM(InquiryElement elementData, TextObject hint, Action<InquiryElementVM, bool>onSelectedStateChanged = null)` | 构造函数 |
| `IsFilteredOut` | `public bool IsFilteredOut` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasVisuals` | `public bool HasVisuals` | 属性 |
| `IsEnabled` | `public bool IsEnabled` | 属性 |
| `Text` | `public string Text` | 属性 |
| `ImageIdentifier` | `public ImageIdentifierVM ImageIdentifier` | 属性 |
| `Hint` | `public HintViewModel Hint` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 BasicTooltipViewModel](../BasicTooltipViewModel/)
- [同命名空间 GameNotificationItemVM](../GameNotificationItemVM/)
- [同命名空间 GameNotificationVM](../GameNotificationVM/)
- [同命名空间 HintViewModel](../HintViewModel/)
