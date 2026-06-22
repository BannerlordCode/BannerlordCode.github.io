<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleInfoModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleInfoModel

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ModuleInfoModel`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs`

## Overview

`ModuleInfoModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `Version` | `public string Version { get; }` |
| `IsOptional` | `public bool IsOptional { get; }` |

## Key Methods

### ShouldIncludeInSession
```csharp
public static bool ShouldIncludeInSession(ModuleInfo moduleInfo)
```

### TryCreateForSession
```csharp
public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)
```

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## Usage Example

```csharp
// Typical usage of ModuleInfoModel (Model)
Game.Current.ReplaceModel<ModuleInfoModel>(new MyModuleInfoModel());
```

## See Also

- [Complete Class Catalog](../catalog)