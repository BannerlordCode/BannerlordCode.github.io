---
title: "ProductInputOutputEqualityComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProductInputOutputEqualityComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProductInputOutputEqualityComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProductInputOutputEqualityComparer : IEqualityComparer<ValueTuple<ItemCategory, int>>`
**Base:** `IEqualityComparer<ValueTuple<ItemCategory`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

`ProductInputOutputEqualityComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(ValueTuple<ItemCategory, int> x, ValueTuple<ItemCategory, int> y)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public int GetHashCode(ValueTuple<ItemCategory, int> obj)`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new ProductInputOutputEqualityComparer();
value.Equals(valueTuple<ItemCategory, 0, valueTuple<ItemCategory, 0);
```

## See Also

- [Complete Class Catalog](../catalog)