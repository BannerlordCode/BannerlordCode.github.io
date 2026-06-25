---
title: "SandboxAutoBlockModel"
description: "Auto-generated class reference for SandboxAutoBlockModel."
---
# SandboxAutoBlockModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAutoBlockModel : AutoBlockModel`
**Base:** `AutoBlockModel`
**File:** `SandBox/GameComponents/SandboxAutoBlockModel.cs`

## Overview

`SandboxAutoBlockModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxAutoBlockModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBlockDirection
`public override Agent.UsageDirection GetBlockDirection(Mission mission)`

**Purpose:** Reads and returns the `block direction` value held by the current object.

```csharp
// Obtain an instance of SandboxAutoBlockModel from the subsystem API first
SandboxAutoBlockModel sandboxAutoBlockModel = ...;
var result = sandboxAutoBlockModel.GetBlockDirection(mission);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxAutoBlockModel>(new MySandboxAutoBlockModel());
```

## See Also

- [Area Index](../)