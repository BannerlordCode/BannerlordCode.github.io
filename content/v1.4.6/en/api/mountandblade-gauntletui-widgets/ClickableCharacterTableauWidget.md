---
title: "ClickableCharacterTableauWidget"
description: "ClickableCharacterTableauWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting CharacterTableauWidget; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs."
---
# ClickableCharacterTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClickableCharacterTableauWidget : CharacterTableauWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs`

## Overview

ClickableCharacterTableauWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs. It is a public class, implementing/inheriting CharacterTableauWidget; the inheritance chain is ClickableCharacterTableauWidget → CharacterTableauWidget → TextureWidget. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClickableCharacterTableauWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ClickableCharacterTableauWidget → CharacterTableauWidget → TextureWidget. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ClickableCharacterTableauWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClickableCharacterTableauWidget` | `public ClickableCharacterTableauWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CharacterTableauWidget](../CharacterTableauWidget)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
