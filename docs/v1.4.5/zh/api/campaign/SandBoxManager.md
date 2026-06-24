<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxManager`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxManager : GameHandler`
**Base:** `GameHandler`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SandBoxManager.cs`

## 概述

`SandBoxManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
`public void Initialize(CampaignGameStarter gameStarter)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnCampaignStart
`public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)`

**用途 / Purpose:** 当 `campaign start` 事件触发时调用此方法。

### InitializeSandboxXMLs
`public void InitializeSandboxXMLs(bool isSavedCampaign)`

**用途 / Purpose:** 初始化 `sandbox x m ls` 的状态、资源或绑定。

### InitializeCharactersAfterLoad
`public void InitializeCharactersAfterLoad(bool isSavedCampaign)`

**用途 / Purpose:** 初始化 `characters after load` 的状态、资源或绑定。

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** 当 `before save` 事件触发时调用此方法。

### OnAfterSave
`public override void OnAfterSave()`

**用途 / Purpose:** 当 `after save` 事件触发时调用此方法。

## 使用示例

```csharp
var manager = SandBoxManager.Current;
```

## 参见

- [完整类目录](../catalog)