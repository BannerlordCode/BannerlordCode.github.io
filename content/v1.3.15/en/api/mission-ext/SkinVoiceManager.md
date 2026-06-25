---
title: "SkinVoiceManager"
description: "Auto-generated class reference for SkinVoiceManager."
---
# SkinVoiceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class SkinVoiceManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

## Overview

`SkinVoiceManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SkinVoiceManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeID` | `public string TypeID { get; }` |
| `Index` | `public int Index { get; }` |

## Key Methods

### GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName
`public static int GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName(string className)`

**Purpose:** Reads and returns the voice definition count with monster sound and collision info class name value held by the this instance.

```csharp
// Static call; no instance required
SkinVoiceManager.GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName("example");
```

### GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName
`public static void GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName(string className, int definitionIndices)`

**Purpose:** Reads and returns the voice definition list with monster sound and collision info class name value held by the this instance.

```csharp
// Static call; no instance required
SkinVoiceManager.GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName("example", 0);
```

### GetName
`public TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of SkinVoiceManager from the subsystem API first
SkinVoiceManager skinVoiceManager = ...;
var result = skinVoiceManager.GetName();
```

## Usage Example

```csharp
var manager = SkinVoiceManager.Current;
```

## See Also

- [Area Index](../)