---
title: "MaskedTextureWidget"
description: "MaskedTextureWidget: a public class in TaleWorlds.GauntletUI, inheriting TextureWidget; 9 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs."
---
# MaskedTextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class MaskedTextureWidget : TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs`

## Overview

MaskedTextureWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is MaskedTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MaskedTextureWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain MaskedTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverlayTextureScale` | `public float OverlayTextureScale` | property |
| `MaskedTextureWidget` | `public MaskedTextureWidget(UIContext context) : base(context)` | constructor |
| `OnClearTextureProvider` | `public override void OnClearTextureProvider()` | method |
| `OnContextActivated` | `protected internal override void OnContextActivated()` | method |
| `OnContextDeactivated` | `protected internal override void OnContextDeactivated()` | method |
| `ImageId` | `public string ImageId` | property |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `IsBig` | `public bool IsBig` | property |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TextureWidget](../TextureWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
