---
title: "SandBoxManager"
description: "SandBoxManager 的自动生成类参考。"
---
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SandBoxManager : GameHandler`
**Base:** `GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

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

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SandBoxManager 实例
SandBoxManager sandBoxManager = ...;
sandBoxManager.Initialize(gameStarter);
```

### OnCampaignStart
`public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)`

**用途 / Purpose:** 在 campaign start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxManager 实例
SandBoxManager sandBoxManager = ...;
sandBoxManager.OnCampaignStart(gameInitializer, gameManager, false);
```

### InitializeSandboxXMLs
`public void InitializeSandboxXMLs(bool isSavedCampaign)`

**用途 / Purpose:** 为 sandbox x m ls 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SandBoxManager 实例
SandBoxManager sandBoxManager = ...;
sandBoxManager.InitializeSandboxXMLs(false);
```

### InitializeCharactersAfterLoad
`public void InitializeCharactersAfterLoad(bool isSavedCampaign)`

**用途 / Purpose:** 为 characters after load 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SandBoxManager 实例
SandBoxManager sandBoxManager = ...;
sandBoxManager.InitializeCharactersAfterLoad(false);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** 在 before save 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxManager 实例
SandBoxManager sandBoxManager = ...;
sandBoxManager.OnBeforeSave();
```

### OnAfterSave
`public override void OnAfterSave()`

**用途 / Purpose:** 在 after save 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SandBoxManager 实例
SandBoxManager sandBoxManager = ...;
sandBoxManager.OnAfterSave();
```

## 使用示例

```csharp
var manager = SandBoxManager.Current;
```

## 参见

- [本区域目录](../)