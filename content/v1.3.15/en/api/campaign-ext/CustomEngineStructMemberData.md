---
title: "CustomEngineStructMemberData"
description: "Auto-generated class reference for CustomEngineStructMemberData."
---
# CustomEngineStructMemberData

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class CustomEngineStructMemberData : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.DotNet/CustomEngineStructMemberData.cs`

## Overview

`CustomEngineStructMemberData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `CustomEngineStructMemberData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomMemberName` | `public string CustomMemberName { get; set; }` |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest { get; set; }` |
| `PublicPrivateModifierFlippedInNative` | `public bool PublicPrivateModifierFlippedInNative { get; set; }` |

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
CustomEngineStructMemberData entry = ...;
```

## See Also

- [Area Index](../)