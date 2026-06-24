<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CallbackDebugTool`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CallbackDebugTool

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class CallbackDebugTool`
**Area:** campaign-ext

## Overview

`CallbackDebugTool` lives in `TaleWorlds.DotNet`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddLog
`public static void AddLog( string memberName = "")`

**Purpose:** Adds `log` to the current collection or state.

### FrameEnd
`public static void FrameEnd()`

**Purpose:** Handles logic related to `frame end`.

### Reset
`public static void Reset()`

**Purpose:** Resets `reset` to its initial state.

### ShowResults
`public static string ShowResults()`

**Purpose:** Handles logic related to `show results`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CallbackDebugTool.AddLog("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
