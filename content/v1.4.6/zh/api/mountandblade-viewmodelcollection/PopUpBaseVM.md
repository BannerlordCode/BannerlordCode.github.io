---
title: "PopUpBaseVM"
description: "PopUpBaseVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 22 个（方法 9、属性 12、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs。"
---
# PopUpBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`

## 概述

PopUpBaseVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 PopUpBaseVM → ViewModel。public/protected 成员共 22 个：9 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PopUpBaseVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries），继承链 PopUpBaseVM → ViewModel。成员构成以属性为主（属性 12/22，方法 9/22），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PopUpBaseVM` | `public PopUpBaseVM(Action closeQuery)` | 构造函数 |
| `ExecuteAffirmativeAction` | `public abstract void ExecuteAffirmativeAction();` | 方法 |
| `ExecuteNegativeAction` | `public abstract void ExecuteNegativeAction();` | 方法 |
| `OnTick` | `public virtual void OnTick(float dt)` | 方法 |
| `OnClearData` | `public virtual void OnClearData()` | 方法 |
| `ForceRefreshKeyVisuals` | `public void ForceRefreshKeyVisuals()` | 方法 |
| `CloseQuery` | `public void CloseQuery()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `TitleText` | `public string TitleText` | 属性 |
| `PopUpLabel` | `public string PopUpLabel` | 属性 |
| `ButtonOkLabel` | `public string ButtonOkLabel` | 属性 |
| `ButtonCancelLabel` | `public string ButtonCancelLabel` | 属性 |
| `IsButtonOkShown` | `public bool IsButtonOkShown` | 属性 |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown` | 属性 |
| `IsButtonOkEnabled` | `public bool IsButtonOkEnabled` | 属性 |
| `IsButtonCancelEnabled` | `public bool IsButtonCancelEnabled` | 属性 |
| `ButtonOkHint` | `public HintViewModel ButtonOkHint` | 属性 |
| `ButtonCancelHint` | `public HintViewModel ButtonCancelHint` | 属性 |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | 方法 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | 方法 |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | 属性 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 MultiSelectionQueryPopUpVM](../MultiSelectionQueryPopUpVM)
- [同命名空间 SingleQueryPopUpVM](../SingleQueryPopUpVM)
- [同命名空间 TextQueryPopUpVM](../TextQueryPopUpVM)
