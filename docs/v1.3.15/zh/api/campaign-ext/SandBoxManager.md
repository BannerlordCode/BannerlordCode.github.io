<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxManager : GameHandler`
**Base:** `GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

## 概述

`SandBoxManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `SandBoxMissionManager` | `public ISandBoxMissionManager SandBoxMissionManager { get; set; }` |
| `AgentBehaviorManager` | `public IAgentBehaviorManager AgentBehaviorManager { get; }` |
| `SandBoxSaveManager` | `public ISaveManager SandBoxSaveManager { get; }` |
| `Instance` | `public static SandBoxManager Instance { get; }` |
| `GameStarter` | `public CampaignGameStarter GameStarter { get; }` |

## 主要方法

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

## 使用示例

```csharp
// SandBoxManager (Manager) 的典型用法
SandBoxManager.Current;
```

## 参见

- [完整类目录](../catalog)