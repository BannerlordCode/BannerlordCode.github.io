---
title: "ItemCollectionElementViewExtensions"
description: "ItemCollectionElementViewExtensions：TaleWorlds.MountAndBlade.View 的 public 类；公开成员 15 个（方法 15、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemCollectionElementViewExtensions

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ItemCollectionElementViewExtensions`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ItemCollectionElementViewExtensions 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs。它是一个 public 类，继承链为 ItemCollectionElementViewExtensions。public/protected 成员共 15 个：15 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemCollectionElementViewExtensions 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View`，继承链 ItemCollectionElementViewExtensions。成员构成以方法为主（方法 15/15，属性 0/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaterialCacheID` | `public static string GetMaterialCacheID(object o)` | 方法 |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(this ItemObject item, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | 方法 |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(this EquipmentElement equipmentElement, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | 方法 |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(this MissionWeapon weapon, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | 方法 |
| `GetItemMeshForInventory` | `public static MetaMesh GetItemMeshForInventory(this ItemRosterElement rosterElement, bool isFemale = false)` | 方法 |
| `GetHolsterMeshCopy` | `public static MetaMesh GetHolsterMeshCopy(this ItemObject item)` | 方法 |
| `GetHolsterMeshIfExists` | `public static MetaMesh GetHolsterMeshIfExists(this ItemObject item)` | 方法 |
| `GetHolsterWithWeaponMeshCopy` | `public static MetaMesh GetHolsterWithWeaponMeshCopy(this ItemObject item, bool needBatchedVersion)` | 方法 |
| `GetHolsterWithWeaponMeshIfExists` | `public static MetaMesh GetHolsterWithWeaponMeshIfExists(this ItemObject item)` | 方法 |
| `GetFlyingMeshCopy` | `public static MetaMesh GetFlyingMeshCopy(this ItemObject item, bool needBatchedVersion)` | 方法 |
| `GetFlyingMeshIfExists` | `public static MetaMesh GetFlyingMeshIfExists(this ItemObject item)` | 方法 |
| `GetCameraFrameForInventory` | `public static MatrixFrame GetCameraFrameForInventory(this ItemRosterElement itemRosterElement)` | 方法 |
| `GetItemFrameForInventory` | `public static MatrixFrame GetItemFrameForInventory(this ItemRosterElement itemRosterElement)` | 方法 |
| `GetItemFrameForItemTooltip` | `public static MatrixFrame GetItemFrameForItemTooltip(this ItemRosterElement itemRosterElement)` | 方法 |
| `OnGetWeaponData` | `public static void OnGetWeaponData(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AgentVisuals](../AgentVisuals/)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator/)
- [同命名空间 BannerVisual](../BannerVisual/)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator/)
