<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InteropHelp`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InteropHelp

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class InteropHelp`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/InteropHelp.cs`

## Overview

`InteropHelp` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IntPtr
`public static implicit operator IntPtr(SteamParamStringArray that)`

**Purpose:** Handles logic related to `int ptr`.

### TestIfPlatformSupported
`public static void TestIfPlatformSupported()`

**Purpose:** Handles logic related to `test if platform supported`.

### TestIfAvailableClient
`public static void TestIfAvailableClient()`

**Purpose:** Handles logic related to `test if available client`.

### TestIfAvailableGameServer
`public static void TestIfAvailableGameServer()`

**Purpose:** Handles logic related to `test if available game server`.

### PtrToStringUTF8
`public static string PtrToStringUTF8(IntPtr nativeUtf8)`

**Purpose:** Handles logic related to `ptr to string u t f8`.

### ByteArrayToStringUTF8
`public static string ByteArrayToStringUTF8(byte buffer)`

**Purpose:** Handles logic related to `byte array to string u t f8`.

### StringToByteArrayUTF8
`public static void StringToByteArrayUTF8(string str, byte outArrayBuffer, int outArrayBufferSize)`

**Purpose:** Handles logic related to `string to byte array u t f8`.

## Usage Example

```csharp
InteropHelp.IntPtr(that);
```

## See Also

- [Complete Class Catalog](../catalog)