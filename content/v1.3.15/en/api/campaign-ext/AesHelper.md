---
title: "AesHelper"
description: "Auto-generated class reference for AesHelper."
---
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

**Purpose:** Executes the Encrypt logic.

```csharp
// Static call; no instance required
AesHelper.Encrypt(0, 0, 0);
```

### Decrypt
`public static byte Decrypt(byte encrypted, byte key, byte initializationVector)`

**Purpose:** Executes the Decrypt logic.

```csharp
// Static call; no instance required
AesHelper.Decrypt(0, 0, 0);
```

## Usage Example

```csharp
AesHelper.Initialize();
```

## See Also

- [Area Index](../)