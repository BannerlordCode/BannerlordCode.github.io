---
title: "LauncherVM"
description: "LauncherVM 的自动生成类参考。"
---
# LauncherVM

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherVM.cs`

## 概述

`LauncherVM` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameTypeArgument` | `public string GameTypeArgument { get; }` |
| `ContinueGameArgument` | `public string ContinueGameArgument { get; set; }` |
| `IsSingleplayer` | `public bool IsSingleplayer { get; set; }` |
| `IsMultiplayer` | `public bool IsMultiplayer { get; set; }` |
| `IsDigitalCompanion` | `public bool IsDigitalCompanion { get; set; }` |
| `IsSingleplayerAvailable` | `public bool IsSingleplayerAvailable { get; set; }` |
| `IsDigitalCompanionAvailable` | `public bool IsDigitalCompanionAvailable { get; set; }` |
| `VersionText` | `public string VersionText { get; set; }` |
| `News` | `public LauncherNewsVM News { get; set; }` |
| `ConfirmStart` | `public LauncherConfirmStartVM ConfirmStart { get; set; }` |
| `ModsData` | `public LauncherModsVM ModsData { get; set; }` |
| `Hint` | `public LauncherInformationVM Hint { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `ContinueText` | `public string ContinueText { get; set; }` |
| `LaunchText` | `public string LaunchText { get; set; }` |
| `SingleplayerText` | `public string SingleplayerText { get; set; }` |
| `DigitalCompanionText` | `public string DigitalCompanionText { get; set; }` |
| `MultiplayerText` | `public string MultiplayerText { get; set; }` |
| `NewsText` | `public string NewsText { get; set; }` |
| `DlcText` | `public string DlcText { get; set; }` |
| `ModsText` | `public string ModsText { get; set; }` |

## 主要方法

### ExecuteStartGame
`public void ExecuteStartGame(int mode)`

**用途 / Purpose:** **用途 / Purpose:** 执行 start game 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 LauncherVM 实例
LauncherVM launcherVM = ...;
launcherVM.ExecuteStartGame(0);
```

### ExecuteClose
`public void ExecuteClose()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 LauncherVM 实例
LauncherVM launcherVM = ...;
launcherVM.ExecuteClose();
```

### ExecuteMinimize
`public void ExecuteMinimize()`

**用途 / Purpose:** **用途 / Purpose:** 执行 minimize 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 LauncherVM 实例
LauncherVM launcherVM = ...;
launcherVM.ExecuteMinimize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LauncherVM launcherVM = ...;
launcherVM.ExecuteStartGame(0);
```

## 参见

- [本区域目录](../)