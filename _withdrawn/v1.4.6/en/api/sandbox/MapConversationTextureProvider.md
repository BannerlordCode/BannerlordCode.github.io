---
title: "MapConversationTextureProvider"
description: "MapConversationTextureProvider: a public class in SandBox.GauntletUI, inheriting TextureProvider; 7 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/MapConversationTextureProvider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationTextureProvider

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MapConversationTextureProvider : TextureProvider`
**File:** `SandBox.GauntletUI/MapConversationTextureProvider.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MapConversationTextureProvider lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/MapConversationTextureProvider.cs. It is a public class, implementing/inheriting TextureProvider; the inheritance chain is MapConversationTextureProvider → TextureProvider. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationTextureProvider lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain MapConversationTextureProvider → TextureProvider. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/MapConversationTextureProvider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Data` | `public object Data` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `MapConversationTextureProvider` | `public MapConversationTextureProvider()` | constructor |
| `Clear` | `public override void Clear(bool clearNextFrame)` | method |
| `OnGetTextureForRender` | `protected override TaleWorlds.TwoDimension.Texture OnGetTextureForRender(TwoDimensionContext twoDimensionContext, string name)` | method |
| `SetTargetSize` | `public override void SetTargetSize(int width, int height)` | method |
| `Tick` | `public override void Tick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextureProvider](../../gui/TextureProvider/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
