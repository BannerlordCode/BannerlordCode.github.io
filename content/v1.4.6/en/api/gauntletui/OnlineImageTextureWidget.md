---
title: "OnlineImageTextureWidget"
description: "OnlineImageTextureWidget: a public class in TaleWorlds.GauntletUI, inheriting TextureWidget; 6 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs."
---
# OnlineImageTextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class OnlineImageTextureWidget : TextureWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs`

## Overview

OnlineImageTextureWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs. It is a public class, implementing/inheriting TextureWidget; the inheritance chain is OnlineImageTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OnlineImageTextureWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain OnlineImageTextureWidget → TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/OnlineImageTextureWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ImageSizePolicy` | `public OnlineImageTextureWidget.ImageSizePolicies ImageSizePolicy` | property |
| `OnlineImageTextureWidget` | `public OnlineImageTextureWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnlineImageSourceUrl` | `public string OnlineImageSourceUrl` | property |
| `ImageSizePolicies` | `public enum ImageSizePolicies` | property |
| `ImageSizePolicies` | `public enum ImageSizePolicies` | nested type |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TextureWidget](../TextureWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
