---
title: "IApps"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IApps`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IApps

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IApps : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IApps.cs`

## Overview

`IApps` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### IsDlcInstalled
`public virtual bool IsDlcInstalled(ulong productID)`

**Purpose:** Handles logic related to `is dlc installed`.

### GetCurrentGameLanguage
`public virtual string GetCurrentGameLanguage(ulong productID)`

**Purpose:** Gets the current value of `current game language`.

### GetCurrentGameLanguage
`public virtual string GetCurrentGameLanguage()`

**Purpose:** Gets the current value of `current game language`.

### GetCurrentGameLanguageCopy
`public virtual void GetCurrentGameLanguageCopy(out string buffer, uint bufferLength, ulong productID)`

**Purpose:** Gets the current value of `current game language copy`.

### GetCurrentGameLanguageCopy
`public virtual void GetCurrentGameLanguageCopy(out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `current game language copy`.

## Usage Example

```csharp
var value = new IApps();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)