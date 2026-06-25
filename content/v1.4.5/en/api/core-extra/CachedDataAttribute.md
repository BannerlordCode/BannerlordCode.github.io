---
title: "CachedDataAttribute"
description: "Auto-generated class reference for CachedDataAttribute."
---
# CachedDataAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CachedDataAttribute : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/CachedDataAttribute.cs`

## Overview

`CachedDataAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `CachedDataAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[CachedDataAttribute]
public class Example { }
```

## See Also

- [Area Index](../)