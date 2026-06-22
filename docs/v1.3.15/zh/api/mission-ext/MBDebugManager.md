<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBDebugManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBDebugManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade/MBDebugManager.cs`

## 概述

`MBDebugManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 使用示例

```csharp
// MBDebugManager (Manager) 的典型用法
MBDebugManager.Current;
```

## 参见

- [完整类目录](../catalog)