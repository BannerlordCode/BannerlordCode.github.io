---
title: "MultiplayerGameLogger"
description: "MultiplayerGameLogger 的自动生成类参考。"
---
# MultiplayerGameLogger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameLogger : GameHandler`
**Base:** `GameHandler`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameLogger.cs`

## 概述

`MultiplayerGameLogger` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Log
`public void Log(GameLog log)`

**用途 / Purpose:** 处理与 「log」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameLogger 实例
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.Log(log);
```

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** 在 「before save」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameLogger 实例
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.OnBeforeSave();
```

### OnAfterSave
`public override void OnAfterSave()`

**用途 / Purpose:** 在 「after save」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerGameLogger 实例
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.OnAfterSave();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MultiplayerGameLogger multiplayerGameLogger = ...;
multiplayerGameLogger.Log(log);
```

## 参见

- [本区域目录](../)