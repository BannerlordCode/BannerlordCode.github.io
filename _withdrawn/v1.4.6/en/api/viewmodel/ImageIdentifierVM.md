---
title: "ImageIdentifierVM"
description: "ImageIdentifierVM: a public class in TaleWorlds.Core.ViewModelCollection.ImageIdentifiers, inheriting ViewModel; 7 exposed members (1 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ImageIdentifierVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public abstract class ImageIdentifierVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

ImageIdentifierVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is ImageIdentifierVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 1 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ImageIdentifierVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`, inheritance chain ImageIdentifierVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/7, methods 1/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ImageIdentifier` | `protected ImageIdentifier ImageIdentifier` | property |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Id` | `public string Id` | property |
| `AdditionalArgs` | `public string AdditionalArgs` | property |
| `TextureProviderName` | `public string TextureProviderName` | property |
| `IsEmpty` | `public bool IsEmpty` | property |
| `IsValid` | `public bool IsValid` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerImageIdentifierVM](../BannerImageIdentifierVM/)
- [same namespace CharacterImageIdentifierVM](../CharacterImageIdentifierVM/)
- [same namespace CraftingPieceImageIdentifierVM](../CraftingPieceImageIdentifierVM/)
- [same namespace GenericImageIdentifierVM](../GenericImageIdentifierVM/)
