---
title: "CraftedDataView"
description: "CraftedDataView 的自动生成类参考。"
---
# CraftedDataView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataView`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/CraftedDataView.cs`

## 概述

`CraftedDataView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `CraftedDataView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CraftedData` | `public WeaponDesign CraftedData { get; }` |
| `WeaponMesh` | `public MetaMesh WeaponMesh { get; }` |
| `HolsterMeshWithWeapon` | `public MetaMesh HolsterMeshWithWeapon { get; }` |

## 主要方法

### OnMeshBuiltDelegate
`public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh)`

**用途 / Purpose:** 在 mesh built delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CraftedDataView 实例
CraftedDataView craftedDataView = ...;
craftedDataView.OnMeshBuiltDelegate(weaponDesign, builtMesh);
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 CraftedDataView 实例
CraftedDataView craftedDataView = ...;
craftedDataView.Clear();
```

### BuildWeaponMesh
`public static MetaMesh BuildWeaponMesh(WeaponDesign craftedData, float pivotDiff, bool pieceTypeHidingEnabledForHolster, bool batchAllMeshes)`

**用途 / Purpose:** 组装并返回weapon mesh的构建结果。

```csharp
// 静态调用，不需要实例
CraftedDataView.BuildWeaponMesh(craftedData, 0, false, false);
```

### BuildHolsterMesh
`public static MetaMesh BuildHolsterMesh(WeaponDesign craftedData)`

**用途 / Purpose:** 组装并返回holster mesh的构建结果。

```csharp
// 静态调用，不需要实例
CraftedDataView.BuildHolsterMesh(craftedData);
```

### BuildHolsterMeshWithWeapon
`public static MetaMesh BuildHolsterMeshWithWeapon(WeaponDesign craftedData, float pivotDiff, bool batchAllMeshes)`

**用途 / Purpose:** 组装并返回holster mesh with weapon的构建结果。

```csharp
// 静态调用，不需要实例
CraftedDataView.BuildHolsterMeshWithWeapon(craftedData, 0, false);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
CraftedDataView view = ...;
```

## 参见

- [本区域目录](../)