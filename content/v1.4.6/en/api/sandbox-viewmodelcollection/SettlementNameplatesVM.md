---
title: "SettlementNameplatesVM"
description: "SettlementNameplatesVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 13 exposed members (8 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs."
---
# SettlementNameplatesVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNameplatesVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs`

## Overview

SettlementNameplatesVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNameplatesVM → ViewModel. It exposes 13 public/protected members: 8 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNameplatesVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate) the module directory; inheritance chain SettlementNameplatesVM → ViewModel. The surface is method-led (methods 8/13, properties 4/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/SettlementNameplatesVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<SettlementNameplateVM>AllNameplates` | property |
| `SettlementNameplatesVM` | `public SettlementNameplatesVM(Camera mapCamera, Action<CampaignVec2>fastMoveCameraToPosition)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Initialize` | `public void Initialize(IEnumerable<Tuple<Settlement, GameEntity>>settlements)` | method |
| `Update` | `public void Update()` | method |
| `GetNameplateOfSettlement` | `public SettlementNameplateVM GetNameplateOfSettlement(Settlement settlement)` | method |
| `OnRebelliousClanDisbandedAtSettlement` | `public void OnRebelliousClanDisbandedAtSettlement(Settlement settlement, Clan clan)` | method |
| `RefreshRelationsOfNameplates` | `public void RefreshRelationsOfNameplates()` | method |
| `RefreshDynamicPropertiesOfNameplates` | `public void RefreshDynamicPropertiesOfNameplates(bool forceUpdate)` | method |
| `MBBindingList` | `public MBBindingList<SettlementNameplateVM>SmallNameplates` | property |
| `MBBindingList` | `public MBBindingList<SettlementNameplateVM>MediumNameplates` | property |
| `MBBindingList` | `public MBBindingList<SettlementNameplateVM>LargeNameplates` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace NameplateVM](../NameplateVM)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM)
- [same namespace PartyNameplateVM](../PartyNameplateVM)
- [same namespace PartyPlayerNameplateVM](../PartyPlayerNameplateVM)
