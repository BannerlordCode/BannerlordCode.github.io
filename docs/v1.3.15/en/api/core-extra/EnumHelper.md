<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EnumHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EnumHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `internal static class EnumHelper<T1>`
**Base:** none
**File:** `TaleWorlds.Library/EnumHelper.cs`

## Overview

`EnumHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `EnumHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Overlaps
`public static bool Overlaps(sbyte p1, sbyte p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(byte p1, byte p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(short p1, short p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(ushort p1, ushort p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(int p1, int p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(uint p1, uint p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(long p1, long p2)`

**Purpose:** Handles logic related to `overlaps`.

### Overlaps
`public static bool Overlaps(ulong p1, ulong p2)`

**Purpose:** Handles logic related to `overlaps`.

### ContainsAll
`public static bool ContainsAll(sbyte p1, sbyte p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(byte p1, byte p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(short p1, short p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(ushort p1, ushort p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(int p1, int p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(uint p1, uint p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(long p1, long p2)`

**Purpose:** Handles logic related to `contains all`.

### ContainsAll
`public static bool ContainsAll(ulong p1, ulong p2)`

**Purpose:** Handles logic related to `contains all`.

### initProc
`public static bool initProc(T1 p1, T1 p2)`

**Purpose:** Handles logic related to `init proc`.

### initAllProc
`public static bool initAllProc(T1 p1, T1 p2)`

**Purpose:** Handles logic related to `init all proc`.

## Usage Example

```csharp
EnumHelper example = EnumHelper.Value;
```

## See Also

- [Complete Class Catalog](../catalog)