---
title: "CreditsWidget"
description: "CreditsWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (5 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs."
---
# CreditsWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CreditsWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs`

## Overview

CreditsWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CreditsWidget → Widget. It exposes 9 public/protected members: 5 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CreditsWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits) the module directory; inheritance chain CreditsWidget → Widget. The surface is method-led (methods 5/9, properties 3/9), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreditsWidget` | `public CreditsWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | method |
| `OnPreviewRightStickMovement` | `protected override bool OnPreviewRightStickMovement()` | method |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | method |
| `OnRightStickMovement` | `protected override void OnRightStickMovement()` | method |
| `RootItemWidget` | `public Widget RootItemWidget` | property |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond` | property |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CreditsItemWidget](../CreditsItemWidget)
- [same namespace CreditsTextWidget](../CreditsTextWidget)
