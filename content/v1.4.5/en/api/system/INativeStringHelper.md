---
title: "INativeStringHelper"
description: "Auto-generated class reference for INativeStringHelper."
---
# INativeStringHelper

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `internal interface INativeStringHelper`
**Base:** none
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/INativeStringHelper.cs`

## Overview

`INativeStringHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `INativeStringHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IINativeStringHelper service = ...;
```

## See Also

- [Area Index](../)