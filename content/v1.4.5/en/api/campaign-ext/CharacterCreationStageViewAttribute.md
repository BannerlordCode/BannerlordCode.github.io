---
title: "CharacterCreationStageViewAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationStageViewAttribute`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationStageViewAttribute

**Namespace:** SandBox.View.CharacterCreation
**Module:** SandBox.View
**Type:** `public sealed class CharacterCreationStageViewAttribute : Attribute`
**Base:** `Attribute`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewAttribute.cs`

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

- [Complete Class Catalog](../catalog)