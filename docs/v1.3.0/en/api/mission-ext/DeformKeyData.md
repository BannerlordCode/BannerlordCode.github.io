<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeformKeyData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeformKeyData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DeformKeyData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DeformKeyData.cs`

## Overview

`DeformKeyData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DeformKeyData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var value = new DeformKeyData();
```

## See Also

- [Complete Class Catalog](../catalog)