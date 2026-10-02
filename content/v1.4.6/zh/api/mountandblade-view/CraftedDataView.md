---
title: "CraftedDataView"
description: "CraftedDataView：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 14 个（方法 5、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs。"
---
# CraftedDataView

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CraftedDataView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs`

## 概述

CraftedDataView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs。它是一个 public 类，继承链为 CraftedDataView。public/protected 成员共 14 个：5 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftedDataView 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录一致，继承链 CraftedDataView。成员构成以属性为主（属性 7/14，方法 5/14），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftedData` | `public WeaponDesign CraftedData` | 属性 |
| `WeaponMesh` | `public MetaMesh WeaponMesh` | 属性 |
| `HolsterMesh` | `public MetaMesh HolsterMesh` | 属性 |
| `HolsterMeshWithWeapon` | `public MetaMesh HolsterMeshWithWeapon` | 属性 |
| `NonBatchedWeaponMesh` | `public MetaMesh NonBatchedWeaponMesh` | 属性 |
| `NonBatchedHolsterMesh` | `public MetaMesh NonBatchedHolsterMesh` | 属性 |
| `NonBatchedHolsterMeshWithWeapon` | `public MetaMesh NonBatchedHolsterMeshWithWeapon` | 属性 |
| `CraftedDataView` | `public CraftedDataView(WeaponDesign craftedData)` | 构造函数 |
| `Clear` | `public void Clear()` | 方法 |
| `BuildWeaponMesh` | `public static MetaMesh BuildWeaponMesh(WeaponDesign craftedData, float pivotDiff, bool pieceTypeHidingEnabledForHolster, bool batchAllMeshes)` | 方法 |
| `BuildHolsterMesh` | `public static MetaMesh BuildHolsterMesh(WeaponDesign craftedData)` | 方法 |
| `BuildHolsterMeshWithWeapon` | `public static MetaMesh BuildHolsterMeshWithWeapon(WeaponDesign craftedData, float pivotDiff, bool batchAllMeshes)` | 方法 |
| `OnMeshBuiltDelegate` | `public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh);` | 方法 |
| `OnMeshBuiltDelegate` | `public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh)` | 嵌套类型 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentVisuals](../AgentVisuals)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator)
- [同命名空间 BannerVisual](../BannerVisual)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator)
