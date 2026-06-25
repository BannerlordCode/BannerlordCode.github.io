---
title: "GameTextManager"
description: "Auto-generated class reference for GameTextManager."
---
# GameTextManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextManager`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameTextManager.cs`

## Overview

`GameTextManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameTextManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |

## Key Methods

### GetGameText
`public GameText GetGameText(string id)`

**Purpose:** **Purpose:** Reads and returns the game text value held by the this instance.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
var result = gameTextManager.GetGameText("example");
```

### AddGameText
`public GameText AddGameText(string id)`

**Purpose:** **Purpose:** Adds game text to the current collection or state.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
var result = gameTextManager.AddGameText("example");
```

### TryGetText
`public bool TryGetText(string id, string variation, out TextObject text)`

**Purpose:** **Purpose:** Attempts to retrieve get text, usually returning success through an out parameter.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
var result = gameTextManager.TryGetText("example", "example", text);
```

### FindText
`public TextObject FindText(string id, string variation = null)`

**Purpose:** **Purpose:** Looks up the matching text in the current collection or scope.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
var result = gameTextManager.FindText("example", "example");
```

### FindAllTextVariations
`public IEnumerable<TextObject> FindAllTextVariations(string id)`

**Purpose:** **Purpose:** Looks up the matching all text variations in the current collection or scope.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
var result = gameTextManager.FindAllTextVariations("example");
```

### LoadGameTexts
`public void LoadGameTexts()`

**Purpose:** **Purpose:** Reads game texts from persistent storage or a stream.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
gameTextManager.LoadGameTexts();
```

### LoadDefaultTexts
`public void LoadDefaultTexts()`

**Purpose:** **Purpose:** Reads default texts from persistent storage or a stream.

```csharp
// Obtain an instance of GameTextManager from the subsystem API first
GameTextManager gameTextManager = ...;
gameTextManager.LoadDefaultTexts();
```

## Usage Example

```csharp
var manager = GameTextManager.Current;
```

## See Also

- [Area Index](../)