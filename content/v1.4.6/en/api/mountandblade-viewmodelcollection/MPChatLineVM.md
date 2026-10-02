---
title: "MPChatLineVM"
description: "MPChatLineVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatLineVM.cs."
---
# MPChatLineVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MPChatLineVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatLineVM.cs`

## Overview

MPChatLineVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatLineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MPChatLineVM → ViewModel. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPChatLineVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Multiplayer) the module directory; inheritance chain MPChatLineVM → ViewModel. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Multiplayer/MPChatLineVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MPChatLineVM` | `public MPChatLineVM(string chatLine, Color color, string category)` | constructor |
| `HandleFading` | `public void HandleFading(float dt)` | method |
| `ForceInvisible` | `public void ForceInvisible()` | method |
| `ToggleForceVisible` | `public void ToggleForceVisible(bool visible)` | method |
| `ChatLine` | `public string ChatLine` | property |
| `Color` | `public Color Color` | property |
| `Alpha` | `public float Alpha` | property |
| `Category` | `public string Category` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MPChatVM](../MPChatVM)
