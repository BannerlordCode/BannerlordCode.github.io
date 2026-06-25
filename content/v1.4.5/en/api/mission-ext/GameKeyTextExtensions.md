---
title: "GameKeyTextExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyTextExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameKeyTextExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameKeyTextExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameKeyTextExtensions.cs`

## Overview

`GameKeyTextExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHotKeyGameText
`public static TextObject GetHotKeyGameText(this GameTextManager gameTextManager, string categoryName, string hotKeyId)`

**Purpose:** Gets the current value of `hot key game text`.

### GetHotKeyGameText
`public static TextObject GetHotKeyGameText(this GameTextManager gameTextManager, string categoryName, int gameKeyId)`

**Purpose:** Gets the current value of `hot key game text`.

### GetHotKeyGameTextFromKeyID
`public static TextObject GetHotKeyGameTextFromKeyID(this GameTextManager gameTextManager, string keyId)`

**Purpose:** Gets the current value of `hot key game text from key i d`.

## Usage Example

```csharp
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)