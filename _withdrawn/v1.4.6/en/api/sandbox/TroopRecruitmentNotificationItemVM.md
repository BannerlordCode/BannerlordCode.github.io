---
title: "TroopRecruitmentNotificationItemVM"
description: "TroopRecruitmentNotificationItemVM: a public class in SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes, inheriting SettlementNotificationItemBaseVM; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopRecruitmentNotificationItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopRecruitmentNotificationItemVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TroopRecruitmentNotificationItemVM : SettlementNotificationItemBaseVM`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopRecruitmentNotificationItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TroopRecruitmentNotificationItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopRecruitmentNotificationItemVM.cs. It is a public class, implementing/inheriting SettlementNotificationItemBaseVM; the inheritance chain is TroopRecruitmentNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopRecruitmentNotificationItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes`, inheritance chain TroopRecruitmentNotificationItemVM → SettlementNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationTypes/TroopRecruitmentNotificationItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RecruiterHero` | `public Hero RecruiterHero` | property |
| `TroopRecruitmentNotificationItemVM` | `public TroopRecruitmentNotificationItemVM(Action<SettlementNotificationItemBaseVM>onRemove, Hero recruiterHero, int amount, int createdTick) : base(onRemove, createdTick)` | constructor |
| `AddNewAction` | `public void AddNewAction(int addedAmount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementNotificationItemBaseVM](../SettlementNotificationItemBaseVM/)
- [same namespace CaravanTransactionNotificationItemVM](../CaravanTransactionNotificationItemVM/)
- [same namespace IssueSolvedByLordNotificationItemVM](../IssueSolvedByLordNotificationItemVM/)
- [same namespace ItemSoldNotificationItemVM](../ItemSoldNotificationItemVM/)
- [same namespace PrisonerSoldNotificationItemVM](../PrisonerSoldNotificationItemVM/)
