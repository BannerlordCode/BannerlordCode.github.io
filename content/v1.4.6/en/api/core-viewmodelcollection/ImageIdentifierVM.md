---
title: "ImageIdentifierVM"
description: "ImageIdentifierVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 7 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs."
---
# ImageIdentifierVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public abstract class ImageIdentifierVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs`

## Overview

ImageIdentifierVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is ImageIdentifierVM → ViewModel. It exposes 7 public/protected members: 1 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ImageIdentifierVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.ImageIdentifiers) the module directory; inheritance chain ImageIdentifierVM → ViewModel. The surface is property-led (properties 6/7, methods 1/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ImageIdentifier` | `protected ImageIdentifier ImageIdentifier` | property |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Id` | `public string Id` | property |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `TextureProviderName` | `public string TextureProviderName` | property |
| `IsEmpty` | `public bool IsEmpty` | property |
| `IsValid` | `public bool IsValid` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerImageIdentifierVM](../BannerImageIdentifierVM)
- [same namespace CharacterImageIdentifierVM](../CharacterImageIdentifierVM)
- [same namespace CraftingPieceImageIdentifierVM](../CraftingPieceImageIdentifierVM)
- [same namespace GenericImageIdentifierVM](../GenericImageIdentifierVM)
