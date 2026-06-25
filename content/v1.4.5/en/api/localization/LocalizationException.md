---
title: "LocalizationException"
description: "Auto-generated class reference for LocalizationException."
---
# LocalizationException

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class LocalizationException : Exception`
**Base:** `Exception`
**File:** `bin/TaleWorlds.Localization/TaleWorlds.Localization/LocalizationException.cs`

## Overview

`LocalizationException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `LocalizationException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (LocalizationException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)