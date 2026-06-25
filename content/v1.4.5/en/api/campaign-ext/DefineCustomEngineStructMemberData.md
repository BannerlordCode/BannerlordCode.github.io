---
title: "DefineCustomEngineStructMemberData"
description: "Auto-generated class reference for DefineCustomEngineStructMemberData."
---
# DefineCustomEngineStructMemberData

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class DefineCustomEngineStructMemberData : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/DefineCustomEngineStructMemberData.cs`

## Overview

`DefineCustomEngineStructMemberData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `DefineCustomEngineStructMemberData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public Type Type { get; set; }` |
| `MemberName` | `public string MemberName { get; set; }` |
| `ManagedMemberName` | `public string ManagedMemberName { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
DefineCustomEngineStructMemberData entry = ...;
```

## See Also

- [Area Index](../)