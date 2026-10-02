---
title: "SettlementNameplateEventsVM"
description: "SettlementNameplateEventsVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs."
---
# SettlementNameplateEventsVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateEventsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs`

## Overview

SettlementNameplateEventsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNameplateEventsVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateEventsVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate) the module directory; inheritance chain SettlementNameplateEventsVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEventsRegistered` | `public bool IsEventsRegistered` | property |
| `SettlementNameplateEventsVM` | `public SettlementNameplateEventsVM(Settlement settlement)` | constructor |
| `Tick` | `public void Tick()` | method |
| `RegisterEvents` | `public void RegisterEvents()` | method |
| `UnloadEvents` | `public void UnloadEvents()` | method |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>TrackQuests` | property |
| `MBBindingList` | `public MBBindingList<SettlementNameplateEventItemVM>EventsList` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace NameplateVM](../NameplateVM)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM)
- [same namespace PartyNameplateVM](../PartyNameplateVM)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
