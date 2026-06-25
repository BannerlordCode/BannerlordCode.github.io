---
title: "PublishedFileUpdateHandle_t"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PublishedFileUpdateHandle_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PublishedFileUpdateHandle_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct PublishedFileUpdateHandle_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/PublishedFileUpdateHandle_t.cs`

## Overview

`PublishedFileUpdateHandle_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PublishedFileUpdateHandle_t
`public struct PublishedFileUpdateHandle_t(ulong value)`

**Purpose:** Handles logic related to `published file update handle_t`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### PublishedFileUpdateHandle_t
`public static explicit operator PublishedFileUpdateHandle_t(ulong value)`

**Purpose:** Handles logic related to `published file update handle_t`.

### ulong
`public static explicit operator ulong(PublishedFileUpdateHandle_t that)`

**Purpose:** Handles logic related to `ulong`.

### Equals
`public bool Equals(PublishedFileUpdateHandle_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(PublishedFileUpdateHandle_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new PublishedFileUpdateHandle_t();
value.PublishedFileUpdateHandle_t(0);
```

## See Also

- [Complete Class Catalog](../catalog)