---
title: "MapItemVM"
description: "MapItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem, inheriting SelectorItemVM; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class MapItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

MapItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is MapItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapItemVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`, inheritance chain MapItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapName` | `public string MapName` | property |
| `MapId` | `public string MapId` | property |
| `ForcedSceneLevel` | `public string ForcedSceneLevel` | property |
| `MapItemVM` | `public MapItemVM(string mapName, string mapId, string forcedSceneLevel) : base(mapName)` | constructor |
| `UpdateSearchedText` | `public void UpdateSearchedText(string searchedText)` | method |
| `NameText` | `public string NameText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorItemVM](../../viewmodel/SelectorItemVM/)
- [same namespace CharacterItemVM](../CharacterItemVM/)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM/)
- [same namespace FactionItemVM](../FactionItemVM/)
- [same namespace GameTypeItemVM](../GameTypeItemVM/)
