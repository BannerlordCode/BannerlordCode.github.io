---
title: "CompassTargetVM"
description: "CompassTargetVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 15 exposed members (2 methods, 12 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs."
---
# CompassTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CompassTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs`

## Overview

CompassTargetVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CompassTargetVM → ViewModel. It exposes 15 public/protected members: 2 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompassTargetVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass) the module directory; inheritance chain CompassTargetVM → ViewModel. The surface is property-led (properties 12/15, methods 2/15), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CompassTargetVM` | `public CompassTargetVM(TargetIconType iconType, uint color, uint color2, Banner banner, bool isAttacker, bool isAlly)` | constructor |
| `RefreshColor` | `public void RefreshColor(uint color, uint color2)` | method |
| `Refresh` | `public virtual void Refresh(float circleX, float x, float distance)` | method |
| `Banner` | `public BannerImageIdentifierVM Banner` | property |
| `IsFlag` | `public bool IsFlag` | property |
| `Distance` | `public int Distance` | property |
| `Color2` | `public string Color2` | property |
| `Color` | `public string Color` | property |
| `IconType` | `public string IconType` | property |
| `IconSpriteType` | `public string IconSpriteType` | property |
| `LetterCode` | `public string LetterCode` | property |
| `FullPosition` | `public float FullPosition` | property |
| `Position` | `public float Position` | property |
| `IsAttacker` | `public bool IsAttacker` | property |
| `IsEnemy` | `public bool IsEnemy` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CompassMarkerVM](../CompassMarkerVM)
