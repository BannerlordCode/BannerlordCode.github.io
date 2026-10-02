---
title: "SettlementNameplatePartyMarkersVM"
description: "SettlementNameplatePartyMarkersVM: a public class in SandBox.ViewModelCollection.Nameplate, inheriting ViewModel; 6 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplatePartyMarkersVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplatePartyMarkersVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SettlementNameplatePartyMarkersVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNameplatePartyMarkersVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplatePartyMarkersVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate`, inheritance chain SettlementNameplatePartyMarkersVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/6, properties 2/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkersVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SettlementNameplatePartyMarkersVM` | `public SettlementNameplatePartyMarkersVM(Settlement settlement)` | constructor |
| `RegisterEvents` | `public void RegisterEvents()` | method |
| `UnloadEvents` | `public void UnloadEvents()` | method |
| `MBBindingList` | `public MBBindingList<SettlementNameplatePartyMarkerItemVM>PartiesInSettlement` | property |
| `IComparer` | `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>` | property |
| `IComparer` | `public class PartyMarkerItemComparer : IComparer<SettlementNameplatePartyMarkerItemVM>` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace NameplateVM](../NameplateVM/)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM/)
- [same namespace PartyNameplateVM](../PartyNameplateVM/)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
