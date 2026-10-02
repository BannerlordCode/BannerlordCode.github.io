---
title: "CraftedDataView"
description: "CraftedDataView: a public class in TaleWorlds.MountAndBlade.View; 14 exposed members (5 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs."
---
# CraftedDataView

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class CraftedDataView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs`

## Overview

CraftedDataView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs. It is a public class; the inheritance chain is CraftedDataView. It exposes 14 public/protected members: 5 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftedDataView is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain CraftedDataView. The surface is property-led (properties 7/14, methods 5/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftedData` | `public WeaponDesign CraftedData` | property |
| `WeaponMesh` | `public MetaMesh WeaponMesh` | property |
| `HolsterMesh` | `public MetaMesh HolsterMesh` | property |
| `HolsterMeshWithWeapon` | `public MetaMesh HolsterMeshWithWeapon` | property |
| `NonBatchedWeaponMesh` | `public MetaMesh NonBatchedWeaponMesh` | property |
| `NonBatchedHolsterMesh` | `public MetaMesh NonBatchedHolsterMesh` | property |
| `NonBatchedHolsterMeshWithWeapon` | `public MetaMesh NonBatchedHolsterMeshWithWeapon` | property |
| `CraftedDataView` | `public CraftedDataView(WeaponDesign craftedData)` | constructor |
| `Clear` | `public void Clear()` | method |
| `BuildWeaponMesh` | `public static MetaMesh BuildWeaponMesh(WeaponDesign craftedData, float pivotDiff, bool pieceTypeHidingEnabledForHolster, bool batchAllMeshes)` | method |
| `BuildHolsterMesh` | `public static MetaMesh BuildHolsterMesh(WeaponDesign craftedData)` | method |
| `BuildHolsterMeshWithWeapon` | `public static MetaMesh BuildHolsterMeshWithWeapon(WeaponDesign craftedData, float pivotDiff, bool batchAllMeshes)` | method |
| `OnMeshBuiltDelegate` | `public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh);` | method |
| `OnMeshBuiltDelegate` | `public delegate void OnMeshBuiltDelegate(WeaponDesign weaponDesign, ref MetaMesh builtMesh)` | nested type |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
