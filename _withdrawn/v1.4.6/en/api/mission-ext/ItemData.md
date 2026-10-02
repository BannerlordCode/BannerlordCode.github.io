---
title: "ItemData"
description: "ItemData: a public class in TaleWorlds.MountAndBlade.Diamond; 11 exposed members (5 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ItemData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ItemData`
**File:** `TaleWorlds.MountAndBlade.Diamond/ItemData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ItemData lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ItemData.cs. It is a public class; the inheritance chain is ItemData. It exposes 11 public/protected members: 5 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ItemData. The surface is property-led (properties 6/11, methods 5/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ItemData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TypeId` | `public string TypeId` | property |
| `ModifierId` | `public string ModifierId` | property |
| `Index` | `public int? Index` | property |
| `CopyItemData` | `public void CopyItemData(ItemData itemdata)` | method |
| `CanItemToEquipmentDragPossible` | `public bool CanItemToEquipmentDragPossible(int equipmentIndex)` | method |
| `CanItemToEquipmentDragPossible` | `public static bool CanItemToEquipmentDragPossible(string itemTypeId, int equipmentIndex)` | method |
| `Price` | `public int Price` | property |
| `IsValid` | `public bool IsValid` | property |
| `ItemKey` | `public string ItemKey` | property |
| `GetPriceOf` | `public static int GetPriceOf(string itemId, string modifierId)` | method |
| `IsItemValid` | `public static bool IsItemValid(string itemId, string modifierId)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
