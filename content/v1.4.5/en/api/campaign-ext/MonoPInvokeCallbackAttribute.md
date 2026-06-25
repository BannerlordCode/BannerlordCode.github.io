---
title: "MonoPInvokeCallbackAttribute"
description: "Auto-generated class reference for MonoPInvokeCallbackAttribute."
---
# MonoPInvokeCallbackAttribute

**Namespace:** (global)
**Module:** (global)
**Type:** `public class MonoPInvokeCallbackAttribute : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.DotNet/MonoPInvokeCallbackAttribute.cs`

## Overview

`MonoPInvokeCallbackAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `MonoPInvokeCallbackAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[MonoPInvokeCallbackAttribute]
public class Example { }
```

## See Also

- [Area Index](../)