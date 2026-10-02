---
title: "TextureWidget"
description: "TextureWidget: a public class in TaleWorlds.GauntletUI, inheriting ImageWidget; 15 exposed members (9 methods, 5 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs."
---
# TextureWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class TextureWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs`

## Overview

TextureWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs. It is a public class, implementing/inheriting ImageWidget; the inheritance chain is TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 15 public/protected members: 9 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextureWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain TextureWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 9/15, properties 5/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TextureWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LoadingIconWidget` | `public Widget LoadingIconWidget` | property |
| `TextureProvider` | `public TextureProvider TextureProvider` | property |
| `SetForClearNextFrame` | `public bool SetForClearNextFrame` | property |
| `TextureProviderName` | `public string TextureProviderName` | property |
| `Texture` | `public Texture Texture` | property |
| `TextureWidget` | `public TextureWidget(UIContext context) : base(context)` | constructor |
| `OnClearTextureProvider` | `public virtual void OnClearTextureProvider()` | method |
| `OnDisconnectedFromRoot` | `protected override void OnDisconnectedFromRoot()` | method |
| `SetTextureProviderProperty` | `protected void SetTextureProviderProperty(string name, object value)` | method |
| `GetTextureProviderProperty` | `protected object GetTextureProviderProperty(string propertyName)` | method |
| `GetTextureProviderProperty` | `protected TObject? GetTextureProviderProperty<TObject>(string propertyName) where TObject : struct` | method |
| `UpdateTextureWidget` | `protected void UpdateTextureWidget()` | method |
| `OnTextureUpdated` | `protected virtual void OnTextureUpdated()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ImageWidget](../ImageWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
