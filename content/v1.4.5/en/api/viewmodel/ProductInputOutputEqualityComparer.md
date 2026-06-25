---
title: "ProductInputOutputEqualityComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProductInputOutputEqualityComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ProductInputOutputEqualityComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProductInputOutputEqualityComparer : IEqualityComparer<(ItemCategory, int)>`
**Base:** `IEqualityComparer<(ItemCategory`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignUIHelper.cs`

## Overview

`ProductInputOutputEqualityComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals((ItemCategory, int) x, (ItemCategory, int) y)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public int GetHashCode((ItemCategory, int) obj)`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var value = new ProductInputOutputEqualityComparer();
value.Equals((ItemCategory, 0, (ItemCategory, 0);
```

## See Also

- [Complete Class Catalog](../catalog)