---
title: "MBGameModel"
description: "Auto-generated class reference for MBGameModel."
---
# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel where T : GameModel`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBGameModel.cs`

## Overview

`MBGameModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MBGameModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public void Initialize(T baseModel)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MBGameModel from the subsystem API first
MBGameModel mBGameModel = ...;
mBGameModel.Initialize(baseModel);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MBGameModel instance = ...;
```

## See Also

- [Area Index](../)