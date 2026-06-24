<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Controller`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Controller

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public static class Controller`
**Area:** campaign-ext

## Overview

`Controller` lives in `TaleWorlds.DotNet`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OverrideManagedDllFolder
`public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)`

**Purpose:** Handles logic related to `override managed dll folder`.

### LoadOnCurrentApplicationDomain
`public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)`

**Purpose:** Loads `on current application domain` data.

### SetEngineMethodsAsMono
`public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**Purpose:** Sets the value or state of `engine methods as mono`.

### SetEngineMethodsAsHostedDotNetCore
`public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)`

**Purpose:** Sets the value or state of `engine methods as hosted dot net core`.

### SetEngineMethodsAsDotNet
`public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)`

**Purpose:** Sets the value or state of `engine methods as dot net`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Controller.OverrideManagedDllFolder(overridenFolderAsPointer);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
