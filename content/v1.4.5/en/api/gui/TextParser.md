---
title: "TextParser"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextParser`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextParser

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public static class TextParser`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TextParser.cs`

## Overview

`TextParser` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Parse
`public static List<TextToken> Parse(string text, ILanguage currentLanguage)`

**Purpose:** Handles logic related to `parse`.

## Usage Example

```csharp
TextParser.Parse("example", currentLanguage);
```

## See Also

- [Complete Class Catalog](../catalog)