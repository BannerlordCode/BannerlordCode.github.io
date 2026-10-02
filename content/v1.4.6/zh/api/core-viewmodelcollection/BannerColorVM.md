---
title: "BannerColorVM"
description: "BannerColorVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 7 个（方法 2、属性 4、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs。"
---
# BannerColorVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.BannerEditor`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BannerColorVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs`

## 概述

BannerColorVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BannerColorVM → ViewModel。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerColorVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.BannerEditor），继承链 BannerColorVM → ViewModel。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ColorID` | `public int ColorID` | 属性 |
| `Color` | `public uint Color` | 属性 |
| `BannerColorVM` | `public BannerColorVM(int colorID, uint color, Action<BannerColorVM>onSelection)` | 构造函数 |
| `ExecuteSelectIcon` | `public void ExecuteSelectIcon()` | 方法 |
| `SetOnSelectionAction` | `public void SetOnSelectionAction(Action<BannerColorVM>onSelection)` | 方法 |
| `ColorAsStr` | `public string ColorAsStr` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerIconVM](../BannerIconVM)
- [同命名空间 BannerViewModel](../BannerViewModel)
