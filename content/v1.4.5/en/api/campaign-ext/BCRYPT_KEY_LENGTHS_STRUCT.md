---
title: "BCRYPT_KEY_LENGTHS_STRUCT"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BCRYPT_KEY_LENGTHS_STRUCT`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BCRYPT_KEY_LENGTHS_STRUCT

**Namespace:** Jose.native
**Module:** Jose.native
**Type:** `public struct BCRYPT_KEY_LENGTHS_STRUCT`
**Area:** campaign-ext

## Overview

`BCRYPT_KEY_LENGTHS_STRUCT` lives in `Jose.native`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose.native` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### BCRYPT_PSS_PADDING_INFO
`public struct BCRYPT_PSS_PADDING_INFO(string pszAlgId, int cbSalt)`

**Purpose:** Handles logic related to `b c r y p t_ p s s_ p a d d i n g_ i n f o`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### BCRYPT_OAEP_PADDING_INFO
`public struct BCRYPT_OAEP_PADDING_INFO(string alg)`

**Purpose:** Handles logic related to `b c r y p t_ o a e p_ p a d d i n g_ i n f o`.

### BCryptOpenAlgorithmProvider
`public static extern uint BCryptOpenAlgorithmProvider(out IntPtr phAlgorithm, string pszAlgId, string pszImplementation, uint dwFlags)`

**Purpose:** Handles logic related to `b crypt open algorithm provider`.

### BCryptCloseAlgorithmProvider
`public static extern uint BCryptCloseAlgorithmProvider(IntPtr hAlgorithm, uint flags)`

**Purpose:** Handles logic related to `b crypt close algorithm provider`.

### BCryptGetProperty
`public static extern uint BCryptGetProperty(IntPtr hObject, string pszProperty, byte pbOutput, int cbOutput, ref int pcbResult, uint flags)`

**Purpose:** Handles logic related to `b crypt get property`.

### BCryptImportKey
`public static extern uint BCryptImportKey(IntPtr hAlgorithm, IntPtr hImportKey, string pszBlobType, out IntPtr phKey, IntPtr pbKeyObject, int cbKeyObject, byte pbInput, int cbInput, uint dwFlags)`

**Purpose:** Handles logic related to `b crypt import key`.

### BCryptDestroyKey
`public static extern uint BCryptDestroyKey(IntPtr hKey)`

**Purpose:** Handles logic related to `b crypt destroy key`.

### BCryptEncrypt
`public static extern uint BCryptEncrypt(IntPtr hKey, byte pbInput, int cbInput, ref BCRYPT_AUTHENTICATED_CIPHER_MODE_INFO pPaddingInfo, byte pbIV, int cbIV, byte pbOutput, int cbOutput, ref int pcbResult, uint dwFlags)`

**Purpose:** Handles logic related to `b crypt encrypt`.

## Usage Example

```csharp
// First obtain a BCRYPT_KEY_LENGTHS_STRUCT instance from game state, then call one of its public methods
var value = new BCRYPT_KEY_LENGTHS_STRUCT();
value.BCRYPT_PSS_PADDING_INFO("example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
