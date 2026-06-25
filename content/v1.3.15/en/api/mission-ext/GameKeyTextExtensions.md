---
title: "GameKeyTextExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameKeyTextExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyTextExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameKeyTextExtensions`
**Area:** mission-ext

## Overview

`GameKeyTextExtensions` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
