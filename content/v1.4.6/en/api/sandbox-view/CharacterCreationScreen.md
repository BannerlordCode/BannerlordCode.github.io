---
title: "CharacterCreationScreen"
description: "CharacterCreationScreen: a public class in SandBox.View, inheriting ScreenBase, ICharacterCreationStateHandler; 2 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox.View/CharacterCreation/CharacterCreationScreen.cs."
---
# CharacterCreationScreen

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public class CharacterCreationScreen : ScreenBase, ICharacterCreationStateHandler, IGameStateListener`
**File:** `SandBox.View/CharacterCreation/CharacterCreationScreen.cs`

## Overview

CharacterCreationScreen lives in the SandBox.View module, source file SandBox.View/CharacterCreation/CharacterCreationScreen.cs. It is a public class, implementing/inheriting ScreenBase, ICharacterCreationStateHandler, IGameStateListener; the inheritance chain is CharacterCreationScreen → ScreenBase. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationScreen is a top-level type in SandBox.View, namespace differing from (SandBox.View.CharacterCreation) the module directory; inheritance chain CharacterCreationScreen → ScreenBase. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/CharacterCreation/CharacterCreationScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationScreen` | `public CharacterCreationScreen(CharacterCreationState characterCreationState)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute)
- [same namespace CharacterCreationStageViewBase](../CharacterCreationStageViewBase)
