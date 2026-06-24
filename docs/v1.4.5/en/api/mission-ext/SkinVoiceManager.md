<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkinVoiceManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkinVoiceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class SkinVoiceManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

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

### GetName
`public TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName
`public static int GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName(string className)`

**Purpose:** Gets the current value of `voice definition count with monster sound and collision info class name`.

### GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName
`public static void GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName(string className, int definitionIndices)`

**Purpose:** Gets the current value of `voice definition list with monster sound and collision info class name`.

## Usage Example

```csharp
var manager = SkinVoiceManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)