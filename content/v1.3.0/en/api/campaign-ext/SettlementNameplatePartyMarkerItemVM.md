---
title: "SettlementNameplatePartyMarkerItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplatePartyMarkerItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementNameplatePartyMarkerItemVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class SettlementNameplatePartyMarkerItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/SettlementNameplatePartyMarkerItemVM.cs`

## Overview

`SettlementNameplatePartyMarkerItemVM` lives in `SandBox.ViewModelCollection.Nameplate` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Nameplate` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Party` | `public MobileParty Party { get; }` |
| `SortIndex` | `public int SortIndex { get; }` |
| `Visual` | `public BannerImageIdentifierVM Visual { get; set; }` |
| `IsCaravan` | `public bool IsCaravan { get; set; }` |
| `IsLord` | `public bool IsLord { get; set; }` |
| `IsDefault` | `public bool IsDefault { get; set; }` |

## Usage Example

```csharp
var value = new SettlementNameplatePartyMarkerItemVM();
```

## See Also

- [Complete Class Catalog](../catalog)