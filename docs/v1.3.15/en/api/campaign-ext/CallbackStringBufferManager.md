<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CallbackStringBufferManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CallbackStringBufferManager

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackStringBufferManager`
**Base:** none
**File:** `TaleWorlds.DotNet/CallbackStringBufferManager.cs`

## Overview

`CallbackStringBufferManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CallbackStringBufferManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringBuffer0` | `public static byte StringBuffer0 { get; }` |
| `StringBuffer1` | `public static byte StringBuffer1 { get; }` |
| `StringBuffer2` | `public static byte StringBuffer2 { get; }` |
| `StringBuffer3` | `public static byte StringBuffer3 { get; }` |
| `StringBuffer4` | `public static byte StringBuffer4 { get; }` |
| `StringBuffer5` | `public static byte StringBuffer5 { get; }` |

## Usage Example

```csharp
var manager = CallbackStringBufferManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)