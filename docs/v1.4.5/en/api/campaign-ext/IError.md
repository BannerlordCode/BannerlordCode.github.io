<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IError`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IError

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IError : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IError.cs`

## Overview

`IError` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetName
`public virtual string GetName()`

**Purpose:** Gets the current value of `name`.

### GetMsg
`public virtual string GetMsg()`

**Purpose:** Gets the current value of `msg`.

### GetErrorType
`public virtual Type GetErrorType()`

**Purpose:** Gets the current value of `error type`.

## Usage Example

```csharp
var value = new IError();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)