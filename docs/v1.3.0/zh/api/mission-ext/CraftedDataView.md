<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftedDataView`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftedDataView

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataView`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs`

## 概述

`CraftedDataView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `CraftedDataView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CraftedData` | `public WeaponDesign CraftedData { get; }` |
| `WeaponMesh` | `public MetaMesh WeaponMesh { get; }` |
| `HolsterMesh` | `public MetaMesh HolsterMesh { get; }` |
| `HolsterMeshWithWeapon` | `public MetaMesh HolsterMeshWithWeapon { get; }` |
| `NonBatchedWeaponMesh` | `public MetaMesh NonBatchedWeaponMesh { get; }` |
| `NonBatchedHolsterMesh` | `public MetaMesh NonBatchedHolsterMesh { get; }` |
| `NonBatchedHolsterMeshWithWeapon` | `public MetaMesh NonBatchedHolsterMeshWithWeapon { get; }` |

## 主要方法

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### BuildWeaponMesh
`public static MetaMesh BuildWeaponMesh(WeaponDesign craftedData, float pivotDiff, bool pieceTypeHidingEnabledForHolster, bool batchAllMeshes)`

**用途 / Purpose:** 处理 `build weapon mesh` 相关逻辑。

### BuildHolsterMesh
`public static MetaMesh BuildHolsterMesh(WeaponDesign craftedData)`

**用途 / Purpose:** 处理 `build holster mesh` 相关逻辑。

### BuildHolsterMeshWithWeapon
`public static MetaMesh BuildHolsterMeshWithWeapon(WeaponDesign craftedData, float pivotDiff, bool batchAllMeshes)`

**用途 / Purpose:** 处理 `build holster mesh with weapon` 相关逻辑。

### OnMeshBuiltDelegate
`public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh)`

**用途 / Purpose:** 当 `mesh built delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var view = new CraftedDataView();
```

## 参见

- [完整类目录](../catalog)