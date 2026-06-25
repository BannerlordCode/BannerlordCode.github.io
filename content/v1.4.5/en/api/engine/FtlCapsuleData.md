---
title: "FtlCapsuleData"
description: "Auto-generated class reference for FtlCapsuleData."
---
# FtlCapsuleData

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal struct FtlCapsuleData`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/FtlCapsuleData.cs`

## Overview

`FtlCapsuleData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FtlCapsuleData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBoxMin
`public Vec3 GetBoxMin()`

**Purpose:** Reads and returns the box min value held by the this instance.

```csharp
// Obtain an instance of FtlCapsuleData from the subsystem API first
FtlCapsuleData ftlCapsuleData = ...;
var result = ftlCapsuleData.GetBoxMin();
```

### GetBoxMax
`public Vec3 GetBoxMax()`

**Purpose:** Reads and returns the box max value held by the this instance.

```csharp
// Obtain an instance of FtlCapsuleData from the subsystem API first
FtlCapsuleData ftlCapsuleData = ...;
var result = ftlCapsuleData.GetBoxMax();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
FtlCapsuleData entry = ...;
```

## See Also

- [Area Index](../)