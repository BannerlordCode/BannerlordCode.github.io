<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkinVoiceManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkinVoiceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class SkinVoiceManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SkinVoiceManager.cs`

## Overview

`SkinVoiceManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName
```csharp
public static int GetVoiceDefinitionCountWithMonsterSoundAndCollisionInfoClassName(string className)
```

### GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName
```csharp
public static void GetVoiceDefinitionListWithMonsterSoundAndCollisionInfoClassName(string className, int definitionIndices)
```

### GetName
```csharp
public TextObject GetName()
```

## Usage Example

```csharp
// Typical usage of SkinVoiceManager (Manager)
SkinVoiceManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)