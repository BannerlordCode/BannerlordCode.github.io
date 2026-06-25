---
title: "GameModel"
description: "Auto-generated class reference for GameModel."
---
# GameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModel`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameModel.cs`

## Overview

`GameModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `GameModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameModel instance = ...;
```

## See Also

- [Area Index](../)