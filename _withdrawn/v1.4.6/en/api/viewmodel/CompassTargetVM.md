---
title: "CompassTargetVM"
description: "CompassTargetVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass, inheriting ViewModel; 15 exposed members (2 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CompassTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CompassTargetVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

CompassTargetVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CompassTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 2 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompassTargetVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass`, inheritance chain CompassTargetVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/15, methods 2/15), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CompassMarkerVM](../CompassMarkerVM/)
