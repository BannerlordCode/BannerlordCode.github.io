---
title: "IFileShareListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IFileShareListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IFileShareListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IFileShareListener : GalaxyTypeAwareListenerFileShare`
**Base:** `GalaxyTypeAwareListenerFileShare`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IFileShareListener.cs`

## Overview

`IFileShareListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIFileShareListener_0
`public delegate void SwigDelegateIFileShareListener_0(IntPtr cPtr, string fileName, ulong sharedFileID)`

**Purpose:** Handles logic related to `swig delegate i file share listener_0`.

### SwigDelegateIFileShareListener_1
`public delegate void SwigDelegateIFileShareListener_1(IntPtr cPtr, string fileName, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i file share listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnFileShareSuccess
`public abstract void OnFileShareSuccess(string fileName, ulong sharedFileID)`

**Purpose:** Called when the `file share success` event is raised.

### OnFileShareFailure
`public abstract void OnFileShareFailure(string fileName, FailureReason failureReason)`

**Purpose:** Called when the `file share failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomIFileShareListener();
```

## See Also

- [Complete Class Catalog](../catalog)