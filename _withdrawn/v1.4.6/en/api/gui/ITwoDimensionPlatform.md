---
title: "ITwoDimensionPlatform"
description: "ITwoDimensionPlatform: a public interface in TaleWorlds.TwoDimension; 25 exposed members (20 methods, 5 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ITwoDimensionPlatform

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public interface ITwoDimensionPlatform`
**File:** `TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

ITwoDimensionPlatform lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs. It is a public interface; the inheritance chain is ITwoDimensionPlatform. It exposes 25 public/protected members: 20 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITwoDimensionPlatform lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain ITwoDimensionPlatform. The surface is method-led (methods 20/25, properties 5/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/ITwoDimensionPlatform.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Width` | `float Width` | property |
| `Height` | `float Height` | property |
| `ReferenceWidth` | `float ReferenceWidth` | property |
| `ReferenceHeight` | `float ReferenceHeight` | property |
| `ApplicationTime` | `float ApplicationTime` | property |
| `OnFrameBegin` | `void OnFrameBegin();` | method |
| `OnFrameEnd` | `void OnFrameEnd();` | method |
| `Clear` | `void Clear();` | method |
| `DrawImage` | `void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer);` | method |
| `DrawText` | `void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer);` | method |
| `SetScissor` | `void SetScissor(ScissorTestInfo scissorTestInfo);` | method |
| `ResetScissors` | `void ResetScissors();` | method |
| `PlaySound` | `void PlaySound(string soundName);` | method |
| `CreateSoundEvent` | `void CreateSoundEvent(string soundName);` | method |
| `PlaySoundEvent` | `void PlaySoundEvent(string soundName);` | method |
| `StopAndRemoveSoundEvent` | `void StopAndRemoveSoundEvent(string soundName);` | method |
| `OpenOnScreenKeyboard` | `void OpenOnScreenKeyboard(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum);` | method |
| `BeginDebugPanel` | `void BeginDebugPanel(string panelTitle);` | method |
| `EndDebugPanel` | `void EndDebugPanel();` | method |
| `DrawDebugText` | `void DrawDebugText(string text);` | method |
| `DrawDebugTreeNode` | `bool DrawDebugTreeNode(string text);` | method |
| `PopDebugTreeNode` | `void PopDebugTreeNode();` | method |
| `DrawCheckbox` | `void DrawCheckbox(string label, ref bool isChecked);` | method |
| `IsDebugItemHovered` | `bool IsDebugItemHovered();` | method |
| `IsDebugModeEnabled` | `bool IsDebugModeEnabled();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
