---
title: "CharacterCreationStageSelectionBarListPanel"
description: "CharacterCreationStageSelectionBarListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 12 exposed members (2 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs."
---
# CharacterCreationStageSelectionBarListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterCreationStageSelectionBarListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs`

## Overview

CharacterCreationStageSelectionBarListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is CharacterCreationStageSelectionBarListPanel → ListPanel. It exposes 12 public/protected members: 2 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationStageSelectionBarListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation) the module directory; inheritance chain CharacterCreationStageSelectionBarListPanel → ListPanel. The surface is property-led (properties 9/12, methods 2/12), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/CharacterCreationStageSelectionBarListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationStageSelectionBarListPanel` | `public CharacterCreationStageSelectionBarListPanel(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `StageButtonTemplate` | `public ButtonWidget StageButtonTemplate` | property |
| `BarFillWidget` | `public Widget BarFillWidget` | property |
| `BarCanvasWidget` | `public Widget BarCanvasWidget` | property |
| `CurrentStageIndex` | `public int CurrentStageIndex` | property |
| `TotalStagesCount` | `public int TotalStagesCount` | property |
| `OpenedStageIndex` | `public int OpenedStageIndex` | property |
| `FullButtonBrush` | `public string FullButtonBrush` | property |
| `EmptyButtonBrush` | `public string EmptyButtonBrush` | property |
| `FullBrightButtonBrush` | `public string FullBrightButtonBrush` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationNarrativeStageScreenWidget](../CharacterCreationNarrativeStageScreenWidget)
