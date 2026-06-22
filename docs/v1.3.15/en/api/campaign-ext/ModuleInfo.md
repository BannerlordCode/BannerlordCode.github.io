<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ModuleInfo`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ModuleInfo

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ModuleInfo` is a class in the `TaleWorlds.ModuleManager` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; }` |
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `IsDefault` | `public bool IsDefault { get; }` |
| `IsRequiredOfficial` | `public bool IsRequiredOfficial { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `RequiredBaseVersion` | `public ApplicationVersion RequiredBaseVersion { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `FolderPath` | `public string FolderPath { get; }` |
| `Type` | `public ModuleType Type { get; }` |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory { get; }` |
| `IsNative` | `public bool IsNative { get; }` |


## Key Methods

### LoadWithFullPath

```csharp
public void LoadWithFullPath(string fullPath)
```

### ActivateModule

```csharp
public void ActivateModule()
```

### DeactivateModule

```csharp
public void DeactivateModule()
```

### UpdateVersionChangeSet

```csharp
public void UpdateVersionChangeSet()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)