---
title: "ImageIdentifierWidget"
description: "ImageIdentifierWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextureWidget; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs."
---
# ImageIdentifierWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ImageIdentifierWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs`

## Overview

ImageIdentifierWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is ImageIdentifierWidget → TextureWidget. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ImageIdentifierWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ImageIdentifierWidget → TextureWidget. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. TextureWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ImageIdentifierWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget(UIContext context) : base(context)` | constructor |
| `OnContextActivated` | `protected override void OnContextActivated()` | method |
| `OnContextDeactivated` | `protected override void OnContextDeactivated()` | method |
| `OnClearTextureProvider` | `public override void OnClearTextureProvider()` | method |
| `ImageId` | `public string ImageId` | property |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `IsBig` | `public bool IsBig` | property |
| `HideWhenNull` | `public bool HideWhenNull` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
