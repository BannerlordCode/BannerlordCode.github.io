---
title: "MapItemVM"
description: "MapItemVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting SelectorItemVM; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs."
---
# MapItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class MapItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs`

## Overview

MapItemVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is MapItemVM → SelectorItemVM. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapItemVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem) the module directory; inheritance chain MapItemVM → SelectorItemVM. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. SelectorItemVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapName` | `public string MapName` | property |
| `MapId` | `public string MapId` | property |
| `ForcedSceneLevel` | `public string ForcedSceneLevel` | property |
| `MapItemVM` | `public MapItemVM(string mapName, string mapId, string forcedSceneLevel) : base(mapName)` | constructor |
| `UpdateSearchedText` | `public void UpdateSearchedText(string searchedText)` | method |
| `NameText` | `public string NameText` | property |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterItemVM](../CharacterItemVM)
- [same namespace CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [same namespace FactionItemVM](../FactionItemVM)
- [same namespace GameTypeItemVM](../GameTypeItemVM)
