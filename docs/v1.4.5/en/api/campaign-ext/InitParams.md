<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitParams`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitParams

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class InitParams : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/InitParams.cs`

## Overview

`InitParams` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `clientID` | `public string clientID { get; }` |
| `clientSecret` | `public string clientSecret { get; }` |
| `configFilePath` | `public string configFilePath { get; }` |
| `storagePath` | `public string storagePath { get; }` |
| `galaxyModulePath` | `public string galaxyModulePath { get; }` |
| `loadModule` | `public bool loadModule { get; }` |

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

## Usage Example

```csharp
var value = new InitParams();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)