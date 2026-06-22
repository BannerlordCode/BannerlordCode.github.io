<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameHandler`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameHandler

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameHandler : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameHandler.cs`

## 概述

`GameHandler` 是一个任务处理器（反应逻辑）。经 AddMissionBehavior 添加，对特定任务事件作出响应。

## 主要方法

### OnBeforeSave
```csharp
public abstract void OnBeforeSave()
```

### OnAfterSave
```csharp
public abstract void OnAfterSave()
```

## 使用示例

```csharp
// GameHandler (Handler) 的典型用法
Mission.Current.AddMissionBehavior(new GameHandler());
```

## 参见

- [完整类目录](../catalog)