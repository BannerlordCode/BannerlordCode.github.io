---
title: "PersuasionChanceVisualListPanel"
description: "PersuasionChanceVisualListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ListPanel; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Conversation/PersuasionChanceVisualListPanel.cs."
---
# PersuasionChanceVisualListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Conversation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PersuasionChanceVisualListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Conversation/PersuasionChanceVisualListPanel.cs`

## Overview

PersuasionChanceVisualListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Conversation/PersuasionChanceVisualListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is PersuasionChanceVisualListPanel → ListPanel. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PersuasionChanceVisualListPanel is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.Conversation) the module directory; inheritance chain PersuasionChanceVisualListPanel → ListPanel. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ListPanel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/Conversation/PersuasionChanceVisualListPanel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFailChance` | `public bool IsFailChance` | property |
| `PersuasionChanceVisualListPanel` | `public PersuasionChanceVisualListPanel(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ChanceValue` | `public int ChanceValue` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
