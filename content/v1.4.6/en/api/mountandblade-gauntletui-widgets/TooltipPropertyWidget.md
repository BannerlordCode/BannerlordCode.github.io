---
title: "TooltipPropertyWidget"
description: "TooltipPropertyWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 34 exposed members (4 methods, 28 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs."
---
# TooltipPropertyWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TooltipPropertyWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs`

## Overview

TooltipPropertyWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TooltipPropertyWidget → Widget. It exposes 34 public/protected members: 4 methods, 28 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TooltipPropertyWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information) the module directory; inheritance chain TooltipPropertyWidget → Widget. The surface is property-led (properties 28/34, methods 4/34), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/TooltipPropertyWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsTwoColumn` | `public bool IsTwoColumn` | property |
| `PropertyModifierAsFlag` | `public TooltipPropertyWidget.TooltipPropertyFlags PropertyModifierAsFlag` | property |
| `IsMultiLine` | `public bool IsMultiLine` | property |
| `IsBattleMode` | `public bool IsBattleMode` | property |
| `IsBattleModeOver` | `public bool IsBattleModeOver` | property |
| `IsCost` | `public bool IsCost` | property |
| `IsRelation` | `public bool IsRelation` | property |
| `TooltipPropertyWidget` | `public TooltipPropertyWidget(UIContext context) : base(context)` | constructor |
| `SetBattleScope` | `public void SetBattleScope(bool battleScope)` | method |
| `RefreshSize` | `public void RefreshSize(bool inBattleScope, float battleScopeSize, float maxValueLabelSizeX, float maxDefinitionLabelSizeX, Brush definitionRelationBrush = null, Brush valueRelationBrush = null)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `RundownSeperatorSpriteName` | `public string RundownSeperatorSpriteName` | property |
| `DefaultSeperatorSpriteName` | `public string DefaultSeperatorSpriteName` | property |
| `TitleBackgroundSpriteName` | `public string TitleBackgroundSpriteName` | property |
| `ValueNameTextBrush` | `public Brush ValueNameTextBrush` | property |
| `TitleTextBrush` | `public Brush TitleTextBrush` | property |
| `SubtextBrush` | `public Brush SubtextBrush` | property |
| `ValueTextBrush` | `public Brush ValueTextBrush` | property |
| `DescriptionTextBrush` | `public Brush DescriptionTextBrush` | property |
| `ModifyDefinitionColor` | `public bool ModifyDefinitionColor` | property |
| `DefinitionLabel` | `public RichTextWidget DefinitionLabel` | property |
| `ValueLabel` | `public RichTextWidget ValueLabel` | property |
| `ItemModifierLabel` | `public TextWidget ItemModifierLabel` | property |
| `ValueBackgroundSpriteWidget` | `public ListPanel ValueBackgroundSpriteWidget` | property |
| `DefinitionLabelContainer` | `public Widget DefinitionLabelContainer` | property |
| `ValueLabelContainer` | `public Widget ValueLabelContainer` | property |
| `TextColor` | `public Color TextColor` | property |
| `TextHeight` | `public int TextHeight` | property |
| `DefinitionText` | `public string DefinitionText` | property |
| `ValueText` | `public string ValueText` | property |
| `PropertyModifier` | `public int PropertyModifier` | property |
| `TooltipPropertyFlags` | `public enum TooltipPropertyFlags` | property |
| `TooltipPropertyFlags` | `public enum TooltipPropertyFlags` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameNotificationWidget](../GameNotificationWidget)
- [same namespace MultiSelectionElementsWidget](../MultiSelectionElementsWidget)
- [same namespace PropertyBasedTooltipWidget](../PropertyBasedTooltipWidget)
