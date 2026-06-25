---
title: "VirtualDirectoryAttribute"
description: "Auto-generated class reference for VirtualDirectoryAttribute."
---
# VirtualDirectoryAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualDirectoryAttribute : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/VirtualDirectoryAttribute.cs`

## Overview

`VirtualDirectoryAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `VirtualDirectoryAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Usage Example

```csharp
[VirtualDirectoryAttribute]
public class Example { }
```

## See Also

- [Area Index](../)