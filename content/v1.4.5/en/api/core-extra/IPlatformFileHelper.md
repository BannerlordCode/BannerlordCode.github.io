---
title: "IPlatformFileHelper"
description: "Auto-generated class reference for IPlatformFileHelper."
---
# IPlatformFileHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface IPlatformFileHelper`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/IPlatformFileHelper.cs`

## Overview

`IPlatformFileHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `IPlatformFileHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIPlatformFileHelper service = ...;
```

## See Also

- [Area Index](../)