---
title: "MultiplayerGameLogger"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerGameLogger`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGameLogger

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGameLogger : GameHandler`
**Base:** `GameHandler`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerGameLogger.cs`

## 概述

`MultiplayerGameLogger` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Log
`public void Log(GameLog log)`

**用途 / Purpose:** 处理 `log` 相关逻辑。

### OnBeforeSave
`public override void OnBeforeSave()`

**用途 / Purpose:** 当 `before save` 事件触发时调用此方法。

### OnAfterSave
`public override void OnAfterSave()`

**用途 / Purpose:** 当 `after save` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MultiplayerGameLogger();
value.Log(log);
```

## 参见

- [完整类目录](../catalog)