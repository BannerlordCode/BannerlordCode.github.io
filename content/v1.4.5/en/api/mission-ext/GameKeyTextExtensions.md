---
title: "GameKeyTextExtensions"
description: "Auto-generated class reference for GameKeyTextExtensions."
---
# GameKeyTextExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameKeyTextExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameKeyTextExtensions.cs`

## Overview

`GameKeyTextExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetHotKeyGameText
`public static TextObject GetHotKeyGameText(this GameTextManager gameTextManager, string categoryName, string hotKeyId)`

**Purpose:** **Purpose:** Reads and returns the hot key game text value held by the this instance.

```csharp
// Static call; no instance required
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", "example");
```

### GetHotKeyGameText
`public static TextObject GetHotKeyGameText(this GameTextManager gameTextManager, string categoryName, int gameKeyId)`

**Purpose:** **Purpose:** Reads and returns the hot key game text value held by the this instance.

```csharp
// Static call; no instance required
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", 0);
```

### GetHotKeyGameTextFromKeyID
`public static TextObject GetHotKeyGameTextFromKeyID(this GameTextManager gameTextManager, string keyId)`

**Purpose:** **Purpose:** Reads and returns the hot key game text from key i d value held by the this instance.

```csharp
// Static call; no instance required
GameKeyTextExtensions.GetHotKeyGameTextFromKeyID(gameTextManager, "example");
```

## Usage Example

```csharp
GameKeyTextExtensions.GetHotKeyGameText(gameTextManager, "example", "example");
```

## See Also

- [Area Index](../)