---
title: "MultiSelectionQueryPopUpVM"
description: "MultiSelectionQueryPopUpVM：TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries 的 public 类，继承 PopUpBaseVM；公开成员 11 个（方法 4、属性 6、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiSelectionQueryPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MultiSelectionQueryPopUpVM : PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

MultiSelectionQueryPopUpVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs。它是一个 public 类，实现/继承 PopUpBaseVM，继承链为 MultiSelectionQueryPopUpVM → PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：4 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiSelectionQueryPopUpVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`，继承链 MultiSelectionQueryPopUpVM → PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 6/11，方法 4/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiSelectionQueryPopUpVM` | `public MultiSelectionQueryPopUpVM(Action closeQuery) : base(closeQuery)` | 构造函数 |
| `SetData` | `public void SetData(MultiSelectionInquiryData data)` | 方法 |
| `ExecuteAffirmativeAction` | `public override void ExecuteAffirmativeAction()` | 方法 |
| `ExecuteNegativeAction` | `public override void ExecuteNegativeAction()` | 方法 |
| `OnClearData` | `public override void OnClearData()` | 方法 |
| `MBBindingList` | `public MBBindingList<InquiryElementVM>InquiryElements` | 属性 |
| `MaxSelectableOptionCount` | `public int MaxSelectableOptionCount` | 属性 |
| `MinSelectableOptionCount` | `public int MinSelectableOptionCount` | 属性 |
| `IsSearchAvailable` | `public bool IsSearchAvailable` | 属性 |
| `SearchText` | `public string SearchText` | 属性 |
| `SearchPlaceholderText` | `public string SearchPlaceholderText` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PopUpBaseVM](../PopUpBaseVM/)
- [同命名空间 PopUpBaseVM](../PopUpBaseVM/)
- [同命名空间 SingleQueryPopUpVM](../SingleQueryPopUpVM/)
- [同命名空间 TextQueryPopUpVM](../TextQueryPopUpVM/)
