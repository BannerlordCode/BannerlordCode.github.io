<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ParticleSystemManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ParticleSystemManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ParticleSystemManager`
**Base:** 无
**File:** `TaleWorlds.Engine/ParticleSystemManager.cs`

## 概述

`ParticleSystemManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

### GetRuntimeIdByName
```csharp
public static int GetRuntimeIdByName(string particleSystemName)
```

## 使用示例

```csharp
// ParticleSystemManager (Manager) 的典型用法
ParticleSystemManager.Current;
```

## 参见

- [完整类目录](../catalog)