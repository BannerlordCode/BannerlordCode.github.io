<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PreloadHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PreloadHelper

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PreloadHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PreloadHelper.cs`

## Overview

`PreloadHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `PreloadHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### PreloadCharacters
`public void PreloadCharacters(List<BasicCharacterObject> characters)`

**Purpose:** Handles logic related to `preload characters`.

### WaitForMeshesToBeLoaded
`public void WaitForMeshesToBeLoaded()`

**Purpose:** Handles logic related to `wait for meshes to be loaded`.

### PreloadEquipments
`public void PreloadEquipments(List<Equipment> equipments)`

**Purpose:** Handles logic related to `preload equipments`.

### PreloadItems
`public void PreloadItems(List<ItemObject> items)`

**Purpose:** Handles logic related to `preload items`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
PreloadHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)