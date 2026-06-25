---
title: "MBGameModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBGameModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBGameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class MBGameModel<T> : GameModel where T : GameModel`
**Base:** `GameModel where T : GameModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBGameModel.cs`

## Overview

`MBGameModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MBGameModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public void Initialize(T baseModel)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
var implementation = new CustomMBGameModel();
```

## See Also

- [Complete Class Catalog](../catalog)