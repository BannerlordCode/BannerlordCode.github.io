---
title: "ManagedBooleanOptionData"
description: "Auto-generated class reference for ManagedBooleanOptionData."
---
# ManagedBooleanOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedBooleanOptionData : ManagedOptionData, IBooleanOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Options.ManagedOptions/ManagedBooleanOptionData.cs`

## Overview

`ManagedBooleanOptionData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ManagedBooleanOptionData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ManagedBooleanOptionData entry = ...;
```

## See Also

- [Area Index](../)