---
title: "PartyNameplatesVM"
description: "PartyNameplatesVM: a public class in SandBox.ViewModelCollection.Nameplate, inheriting ViewModel; 7 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/PartyNameplatesVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyNameplatesVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PartyNameplatesVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyNameplatesVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PartyNameplatesVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/PartyNameplatesVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartyNameplatesVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyNameplatesVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate`, inheritance chain PartyNameplatesVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/PartyNameplatesVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyNameplatesVM` | `public PartyNameplatesVM(Camera mapCamera, Action resetCamera)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Initialize` | `public void Initialize()` | method |
| `Update` | `public void Update()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `MBBindingList` | `public MBBindingList<PartyNameplateVM>Nameplates` | property |
| `PlayerNameplate` | `public PartyPlayerNameplateVM PlayerNameplate` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace NameplateVM](../NameplateVM/)
- [same namespace PartyNameplateVM](../PartyNameplateVM/)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
- [same namespace SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM/)
