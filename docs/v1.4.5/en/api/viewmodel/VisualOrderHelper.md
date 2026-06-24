<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualOrderHelper`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualOrderHelper

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderHelper.cs`

## Overview

`VisualOrderHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `VisualOrderHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DoesFormationHaveOrderType
`public static bool DoesFormationHaveOrderType(Formation formation, OrderType type)`

**Purpose:** Handles logic related to `does formation have order type`.

## Usage Example

```csharp
VisualOrderHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)