---
title: "SandBoxManager"
description: "Auto-generated class reference for SandBoxManager."
---
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxManager : GameHandler`
**Base:** `GameHandler`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs`

## Overview

`SandBoxManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SandBoxManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SandBoxMissionManager` | `public ISandBoxMissionManager SandBoxMissionManager { get; set; }` |
| `AgentBehaviorManager` | `public IAgentBehaviorManager AgentBehaviorManager { get; }` |
| `SandBoxSaveManager` | `public ISaveManager SandBoxSaveManager { get; }` |
| `Instance` | `public static SandBoxManager Instance { get; }` |
| `GameStarter` | `public CampaignGameStarter GameStarter { get; }` |

## Key Methods

### Initialize
`public void Initialize(CampaignGameStarter gameStarter)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SandBoxManager from the subsystem API first
SandBoxManager sandBoxManager = ...;
sandBoxManager.Initialize(gameStarter);
```

### OnCampaignStart
`public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)`

**Purpose:** **Purpose:** Invoked when the campaign start event is raised.

```csharp
// Obtain an instance of SandBoxManager from the subsystem API first
SandBoxManager sandBoxManager = ...;
sandBoxManager.OnCampaignStart(gameInitializer, gameManager, false);
```

### InitializeSandboxXMLs
`public void InitializeSandboxXMLs(bool isSavedCampaign)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by sandbox x m ls.

```csharp
// Obtain an instance of SandBoxManager from the subsystem API first
SandBoxManager sandBoxManager = ...;
sandBoxManager.InitializeSandboxXMLs(false);
```

### InitializeCharactersAfterLoad
`public void InitializeCharactersAfterLoad(bool isSavedCampaign)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by characters after load.

```csharp
// Obtain an instance of SandBoxManager from the subsystem API first
SandBoxManager sandBoxManager = ...;
sandBoxManager.InitializeCharactersAfterLoad(false);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** **Purpose:** Invoked when the before save event is raised.

```csharp
// Obtain an instance of SandBoxManager from the subsystem API first
SandBoxManager sandBoxManager = ...;
sandBoxManager.OnBeforeSave();
```

### OnAfterSave
`public override void OnAfterSave()`

**Purpose:** **Purpose:** Invoked when the after save event is raised.

```csharp
// Obtain an instance of SandBoxManager from the subsystem API first
SandBoxManager sandBoxManager = ...;
sandBoxManager.OnAfterSave();
```

## Usage Example

```csharp
var manager = SandBoxManager.Current;
```

## See Also

- [Area Index](../)