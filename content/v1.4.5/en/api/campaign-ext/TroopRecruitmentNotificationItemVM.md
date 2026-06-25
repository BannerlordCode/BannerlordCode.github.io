---
title: "TroopRecruitmentNotificationItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopRecruitmentNotificationItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopRecruitmentNotificationItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes
**Module:** SandBox.ViewModelCollection
**Type:** `public class TroopRecruitmentNotificationItemVM : SettlementNotificationItemBaseVM`
**Base:** `SettlementNotificationItemBaseVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes/TroopRecruitmentNotificationItemVM.cs`

## Overview

`TroopRecruitmentNotificationItemVM` lives in `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate.NameplateNotifications.SettlementNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RecruiterHero` | `public Hero RecruiterHero { get; }` |

## Key Methods

### AddNewAction
`public void AddNewAction(int addedAmount)`

**Purpose:** Adds `new action` to the current collection or state.

## Usage Example

```csharp
var value = new TroopRecruitmentNotificationItemVM();
value.AddNewAction(0);
```

## See Also

- [Complete Class Catalog](../catalog)