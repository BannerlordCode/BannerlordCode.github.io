---
title: "EnumHelper"
description: "Auto-generated class reference for EnumHelper."
---
# EnumHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class EnumHelper`
**Base:** none
**File:** `TaleWorlds.Library/EnumHelper.2.cs`

## Overview

`EnumHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `EnumHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetCombinedULongEnumFlagsValue
`public static ulong GetCombinedULongEnumFlagsValue(Type type)`

**Purpose:** Reads and returns the combined u long enum flags value value held by the this instance.

```csharp
// Static call; no instance required
EnumHelper.GetCombinedULongEnumFlagsValue(type);
```

### GetCombinedUIntEnumFlagsValue
`public static uint GetCombinedUIntEnumFlagsValue(Type type)`

**Purpose:** Reads and returns the combined u int enum flags value value held by the this instance.

```csharp
// Static call; no instance required
EnumHelper.GetCombinedUIntEnumFlagsValue(type);
```

## Usage Example

```csharp
EnumHelper.Initialize();
```

## See Also

- [Area Index](../)