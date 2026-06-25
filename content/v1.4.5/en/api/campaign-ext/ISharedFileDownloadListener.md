---
title: "ISharedFileDownloadListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISharedFileDownloadListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISharedFileDownloadListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class ISharedFileDownloadListener : GalaxyTypeAwareListenerSharedFileDownload`
**Base:** `GalaxyTypeAwareListenerSharedFileDownload`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/ISharedFileDownloadListener.cs`

## Overview

`ISharedFileDownloadListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateISharedFileDownloadListener_0
`public delegate void SwigDelegateISharedFileDownloadListener_0(IntPtr cPtr, ulong sharedFileID, string fileName)`

**Purpose:** Handles logic related to `swig delegate i shared file download listener_0`.

### SwigDelegateISharedFileDownloadListener_1
`public delegate void SwigDelegateISharedFileDownloadListener_1(IntPtr cPtr, ulong sharedFileID, int failureReason)`

**Purpose:** Handles logic related to `swig delegate i shared file download listener_1`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnSharedFileDownloadSuccess
`public abstract void OnSharedFileDownloadSuccess(ulong sharedFileID, string fileName)`

**Purpose:** Called when the `shared file download success` event is raised.

### OnSharedFileDownloadFailure
`public abstract void OnSharedFileDownloadFailure(ulong sharedFileID, FailureReason failureReason)`

**Purpose:** Called when the `shared file download failure` event is raised.

## Usage Example

```csharp
var implementation = new CustomISharedFileDownloadListener();
```

## See Also

- [Complete Class Catalog](../catalog)