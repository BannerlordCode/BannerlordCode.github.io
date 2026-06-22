<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EngineController`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EngineController

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class EngineController`
**Base:** 无
**File:** `TaleWorlds.Engine/EngineController.cs`

## 概述

`EngineController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要方法

### GetVersionStr
```csharp
public static string GetVersionStr()
```

### GetApplicationPlatformName
```csharp
public static string GetApplicationPlatformName()
```

### GetModulesVersionStr
```csharp
public static string GetModulesVersionStr()
```

## 使用示例

```csharp
// EngineController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<EngineController>();
```

## 参见

- [完整类目录](../catalog)