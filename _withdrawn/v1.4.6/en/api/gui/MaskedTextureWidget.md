---
title: "MaskedTextureWidget"
description: "MaskedTextureWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting TextureWidget; 9 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MaskedTextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class MaskedTextureWidget : TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

MaskedTextureWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is MaskedTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MaskedTextureWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain MaskedTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/MaskedTextureWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureWidget](../TextureWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
