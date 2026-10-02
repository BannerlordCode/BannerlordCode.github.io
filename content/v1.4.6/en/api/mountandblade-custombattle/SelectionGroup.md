---
title: "SelectionGroup"
description: "SelectionGroup: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 7 exposed members (2 methods, 3 properties, 1 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs."
---
# SelectionGroup

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class SelectionGroup : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs`

## Overview

SelectionGroup lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SelectionGroup → ViewModel. It exposes 7 public/protected members: 2 methods, 3 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectionGroup is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain SelectionGroup → ViewModel. The surface is property-led (properties 3/7, methods 2/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectionGroup` | `public SelectionGroup(string name, List<string>textList = null)` | constructor |
| `ClickSelectionLeft` | `protected virtual void ClickSelectionLeft()` | method |
| `ClickSelectionRight` | `protected virtual void ClickSelectionRight()` | method |
| `Text` | `public string Text` | property |
| `List` | `public List<string>TextList` | property |
| `Index` | `public int Index` | property |
| `List` | `protected List<string>_textList` | field |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
