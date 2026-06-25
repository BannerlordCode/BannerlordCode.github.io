---
title: "PreloadHelper"
description: "Auto-generated class reference for PreloadHelper."
---
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

**Purpose:** **Purpose:** Executes the PreloadCharacters logic.

```csharp
// Obtain an instance of PreloadHelper from the subsystem API first
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadCharacters(characters);
```

### WaitForMeshesToBeLoaded
`public void WaitForMeshesToBeLoaded()`

**Purpose:** **Purpose:** Pauses the current flow until the for meshes to be loaded condition is met.

```csharp
// Obtain an instance of PreloadHelper from the subsystem API first
PreloadHelper preloadHelper = ...;
preloadHelper.WaitForMeshesToBeLoaded();
```

### PreloadEquipments
`public void PreloadEquipments(List<Equipment> equipments)`

**Purpose:** **Purpose:** Executes the PreloadEquipments logic.

```csharp
// Obtain an instance of PreloadHelper from the subsystem API first
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadEquipments(equipments);
```

### PreloadItems
`public void PreloadItems(List<ItemObject> items)`

**Purpose:** **Purpose:** Executes the PreloadItems logic.

```csharp
// Obtain an instance of PreloadHelper from the subsystem API first
PreloadHelper preloadHelper = ...;
preloadHelper.PreloadItems(items);
```

### Clear
`public void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of PreloadHelper from the subsystem API first
PreloadHelper preloadHelper = ...;
preloadHelper.Clear();
```

## Usage Example

```csharp
PreloadHelper.Initialize();
```

## See Also

- [Area Index](../)