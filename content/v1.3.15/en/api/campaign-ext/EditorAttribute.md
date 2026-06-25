---
title: "EditorAttribute"
description: "Auto-generated class reference for EditorAttribute."
---
# EditorAttribute

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditorAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EditorAttribute.cs`

## Overview

`EditorAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `EditorAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[EditorAttribute]
public class Example { }
```

## See Also

- [Area Index](../)