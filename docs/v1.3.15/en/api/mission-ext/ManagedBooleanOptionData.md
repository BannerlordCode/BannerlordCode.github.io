<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedBooleanOptionData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedBooleanOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedBooleanOptionData : ManagedOptionData, IBooleanOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedBooleanOptionData.cs`

## Overview

`ManagedBooleanOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedBooleanOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new ManagedBooleanOptionData();
```

## See Also

- [Complete Class Catalog](../catalog)