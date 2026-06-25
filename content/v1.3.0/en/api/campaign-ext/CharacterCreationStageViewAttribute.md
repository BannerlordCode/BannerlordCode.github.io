---
title: "CharacterCreationStageViewAttribute"
description: "Auto-generated class reference for CharacterCreationStageViewAttribute."
---
# CharacterCreationStageViewAttribute

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public sealed class CharacterCreationStageViewAttribute : Attribute`
**Base:** `Attribute`
**File:** `SandBox.View/CharacterCreation/CharacterCreationStageViewAttribute.cs`

## Overview

`CharacterCreationStageViewAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `CharacterCreationStageViewAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
[CharacterCreationStageViewAttribute]
public class Example { }
```

## See Also

- [Area Index](../)