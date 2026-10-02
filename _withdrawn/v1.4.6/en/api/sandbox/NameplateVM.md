---
title: "NameplateVM"
description: "NameplateVM: a public class in SandBox.ViewModelCollection.Nameplate, inheriting ViewModel; 15 exposed members (5 methods, 9 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/NameplateVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class NameplateVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

NameplateVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 15 public/protected members: 5 methods, 9 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NameplateVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate`, inheritance chain NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/15, methods 5/15), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Scale` | `public double Scale` | property |
| `NameplateOrder` | `public int NameplateOrder` | property |
| `OnTutorialNotificationElementChanged` | `protected void OnTutorialNotificationElementChanged(TutorialNotificationElementChangeEvent obj)` | method |
| `RefreshDynamicProperties` | `public virtual void RefreshDynamicProperties(bool forceUpdate)` | method |
| `RefreshPosition` | `public virtual void RefreshPosition()` | method |
| `RefreshRelationStatus` | `public virtual void RefreshRelationStatus()` | method |
| `RefreshTutorialStatus` | `public virtual void RefreshTutorialStatus(string newTutorialHighlightElementID)` | method |
| `FactionColor` | `public string FactionColor` | property |
| `DistanceToCamera` | `public float DistanceToCamera` | property |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap` | property |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial` | property |
| `Position` | `public Vec2 Position` | property |
| `CanParley` | `public bool CanParley` | property |
| `NameplateSize` | `protected enum NameplateSize` | property |
| `NameplateSize` | `protected enum NameplateSize` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM/)
- [same namespace PartyNameplateVM](../PartyNameplateVM/)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
- [same namespace SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM/)
