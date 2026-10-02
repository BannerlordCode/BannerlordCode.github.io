---
title: "BannerBuilderLayerVM"
description: "BannerBuilderLayerVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 36 个（方法 12、属性 23、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs。"
---
# BannerBuilderLayerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderLayerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs`

## 概述

BannerBuilderLayerVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 BannerBuilderLayerVM → ViewModel。public/protected 成员共 36 个：12 方法、23 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BannerBuilderLayerVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder），继承链 BannerBuilderLayerVM → ViewModel。成员构成以属性为主（属性 23/36，方法 12/36），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public BannerData Data` | 属性 |
| `BannerBuilderLayerVM` | `public BannerBuilderLayerVM(BannerData data, int layerIndex)` | 构造函数 |
| `Refresh` | `public void Refresh()` | 方法 |
| `ExecuteDelete` | `public void ExecuteDelete()` | 方法 |
| `ExecuteSelection` | `public void ExecuteSelection()` | 方法 |
| `SetLayerIndex` | `public void SetLayerIndex(int newIndex)` | 方法 |
| `ExecuteSelectColor1` | `public void ExecuteSelectColor1()` | 方法 |
| `ExecuteSelectColor2` | `public void ExecuteSelectColor2()` | 方法 |
| `ExecuteSwapColors` | `public void ExecuteSwapColors()` | 方法 |
| `ExecuteCenterSigil` | `public void ExecuteCenterSigil()` | 方法 |
| `ExecuteResetSize` | `public void ExecuteResetSize()` | 方法 |
| `ExecuteUpdateBanner` | `public void ExecuteUpdateBanner()` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `CanDeleteLayer` | `public bool CanDeleteLayer` | 属性 |
| `IsLayerPattern` | `public bool IsLayerPattern` | 属性 |
| `IsDrawStrokeActive` | `public bool IsDrawStrokeActive` | 属性 |
| `IsMirrorActive` | `public bool IsMirrorActive` | 属性 |
| `RotationValue` | `public float RotationValue` | 属性 |
| `RotationValue360` | `public int RotationValue360` | 属性 |
| `IconID` | `public int IconID` | 属性 |
| `LayerIndex` | `public int LayerIndex` | 属性 |
| `EditableAreaSize` | `public int EditableAreaSize` | 属性 |
| `TotalAreaSize` | `public int TotalAreaSize` | 属性 |
| `IconIDAsString` | `public string IconIDAsString` | 属性 |
| `Color1` | `public Color Color1` | 属性 |
| `Color2` | `public Color Color2` | 属性 |
| `Color1AsStr` | `public string Color1AsStr` | 属性 |
| `Color2AsStr` | `public string Color2AsStr` | 属性 |
| `PositionValue` | `public Vec2 PositionValue` | 属性 |
| `PositionValueX` | `public float PositionValueX` | 属性 |
| `PositionValueY` | `public float PositionValueY` | 属性 |
| `SizeValue` | `public Vec2 SizeValue` | 属性 |
| `SizeValueX` | `public float SizeValueX` | 属性 |
| `SizeValueY` | `public float SizeValueY` | 属性 |
| `SetLayerActions` | `public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM>onSelection, Action<BannerBuilderLayerVM>onDeletion, Action<int, Action<BannerBuilderColorItemVM>>onColorSelection)` | 方法 |
| `ResetLayerActions` | `public static void ResetLayerActions()` | 方法 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerBuilderCategoryVM](../BannerBuilderCategoryVM)
- [同命名空间 BannerBuilderColorItemVM](../BannerBuilderColorItemVM)
- [同命名空间 BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM)
- [同命名空间 BannerBuilderItemVM](../BannerBuilderItemVM)
