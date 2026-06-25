---
title: "DeformKeyData"
description: "Auto-generated class reference for DeformKeyData."
---
# DeformKeyData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DeformKeyData`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DeformKeyData.cs`

## Overview

`DeformKeyData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DeformKeyData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
DeformKeyData entry = ...;
```

## See Also

- [Area Index](../)