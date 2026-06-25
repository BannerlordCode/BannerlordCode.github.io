---
title: "CultureTrait"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CultureTrait`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CultureTrait

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CultureTrait : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CultureTrait.cs`

## Overview

`CultureTrait` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, string asdf)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var value = new CultureTrait();
value.Initialize(name, description, "example");
```

## See Also

- [Complete Class Catalog](../catalog)