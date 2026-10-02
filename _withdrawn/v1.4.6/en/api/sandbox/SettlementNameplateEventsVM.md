---
title: "SettlementNameplateEventsVM"
description: "SettlementNameplateEventsVM: a public class in SandBox.ViewModelCollection.Nameplate, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementNameplateEventsVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateEventsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SettlementNameplateEventsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNameplateEventsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateEventsVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate`, inheritance chain SettlementNameplateEventsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsEventsRegistered` | `public bool IsEventsRegistered` | property |
| `SettlementNameplateEventsVM` | `public SettlementNameplateEventsVM(Settlement settlement)` | constructor |
| `Tick` | `public void Tick()` | method |
| `RegisterEvents` | `public void RegisterEvents()` | method |
| `UnloadEvents` | `public void UnloadEvents()` | method |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>TrackQuests` | property |
| `MBBindingList` | `public MBBindingList<SettlementNameplateEventItemVM>EventsList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace NameplateVM](../NameplateVM/)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM/)
- [same namespace PartyNameplateVM](../PartyNameplateVM/)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM/)
