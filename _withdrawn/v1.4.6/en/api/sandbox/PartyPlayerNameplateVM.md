---
title: "PartyPlayerNameplateVM"
description: "PartyPlayerNameplateVM: a public class in SandBox.ViewModelCollection.Nameplate, inheriting PartyNameplateVM; 10 exposed members (6 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyPlayerNameplateVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class PartyPlayerNameplateVM : PartyNameplateVM`
**File:** `SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PartyPlayerNameplateVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs. It is a public class, implementing/inheriting PartyNameplateVM; the inheritance chain is PartyPlayerNameplateVM → PartyNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 6 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyPlayerNameplateVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate`, inheritance chain PartyPlayerNameplateVM → PartyNameplateVM → NameplateVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/10, properties 3/10), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/PartyPlayerNameplateVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyPlayerNameplateVM` | `public PartyPlayerNameplateVM()` | constructor |
| `InitializePlayerNameplate` | `public void InitializePlayerNameplate(Action resetCamera)` | method |
| `Clear` | `public override void Clear()` | method |
| `RefreshDynamicProperties` | `public override void RefreshDynamicProperties(bool forceUpdate)` | method |
| `RefreshBinding` | `public override void RefreshBinding()` | method |
| `RefreshPosition` | `public override void RefreshPosition()` | method |
| `ExecuteSetCameraPosition` | `public void ExecuteSetCameraPosition()` | method |
| `IsMainParty` | `public bool IsMainParty` | property |
| `IsPrisoner` | `public bool IsPrisoner` | property |
| `MainHeroVisual` | `public CharacterImageIdentifierVM MainHeroVisual` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyNameplateVM](../PartyNameplateVM/)
- [same namespace NameplateVM](../NameplateVM/)
- [same namespace PartyNameplatesVM](../PartyNameplatesVM/)
- [same namespace PartyNameplateVM](../PartyNameplateVM/)
- [same namespace SettlementNameplateEventItemVM](../SettlementNameplateEventItemVM/)
