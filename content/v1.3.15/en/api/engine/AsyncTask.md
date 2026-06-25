---
title: "AsyncTask"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AsyncTask`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AsyncTask

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class AsyncTask : NativeObject, ITask`
**Base:** `NativeObject`
**Area:** engine

## Overview

`AsyncTask` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateWithDelegate
`public static AsyncTask CreateWithDelegate(ManagedDelegate function, bool isBackground)`

**Purpose:** Creates a new `with delegate` instance or object.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
AsyncTask.CreateWithDelegate(function, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
