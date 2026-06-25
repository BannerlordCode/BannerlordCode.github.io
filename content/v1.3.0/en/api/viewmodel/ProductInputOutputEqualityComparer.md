---
title: "ProductInputOutputEqualityComparer"
description: "Auto-generated class reference for ProductInputOutputEqualityComparer."
---
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

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of ProductInputOutputEqualityComparer from the subsystem API first
ProductInputOutputEqualityComparer productInputOutputEqualityComparer = ...;
var result = productInputOutputEqualityComparer.Equals(valueTuple<ItemCategory, 0, valueTuple<ItemCategory, 0);
```

### GetHashCode
`public int GetHashCode(ValueTuple<ItemCategory, int> obj)`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ProductInputOutputEqualityComparer from the subsystem API first
ProductInputOutputEqualityComparer productInputOutputEqualityComparer = ...;
var result = productInputOutputEqualityComparer.GetHashCode(valueTuple<ItemCategory, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProductInputOutputEqualityComparer productInputOutputEqualityComparer = ...;
productInputOutputEqualityComparer.Equals(valueTuple<ItemCategory, 0, valueTuple<ItemCategory, 0);
```

## See Also

- [Area Index](../)