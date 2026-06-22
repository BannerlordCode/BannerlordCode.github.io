<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DiamondDebugManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiamondDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class DiamondDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.Library/DiamondDebugManager.cs`

## 概述

`DiamondDebugManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### GetLogLevel
```csharp
public int GetLogLevel()
```

## 使用示例

```csharp
// DiamondDebugManager (Manager) 的典型用法
DiamondDebugManager.Current;
```

## 参见

- [完整类目录](../catalog)