<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class EquipmentHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/EquipmentHelper.cs`

## Overview

`EquipmentHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `EquipmentHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AssignHeroEquipmentFromEquipment
`public static void AssignHeroEquipmentFromEquipment(Hero hero, Equipment equipment)`

**Purpose:** Handles logic related to `assign hero equipment from equipment`.

## Usage Example

```csharp
EquipmentHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)