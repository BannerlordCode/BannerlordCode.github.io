---
title: "AesHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AesHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AesHelper

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public static class AesHelper`
**Base:** none
**File:** `TaleWorlds.Diamond/AesHelper.cs`

## Overview

`AesHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `AesHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Encrypt
`public static byte Encrypt(byte plainData, byte key, byte initializationVector)`

**Purpose:** Handles logic related to `encrypt`.

### Decrypt
`public static byte Decrypt(byte encrypted, byte key, byte initializationVector)`

**Purpose:** Handles logic related to `decrypt`.

## Usage Example

```csharp
AesHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)