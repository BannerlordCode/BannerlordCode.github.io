---
title: "SettlementNameplateEventItemVM"
description: "SettlementNameplateEventItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 6 exposed members (0 methods, 3 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs."
---
# SettlementNameplateEventItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplateEventItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs`

## Overview

SettlementNameplateEventItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNameplateEventItemVM → ViewModel. It exposes 6 public/protected members: 3 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplateEventItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate) the module directory; inheritance chain SettlementNameplateEventItemVM → ViewModel. The surface is property-led (properties 3/6, methods 0/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/SettlementNameplateEventItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementNameplateEventItemVM` | `public SettlementNameplateEventItemVM(SettlementNameplateEventItemVM.SettlementEventType eventType)` | constructor |
| `SettlementNameplateEventItemVM` | `public SettlementNameplateEventItemVM(string productionIconId = "")` | constructor |
| `Type` | `public int Type` | property |
| `AdditionalParameters` | `public string AdditionalParameters` | property |
| `SettlementEventType` | `public enum SettlementEventType` | property |
| `SettlementEventType` | `public enum SettlementEventType` | nested type |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace NameplateVM](../NameplateVM)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM)
- [same namespace PartyNameplateVM](../PartyNameplateVM)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
