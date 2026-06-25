---
title: "SandBoxSaveManager"
description: "Auto-generated class reference for SandBoxSaveManager."
---
# SandBoxSaveManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxSaveManager : ISaveManager`
**Base:** `ISaveManager`
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxSaveManager.cs`

## Overview

`SandBoxSaveManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxSaveManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAutoSaveInterval
`public int GetAutoSaveInterval()`

**Purpose:** Reads and returns the `auto save interval` value held by the current object.

```csharp
// Obtain an instance of SandBoxSaveManager from the subsystem API first
SandBoxSaveManager sandBoxSaveManager = ...;
var result = sandBoxSaveManager.GetAutoSaveInterval();
```

### IsAutoSaveDisabled
`public bool IsAutoSaveDisabled()`

**Purpose:** Determines whether the current object is in the `auto save disabled` state or condition.

```csharp
// Obtain an instance of SandBoxSaveManager from the subsystem API first
SandBoxSaveManager sandBoxSaveManager = ...;
var result = sandBoxSaveManager.IsAutoSaveDisabled();
```

### OnSaveOver
`public void OnSaveOver(bool isSuccessful, string newSaveGameName)`

**Purpose:** Invoked when the `save over` event is raised.

```csharp
// Obtain an instance of SandBoxSaveManager from the subsystem API first
SandBoxSaveManager sandBoxSaveManager = ...;
sandBoxSaveManager.OnSaveOver(false, "example");
```

## Usage Example

```csharp
var manager = SandBoxSaveManager.Current;
```

## See Also

- [Area Index](../)