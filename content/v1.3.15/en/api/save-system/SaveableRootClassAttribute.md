---
title: "SaveableRootClassAttribute"
description: "Auto-generated class reference for SaveableRootClassAttribute."
---
# SaveableRootClassAttribute

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveableRootClassAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.SaveSystem/SaveableRootClassAttribute.cs`

## Overview

`SaveableRootClassAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `SaveableRootClassAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SaveId` | `public int SaveId { get; set; }` |

## Usage Example

```csharp
[SaveableRootClassAttribute]
public class Example { }
```

## See Also

- [Area Index](../)