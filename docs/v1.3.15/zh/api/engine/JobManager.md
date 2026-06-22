<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JobManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JobManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class JobManager`
**Base:** 无
**File:** `TaleWorlds.Engine/JobManager.cs`

## 概述

`JobManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### AddJob
```csharp
public void AddJob(Job job)
```

## 使用示例

```csharp
// JobManager (Manager) 的典型用法
JobManager.Current;
```

## 参见

- [完整类目录](../catalog)