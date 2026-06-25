---
title: "ValueCategorization"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValueCategorization`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ValueCategorization

**Namespace:** TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip
**Module:** TaleWorlds.Core
**Type:** `public enum ValueCategorization`
**Base:** none
**File:** `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs`

## Overview

`ValueCategorization` lives in `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
ValueCategorization example = ValueCategorization.Value;
```

## See Also

- [Complete Class Catalog](../catalog)