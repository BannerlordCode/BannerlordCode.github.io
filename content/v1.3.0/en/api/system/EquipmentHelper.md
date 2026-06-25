---
title: "EquipmentHelper"
description: "Auto-generated class reference for EquipmentHelper."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
EquipmentHelper.AssignHeroEquipmentFromEquipment(hero, equipment);
```

## Usage Example

```csharp
EquipmentHelper.Initialize();
```

## See Also

- [Area Index](../)