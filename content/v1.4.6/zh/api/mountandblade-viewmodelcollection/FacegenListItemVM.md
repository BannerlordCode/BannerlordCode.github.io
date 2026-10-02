---
title: "FacegenListItemVM"
description: "FacegenListItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 5 个（方法 1、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs。"
---
# FacegenListItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FacegenListItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs`

## 概述

FacegenListItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 FacegenListItemVM → ViewModel。public/protected 成员共 5 个：1 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FacegenListItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.FaceGenerator），继承链 FacegenListItemVM → ViewModel。成员构成以属性为主（属性 3/5，方法 1/5），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/FaceGenerator/FacegenListItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `FacegenListItemVM` | `public FacegenListItemVM(string imagePath, int index, Action<FacegenListItemVM, bool>setSelected)` | 构造函数 |
| `ImagePath` | `public string ImagePath` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `Index` | `public int Index` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FaceGenPropertyVM](../FaceGenPropertyVM)
- [同命名空间 FaceGenVM](../FaceGenVM)
