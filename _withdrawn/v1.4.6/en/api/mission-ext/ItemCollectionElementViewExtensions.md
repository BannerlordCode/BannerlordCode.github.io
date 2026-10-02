---
title: "ItemCollectionElementViewExtensions"
description: "ItemCollectionElementViewExtensions: a public class in TaleWorlds.MountAndBlade.View; 15 exposed members (15 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemCollectionElementViewExtensions

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ItemCollectionElementViewExtensions`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ItemCollectionElementViewExtensions lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs. It is a public class; the inheritance chain is ItemCollectionElementViewExtensions. It exposes 15 public/protected members: 15 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemCollectionElementViewExtensions lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain ItemCollectionElementViewExtensions. The surface is method-led (methods 15/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemCollectionElementViewExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMaterialCacheID` | `public static string GetMaterialCacheID(object o)` | method |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(this ItemObject item, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | method |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(this EquipmentElement equipmentElement, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | method |
| `GetMultiMesh` | `public static MetaMesh GetMultiMesh(this MissionWeapon weapon, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | method |
| `GetItemMeshForInventory` | `public static MetaMesh GetItemMeshForInventory(this ItemRosterElement rosterElement, bool isFemale = false)` | method |
| `GetHolsterMeshCopy` | `public static MetaMesh GetHolsterMeshCopy(this ItemObject item)` | method |
| `GetHolsterMeshIfExists` | `public static MetaMesh GetHolsterMeshIfExists(this ItemObject item)` | method |
| `GetHolsterWithWeaponMeshCopy` | `public static MetaMesh GetHolsterWithWeaponMeshCopy(this ItemObject item, bool needBatchedVersion)` | method |
| `GetHolsterWithWeaponMeshIfExists` | `public static MetaMesh GetHolsterWithWeaponMeshIfExists(this ItemObject item)` | method |
| `GetFlyingMeshCopy` | `public static MetaMesh GetFlyingMeshCopy(this ItemObject item, bool needBatchedVersion)` | method |
| `GetFlyingMeshIfExists` | `public static MetaMesh GetFlyingMeshIfExists(this ItemObject item)` | method |
| `GetCameraFrameForInventory` | `public static MatrixFrame GetCameraFrameForInventory(this ItemRosterElement itemRosterElement)` | method |
| `GetItemFrameForInventory` | `public static MatrixFrame GetItemFrameForInventory(this ItemRosterElement itemRosterElement)` | method |
| `GetItemFrameForItemTooltip` | `public static MatrixFrame GetItemFrameForItemTooltip(this ItemRosterElement itemRosterElement)` | method |
| `OnGetWeaponData` | `public static void OnGetWeaponData(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
