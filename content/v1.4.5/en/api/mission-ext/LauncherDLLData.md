---
title: "LauncherDLLData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherDLLData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherDLLData

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDLLData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherDLLData.cs`

## Overview

`LauncherDLLData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `LauncherDLLData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SubModule` | `public SubModuleInfo SubModule { get; }` |
| `IsDangerous` | `public bool IsDangerous { get; }` |
| `VerifyInformation` | `public string VerifyInformation { get; }` |
| `Size` | `public uint Size { get; }` |

## Key Methods

### SetIsDLLDangerous
`public void SetIsDLLDangerous(bool isDangerous)`

**Purpose:** Sets the value or state of `is d l l dangerous`.

### SetDLLSize
`public void SetDLLSize(uint size)`

**Purpose:** Sets the value or state of `d l l size`.

### SetDLLVerifyInformation
`public void SetDLLVerifyInformation(string info)`

**Purpose:** Sets the value or state of `d l l verify information`.

## Usage Example

```csharp
var value = new LauncherDLLData();
```

## See Also

- [Complete Class Catalog](../catalog)