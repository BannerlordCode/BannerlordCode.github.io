<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxManager : GameHandler`
**Base:** `GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

## Overview

`SandBoxManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

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
```csharp
public void Initialize(CampaignGameStarter gameStarter)
```

### OnCampaignStart
```csharp
public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)
```

### InitializeSandboxXMLs
```csharp
public void InitializeSandboxXMLs(bool isSavedCampaign)
```

### InitializeCharactersAfterLoad
```csharp
public void InitializeCharactersAfterLoad(bool isSavedCampaign)
```

### OnBeforeSave
```csharp
public override void OnBeforeSave()
```

### OnAfterSave
```csharp
public override void OnAfterSave()
```

## Usage Example

```csharp
// Typical usage of SandBoxManager (Manager)
SandBoxManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)