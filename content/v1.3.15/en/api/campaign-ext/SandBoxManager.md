---
title: "SandBoxManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxManager : GameHandler`
**Base:** `GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnCampaignStart
`public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)`

**Purpose:** Called when the `campaign start` event is raised.

### InitializeSandboxXMLs
`public void InitializeSandboxXMLs(bool isSavedCampaign)`

**Purpose:** Initializes the state, resources, or bindings for `sandbox x m ls`.

### InitializeCharactersAfterLoad
`public void InitializeCharactersAfterLoad(bool isSavedCampaign)`

**Purpose:** Initializes the state, resources, or bindings for `characters after load`.

### OnBeforeSave
`public override void OnBeforeSave()`

**Purpose:** Called when the `before save` event is raised.

### OnAfterSave
`public override void OnAfterSave()`

**Purpose:** Called when the `after save` event is raised.

## Usage Example

```csharp
var manager = SandBoxManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)