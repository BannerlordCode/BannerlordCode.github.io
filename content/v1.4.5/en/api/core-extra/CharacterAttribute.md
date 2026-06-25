---
title: "CharacterAttribute"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterAttribute

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CharacterAttribute : PropertyObject`
**Base:** `PropertyObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/CharacterAttribute.cs`

## Overview

`CharacterAttribute` is a .NET attribute used to tag a type or member so runtime code or tooling can recognize it by convention.

## Mental Model

Treat `CharacterAttribute` as a Attribute-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Abbreviation` | `public TextObject Abbreviation { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, TextObject abbreviation)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
[CharacterAttribute]
public class Example { }
```

## See Also

- [Complete Class Catalog](../catalog)