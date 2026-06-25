---
title: "VisualOrderHelper"
description: "Auto-generated class reference for VisualOrderHelper."
---
# VisualOrderHelper

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class VisualOrderHelper`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual/VisualOrderHelper.cs`

## Overview

`VisualOrderHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `VisualOrderHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DoesFormationHaveOrderType
`public static bool DoesFormationHaveOrderType(Formation formation, OrderType type)`

**Purpose:** Returns a boolean answer to whether formation have order type is true for the this instance.

```csharp
// Static call; no instance required
VisualOrderHelper.DoesFormationHaveOrderType(formation, type);
```

## Usage Example

```csharp
VisualOrderHelper.Initialize();
```

## See Also

- [Area Index](../)