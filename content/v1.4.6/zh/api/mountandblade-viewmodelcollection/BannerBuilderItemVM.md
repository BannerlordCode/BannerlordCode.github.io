---
title: "BannerBuilderItemVM"
description: "BannerBuilderItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 8 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs。"
---
# BannerBuilderItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs`

## 概述

BannerBuilderItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BannerBuilderItemVM → ViewModel。public/protected 成员共 8 个：1 方法、5 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerBuilderItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder），继承链 BannerBuilderItemVM → ViewModel。成员构成以属性为主（属性 5/8，方法 1/8），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IconData` | `public BannerIconData IconData` | 属性 |
| `BackgroundTextureID` | `public string BackgroundTextureID` | 属性 |
| `BannerBuilderItemVM` | `public BannerBuilderItemVM(int key, BannerIconData iconData, Action<BannerBuilderItemVM>onItemSelection)` | 构造函数 |
| `BannerBuilderItemVM` | `public BannerBuilderItemVM(int key, string backgroundTextureID, Action<BannerBuilderItemVM>onItemSelection)` | 构造函数 |
| `ExecuteSelection` | `public void ExecuteSelection()` | 方法 |
| `MeshID` | `public int MeshID` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `MeshIDAsString` | `public string MeshIDAsString` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerBuilderCategoryVM](../BannerBuilderCategoryVM)
- [同命名空间 BannerBuilderColorItemVM](../BannerBuilderColorItemVM)
- [同命名空间 BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM)
- [同命名空间 BannerBuilderLayerVM](../BannerBuilderLayerVM)
